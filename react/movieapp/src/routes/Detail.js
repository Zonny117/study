import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const [load, setLoad] = useState(true);
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoad(false);
    console.log(json);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {load ? <h1>loading...</h1> : null}
      <h1>{detail.title}</h1>
      {load ? (
        <img src="/asset/loading.gif" alt="로딩이미지" />
      ) : (
        <img src={detail.large_cover_image} alt={detail.title} />
      )}
      <ul>
        {detail.genres === undefined
          ? null
          : detail.genres.map(g => <li key={g}>{g}</li>)}
      </ul>
    </div>
  );
}

export default Detail;
