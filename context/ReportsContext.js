import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './authContext';
import { EmergenciesContext } from './EmergenciesContext';

// Create the context
const ReportsContext = createContext();

// Provider component
const ReportsProvider = ({ children }) => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [state] = useContext(AuthContext);
  const { emergencies, fetchUserEmergencies } = useContext(EmergenciesContext);

  // Fetch user reports
  const fetchUserReports = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get('/report/get-user-reports');
      if (data.success) {
        setReports(data.reports);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error fetching user reports:', error);
      alert('Error fetching user reports');
    }
    setLoading(false);
  };

  // Initial fetch when the component mounts and state.token changes
  useEffect(() => {
    if (state && state.token) {
      fetchUserReports();
      fetchUserEmergencies();
    }
  }, [state]);

  return (
    <ReportsContext.Provider value={{ reports, emergencies, loading }}>
      {children}
    </ReportsContext.Provider>
  );
};

export { ReportsContext, ReportsProvider };
