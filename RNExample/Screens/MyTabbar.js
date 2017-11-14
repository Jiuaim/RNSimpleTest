import React, { Component } from 'react';
import { 
	AppRegistry,
	TabBarIOS,
	NavigatorIOS,
	StatusBar
} from 'react-native';
import HomeScreen from './Home';
import DoughnutScreen from './Doughnut';
import RecommendScreen from './Recommend';
import ShopScreen from './Shop';
import MeScreen from './Me';


export default class MyTabbar extends Component {

	constructor(props) {
    	super(props);
    	this.state = {
      		selectedBarItem : 'home'
    	}
  	}

  	_addNavigator(component, title) {
  		return <NavigatorIOS
  			style = {{flex: 1}}
  			barTintColor = 'white'
  			titleColor = '#666666'
  			translucent = {false}
  			initialRoute = {{
  				component: component,
  				title: title,
  				statusBarHidden: true
  			}}
  			renderScene={(route, navigator) =>
		       <View>
		         <StatusBar hidden={route.statusBarHidden} />
		       </View>
     }
  			navigationBarHidden = {true}
  		/>;
  	}

	render() {
		return (
			<TabBarIOS
			barTintColor = 'white'
			tintColor = '#00c27e'
			unselectedItemTintColor = '#333333'
			translucent = {true}
		>
			<TabBarIOS.Item
				title = '首页'
				icon = {require('../images/Tabbar/tabbar_home.png')}
				selectedIcon = {require('../images/Tabbar/tabbar_home_selected.png')}
				selected = {this.state.selectedBarItem === 'home'}
				onPress = {() => {this.setState({selectedBarItem: 'home'})}}
			>
				{this._addNavigator(HomeScreen, '首页')}
				
			</TabBarIOS.Item>
			<TabBarIOS.Item
				title = '甜甜圈'
				icon = {require('../images/Tabbar/tabbar_doughnut.png')}
				selectedIcon = {require('../images/Tabbar/tabbar_doughnut_selected.png')}
				selected = {this.state.selectedBarItem === 'doughnut'}
				onPress = {() => {this.setState({selectedBarItem: 'doughnut'})}}
			>
				{this._addNavigator(DoughnutScreen, '甜甜圈')}
				
			</TabBarIOS.Item>
			<TabBarIOS.Item
				title = '推荐'
				icon = {require('../images/Tabbar/tabbar_record.png')}
				selectedIcon = {require('../images/Tabbar/tabbar_record_selected.png')}
				selected = {this.state.selectedBarItem === 'record'}
				onPress = {() => {this.setState({selectedBarItem: 'record'})}}
			>
				{this._addNavigator(RecommendScreen, '推荐')}
				
			</TabBarIOS.Item>
			<TabBarIOS.Item
				title = '商城'
				icon = {require('../images/Tabbar/tabbar_shop.png')}
				selectedIcon = {require('../images/Tabbar/tabbar_shop_selected.png')}
				selected = {this.state.selectedBarItem === 'shop'}
				onPress = {() => {this.setState({selectedBarItem: 'shop'})}}
			>
				{this._addNavigator(ShopScreen, '商城')}
				
			</TabBarIOS.Item>
			<TabBarIOS.Item
				title = '我的'
				icon = {require('../images/Tabbar/tabbar_me.png')}
				selectedIcon = {require('../images/Tabbar/tabbar_me_selected.png')}
				selected = {this.state.selectedBarItem === 'me'}
				onPress = {() => {this.setState({selectedBarItem: 'me'})}}
			>
				{this._addNavigator(MeScreen, '我的')}
				
			</TabBarIOS.Item>
		</TabBarIOS>
		)
	}
}

