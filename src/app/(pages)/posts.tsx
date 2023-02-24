import Article from "@/components/Article";
import Link from "next/link";

export default function Blog({ articles }:any) {
    // Render posts...
    return (<div>
        {articles.map((post:any) => {
            return (<div key={post.id}>
                <Article article={post} />
            </div>)
        })}
        <Link href='/'>home</Link>
        
    </div>)
}
  
//buildtime fetch
export const getStaticProps = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=6"
    );
    const articles = await res.json();
    return {
      props: {
        articles,
      },
    };
  };