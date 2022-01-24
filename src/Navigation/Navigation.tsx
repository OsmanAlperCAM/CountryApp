import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Countries from '../pages/Countries';
import CountryDetail from '../pages/CountryDetail';
import {CountryType} from '../types/country';

export type StackParams = {
  countries: any;
  countryDetail: {country: CountryType};
};
const Stack = createNativeStackNavigator<StackParams>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen
          options={{title: 'COUNTRIES'}}
          name={'countries'}
          component={Countries}
        />
        <Stack.Screen
          options={{title: 'COUNTRY DETAIL'}}
          name={'countryDetail'}
          component={CountryDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
