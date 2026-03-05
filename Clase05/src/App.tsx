/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { CountScreen } from "./components/Screens/HomeScreen/CountScreen";import React from 'react'

type AppProps = {
  atributo: string;
}

class App extends React.Component<AppProps>{
  private count: number = 0;
  private label: string = 'hello';
  handleOnPress = () =>{
  console.log("Press Button");
  this.count++;
  console.log(this.count);
}
  render(){
      return (
    <SafeAreaProvider>
      <StatusBar/>
      <CountScreen label= {this.label} OnPress={this.handleOnPress}></CountScreen>
    </SafeAreaProvider>
      );
  }
}




export default App;
