import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import CountryCard from '../../components/Cards/CountryCard';
import Loading from '../../components/Loading';
import useFetch from '../../hooks/useFetch';
import {StackParams} from '../../Navigation/Navigation';
import {CountryType} from '../../types/country';
import styles from './Countries.style';

const Countries = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  const handleCountryPress = (item: CountryType) => {
    navigation.navigate('countryDetail', {
      country: item,
    });
  };
  const renderCountry = ({item}: {item: CountryType}) => {
    return (
      <CountryCard
        countryName={item.name.common}
        countryFlag={item.flags.png}
        onCountryPress={() => handleCountryPress(item)}
      />
    );
  };

  const {loading, countries} = useFetch('all');
  countries.sort((a, b) => (a.name.common < b.name.common ? -1 : 1));
  console.log(countries.length);
  if (loading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <FlatList data={countries} renderItem={renderCountry} />
    </View>
  );
};
export default Countries;
