import Image from 'next/image';

function Photos({ photos }) {
  return (
    <>
      <h1>Photos</h1>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <Image
              src={photo.thumbnailUrl}
              width={100}
              height={100}
              alt={photo.title}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

/* 🚀 ERROR : Invalid src prop
외부 이미지를 next.js Image src로 가져올 경우 발생하는 에러이다.
해결 방법은 next.config.js에 'images'설정을 추가하는 것이다.
*/
export default Photos;

export const getStaticProps = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/photos?_start=0&_end=10'
  );
  const photos = await res.json();

  return {
    props: {
      photos,
    },
  };
};
