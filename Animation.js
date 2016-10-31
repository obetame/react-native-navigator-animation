import { PixelRatio, Dimensions,Navigator } from 'react-native';
// let buildStyleInterpolator = require('buildStyleInterpolator');
let NavigatorSceneConfigs = Navigator.SceneConfigs//转场动画
const Width = Dimensions.get('window').width;
const Height = Dimensions.get("window").height;
const Scale = PixelRatio.get();

const BaseLeftToRightGesture = {
	// If the gesture can end and restart during one continuous touch
	isDetachable: false,

	// How far the swipe must drag to start transitioning
	gestureDetectMovement: 2,

	// Amplitude of release velocity that is considered still
	notMoving: 0.3,

	// Fraction of directional move required.
	directionRatio: 0.66,

	// Velocity to transition with when the gesture release was "not moving"
	snapVelocity: 2,

	// Region that can trigger swipe. iOS default is 30px from the left edge
	edgeHitWidth: 30,

	// Ratio of gesture completion when non-velocity release will cause action
	stillCompletionRatio: 3 / 5,

	fullDistance: Width,
	direction: 'left-to-right',
};

const Opacity = {
	opacity: {
		value: 1.0,
		type: 'constant'
	},
}

const BaseScaleIn = {
	...Opacity,
	transformScale:{
		from:{x:0,y:0,z:0},
		to:{x:1,y:1,z:1},
		min:0,
		max:1,
		type:"linear",
		extrapolate:true
	}
}

const BaseScaleOut = {
	...Opacity,
	transformScale:{
		from:{x:1,y:1,z:1},
		to:{x:0,y:0,z:0},
		min:0,
		max:1,
		type:"linear",
		extrapolate:true
	}
}

const UpLeftIn = {
	...BaseScaleIn,
	transformTranslate: {
		from: {x: -Width, y: -Height, z: 0},
		to: {x: 0, y: 0, z: 1},
		min: 0,
		max: 1,
		type: 'linear',
		extrapolate: true,
		round: Scale
	}
}

const UpLeftOut = {
	...BaseScaleOut,
	transformTranslate: {
		from: {x: 0, y: 0, z: 1},
		to: {x: -Width, y: -Height, z: 0},
		min: 0,
		max: 1,
		type: 'linear',
		extrapolate: true,
		round: Scale
	}
}

const UpRightIn = {
	...BaseScaleIn,
	transformTranslate: {
		from: {x: Width, y: -Height, z: 0},
		to: {x: 0, y: 0, z: 1},
		min: 0,
		max: 1,
		type: 'linear',
		extrapolate: true,
		round: Scale
	}
}

const UpRightOut = {
	...BaseScaleOut,
	transformTranslate: {
		from: {x: 0, y: 0, z: 1},
		to: {x: Width, y: -Height, z: 0},
		min: 0,
		max: 1,
		type: 'linear',
		extrapolate: true,
		round: Scale
	}
}

const DownLeftIn = {
	...BaseScaleIn,
	transformTranslate: {
		from: {x: -Width, y: Height, z: 0},
		to: {x: 0, y: 0, z: 1},
		min: 0,
		max: 1,
		type: 'linear',
		extrapolate: true,
		round: Scale
	}
}

const DownLeftOut = {
	...BaseScaleOut,
	transformTranslate: {
		from: {x: 0, y: 0, z: 1},
		to: {x: -Width, y: Height, z: 0},
		min: 0,
		max: 1,
		type: 'linear',
		extrapolate: true,
		round: Scale
	}
}

const DownRightIn = {
	...BaseScaleIn,
	transformTranslate: {
		from: {x: Width, y: Height, z: 0},
		to: {x: 0, y: 0, z: 1},
		min: 0,
		max: 1,
		type: 'linear',
		extrapolate: true,
		round: Scale
	}
}

const DownRightOut = {
	...BaseScaleOut,
	transformTranslate: {
		from: {x: 0, y: 0, z: 1},
		to: {x: Width, y: Height, z: 0},
		min: 0,
		max: 1,
		type: 'linear',
		extrapolate: true,
		round: Scale
	}
}

const CenterScaleRightIn = {
	...Opacity,

	transformTranslate: {
		from: {x: Width, y: 0, z: 0},
		to: {x: 0, y: 0, z: 0},
		min: 0,
		max: 1,
		type: 'linear',
		extrapolate: true,
		round: Scale
	},
	transformScale: {
		from: {x: 0.4, y: 0.4, z: 0.4},
		to: {x: 1, y: 1, z: 1},
		min: 0,
		max: 1,
		type: 'linear',
		extrapolate: true
	},
};

