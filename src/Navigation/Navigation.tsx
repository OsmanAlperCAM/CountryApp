import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Countries from '../pages/Countries';
import routes from './routes';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={routes.COUNTRIES} component={Countries} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
