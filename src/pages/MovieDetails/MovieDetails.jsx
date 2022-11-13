import axios from 'axios';
import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { KEY } from '../../components/service/api';
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
  const [location] = useState(useLocation());
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const url = `/movie/${movieId}?api_key=${KEY}`;
    setIsLoading(true);
    response();

    async function response() {
      await axios
        .get(url)
        .then(res => {
          setMovie(res.data);
          setIsLoading(false);
        })
        .catch(error => {
          setError(error.message);
        });
    }
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { poster_path, title, vote_average, overview, genres } = movie;
  const backLinkHref = location.state?.from ?? '/';

  return (
    <div>
      <ReturnBtn to={backLinkHref}>Go back</ReturnBtn>
      {isLoading && <RotatingLines strokeColor="#4A9E48" />}
      {error && <p>Ooops! Something went wrong. Please, try again</p>}
      {movie && (
        <Thumb>
          <Poster
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`}
            alt={title}
          />
          <InfoBox>
            <Title>{title}</Title>
            <Text>User score: {vote_average}</Text>
            <Title2>Overview</Title2>
            <Text>{overview}</Text>
            <Title3>Genres</Title3>
            <Text>{genres.map(genre => genre.name).join(', ')}</Text>
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
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
}
