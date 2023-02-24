import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
const PostById = ({ post }: any) => {
  // const router = useRouter();
  // const { id } = router.query;

  return <div>Article {post.title}</div>;
};

// fetches on every request and not on the server
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const id = context?.params?.id;
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     const post = await res.json();
//   return { props: { post } };

// };

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return { 
    props: { post },
    //refetches again after 100 seconds
    revalidate: 100 
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  const ids = posts.map((post: any) => post.id);
  const paths = ids.map((id: any) => ({ params: { id: id.toString() } }));

  return {
    paths,
    //falback false
    fallback: false,
  };
};

export default PostById;
