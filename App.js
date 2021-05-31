import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
import InputTasks from './src/components/TextInput';
import Tasks from './src/components/Tasks';
import SendButton from './src/components/Button'

const App = () => {
  return (
    <View style={styles.container}>   
    <Text style={styles.text}>
      Lista de Tareas
    </Text>
      <View style={{flex: 3}}>
        <Tasks />
      </View>
      <View style={{flex: 1}}>
        <InputTasks />
        <SendButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    
    paddingTop: 50,
  },
  text:{
    fontSize: 30,
    color: '#FF5733',
    textAlign: 'center',
  },
  input: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 0,
  }
})
export default App;