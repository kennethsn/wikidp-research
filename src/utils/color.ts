import { colors } from '@material-ui/core';

import { randomItem } from './array';

const COLOR_NAMES = [
  'amber',
  'blue',
  'blueGrey',
  'brown',
  'cyan',
  'deepOrange',
  'deepPurple',
  'green',
  'grey',
  'indigo',
  'lightBlue',
  'lightGreen',
  'lime',
  'orange',
  'pink',
  'purple',
  'red',
  'teal',
  'yellow',
];

const COLOR_SHADES = [200, 300, 400, 500];

// @ts-ignore
export const randomColor = () => colors[randomItem(COLOR_NAMES)][randomItem(COLOR_SHADES)];
