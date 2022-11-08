import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { KEY } from '../../service/api';
import {
  ReturnBtn,
  Thumb,
  Poster,
  InfoBox,
  Title,
  Text,
  Title2,
  Title3,
  AdditionalBox,
  AdditionalList,
  StyledLink,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const params = useParams();

  useEffect(() => {
    const url = `/movie/${params.movieId}?api_key=${KEY}`;
    setIsLoading(true);
    response();

    async function response() {
      await axios
        .get(url)
        .then(res => {
          //   console.log(res.data);
          setMovie(res.data);
          setIsLoading(false);
        })
        .catch(error => {
          setError(error.message);
        });
    }
  }, []);

  return (
    <div>
      <ReturnBtn to={'/'} key={'/'}>
        Go back
      </ReturnBtn>
      {isLoading && <RotatingLines strokeColor="#4A9E48" />}
      {error && <p>Ooops! Something went wrong. Please, try again</p>}
      {movie && (
        <Thumb>
          <Poster
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
            alt={movie.title}
          />
          <InfoBox>
            <Title>{movie.title}</Title>
            <Text>User score: {movie.vote_average}</Text>
            <Title2>Overview</Title2>
            <Text>{movie.overview}</Text>
            <Title3>Genres</Title3>
            <Text>{movie.genres.map(genre => genre.name).join(', ')}</Text>
          </InfoBox>
        </Thumb>
      )}
      <AdditionalBox>
        <Text>Additional information</Text>
        <AdditionalList>
          <li>
            <StyledLink to={'cast'}>Cast</StyledLink>
          </li>
          <li>
            <StyledLink to={'reviews'}>Reviews</StyledLink>
          </li>
        </AdditionalList>
      </AdditionalBox>
      <Outlet />
    </div>
  );
}
