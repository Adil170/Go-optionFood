// In App.js in a new project

import * as React from 'react';
import Navigation from './Navigation';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice'; // Adjust the path

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

function App() {
  return ( 

  <Provider store={store}>
   <Navigation/>
   </Provider>
    
  ); 
}

export default App;