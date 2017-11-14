import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import MyTabbar from './Screens/MyTabbar';

export default class App extends Component {
	render() {
		return (
			<MyTabbar></MyTabbar>
		);
	}
}


AppRegistry.registerComponent('RNExample', () => App);
