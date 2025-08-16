import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './FetchLatLng.css';
import Loading from './Loading';

const FetchLatLng = ({ onFetchPlaces }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaces = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:5000/api/fetch-places");
        const data = await res.json();
        onFetchPlaces(data);
      } catch (err) {
        console.error("Failed to fetch from backend:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  return <div>{loading && <Loading />}</div>;
};

FetchLatLng.propTypes = {
  onFetchPlaces: PropTypes.func.isRequired,
};

export default FetchLatLng;
