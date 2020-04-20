import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';

import { fetchCountries } from "../../api";

function CountryPicker({ handleCountryChange }) {

  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {

    const fetchApi = async () => {
      setFetchedCountries(await fetchCountries());
    }

    fetchApi();

  }, [setFetchedCountries])

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect onChange={(event) => handleCountryChange(event.target.value)}>
        <option value="">Global</option>
        {
          fetchedCountries.map((country, i) => <option key={i} value={country.name}>{country.name}</option>)
        }
      </NativeSelect>
    </FormControl>
)
}

export default CountryPicker;