const CenterScaleLeftIn = {
	...Opacity,

	transformTranslate: {
		from: {x: -Width, y: 0, z: 0},
		to: {x: 0, y: 0, z: 0},
		min: 0,
		max: 1,
		type: 'linear',
		extrapolate: true,
		round: Scale
	},
	transformScale: {
		from: {x: 0.4, y: 0.4, z: 0.4},
		to: {x: 1, y: 1, z: 1},
		min: 0,
		max: 1,
		type: 'linear',
		extrapolate: true
	},
};

const CenterScaleLeftOut = {
	...Opacity,
	transformTranslate: {
		from: {x: 0, y: 0, z: 0},
		to: {x: -Width, y: 0, z: 0},
		min: 0,
		max: 1,
		type: 'linear',
		extrapolate: true,
		round: Scale
	},
	transformScale: {
		from: {x: 1, y: 1, z: 1},
		to: {x: 0.4, y: 0.4, z: 0.4},
		min: 0,
		max: 1,
		type: 'linear',
		extrapolate: true
	},
}

const CenterScaleRightOut = {
	...Opacity,
	transformTranslate: {
		from: {x: 0, y: 0, z: 0},
		to: {x: Width, y: 0, z: 0},
		min: 0,
		max: 1,
		type: 'linear',
		extrapolate: true,
		round: Scale
	},
	transformScale: {
		from: {x: 1, y: 1, z: 1},
		to: {x: 0.4, y: 0.4, z: 0.4},
		min: 0,
		max: 1,
		type: 'linear',
		extrapolate: true
	},
}

const DownScaleIn = {
	...CenterScaleRightIn,
	transformTranslate: {
		from: {x: Math.round(Width/2), y: Math.round(Height/2), z: 0},
		to: {x: 0, y: 0, z: 1},
		min: 0,
		max: 1,
		type: 'linear',
		extrapolate: true,
		round: Scale
	},
	transformScale:{
		from:{x:0,y:0,z:0},
		to:{x:1,y:1,z:1},
		min:0,
		max:1,
		type:"linear",
		extrapolate:true
	}
}

const DownScaleOut = {
	...CenterScaleLeftOut,
	transformTranslate: {
		from: {x: 0, y: 0, z: 1},
		to: {x: -Width/2, y: Height/2, z: 0},
		min: 0,
		max: 1,
		type: 'linear',
		extrapolate: true,
		round: Scale
	},
	transformScale:{
		from:{x:1,y:1,z:1},
		to:{x:0,y:0,z:0},
		min:0,
		max:1,
		type:"linear",
		extrapolate:true
	},
}

const UpScaleIn = {
	...DownScaleIn,
	transformTranslate: {
		from: {x: Math.round(Width/2), y: -Math.round(Height/2), z: 0},
		to: {x: 0, y: 0, z: 1},
		min: 0,
		max: 1,
		type: 'linear',
		extrapolate: true,
		round: Scale
	}
}

const UpScaleOut = {
	...DownScaleOut,
	transformTranslate: {
		from: {x: 0, y: 0, z: 1},
		to: {x: -Width/2, y: -Height/2, z: 0},
		min: 0,
		max: 1,
		type: 'linear',
		extrapolate: true,
		round: Scale
	}
}

const RightRotateInDown = {
	transformRotateRadians: {
	  from: {x: 0, y: 0, z: 1, w: 0},
	  to: {x: 0, y: 0, z: 0, w: 1},
	  min: 0,
	  max: 1,
	  type: 'linear',
	  extrapolate: true
	},
	opacity:{
		value:1,
		type:"constant"
	},
	transformTranslate: {
		from: {x: 1, y: 0, z: 0},
		to: {x: 0, y: 0, z: 0},
		min: 0,
		max: 1,
		type: 'linear',
		extrapolate: true,
		round: Scale
	},
}

const LeftRotateOutDown = {
	transformRotateRadians: {
	  from: {x: 0, y: 0, z: 0, w: 1},
	  to: {x: 0, y: 0, z: -1, w: 0},
	  min: 0,
	  max: 1,
	  type: 'linear',
	  extrapolate: true
	},
	opacity:{
		value:1,
		type:"constant"
	},
	transformTranslate: {
		from: {x: 0, y: 0, z: 0},
		to: {x: -1, y: 0, z: 0},
		min: 0,
		max: 1,
		type: 'linear',
		extrapolate: true,
		round: Scale
	},
}

