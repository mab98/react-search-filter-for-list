interface PostsProps {
  data: any;
}

const Posts: React.FC<PostsProps> = ({ data }) => {
  return (
    <ol>
      {data &&
        data.length > 0 &&
        data.map((user: any, idx: number) => <li key={idx}>{user.name}</li>)}
    </ol>
  );
};

export default Posts;
