import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import CountryCard from '../../components/Cards/CountryCard';
import Loading from '../../components/Loading';
import SearchBar from '../../components/SearchBar';
import useFetch from '../../hooks/useFetch';
import {StackParams} from '../../Navigation/Navigation';
import {CountryType} from '../../types/country';
import styles from './Countries.style';

const Countries = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const [countryList, setCountryList] = useState<CountryType[]>([]);

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

  const handleSearch = (text: string) => {
    const temporaryCountries = countries.filter(item => {
      const searchText = text.toLowerCase();
      const searchItem = item.name.common.toString().toLowerCase();
      return searchItem.indexOf(searchText) > -1;
    });

    setCountryList(temporaryCountries);
  };

  const {loading, countries} = useFetch('all');

  useEffect(() => {
    setCountryList(countries);
  }, [countries]);

  countries.sort((a, b) => (a.name.common < b.name.common ? -1 : 1));
  console.log(countries.length);
  if (loading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <SearchBar onChangeText={handleSearch} />
      <FlatList data={countryList} renderItem={renderCountry} />
    </View>
  );
};
export default Countries;
