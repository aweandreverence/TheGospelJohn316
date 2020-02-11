import { AppRegistry } from 'react-native';
import App from './app';
//import App from './App.example';

AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
  rootTag: document.getElementById('root')
});
