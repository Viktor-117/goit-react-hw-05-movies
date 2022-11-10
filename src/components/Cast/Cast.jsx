import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { KEY } from '../service/api';
import { CreditsList, Text, Photo } from './Cast.styled';

export default function Cast() {
  const [credits, setCredits] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const url = `/movie/${movieId}/credits?api_key=${KEY}`;
    setIsLoading(true);
    response();

    async function response() {
      await axios
        .get(url)
        .then(res => {
          console.log(res.data.cast);
          setCredits(res.data.cast);
          setIsLoading(false);
        })
        .catch(error => {
          setError(error.message);
        });
    }
  }, []);

  if (!credits) {
    return null;
  }

  return (
    <div>
      {isLoading && <RotatingLines strokeColor="#4A9E48" />}
      {error && <p>Ooops! Something went wrong. Please, try again</p>}
      {credits && (
        <CreditsList>
          {credits.map(({ profile_path, name, character, id }) => {
            return (
              <li key={id}>
                <Photo
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2${profile_path}`
                      : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
                  }
                  alt={name}
                />
                <Text>{name}</Text>
                <Text>Character: {character}</Text>
              </li>
            );
          })}
        </CreditsList>
      )}
    </div>
  );
}
