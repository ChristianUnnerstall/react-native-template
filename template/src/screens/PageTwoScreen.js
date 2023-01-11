import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Buttons, Layout, Typography} from '../styles';

const PageTwoScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textHeader1}>Page Two Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Layout.containerCentered,
  },
  textHeader1: {
    ...Typography.header1,
  },
  buttonSmall: {
    ...Buttons.largeRounded,
  },
  buttonSmallText: {
    ...Buttons.largeText,
  },
});

export default PageTwoScreen;
