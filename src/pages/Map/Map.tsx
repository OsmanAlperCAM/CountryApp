import { useNavigation } from '@react-navigation/native';
import {NativeStackNavigationProp, NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FunctionComponent, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import {StackParams} from '../../Navigation/Navigation';
import { CountryType } from '../../types/country';
import styles from './Map.style';

type Props = NativeStackScreenProps<StackParams, 'map'>;

const Map: FunctionComponent<Props> = ({route}) => {
  const {countries} = route.params;
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

const handleGoCountryDetail = (item: CountryType)=>{
  navigation.navigate('countryDetail', {
    country: item,
  });
}

  useEffect(() => {
    console.log('countries', countries);
  }, [countries]);

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {countries.map(item => {
          return (
            <Marker
              key={Math.random()}
              title = {item.name.common}
              description = {`Capital: ${item.capital}`}
              onPress={()=> handleGoCountryDetail(item)}
              coordinate={{
                latitude: item.latlng[0],
                longitude: item.latlng[1],
              }}>
              <View>
                <Image
                  style={{height: 20, width: 20}}
                  source={{uri: item.flags.png}}
                />
              </View>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};
export default Map;
