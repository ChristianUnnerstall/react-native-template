import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Buttons, Layout, Typography} from '../styles';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={styles.textHeader1}>Home Screen</Text>
      </View>
      <View style={{flex: 2}}>
        <Text style={{...Typography.text}}>
          Demo application to showcase Components, Navigation, Styles.
        </Text>
      </View>
      <View style={{flex: 1}}>
        <Pressable
          style={styles.buttonSmall}
          onPress={() => navigation.navigate('Page One')}>
          <Text style={styles.buttonSmallText}>Go to Page One</Text>
        </Pressable>
        <Pressable
          style={styles.buttonSmall}
          onPress={() => navigation.navigate('Page Two')}>
          <Text style={styles.buttonSmallText}>Go to Page Two</Text>
        </Pressable>
        <Pressable
          style={styles.buttonSmall}
          onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.buttonSmallText}>Settings</Text>
        </Pressable>
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

export default HomeScreen;
