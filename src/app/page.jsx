'use client'
import React from 'react';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import CounterPage from './redux/page'
import Register from './register/page';

const Home = () => {
  return (
    <Provider store={store}>
      <Register />
    </Provider>

  )
}

export default Home;