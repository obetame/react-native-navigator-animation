# react-native-navigator-animation

Custom page switch animation.

![](https://github.com/zhouyuexie/react-native-navigator-animation/blob/master/animation.gif)

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
5. `SwitchMain`(switch tab no animation)

Custom animation API:

5. `CustomAnimation("actionIn","actionOut",[gesture Object],[base Object])`

Optional value of the first parameter:

```js
// In was parameter "actionIn"
// Out was parameter "actionOut"

//{first parameter ,Second parameter}
{UpLeftIn,UpLeftOut},
{UpRightIn,UpRightOut},
{DownLeftIn,DownLeftOut},
{DownRightIn,DownRightOut},
{RightIn,RightOut},
{LeftIn,LeftOut},
{RotateRightIn,RotateLeftOut},
{RotateRightinUp,RotateLeftoutUp},
{RotateiInY,RotateOutY},
{RotateInX,RotateOutX},
{CenterScaleIn,CenterScaleOut}
```

You can use it like this:

```js
CustomAnimation("UpLeftIn","UpLeftOut");
// Or mix
CustomAnimation("UpRightIn","UpLeftOut");
```

The third parameter is `gesture`:

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

The four parameter is `base`:

```js
{
  // Rebound spring parameters when transitioning FROM this scene
  springFriction: 26,
  springTension: 200,

  // Velocity to start at when transitioning without gesture
  defaultTransitionVelocity: 1.5,
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
import AnimationInit from "react-native-navigator-animation";
let buildStyleInterpolator = require('buildStyleInterpolator');
let NavAnimate = AnimationInit(buildStyleInterpolator);

NavAnimate.CustomAnimation("rightin","leftout",{
  ...BaseLeftToRightGesture,
  jumpTo:{
    // write you gesture
  }
},{
  springFriction: 50,
  springTension: 600,
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

## UpdateLog

* 1.2.0:`CustomAnimation` accept four parameters, the fourth argument is an object that contains the control animation parameters