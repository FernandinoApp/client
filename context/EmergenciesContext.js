import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './authContext';

// Create the context
const EmergenciesContext = createContext();

// Provider component
const EmergenciesProvider = ({ children }) => {
  const [emergencies, setEmergencies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [state] = useContext(AuthContext);

  // Fetch user emergencies
  const fetchUserEmergencies = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get('/emergency/get-user-emergencies');
      if (data.success) {
        setEmergencies(data.emergencies);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error fetching user emergencies:', error);
      alert('Error fetching user emergencies');
    }
    setLoading(false);
  };

  // Initial fetch when the component mounts and state.token changes
  useEffect(() => {
    if (state && state.token) {
      fetchUserEmergencies();
    }
  }, [state]);

  return (
    <EmergenciesContext.Provider value={{ emergencies, loading, fetchUserEmergencies }}>
      {children}
    </EmergenciesContext.Provider>
  );
};

export { EmergenciesContext, EmergenciesProvider };
