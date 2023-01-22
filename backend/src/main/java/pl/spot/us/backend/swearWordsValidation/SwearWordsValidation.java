package pl.spot.us.backend.swearWordsValidation;

import org.springframework.stereotype.Component;
import pl.spot.us.backend.post.Post;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

@Component
public class SwearWordsValidation {

    //
    //filter na razie tak bo to jest jakby całość

    private static Map<String, String[]> words = new HashMap<>();
    // static Map<String, Integer> words = new HashMap<>();

    private static int largestWordLength = 0;

    public Boolean isContentValid (String content){
        loadConfigs();
        ArrayList<String> badWords = badWordsFound(content);
        return !(badWords.size() > 0);
    }
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


}
