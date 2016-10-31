import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Navigator,
	PixelRatio,
	TouchableOpacity
} from 'react-native';

import AnimationInit from "react-native-navigator-animation";
let buildStyleInterpolator = require('buildStyleInterpolator');
let NavAnimate = AnimationInit(buildStyleInterpolator);

class Nav extends Component{
	render(){
		return (
			<View style={styles.container}>
				<TouchableOpacity
					activeOpacity={0.9}
					onPress={()=>{this._onPress(1)}}
					style={styles.btn}>
					<Text style={styles.text}>AnimationScaleInRight</Text>
				</TouchableOpacity>
				<TouchableOpacity
					activeOpacity={0.9}
					onPress={()=>{this._onPress(2)}}
					style={styles.btn}>
					<Text style={styles.text}>AnimationScaleInRightDown</Text>
				</TouchableOpacity>
				<TouchableOpacity
					activeOpacity={0.9}
					onPress={()=>{this._onPress(3)}}
					style={styles.btn}>
					<Text style={styles.text}>AnimationScaleInRightUp</Text>
				</TouchableOpacity>
				<TouchableOpacity
					activeOpacity={0.9}
					onPress={()=>{this._onPress(4)}}
					style={styles.btn}>
					<Text style={styles.text}>AnimationRotateInLeft</Text>
				</TouchableOpacity>
				<TouchableOpacity
					activeOpacity={0.9}
					onPress={()=>{this._onPress(5)}}
					style={styles.btn}>
					<Text style={styles.text}>CustomAnimation</Text>
				</TouchableOpacity>
			</View>
		)
	}
	_onPress(index){
		const {navigator} = this.props;
		if(index===1){
			navigator.push({
				name:"Nav",component:Nav,index:1,animationType:NavAnimate.AnimationScaleInRight
			});
			return;
		}
		if(index===2){
			navigator.push({
				name:"Nav",component:Nav,index:2,animationType:NavAnimate.AnimationScaleInRightDown
			});
			return;
		}
		if(index===3){
			navigator.push({
				name:"Nav",component:Nav,index:3,animationType:NavAnimate.AnimationScaleInRightUp
			});
			return;
		}
		if(index===4){
			navigator.push({
				name:"Nav",component:Nav,index:4,animationType:NavAnimate.AnimationRotateInLeft
			});
			return;
		}
		if(index===5){
			navigator.push({
				name:"Nav",component:Nav,index:5,animationType:NavAnimate.CustomAnimation("rightin","leftout")
			});
			return;
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection:"column",
		backgroundColor: '#76EEC6',
		marginTop:20,
		flex:1,
		justifyContent:"center",
	},
	btn:{
		marginLeft:50,
		marginRight:50,
		alignItems:"center",
		justifyContent:"center",
		height:40,
		borderWidth:1,
		borderColor:"#fff",
		borderRadius:10,
		marginTop:10
	},
	text:{
		color:"#fff",
		fontSize:20
	}
});

export default Nav;