import React, { Component } from 'react';
import { 
	AppRegistry,
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';


export default class MeHomeHeader extends Component {

	render() {

		return (
			<View style={styles.meHeader}>
	        	<View style={styles.meHeaderTop}>
	        		<View style={styles.meHeaderTopLeft}>
	        			<Image style = {styles.meHeaderTopLeftImage} source={require('./images/header.png')}/>
	        			<View style={styles.meHeaderTopLeftTexts}>
	        				<Text style = {styles.meHeaderTopLeftText}>什么都会!</Text>
	        				<Text style = {styles.meHeaderTopLeftText}>432890</Text>
				      	</View>
			      	</View>
			      	<View style={styles.meHeaderTopRight}>
	        			<Image style = {styles.meHeaderTopRightImage} source={require('./images/icon_home_banner_messagebox.png')}/>
			      	</View>
		      	</View>
		      	<View style={styles.meHeaderBottom}>
	        		<View style={styles.meHeaderBottomTexts}>
        				<Text style = {styles.meHeaderBottomTText}>0</Text>
        				<Text style = {styles.meHeaderBottomBText}>动态</Text>
			      	</View>
			      	<View style={styles.meHeaderBottomTexts}>
        				<Text style = {styles.meHeaderBottomTText}>2827</Text>
        				<Text style = {styles.meHeaderBottomBText}>积分</Text>
			      	</View>
			      	<View style={styles.meHeaderBottomTexts}>
        				<Text style = {styles.meHeaderBottomTText}>0</Text>
        				<Text style = {styles.meHeaderBottomBText}>优惠券</Text>
			      	</View>
			      	<View style={styles.meHeaderBottomTexts}>
        				<Text style = {styles.meHeaderBottomTText}>0</Text>
        				<Text style = {styles.meHeaderBottomBText}>服务卡</Text>
			      	</View>
		      	</View>
	      	</View>
		)
	}

}

var styles = StyleSheet.create({
	meHeader: {
		height: 178,
		backgroundColor: 'white',
		flexDirection:'column',
	},
	meHeaderTop: {
		height: 126,
		flexDirection:'row',
	},
	meHeaderBottom: {
		flex: 1,
		justifyContent: 'space-around',
		flexDirection:'row',
	},
	meHeaderTopLeft: {
		flex: 1,
		alignItems: 'center',
		flexDirection:'row',
	},
	meHeaderTopRight: {
		flex: 1,
		flexDirection:'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	meHeaderTopLeftImage: {
		width: 70,
		height: 70,
		borderRadius: 35,
		margin: 15,
	},
	meHeaderTopRightImage: {
		margin: 15,
	},
	meHeaderTopLeftTexts: {
		flexDirection:'column',
	},
	meHeaderTopLeftText: {
		color: '#333333'
	},
	meHeaderBottomTexts: {
		flexDirection:'column',
		alignItems: 'center',
	},
	meHeaderBottomTText: {
		color: '#00c27e'
	},
	meHeaderBottomBText: {
		color: '#666666'
	}
});