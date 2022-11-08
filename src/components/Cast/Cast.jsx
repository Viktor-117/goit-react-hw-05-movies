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
  const params = useParams();

  useEffect(() => {
    const url = `/movie/${params.movieId}/credits?api_key=${KEY}`;
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

  return (
    <div>
      {isLoading && <RotatingLines strokeColor="#4A9E48" />}
      {error && <p>Ooops! Something went wrong. Please, try again</p>}
      {credits && (
        <CreditsList>
          {credits.map(credit => {
            console.log(credit);
            return (
              <li>
                <Photo
                  src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${credit.profile_path}`}
                  alt={credit.name}
                />
                <Text>{credit.name}</Text>
                <Text>Character: {credit.character}</Text>
              </li>
            );
          })}
        </CreditsList>
      )}
    </div>
  );
}
