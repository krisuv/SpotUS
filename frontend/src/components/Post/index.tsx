interface IPost {
  tag: string;
  content: string;
  published: Date;
  votes: number;
  comments: {
    author: string,
    content: string
  }[]
}

const Post = (): JSX.Element => {
  return(
    <div>

    </div>
  )
}