# react-native-navigator-animation

Custom page switch animation.

## Install

```shell
npm install react-native-navigator-animation --save
```

## Use

```js
import AnimationInit from "react-native-navigator-animation";
let buildStyleInterpolator = require('buildStyleInterpolator');
let NavAnimate = AnimationInit(buildStyleInterpolator);

<Navigator 
  initialRoute={Routes}
  configureScene={(route)=>{
    // here
    return NavAnimate.AnimationScaleInRightDown;
  }}
  renderScene={(route,navigator)=>{
    let Component = route.component;
    return <Component {...route.params} RootNavigator={navigator} />
  }}/>
```

## Document

Animation has been defined:

1. `AnimationScaleInRight`
2. `AnimationScaleInRightDown`
3. `AnimationScaleInRightUp`
4. `AnimationRotateInLeft`

Custom animation API:

5. `CustomAnimation("actionIn","actionOut",[gesture Object])`

Optional value of the first parameter:

```js
// In was parameter "actionIn"
// Out was parameter "actionOut"

UpLeftIn,//first parameter optional
UpLeftOut,//Second parameter optional
UpRightIn,
UpRightOut,
DownLeftIn,
DownLeftOut,
DownRightIn,
DownRightOut,
RightIn,
RightOut,
LeftIn,
LeftOut,
RightRotateIn,
LeftRotateOut,
RightRotateInUp,
LeftRotateOutUp,
LeftRotateY,//In
RightRotateY,//Out
LeftRotateX,//In
RightRotateX,//Out
CenterScaleIn,
CenterScaleOut
```

You can use it like this:

```js
CustomAnimation("rightin","leftout");
```

The third parameter is gesture:

```js
{
  pop:{
    ...BaseLeftToRightGesture,
    direction:"left-to-right",
    fullDistance:Width
  },
  jumpForward:null,
  jumpBack:null,
  jumpTo:null
}
```

The `BaseLeftToRightGesture` Default value:

```js
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
```

You can use like this:

```js
const {BaseLeftToRightGesture,CustomAnimation} from "react-native-navigator-animation";

CustomAnimation("rightin","leftout",{
  ...BaseLeftToRightGesture,
  jumpTo:{
    // write you gesture
  }
})
```

## Example

1. step 1

`git clone https://github.com/zhouyuexie/react-native-navigator-animation.git`

2. step 2

`cd ./react-native-navigator-animation/example`

3. step 3

`npm install`

4. step 4

`react-native run-ios`