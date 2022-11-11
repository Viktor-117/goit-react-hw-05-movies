import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { KEY } from '../service/api';
import { Box, Text, Title, ListItem } from './Reviews.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const url = `/movie/${movieId}/reviews?api_key=${KEY}`;
    setIsLoading(true);
    response();

    async function response() {
      await axios
        .get(url)
        .then(res => {
          setReviews(res.data.results);
          setIsLoading(false);
        })
        .catch(error => {
          setError(error.message);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {isLoading && <RotatingLines strokeColor="#4A9E48" />}
      {error && <p>Ooops! Something went wrong. Please, try again</p>}
      <Box>
        {reviews.length !== 0 ? (
          reviews.map(({ author, id, content }) => (
            <ListItem key={id}>
              <Title>Author: {author}</Title>
              <Text>{content}</Text>
            </ListItem>
          ))
        ) : (
          <Text>We don't have any reviews for this movie.</Text>
        )}
      </Box>
    </div>
  );
}
