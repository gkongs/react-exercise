import Head from 'next/head';

function HeadInfo({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Learn how to build a personal website using Next.js"
      />
    </Head>
  );
}

export default HeadInfo;
