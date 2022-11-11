import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { PopularMoviesList, StyledLink, Title } from './Trending.styled';
import { KEY } from '../../components/service/api';

export default function Trending() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();

  useEffect(() => {
    const url = `/trending/movie/day?api_key=${KEY}`;
    setIsLoading(true);
    response();

    async function response() {
      await axios
        .get(url)
        .then(res => {
          console.log(res.data.results);
          setMovies(res.data.results);
          setIsLoading(false);
        })
        .catch(error => {
          setError(error.message);
        });
    }
  }, []);

  return (
    <div>
      <Title>Trending today</Title>
      {isLoading && <RotatingLines strokeColor="#4A9E48" />}
      {error && <p>Ooops! Something went wrong. Please, try again</p>}
      <PopularMoviesList>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <StyledLink to={`movies/${id}`} state={{ from: location }}>
              {title}
            </StyledLink>
          </li>
        ))}
      </PopularMoviesList>
    </div>
  );
}
