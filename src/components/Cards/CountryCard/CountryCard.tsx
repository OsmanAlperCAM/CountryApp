import React, {FunctionComponent} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './CountryCard.style';

interface IProps {
  countryName: string;
  countryFlag: string;
  onCountryPress?: () => void;
}

const CountryCard: FunctionComponent<IProps> = ({
  countryName,
  countryFlag,
  onCountryPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onCountryPress}>
      <Image style={styles.image} source={{uri: countryFlag}} />
      <Text style={styles.name}>{countryName}</Text>
    </TouchableOpacity>
  );
};
export default CountryCard;
