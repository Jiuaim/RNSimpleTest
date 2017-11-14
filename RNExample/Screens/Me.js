import React, { Component } from 'react';
import { 
	AppRegistry,
	StyleSheet,
	View,
	Text,
	Image,
	SectionList
} from 'react-native';
import sections from './Me/MeData'
import MeHeaderView from './Me/MeHomeHeader'


export default class MeScreen extends Component {
	constructor(props) {
		super(props);
	}

	_renderItem = (info) => {
    	return (
			<View style = {styles.meCell}>
				<View style = {styles.meCellLeft}>
					<Image style = {styles.meCellLeftImage} source={info.item.leftImage}/>
					<Text style = {styles.meCellLeftText}>{info.item.leftText}</Text>
				</View>
				<View style = {styles.meCellRight}>
					<Text style = {styles.meCellRightText}>{info.item.rightText}</Text>
					<Image style = {styles.meCellRightImage} source={info.item.rightImage}/>
				</View>
			</View>
		)
	}


	render() {

		return (
			<View style={{ flex: 1 }}>
	        	<SectionList
	          		renderItem={this._renderItem}
	          		sections={sections}
	          		ListHeaderComponent={() => <MeHeaderView></MeHeaderView>}
	          		ItemSeparatorComponent={() => <View style={styles.seperate}>
	          											<View style = {{backgroundColor: 'black', left: 15, right: 0}}></View>
	          									  </View>}
	          		renderSectionHeader={() => <View style={styles.section}></View>}
	          	/>
	      	</View>
		)
	}
}

var styles = StyleSheet.create({
	meCell: {
		height: 44,
		backgroundColor: 'white',
		flexDirection:'row',
		alignItems: 'center',
	},
	meCellLeft: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection:'row',
		padding: 15
	},
	meCellRight: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		flexDirection:'row',
		padding: 15
	},
	meCellLeftImage: {
		// left: 10,
	},
	meCellLeftText: {
		// left: 40,
		padding: 15
	},
	meCellRightText: {
		// right: 10,
		padding: 15
	},
	meCellRightImage: {
		// right: 40,
	},
	seperate: {
		height: 0.5,
		flex: 1,
	},
	section: {
		height: 15,
		backgroundColor: '#f5f5f5'
	}
});