// 下面两个是右进左出
const RightRotateInUp = {
	...RightRotateInDown,
	transformRotateRadians: {
	  from: {x: 0, y: 0, z: -1, w: 0.5},
	  to: {x: 0, y: 0, z: 0, w: 1},
	  min: 0,
	  max: 1,
	  type: 'linear',
	  extrapolate: true
	},
}

const LeftRotateOutUp = {
	...LeftRotateOutDown,
	transformRotateRadians: {
	  from: {x: 0, y: 0, z: 0, w: 1},
	  to: {x: 0, y: 0, z: 1, w: 0.5},
	  min: 0,
	  max: 1,
	  type: 'linear',
	  extrapolate: true
	},
}

const LeftRotateYIn = {
	...RightRotateInDown,
	transformRotateRadians: {
	  from: {x: 0, y: -0.8, z: 0, w: 1},
	  to: {x: 0, y: 0, z: 0, w: 1},
	  min: 0,
	  max: 1,
	  type: 'linear',
	  extrapolate: true
	},
}

const RightRotateYOut = {
	...LeftRotateOutDown,
	transformRotateRadians: {
	  from: {x: 0, y: 0, z: 0, w: 1},
	  to: {x: 0, y: -0.8, z: 0, w: 1},
	  min: 0,
	  max: 1,
	  type: 'linear',
	  extrapolate: true
	},
}

const LeftRotateXIn = {
	...RightRotateInDown,
	transformRotateRadians: {
	  from: {x: -1, y: 0, z: 0, w: 1},
	  to: {x: 0, y: 0, z: 0, w: 1},
	  min: 0,
	  max: 1,
	  type: 'linear',
	  extrapolate: true
	},
}

const RightRotateXOut = {
	...LeftRotateOutDown,
	transformRotateRadians: {
	  from: {x: 0, y: 0, z: 0, w: 1},
	  to: {x: -1, y: 0, z: 0, w: 1},
	  min: 0,
	  max: 1,
	  type: 'linear',
	  extrapolate: true
	},
}

// 中间进入退出
const CenterScaleIn = {
	opacity:{
		from:0,
		to:1,
		min:0,
		max:1,
		type:"linear"
	},
	transformScale:{
		from:{x:0.4,y:0.4,z:0.4},
		to:{x:1,y:1,z:1},
		min:0,
		max:1,
		type:"linear",
		extrapolate:true
	},
}

const CenterScaleOut = {
	opacity:{
		from:1,
		to:0,
		min:0,
		max:1,
		type:"linear"
	},
	transformScale:{
		from:{x:1,y:1,z:1},
		to:{x:0.4,y:0.4,z:0.4},
		min:0,
		max:1,
		type:"linear",
		extrapolate:true
	},
}

// 从右边弹出,左边退出
function AnimationScaleInRight(init){
	let buildStyleInterpolator = init;
	return Object.assign({},{
		...NavigatorSceneConfigs.PushFromRight,
		animationInterpolators:{
			into:buildStyleInterpolator({
				...CenterScaleRightIn
			}),
			out:buildStyleInterpolator({
				...CenterScaleLeftOut
			})
		}
	});
}
// const AnimationScaleInRight = Object.assign({},{
// 	...NavigatorSceneConfigs.PushFromRight,
// 	animationInterpolators:{
// 		into:buildStyleInterpolator({
// 			...CenterScaleRightIn
// 		}),
// 		out:buildStyleInterpolator({
// 			...CenterScaleLeftOut
// 		})
// 	}
// });

// 从右下角弹出,左下角退出
function AnimationScaleInRightDown(init){
	let buildStyleInterpolator = init;
	return Object.assign({},{
		...NavigatorSceneConfigs.PushFromRight,
		animationInterpolators:{
			into:buildStyleInterpolator({
				...DownScaleIn
			}),
			out:buildStyleInterpolator({
				...DownScaleOut
			})
		}
	});
}
// const AnimationScaleInRightDown = Object.assign({},{
// 	...NavigatorSceneConfigs.PushFromRight,
// 	animationInterpolators:{
// 		into:buildStyleInterpolator({
// 			...DownScaleIn
// 		}),
// 		out:buildStyleInterpolator({
// 			...DownScaleOut
// 		})
// 	}
// });

