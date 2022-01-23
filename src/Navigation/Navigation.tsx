import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Countries from '../pages/Countries';
import CountryDetail from '../pages/CountryDetail';


export type StackParams={
    countries: any;
    countryDetail: any;
}
const Stack = createNativeStackNavigator<StackParams>()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'countries'} component={Countries} />
        <Stack.Screen name={'countryDetail'} component={CountryDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
