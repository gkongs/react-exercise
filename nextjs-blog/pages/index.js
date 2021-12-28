import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import * as utilStyles from '../styles/utils';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section css={utilStyles.headingMd}>
        <p>반갑습니다. 정찬영입니다. 왈왈</p>
        <p>
          <a href="https://nextjs.org/learn"> Next.js tutorial</a>.
        </p>
      </section>
    </Layout>
  );
}
