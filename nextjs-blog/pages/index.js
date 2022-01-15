import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import * as utilStyles from '../styles/utils';
import { getSortedPostsData } from '../lib/posts';
import { Header } from '../styles/home';

export default function Home({ allPostsData }) {
  return (
    <>
      <Header>
        <Image
          priority
          src="/images/profile.jpg"
          css={utilStyles.borderCircle}
          height={144}
          width={144}
          alt={name}
        />
        <h1 css={utilStyles.heading2Xl}>{name}</h1>
      </Header>
      <section css={utilStyles.headingMd}>
        <p>반갑습니다. 정찬영입니다. 왈왈</p>
        <p>
          <a href="https://nextjs.org/learn"> Next.js tutorial</a>.
        </p>
        <Link href="/posts/first-post">
          <a>첫번째 포스트로</a>
        </Link>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

const name = '정찬영';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
