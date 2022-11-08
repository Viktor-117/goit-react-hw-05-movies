import axios from 'axios';
import { useState, useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { PopularMoviesList, StyledLink, Title } from './Trending.styled';
import { KEY } from '../../service/api';

export default function Trending() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

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
            <StyledLink to={`movies/${id}`}>{title}</StyledLink>
          </li>
        ))}
      </PopularMoviesList>
    </div>
  );
}
