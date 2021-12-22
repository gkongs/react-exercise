import { useMediaQuery } from 'react-responsive';

const MediaQuery = () => {
  const isTablet = useMediaQuery({
    query: '(max-width: 800px)',
  });
  const isMoblie = useMediaQuery({
    query: '(max-width: 600px)',
  });

  return (
    <div>
      <h1>UseMediaQuery</h1>
      {(() => {
        if (isMoblie) return <div>모바일 입니다.</div>;
        else if (isTablet) return <div>타블렛 입니다.</div>;
        else return <div>PC 입니다.</div>;
      })()}
    </div>
  );
};

export default MediaQuery;
