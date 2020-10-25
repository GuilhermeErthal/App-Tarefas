import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// Desabilita os alertas 
console.disableYellowBox = true;

import Home from './src/view/Home';
import Task from './src/view/Task';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Task
  })
);

export default function App() {
  return <Routes/>
}
