import React from 'react';
import {View, Text, FlatList} from 'react-native';
import CountryCard from '../../components/Cards/CountryCard';
import useFetch from '../../hooks/useFetch';
import {CountryType} from '../../types/country';
import styles from './Countries.style';

const renderCountry = ({item}: {item: CountryType}) => {
 
  return <CountryCard countryName={item.name.common} countryFlag={item.flags.png}/>;
};
const Countries = () => {
  const {countries} = useFetch('all');
  countries.sort((a, b) => (a.name.common < b.name.common ? -1 : 1))
  console.log(countries.length);
  return (
    <View style={styles.container}>
      <FlatList data={countries} renderItem={renderCountry} />
    </View>
  );
};
export default Countries;
