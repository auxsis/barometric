import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Geosuggest from 'react-geosuggest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { fetchWeather } from '../../redux/weather';
import { errorHandler, clearErrors } from '../../redux/errors';

const Search = () => {
  const geosuggestEl = useRef(null);
  const dispatch = useDispatch();
  const errors = useSelector(state => (state.errors.length ? state.errors : null));

  const onSuggestSelect = e => {
    if (e) {
      dispatch(clearErrors());
      dispatch(fetchWeather(e.location, e.label));
    }
  };

  const getPosition = () => {
    dispatch(clearErrors());
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          geosuggestEl.current.clear();
          dispatch(fetchWeather({ lat: coords.latitude, lng: coords.longitude }));
        },
        err => {
          dispatch(errorHandler(err.message));
        }
      );
    }
  };

  return (
    <Col>
      <SearchBar>
        <Geosuggest ref={geosuggestEl} onSuggestSelect={onSuggestSelect} className="mr-auto" />
        <FontAwesomeIcon
          onClick={getPosition}
          className="text-white my-4 mx-4"
          icon={faMapMarkerAlt}
          size="2x"
        />
      </SearchBar>
      {errors &&
        errors.map((error, idx) => (
          <Alert key={idx} variant="danger">
            {error}
          </Alert>
        ))}
    </Col>
  );
};

export default Search;

const SearchBar = styled.div`
  display: flex;
`;