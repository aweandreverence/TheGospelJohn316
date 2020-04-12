import React from 'react';
import { Text, StyleSheet } from 'react-native';

import styles from '../styles';


const Link = props => (
  <Text
    {...props}
    accessibilityRole="link"
    style={StyleSheet.compose(
      styles.link,
      props.style
    )}
  />
);


export default Link;
