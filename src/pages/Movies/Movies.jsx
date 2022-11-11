import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import {
  SearchForm,
  FormInput,
  SubmitBtn,
  MoviesList,
  StyledLink,
} from './Movies.styled';
import { KEY } from '../../components/service/api';

export default function Movies() {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query === null) {
      return;
    }
    const url = `/search/movie?api_key=${KEY}&query=${query}`;
    setIsLoading(true);
    response();

    async function response() {
      await axios
        .get(url)
        .then(res => {
          setMovies(res.data.results);
          setIsLoading(false);
        })
        .catch(error => {
          setError(error.message);
        });
    }
  }, [query]);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (value.trim() === '') {
      toast.error('Please, input a movie', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    setSearchParams(value !== '' ? { query: value } : {});
    setValue('');
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit}>
        <FormInput
          type="text"
          autocomplete="off"
          value={value}
          onChange={handleChange}
        />
        <SubmitBtn>Search</SubmitBtn>
      </SearchForm>
      {isLoading && <RotatingLines strokeColor="#4A9E48" />}
      {error && <p>Ooops! Something went wrong. Please, try again</p>}
      {movies && (
        <MoviesList>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <StyledLink to={`${id}`} state={{ from: location }}>
                {title}
              </StyledLink>
            </li>
          ))}
        </MoviesList>
      )}
    </div>
  );
}
