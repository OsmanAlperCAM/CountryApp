import React, {FunctionComponent} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {CountryType} from '../../../types/country';
import ListTile from '../../ListTile';
import styles from './CountryDetailCard.style';

interface Props {
  country: CountryType;
}

const CountryDetailCard: FunctionComponent<Props> = ({country}) => {
  return (
    <ScrollView  style={styles.container}>
      <Text style={styles.title}>{country.name.common}</Text>
      <Image style={styles.image} source={{uri: country.flags.png}} />
      <ListTile
        icon={'business'}
        title={country.capital?.toString()}
        subtitle="Capital"
      />
      <ListTile
        icon={'attach-money'}
        title={Object.keys(country.currencies)
          .map(key => {
            return `${Object(country.currencies)[key].name} (${
              Object(country.currencies)[key].symbol
            }) `;
          })
          .toString()}
        subtitle="Currencies"
      />
      <ListTile
        icon={'language'}
        title={`${Object.keys(country.languages).map(key => {
          return Object(country.languages)[key];
        })}`}
        subtitle="Language"
      />
      <ListTile
        icon={'location-on'}
        title={`${country.continents}`}
        subtitle="Continent"
      />
      <ListTile
        icon={'texture'}
        title={`${country.area} km²`}
        subtitle="Continent"
      />
      <ListTile
        icon={'people'}
        title={`${country.population}`}
        subtitle="Population"
      />
      <ListTile
        icon={'call'}
        title={`${country.idd.root}${country.idd.suffixes}`}
        subtitle="Calling Code"
      />
      <ListTile
        icon={'laptop'}
        title={`${country.tld}`}
        subtitle="Domain"
      />
    </ScrollView>
  );
};
export default CountryDetailCard;
