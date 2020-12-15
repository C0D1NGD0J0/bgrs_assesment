import React, {useState, useEffect} from 'react';
import { Provider } from "react-redux";
import Home from "./pages/home";
import store from "./store";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;