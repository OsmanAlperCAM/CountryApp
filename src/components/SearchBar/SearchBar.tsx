import React, { FunctionComponent } from 'react';
import {View, TextInput, TextInputProps} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './SearchBar.style';



const SearchBar = (props:TextInputProps) => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={30} />
      <TextInput style={styles.input} {...props} />
    </View>
  );
};
export default SearchBar;
