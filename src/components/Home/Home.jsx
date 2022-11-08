import axios from 'axios';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar';
import { PopularMoviesList, StyledLink, Title } from './Home.styled';
import { KEY } from '../service/api';

export default function Home() {
  //   const [movies, setMovies] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [error, setError] = useState('');

  //   useEffect(() => {
  //     const url = `/trending/movie/day?api_key=${KEY}`;
  //     setIsLoading(true);
  //     response();

  //     async function response() {
  //       await axios
  //         .get(url)
  //         .then(res => {
  //           console.log(res.data.results);
  //           setMovies(res.data.results);
  //           setIsLoading(false);
  //         })
  //         .catch(error => {
  //           setError(error.message);
  //         });
  //     }
  //   }, []);

  return (
    <div>
      <AppBar />
      <Outlet />
      {/* <Title>Trending today</Title>
      <PopularMoviesList>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <StyledLink to={`movies/${id}`}>{title}</StyledLink>
          </li>
        ))}
      </PopularMoviesList> */}
      {/* </Outlet> */}
    </div>
  );
}
