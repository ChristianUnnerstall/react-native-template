import React from 'react';
import {StyleSheet, Text} from 'react-native';

const SpacerComponent = () => {
  return (
    <>
      <Text style={styles.spacer} />
    </>
  );
};

const styles = StyleSheet.create({
  spacer: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    alignSelf: 'center',
    width: '60%',
    marginVertical: 10,
  },
});

export default SpacerComponent;
