import React, {FunctionComponent} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './ListTile.style';

interface Props {
  title: string;
  subtitle: string;
  icon: string;
}

const ListTile: FunctionComponent<Props> = ({title, subtitle, icon}) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={45} />
      <View style={styles.text_container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};
export default ListTile;
