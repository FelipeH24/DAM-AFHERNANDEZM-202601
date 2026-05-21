import { StatusBar, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CountScreen } from './components';
import React from 'react';
import { appStyles } from './App.style';

type AppProps = {
  atributo: string;
}

let total: number = 0;
let currentNumber: number = 0;

const handleNumber = (value: number) => {
  currentNumber = value;
  console.log("Número seleccionado:", currentNumber);
};

const handleSum = () => {
  total += currentNumber;
  console.log("SUMA → Total:", total);
};

const handleRest = () => {
  total -= currentNumber;
  console.log("RESTA → Total:", total);
};

export class App extends React.Component<AppProps> {

  render() {

    return (
      <SafeAreaProvider>
        <StatusBar />

        <View style={appStyles.safeArea}>
          <View style={appStyles.container}>

            <CountScreen label="0" OnPress={() => handleNumber(0)} />
            <CountScreen label="1" OnPress={() => handleNumber(1)} />
            <CountScreen label="2" OnPress={() => handleNumber(2)} />

            <CountScreen label="3" OnPress={() => handleNumber(3)} />
            <CountScreen label="4" OnPress={() => handleNumber(4)} />
            <CountScreen label="5" OnPress={() => handleNumber(5)} />

            <CountScreen label="6" OnPress={() => handleNumber(6)} />
            <CountScreen label="7" OnPress={() => handleNumber(7)} />
            <CountScreen label="8" OnPress={() => handleNumber(8)} />

            <CountScreen label="9" OnPress={() => handleNumber(9)} />

            <CountScreen label="+" OnPress={handleSum} />
            <CountScreen label="-" OnPress={handleRest} />

          </View>
        </View>

      </SafeAreaProvider>
    );
  }
}

export default App;