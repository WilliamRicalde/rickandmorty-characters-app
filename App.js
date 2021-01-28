import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List } from './components/List';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txtheader}>Rick and Morty App</Text>
      </View>
      <List />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    marginTop: 0,
    backgroundColor: '#154360',
    width: '100%',
    height: '10%',
    justifyContent: 'center'
  },
  txtheader: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 15
  }
});
