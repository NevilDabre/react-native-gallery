import React, { Component } from 'react';
import ImageScrollViewComponent from './Src/Components/ImageScrollViewComponent.js';
import { Provider } from 'react-redux'

import store from './Src/redux'
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <ImageScrollViewComponent></ImageScrollViewComponent>
      </Provider>
    );
  }
}