import {useRoute} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import CountryDetailCard from '../../components/Cards/CountryDetailCard';
import {StackParams} from '../../Navigation/Navigation';
import styles from './CountryDetail.style';

type Props = NativeStackScreenProps<StackParams, 'countryDetail'>;

const CountryDetail: React.FunctionComponent<Props> = ({route}) => {
  const {country} = route.params;
  return (
    <View style={styles.container}>
      <CountryDetailCard country={country}/>
    </View>
  );
}; 
export default CountryDetail;
