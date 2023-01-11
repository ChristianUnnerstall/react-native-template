import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Switch} from 'react-native-gesture-handler';
import Components from '../components';
import {Layout, Typography} from '../styles';

const SettingsScreen = () => {
  const [isEnabledOption1, setIsEnabledOption1] = useState(false);
  const [isEnabledOption2, setIsEnabledOption2] = useState(false);
  const [isEnabledOption3, setIsEnabledOption3] = useState(false);
  const toggleSwitchOption1 = () =>
    setIsEnabledOption1(previousState => !previousState);
  const toggleSwitchOption2 = () =>
    setIsEnabledOption2(previousState => !previousState);
  const toggleSwitchOption3 = () =>
    setIsEnabledOption3(previousState => !previousState);
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.textHeader3}>Section</Text>
        <View
          style={[
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            },
          ]}>
          <Text>Option to set something</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabledOption1 ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchOption1}
            value={isEnabledOption1}
          />
        </View>
      </View>
      <Components.SpacerComponent />
      <View style={styles.section}>
        <Text style={styles.textHeader3}>Section</Text>
        <View
          style={[
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            },
          ]}>
          <Text>Option to set another one</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabledOption2 ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchOption2}
            value={isEnabledOption2}
          />
        </View>
        <View
          style={[
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            },
          ]}>
          <Text>Option to set a setting</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabledOption3 ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchOption3}
            value={isEnabledOption3}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Layout.container,
  },
  section: {
    ...Layout.section,
  },
  textHeader1: {
    ...Typography.header1,
  },
  textHeader2: {
    ...Typography.header2,
  },
  textHeader3: {
    ...Typography.header3,
  },
  text: {
    ...Typography.text,
  },
});

export default SettingsScreen;
