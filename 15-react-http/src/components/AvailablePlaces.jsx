import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [fetchingPlaces, setFetchingPlaces] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setFetchingPlaces(true);

      try {
        const getPlacesData = await fetchAvailablePlaces();

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            getPlacesData, 
            position.coords.latitude, 
            position.coords.longitude
          );

          setAvailablePlaces(sortedPlaces);
        });
      } catch(error) {
        setError({message: error.message || 'Couldn`t fetch places, try again later.'});
      } finally {
        setFetchingPlaces(false);
      }
    }

    fetchPlaces();
  }, []);

  if (error) {
    return <Error 
      title="An error occured!"
      message={error.message}
    />
  }

  // useEffect(() => {
  //   fetch('http://localhost:3000/places')
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((resData) => {
  //     setAvailablePlaces(resData.places);
  //   })
  // }, []);


  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={fetchingPlaces}
      loadingText="Fetching places data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
