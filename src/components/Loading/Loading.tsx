import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import styles from './Loading.style';

const Loading = () => {
  return (
    <View style={styles.container}>
     <ActivityIndicator size="large"/>
    </View>
  );
};
export default Loading;

