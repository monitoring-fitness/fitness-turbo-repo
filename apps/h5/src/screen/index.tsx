import React from 'react';
import { SettingsScreen, Training } from '../../App';

type ScreenRoutes = Array<{
  name: string,
  component: React.ComponentType<any>,
}>;

const screenRoutes: ScreenRoutes = [
  {
    name: 'training',
    component: Training,
  },
  {
    name: 'setting',
    component: SettingsScreen,
  },
];

export default screenRoutes
