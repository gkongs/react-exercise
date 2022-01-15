import Link from 'next/link';

export default function FirstPost({ posts }) {
  console.log(posts);
  return (
    <>
      <h1>First Post</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}

/* getServerSideProps VS getStaticProps

getServerSideProps는 즉각적으로 서버 측 데이터를 업데이트하는 방식으로 데이터를 처리하고

getStaticProps는 빌드 시 .next/server에 파일을 생성한 후 그걸 토대로 데이터를 처리한다.

때문에 항상 업데이트가 일어나야하는 데이터는 'getServerSideProps'로 데이터를 처리하는게 좋다.

getStaticProps는 빌드 시 파일이 생성되고, 생성된 파일의 데이터를 가져와 처리하지만 'revalidate'라는 프로퍼티의 값을 통해 '몇 초마다 갱신' 기능을 수행하여 서버 측 데이터 변화를 관찰하고 업데이트 할 수 있다.

*/

// export const getServerSideProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`
//   );
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// };

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 20,
  };
};
