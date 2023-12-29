// src/redux/actions.js
import { setWeather } from './reducers';
export const fetchWeather = (city) => async (dispatch) => {
    try {
      const apiKey = '989a73874e21d3e638b5ab53a544c011';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      console.log('Weather Data:', data); // Add this log
  
      if (!response.ok) {
        throw new Error('City not found');
      }
  
      dispatch(setWeather(data));
      return data; // Return the data for additional checks in the component
    } catch (error) {
      console.error(error.message);
      throw error; // Rethrow the error for additional checks in the component
    }
  };
  