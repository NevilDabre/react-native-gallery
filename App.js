import React, { Component } from 'react';
import { Text, View } from 'react-native'
import ImageScrollViewComponent from './Src/Components/ImageScrollView/';
import { Provider as StoreProvider } from 'react-redux'
console.disableYellowBox = true;
import store from './Src/redux'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import AppHeader from './Src/Components/AppHeader'
import AppContainer from './Src/Components/AppContainer'
import ImageCard from './Src/Components/ImageCard'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
  dark: true
};

export default class App extends Component {
  render() {
    return (
      <StoreProvider store={store}>
        <PaperProvider theme={theme}>
          <AppHeader />
          <AppContainer />
        </PaperProvider>

        {/* <ImageScrollViewComponent></ImageScrollViewComponent> */}
      </StoreProvider>
    );
  }
}