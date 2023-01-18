package pl.spot.us.backend.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.*;

@Service
public class PostService {

    private final PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public List<Post> findAll() {
        List<Post> posts = postRepository.findAll();
        return posts;
    }

    public Post createPost(Post post) {
        loadConfigs();
        Post savedPost = post;

        // TODO weryfikacja lista przekleństw
        //możesz coś w tym stylu
        //String postContent = savedPost.getContent();
        //if(postContent coś tam ) {}


        //{
        String postContent = savedPost.getContent();
            ArrayList<String> badWords = badWordsFound(postContent);
            if (badWords.size() > 0) {
                return null;
                //co się stanie jak ktoś wpisze złe
            }else{
                postRepository.save(post);
                return savedPost;
            }
    }

    public Post findById(Long id) {
        return postRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    public ResponseEntity updatePost(Long id, Post post) {
        Post currentPost = postRepository.findById(id).orElseThrow(RuntimeException::new);
        currentPost.setTag(post.getTag());
        currentPost.setContent(post.getContent());
        currentPost = postRepository.save(post);

        return ResponseEntity.ok(currentPost);
    }

    public ResponseEntity deletePost(@PathVariable Long id) {
        postRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

    //}


    //filter na razie tak bo to jest jakby całość

    static Map<String, String[]> words = new HashMap<>();
   // static Map<String, Integer> words = new HashMap<>();

    static int largestWordLength = 0;

    public static void loadConfigs() {
        try {
            BufferedReader reader =
                    new BufferedReader
                            (new InputStreamReader
                                    (new URL
                                            ("https://docs.google.com/spreadsheets/d/e/2PACX-1vRCmokVFPWD3gPmjCtnJ4QuKuSyO4uvMe8K_nTf2chkovTgY4igQLXHpQpCw--yAqWOZxtJcI6-qI0C/pub?output=csv")
                                            .openConnection().getInputStream()));
            String line = "";
            int counter = 0;
            while ((line = reader.readLine()) != null) {
                counter++;
                String[] content = null;
                try {
                    content = line.split(",");
                    if (content.length == 0) {
                        continue;
                    }
                    String word = content[0];
                    String[] ignore_in_combination_with_words = new String[]{};
                    if (content.length > 1) {
                        ignore_in_combination_with_words = content[1].split("_");
                    }

                    if (word.length() > largestWordLength) {
                        largestWordLength = word.length();
                    }
                    words.put(word.replaceAll(" ", ""), ignore_in_combination_with_words);
                } catch (Exception e) {
                    e.printStackTrace();
                }

            }
            System.out.println("Loaded " + counter + " words to filter out");
        } catch (IOException e) {
            e.printStackTrace();
        }

    }


    /**
     * Iterates over a String input and checks whether a cuss word was found in a list, then checks if the word should be ignored (e.g. bass contains the word *ss).
     *
     * @param input
     * @return
     */

    public static ArrayList<String> badWordsFound(String input) {
        if (input == null) {
            return new ArrayList<>();
        }

        // don't forget to remove leetspeak, probably want to move this to its own function and use regex if you want to use this

        input = input.replaceAll("1", "i");
        input = input.replaceAll("!", "i");
        input = input.replaceAll("3", "e");
        input = input.replaceAll("4", "a");
        input = input.replaceAll("@", "a");
        input = input.replaceAll("5", "s");
        input = input.replaceAll("7", "t");
        input = input.replaceAll("0", "o");
        input = input.replaceAll("9", "g");


        ArrayList<String> badWords = new ArrayList<>();
        // input = input.toLowerCase().replaceAll("[^a-zA-Z]", "");
        input = input.toLowerCase();
        // iterate over each letter in the word
        for (int start = 0; start < input.length(); start++) {
            // from each letter, keep going to find bad words until either the end of the sentence is reached, or the max word length is reached.
            for (int offset = 1; offset < (input.length() + 1 - start) && offset < largestWordLength; offset++) {
                String wordToCheck = input.substring(start, start + offset);
                boolean ignoreWord = false;
                if (words.containsKey(wordToCheck)) {
                    // for example, if you want to say the word bass, that should be possible.

                    //TODO zwiększyć liczbę wyjątków
                    //String[] ignoreCheck = (words.get(wordToCheck));
                    String[] wordsException = new String[]{"glass", "bass", "class", "grass", "mass", "pass"};

                    boolean containsExceptions = Arrays.asList(wordsException).contains(input);


                    if (containsExceptions) {
                        ignoreWord = true;
                        break;
                    }else{
                        badWords.add(wordToCheck);
                    }
                }
            }
            }



        for (String s : badWords) {
            System.out.println(s + " qualified as a bad word in a username");
        }
        return badWords;

    }

    public static String filterText(String input, String username) {
        ArrayList<String> badWords = badWordsFound(input);
        if (badWords.size() > 0) {
            return "This message was blocked because a bad word was found. If you believe this word should not be blocked, please message support.";
        }
        return input;
    }
}

