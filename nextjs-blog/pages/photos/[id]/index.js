import Image from 'next/image';
import Link from 'next/link';
import { PhotoLayout } from '../../../styles/photo';

/* 동적 라우팅
폴더 이름을 [id]로 만들게 되면 동적 라우팅을 할 수 있는데, 
만약 'dynamic SSG pages'에러가 발생한다면, 'getStaticPaths'를 설정해야 한다.

*/

function index({ photo }) {
  const { title, url } = photo;
  return (
    <PhotoLayout>
      <h2>{title}</h2>
      <Image src={url} width={500} height={500} />
      <Link href="/photos">
        <a>go back</a>
      </Link>
    </PhotoLayout>
  );
}

export const getStaticProps = async ctx => {
  const { id } = ctx.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const photo = await res.json();

  return {
    props: {
      photo,
    },
  };
};

export const getStaticPaths = async () => {
  // paths는 배열 형태이고 { params : { id : 'id'} } 형태를 취한다.
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/photos?_start=0&_end=10'
  );
  const photos = await res.json();
  const ids = photos.map(photo => photo.id);
  const paths = ids.map(id => {
    return {
      params: { id: id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export default index;
