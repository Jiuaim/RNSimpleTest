import React, { Component } from 'react';
import { 
	AppRegistry,
	StyleSheet,
	View,
	Text,
} from 'react-native';

export default class HomeScreen extends Component {
	render() {
		return (
			<View style = {styles.container}>
				<Text style = {styles.text}>Home!</Text>
			</View>
		)
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'red',
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 20,
		color: 'black'
	}
});
