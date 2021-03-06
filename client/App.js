import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './components/AuthStack';
import CentralApp from './components/CentralApp';

const App = () => {
  return (
    <NavigationContainer>
      {/* <CentralApp /> */}
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;
