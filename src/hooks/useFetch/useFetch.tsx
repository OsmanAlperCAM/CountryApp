import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {CountryType} from '../../types/country';

const baseUrl: string = 'https://restcountries.com/v3.1/';

const useFetch = (url: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [countries, setCountries] = useState<CountryType[]>([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const {data} = await axios.get<CountryType[]>(`${baseUrl}${url}`);
      setCountries(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {countries, loading, error, fetchData};
};
export default useFetch;
