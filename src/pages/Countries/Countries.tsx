import React from 'react';
import {View, Text, FlatList} from 'react-native';
import CountryCard from '../../components/Cards/CountryCard';
import Loading from '../../components/Loading';
import useFetch from '../../hooks/useFetch';
import {CountryType} from '../../types/country';
import styles from './Countries.style';

const renderCountry = ({item}: {item: CountryType}) => {
 
  return <CountryCard countryName={item.name.common} countryFlag={item.flags.png}/>;
};
const Countries = () => {
  const {loading,countries} = useFetch('all');
  countries.sort((a, b) => (a.name.common < b.name.common ? -1 : 1))
  console.log(countries.length);
  if(loading) {
    return (<Loading/>)
  }
  return (
    <View style={styles.container}>
      <FlatList data={countries} renderItem={renderCountry} />
    </View>
  );
};
export default Countries;