// 从右下角弹出,左下角退出
function AnimationScaleInRightDown(init){
	let buildStyleInterpolator = init;
	return Object.assign({},{
		...NavigatorSceneConfigs.PushFromRight,
		animationInterpolators:{
			into:buildStyleInterpolator({
				...DownScaleIn
			}),
			out:buildStyleInterpolator({
				...DownScaleOut
			})
		}
	});
}
// const AnimationScaleInRightDown = Object.assign({},{
// 	...NavigatorSceneConfigs.PushFromRight,
// 	animationInterpolators:{
// 		into:buildStyleInterpolator({
// 			...DownScaleIn
// 		}),
// 		out:buildStyleInterpolator({
// 			...DownScaleOut
// 		})
// 	}
// });

// 从右上角弹出,左上角退出
function AnimationScaleInRightUp(init){
	let buildStyleInterpolator = init;
	return Object.assign({},{
		...NavigatorSceneConfigs.PushFromRight,
		animationInterpolators:{
			into:buildStyleInterpolator({
				...UpScaleIn
			}),
			out:buildStyleInterpolator({
				...UpScaleOut
			})
		}
	});
}
// const AnimationScaleInRightUp = Object.assign({},{
// 	...NavigatorSceneConfigs.PushFromRight,
// 	animationInterpolators:{
// 		into:buildStyleInterpolator({
// 			...UpScaleIn
// 		}),
// 		out:buildStyleInterpolator({
// 			...UpScaleOut
// 		})
// 	}
// });

// 右边旋转进入,左边旋转退出
function AnimationRotateInLeft(init){
	let buildStyleInterpolator = init;
	return Object.assign({},{
		...NavigatorSceneConfigs.FadeAndroid,
		animationInterpolators:{
			into:buildStyleInterpolator({
				...RightRotateInDown
			}),
			out:buildStyleInterpolator({
				...LeftRotateOutDown
			})
		}
	});
}
// const AnimationRotateInLeft = Object.assign({},{
// 	...NavigatorSceneConfigs.FadeAndroid,
// 	animationInterpolators:{
// 		into:buildStyleInterpolator({
// 			...RightRotateInDown
// 		}),
// 		out:buildStyleInterpolator({
// 			...LeftRotateOutDown
// 		})
// 	}
// });

// 数据
const AnimationData = {
	upleftin:UpLeftIn,
	upleftout:UpLeftOut,
	uprightin:UpRightIn,
	uprightout:UpRightOut,
	downleftin:DownLeftIn,
	downleftout:DownLeftOut,
	downrightin:DownRightIn,
	downrightout:DownRightOut,
	rightin:CenterScaleRightIn,
	rightout:CenterScaleRightOut,
	leftin:CenterScaleLeftIn,
	leftout:CenterScaleLeftOut,
	rotaterightin:RightRotateInDown,
	rotateleftout:LeftRotateOutDown,
	rotaterightinup:RightRotateInUp,
	rotateleftoutup:LeftRotateOutUp,
	rotateiny:LeftRotateYIn,
	rotateouty:RightRotateYOut,
	rotateinx:LeftRotateXIn,
	rotateoutx:RightRotateXOut,
	centerscalein:CenterScaleIn,
	centerscaleout:CenterScaleOut
}

// 这是自定义动画从哪个角落弹出和哪个角落退出函数
function CheckParams(parms){
	return AnimationData[parms.toLowerCase()];
}

// 定制动画(是上/下,是左/右,是进/出,是否支持手势)
// 第一个参数必须是定义的进入动画,第二个必须是退出的动画
function CustomAnimation(init){
	let buildStyleInterpolator = init;
	return (LeftRightIn,UpDowmOut,Gestures)=>{
		return Object.assign({},
			NavigatorSceneConfigs.FadeAndroid,{
			animationInterpolators:{
				into:buildStyleInterpolator({
					...CheckParams(LeftRightIn)
				}),
				out:buildStyleInterpolator({
					...CheckParams(UpDowmOut)
				})
			},
			gestures:Gestures?Gestures:{
				pop:{
					...BaseLeftToRightGesture,
					direction:"left-to-right",
					fullDistance:Width
				}
			}
		})
	}
}

export default function AnimationInit(init) {
	return {
		AnimationScaleInRight:AnimationScaleInRight(init),
		AnimationScaleInRightDown:AnimationScaleInRightDown(init),
		AnimationScaleInRightUp:AnimationScaleInRightUp(init),
		AnimationRotateInLeft:AnimationRotateInLeft(init),
		CustomAnimation:CustomAnimation(init),
		BaseLeftToRightGesture:BaseLeftToRightGesture
	}
}