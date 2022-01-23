import React from 'react';
import {View, Text, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import {CountryType} from '../../types/country';
import styles from './Countries.style';

const renderCountry = ({item}: {item: CountryType}) => {
  return <Text>{item.name.common}</Text>;
};
const Countries = () => {
  const {countries} = useFetch('all');
  console.log(countries.length);
  return (
    <View style={styles.container}>
      <FlatList data={countries} renderItem={renderCountry} />
    </View>
  );
};
export default Countries;
