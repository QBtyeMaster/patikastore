import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './HeaderSyle';
const Header = () => {
  return(
    <View style={styles.header_wrapper}>
      <Text style={styles.logo_title}>PATIKASTORE</Text>
      <TextInput style={styles.search_input} value="Search..." />
    </View>
  )
}
export default Header;