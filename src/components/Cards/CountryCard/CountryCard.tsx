import React, {FunctionComponent} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './CountryCard.style';

interface IProps {
  countryName: string;
  countryFlag: string;
}

const CountryCard: FunctionComponent<IProps> = ({countryName,countryFlag}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: countryFlag}} />
      <Text style={styles.name}>{countryName}</Text>
    </View>
  );
};
export default CountryCard;
