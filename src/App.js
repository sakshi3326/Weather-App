// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import WeatherApp from './WeatherApp';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>React Redux Weather App</h1>
        </header>
        <main>
          <WeatherApp />
        </main>
      </div>
    </Provider>
  );
}

export default App;
