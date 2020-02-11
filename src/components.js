import React, { Component } from 'react';
import { Button, Image, Text, ScrollView, StyleSheet, View } from 'react-native';

import styles from './styles';

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

export {
    Link
};
