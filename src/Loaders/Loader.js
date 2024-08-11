import React, { useRef, memo } from 'react';
import { View, Animated, Easing } from 'react-native';
import { LOADER_DEFAULT_COLOR, LOADER_HEIGHT } from '../utils/Constants';
const height = LOADER_HEIGHT;
const Loader = ({ name, color, duration }) => {
    const firstCircle = useRef(new Animated.Value(0)).current;
    const secondCircle = useRef(new Animated.Value(0)).current;
    const thirdCircle = useRef(new Animated.Value(0)).current;
    const fourthCircle = useRef(new Animated.Value(0)).current;
    const fifthCircle = useRef(new Animated.Value(0)).current;
    const sixthCircle = useRef(new Animated.Value(0)).current;
    let containerStyle = {};
    let backgroundStyle = {};
    let loaderStyle = {};
    let dotOneStyle = {
        width: 10,
        height: 10,
        backgroundColor: color ? color : LOADER_DEFAULT_COLOR,
        borderRadius: 6
    };
    let dotTwoStyle = {
        width: 10,
        height: 10,
        backgroundColor: color ? color : LOADER_DEFAULT_COLOR,
        borderRadius: 6
    };
    let dotThreeStyle = {
        width: 10,
        height: 10,
        backgroundColor: color ? color : LOADER_DEFAULT_COLOR,
        borderRadius: 6
    };
    let dotFourStyle = {
        width: 10,
        height: 10,
        backgroundColor: color ? color : LOADER_DEFAULT_COLOR,
        borderRadius: 6
    };
    let dotFiveStyle = {
        width: 10,
        height: 10,
        backgroundColor: color ? color : LOADER_DEFAULT_COLOR,
        borderRadius: 6
    };
    let dotSixStyle = {
        width: 10,
        height: 10,
        backgroundColor: color ? color : LOADER_DEFAULT_COLOR,
        borderRadius: 6
    };
    let dotSevenStyle = {
        width: 10,
        height: 10,
        backgroundColor: 'transparent',
        borderRadius: 6
    };
    const rotation = useRef(new Animated.Value(0)).current;
    switch (name) {
        case 'curveSpin':
            containerStyle = {
                ...containerStyle,
                height: 48,
                width: 48,
            };
            backgroundStyle = {
                ...backgroundStyle,
                height: '100%',
                width: '100%',
                borderRadius: height,
                borderWidth: 5,
                backgroundColor: 'transparent',
                borderColor: color ? color : LOADER_DEFAULT_COLOR,
                opacity: 0.4
            };
            loaderStyle = {
                ...loaderStyle,
                position: 'absolute',
                height: '100%',
                width: '100%',
                borderRadius: height,
                borderWidth: 5,
                backgroundColor: 'transparent',
                borderTopColor: color ? color : LOADER_DEFAULT_COLOR,
                borderLeftColor: 'transparent',
                borderRightColor: 'transparent',
                borderBottomColor: 'transparent',
            };
            Animated.loop(Animated.parallel([
                Animated.timing(rotation, {
                    toValue: 360,
                    duration: duration ? duration : 1000,
                    easing: Easing.linear,
                    useNativeDriver: true
                })
            ])).start();
            break;
        case '3Dots':
            containerStyle = {
                ...containerStyle,
                width: 50,
                height: 50,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly'
            };
            Animated.loop(Animated.parallel([
                Animated.timing(firstCircle, {
                    toValue: 100,
                    duration: duration ? duration : 800,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
                Animated.timing(secondCircle, {
                    toValue: 100,
                    duration: duration ? duration : 800,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
                Animated.timing(thirdCircle, {
                    toValue: 100,
                    duration: duration ? duration : 800,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
            ])).start();
            break;
        case '6Dots':
            containerStyle = {
                ...containerStyle,
                width: 100,
                height: 50,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            };
            Animated.loop(Animated.parallel([
                Animated.timing(firstCircle, {
                    toValue: 120,
                    duration: duration ? duration : 2500,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
                Animated.timing(secondCircle, {
                    toValue: 120,
                    duration: duration ? duration : 2500,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
                Animated.timing(thirdCircle, {
                    toValue: 120,
                    duration: duration ? duration : 2500,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
                Animated.timing(fourthCircle, {
                    toValue: 120,
                    duration: duration ? duration : 2500,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
                Animated.timing(fifthCircle, {
                    toValue: 120,
                    duration: duration ? duration : 2500,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
                Animated.timing(sixthCircle, {
                    toValue: 120,
                    duration: duration ? duration : 2500,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
            ])).start();
            break;
        case 'triangle':
            containerStyle = {
                ...containerStyle,
                width: 50,
                height: 45,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
            };
            Animated.loop(Animated.parallel([
                Animated.timing(firstCircle, {
                    toValue: 90,
                    duration: duration ? duration : 2000,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
                Animated.timing(secondCircle, {
                    toValue: 90,
                    duration: duration ? duration : 2000,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
                Animated.timing(thirdCircle, {
                    toValue: 90,
                    duration: duration ? duration : 2000,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
            ])).start();
            break;
        case 'dotGliding':
            containerStyle = {
                ...containerStyle,
                width: 50,
                height: 10,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
            };
            Animated.loop(Animated.parallel([
                Animated.timing(firstCircle, {
                    toValue: 50,
                    duration: duration ? duration : 1000,
                    easing: Easing.linear,
                    useNativeDriver: true
                })
            ])).start();
            break;
        case 'fadingBox':
            containerStyle = {
                ...containerStyle,
                width: 30,
                height: 30,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                borderColor: color ? color : LOADER_DEFAULT_COLOR,
                borderWidth: 5,
                overflow: 'hidden',
            };
            backgroundStyle = {
                ...backgroundStyle,
                height: 30,
                width: 30,
                backgroundColor: color ? color : LOADER_DEFAULT_COLOR,
                borderColor: color ? color : LOADER_DEFAULT_COLOR,
                position: 'absolute',
                left: -5,
                borderWidth: 5
            };
            Animated.loop(Animated.sequence([
                Animated.timing(firstCircle, {
                    toValue: 50,
                    duration: duration ? duration : 300,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
                Animated.timing(secondCircle, {
                    toValue: 50,
                    duration: duration ? duration + 400 : 700,
                    easing: Easing.linear,
                    useNativeDriver: false
                }),
            ])).start();
            break;
        case '4DotSquare':
            containerStyle = {
                ...containerStyle,
                width: 50,
                height: 50,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            };
            dotOneStyle = {
                ...dotOneStyle,
                position: 'absolute'
            };
            dotTwoStyle = {
                ...dotTwoStyle,
                position: 'absolute'
            };
            dotThreeStyle = {
                ...dotThreeStyle,
                position: 'absolute'
            };
            dotFourStyle = {
                ...dotFourStyle,
                position: 'absolute'
            };
            Animated.loop(Animated.parallel([
                Animated.timing(firstCircle, {
                    toValue: 90,
                    duration: duration ? duration : 1400,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
                Animated.timing(secondCircle, {
                    toValue: 90,
                    duration: duration ? duration : 1400,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
                Animated.timing(thirdCircle, {
                    toValue: 90,
                    duration: duration ? duration : 1400,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
                Animated.timing(fourthCircle, {
                    toValue: 90,
                    duration: duration ? duration : 1400,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
            ])).start();
            break;
        case '3DotScale':
            containerStyle = {
                ...containerStyle,
                width: 40,
                height: 10,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            };
            Animated.loop(Animated.parallel([
                Animated.timing(firstCircle, {
                    toValue: 80,
                    duration: duration ? duration : 1000,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
            ])).start();
            break;
        case '3DotBlinking':
            containerStyle = {
                ...containerStyle,
                width: 40,
                height: 10,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            };
            Animated.loop(Animated.parallel([
                Animated.timing(firstCircle, {
                    toValue: 80,
                    duration: duration ? duration : 1500,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
            ])).start();
            break;
        case '3DotSwap':
            containerStyle = {
                ...containerStyle,
                width: 40,
                height: 10,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            };
            Animated.loop(Animated.parallel([
                Animated.timing(firstCircle, {
                    toValue: 40,
                    duration: duration ? duration : 1500,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
            ])).start();
            break;
        case '3DotSway':
            containerStyle = {
                ...containerStyle,
                width: 40,
                height: 10,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            };
            Animated.loop(Animated.parallel([
                Animated.timing(firstCircle, {
                    toValue: 20,
                    duration: duration ? duration : 1000,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
            ])).start();
            break;
        case '3Rings':
            containerStyle = {
                ...containerStyle,
                width: 50,
                height: 14,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            };
            dotOneStyle = {
                ...dotOneStyle,
                width: 14,
                height: 14,
                borderColor: color ? color : LOADER_DEFAULT_COLOR,
                borderRadius: 7,
                backgroundColor: 'transparent'
            };
            dotTwoStyle = {
                ...dotTwoStyle,
                width: 14,
                height: 14,
                borderColor: color ? color : LOADER_DEFAULT_COLOR,
                borderRadius: 7,
                backgroundColor: 'transparent'
            };
            dotThreeStyle = {
                ...dotThreeStyle,
                width: 14,
                height: 14,
                borderColor: color ? color : LOADER_DEFAULT_COLOR,
                borderRadius: 7,
                backgroundColor: 'transparent'
            };
            Animated.loop(Animated.parallel([
                Animated.timing(firstCircle, {
                    toValue: 20,
                    duration: duration ? duration : 1000,
                    easing: Easing.linear,
                    useNativeDriver: false
                }),
                Animated.timing(secondCircle, {
                    delay: 400,
                    toValue: 20,
                    duration: duration ? duration : 1000,
                    easing: Easing.linear,
                    useNativeDriver: false
                }),
                Animated.timing(thirdCircle, {
                    delay: 800,
                    toValue: 20,
                    duration: duration ? duration : 1000,
                    easing: Easing.linear,
                    useNativeDriver: false
                }),
            ])).start();
            break;
        case 'tinyCurve':
            containerStyle = {
                ...containerStyle,
                height: 48,
                width: 48,
                borderRadius: 24,
                backgroundColor: color ? color : LOADER_DEFAULT_COLOR,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            };
            backgroundStyle = {
                ...backgroundStyle,
                position: 'absolute',
                height: 50,
                width: 50,
                borderRadius: 50,
                backgroundColor: 'white',
            };
            Animated.loop(Animated.parallel([
                Animated.timing(rotation, {
                    toValue: 360,
                    duration: duration ? duration : 1000,
                    easing: Easing.linear,
                    useNativeDriver: true
                })
            ])).start();
            break;
        case '2Curves':
            containerStyle = {
                ...containerStyle,
                height: 48,
                width: 48,
            };
            backgroundStyle = {
                ...backgroundStyle,
                height: '100%',
                width: '100%',
                borderRadius: height,
                backgroundColor: 'transparent',
                opacity: 0.4
            };
            loaderStyle = {
                ...loaderStyle,
                position: 'absolute',
                height: '100%',
                width: '100%',
                borderRadius: height,
                borderWidth: 5,
                backgroundColor: 'transparent',
                borderTopColor: color ? color : LOADER_DEFAULT_COLOR,
                borderLeftColor: 'transparent',
                borderRightColor: 'white',
                borderBottomColor: color ? color : LOADER_DEFAULT_COLOR,
            };
            Animated.loop(Animated.parallel([
                Animated.timing(rotation, {
                    toValue: 360,
                    duration: duration ? duration : 1000,
                    easing: Easing.linear,
                    useNativeDriver: true
                })
            ])).start();
            break;
        case '3Quarters':
            containerStyle = {
                ...containerStyle,
                height: 48,
                width: 48,
            };
            backgroundStyle = {
                ...backgroundStyle,
                height: '100%',
                width: '100%',
                borderRadius: height,
                // borderWidth: 5,
                backgroundColor: 'transparent',
                // borderColor: color ? color : LOADER_DEFAULT_COLOR,
                opacity: 0.4
            };
            loaderStyle = {
                ...loaderStyle,
                position: 'absolute',
                height: '100%',
                width: '100%',
                borderRadius: height,
                borderWidth: 5,
                backgroundColor: 'transparent',
                borderTopColor: color ? color : LOADER_DEFAULT_COLOR,
                borderLeftColor: 'transparent',
                borderRightColor: color ? color : LOADER_DEFAULT_COLOR,
                borderBottomColor: color ? color : LOADER_DEFAULT_COLOR,
            };
            Animated.loop(Animated.parallel([
                Animated.timing(rotation, {
                    toValue: 360,
                    duration: duration ? duration : 1000,
                    easing: Easing.linear,
                    useNativeDriver: true
                })
            ])).start();
            break;
        case 'ringExpand':
            containerStyle = {
                ...containerStyle,
                height: 48,
                width: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 24,
                backgroundColor: 'transparent'
            };
            backgroundStyle = {
                ...backgroundStyle,
                height: 36,
                width: 36,
                borderRadius: 48,
                backgroundColor: color ? color : LOADER_DEFAULT_COLOR,
                opacity: 1
            };
            loaderStyle = {
                ...loaderStyle,
                position: 'absolute',
                height: 36,
                width: 36,
                borderRadius: 48,
                backgroundColor: 'white',
            };
            Animated.loop(Animated.parallel([
                Animated.timing(firstCircle, {
                    toValue: 90,
                    duration: duration ? duration : 1000,
                    easing: Easing.linear,
                    useNativeDriver: false
                })
            ])).start();
            break;
        case 'endlessSquares':
            containerStyle = {
                ...containerStyle,
                height: 48,
                width: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent'
            };
            backgroundStyle = {
                ...backgroundStyle,
                height: 36,
                width: 36,
                borderColor: color ? color : LOADER_DEFAULT_COLOR,
                opacity: 1,
                borderWidth: 3
            };
            loaderStyle = {
                ...loaderStyle,
                position: 'absolute',
                height: 36,
                width: 36,
                backgroundColor: 'transparent',
                borderWidth: 3,
                borderColor: color ? color : LOADER_DEFAULT_COLOR,
                opacity: 0.4
            };
            Animated.loop(Animated.parallel([
                Animated.timing(firstCircle, {
                    toValue: 40,
                    duration: duration ? duration : 1000,
                    easing: Easing.linear,
                    useNativeDriver: false
                }),
            ])).start();
            break;
        case 'spinningSquare':
            containerStyle = {
                ...containerStyle,
                height: 48,
                width: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent'
            };
            backgroundStyle = {
                ...backgroundStyle,
                height: 36,
                width: 36,
                backgroundColor: color ? color : LOADER_DEFAULT_COLOR,
                opacity: 1,
            };
            Animated.loop(Animated.parallel([
                Animated.timing(firstCircle, {
                    toValue: 360,
                    duration: duration ? duration : 1500,
                    easing: Easing.linear,
                    useNativeDriver: false
                }),
            ])).start();
            break;
        case '5DotWave':
            containerStyle = {
                ...containerStyle,
                width: 70,
                height: 50,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            };
            Animated.loop(Animated.parallel([
                Animated.timing(firstCircle, {
                    toValue: 120,
                    duration: duration ? duration : 2000,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
                Animated.timing(secondCircle, {
                    toValue: 120,
                    duration: duration ? duration : 2000,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
                Animated.timing(thirdCircle, {
                    toValue: 120,
                    duration: duration ? duration : 2000,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
                Animated.timing(fourthCircle, {
                    toValue: 120,
                    duration: duration ? duration : 2000,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
                Animated.timing(fifthCircle, {
                    toValue: 120,
                    duration: duration ? duration : 2000,
                    easing: Easing.linear,
                    useNativeDriver: true
                }),
            ])).start();
            break;
        default:
            break;
    }
    if (name == 'curveSpin') {
        return (React.createElement(View, { style: [containerStyle] },
            React.createElement(View, { style: [backgroundStyle] }),
            React.createElement(Animated.View, { style: [loaderStyle, {
                        transform: [{
                                rotateZ: rotation.interpolate({
                                    inputRange: Array(2).fill(0).map((_, index) => index * 360),
                                    outputRange: Array(2).fill(0).map((_, index) => index * 360 + 'deg'),
                                })
                            }]
                    }] })));
    }
    else if (name == '3Dots') {
        return (React.createElement(View, { style: [containerStyle] },
            React.createElement(Animated.View, { style: [dotOneStyle, {
                        transform: [{
                                translateY: firstCircle.interpolate({
                                    inputRange: Array(5).fill(0).map((_, index) => index * 25),
                                    outputRange: Array(5).fill(-10).map((_, index) => index % 2 == 0 ? 0 : index === 1 ? -1 * _ : _)
                                })
                            }]
                    }] }),
            React.createElement(Animated.View, { style: [dotTwoStyle, {
                        transform: [{
                                translateY: secondCircle.interpolate({
                                    inputRange: Array(5).fill(0).map((_, index) => index * 25),
                                    outputRange: Array(5).fill(-10).map((_, index) => index % 2 == 0 ? 0 : index === 1 ? _ : -1 * _)
                                })
                            }]
                    }] }),
            React.createElement(Animated.View, { style: [dotThreeStyle, {
                        transform: [{
                                translateY: thirdCircle.interpolate({
                                    inputRange: Array(5).fill(0).map((_, index) => index * 25),
                                    outputRange: Array(5).fill(-10).map((_, index) => index % 2 == 0 ? 0 : index === 1 ? -1 * _ : _)
                                })
                            }]
                    }] })));
    }
    else if (name == '6Dots') {
        return (React.createElement(View, { style: [containerStyle] },
            React.createElement(Animated.View, { style: [dotOneStyle, {
                        transform: [{
                                translateX: firstCircle.interpolate({
                                    inputRange: Array(13).fill(0).map((_, index) => index * 10),
                                    outputRange: Array(13).fill(0).map((_, index) => index < 7 ? index * 15 : (15 * 6) - 15 * (index - 6))
                                })
                            }]
                    }] }),
            React.createElement(Animated.View, { style: [dotTwoStyle, {
                        transform: [{
                                translateY: secondCircle.interpolate({
                                    inputRange: Array(13).fill(0).map((_, index) => index * 10),
                                    outputRange: Array(13).fill(-15).map((_, index) => index == 1 ? _ : index == 11 ? -1 * _ : 0)
                                })
                            }]
                    }] }),
            React.createElement(Animated.View, { style: [dotThreeStyle, {
                        transform: [{
                                translateY: thirdCircle.interpolate({
                                    inputRange: Array(13).fill(0).map((_, index) => index * 10),
                                    outputRange: Array(13).fill(-15).map((_, index) => index == 2 ? _ : index == 10 ? -1 * _ : 0)
                                })
                            }]
                    }] }),
            React.createElement(Animated.View, { style: [dotFourStyle, {
                        transform: [{
                                translateY: fourthCircle.interpolate({
                                    inputRange: Array(13).fill(0).map((_, index) => index * 10),
                                    outputRange: Array(13).fill(-15).map((_, index) => index == 3 ? _ : index == 9 ? -1 * _ : 0)
                                })
                            }]
                    }] }),
            React.createElement(Animated.View, { style: [dotFiveStyle, {
                        transform: [{
                                translateY: fifthCircle.interpolate({
                                    inputRange: Array(13).fill(0).map((_, index) => index * 10),
                                    outputRange: Array(13).fill(-15).map((_, index) => index == 4 ? _ : index == 8 ? -1 * _ : 0)
                                })
                            }]
                    }] }),
            React.createElement(Animated.View, { style: [dotSixStyle, {
                        transform: [{
                                translateY: sixthCircle.interpolate({
                                    inputRange: Array(13).fill(0).map((_, index) => index * 10),
                                    outputRange: Array(13).fill(-15).map((_, index) => index == 5 ? _ : index == 7 ? -1 * _ : 0)
                                })
                            }]
                    }] }),
            React.createElement(Animated.View, { style: [dotSevenStyle, {}] })));
    }
    else if (name == 'triangle') {
        return (React.createElement(View, { style: [containerStyle] },
            React.createElement(Animated.View, { style: [dotOneStyle, {
                        transform: [{
                                translateY: firstCircle.interpolate({
                                    inputRange: Array(4).fill(0).map((_, index) => index * 30),
                                    outputRange: Array(4).fill(-34.64).map((_, index) => index == 2 ? _ : 0)
                                }),
                            }, {
                                translateX: firstCircle.interpolate({
                                    inputRange: Array(4).fill(0).map((_, index) => index * 30),
                                    outputRange: Array(4).fill(-34.64).map((_, index) => index == 0 || index == 3 ? 0 : 40 / index)
                                }),
                            }, {
                                scale: firstCircle.interpolate({
                                    inputRange: Array(7).fill(0).map((_, index) => index * 15),
                                    outputRange: Array(7).fill(1).map((_, index) => index % 2 == 0 ? _ : 0.5)
                                }),
                            },]
                    }] }),
            React.createElement(Animated.View, { style: [dotTwoStyle, {
                        transform: [{
                                translateY: secondCircle.interpolate({
                                    inputRange: Array(4).fill(0).map((_, index) => index * 30),
                                    outputRange: Array(4).fill(-34.64).map((_, index) => index == 0 || index == 3 ? _ : 0)
                                })
                            }, {
                                translateX: secondCircle.interpolate({
                                    inputRange: Array(4).fill(0).map((_, index) => index * 30),
                                    outputRange: Array(4).fill(0).map((_, index) => index == 1 ? -20 : index == 2 ? 20 : 0)
                                })
                            }, {
                                scale: secondCircle.interpolate({
                                    inputRange: Array(7).fill(0).map((_, index) => index * 15),
                                    outputRange: Array(7).fill(1).map((_, index) => index % 2 == 0 ? _ : 0.5)
                                }),
                            }]
                    }] }),
            React.createElement(Animated.View, { style: [dotThreeStyle, {
                        transform: [{
                                translateY: thirdCircle.interpolate({
                                    inputRange: Array(4).fill(0).map((_, index) => index * 30),
                                    outputRange: Array(4).fill(-34.64).map((_, index) => index == 1 ? _ : 0)
                                })
                            }, {
                                translateX: thirdCircle.interpolate({
                                    inputRange: Array(4).fill(0).map((_, index) => index * 30),
                                    outputRange: Array(4).fill(-34.64).map((_, index) => index == 0 || index == 3 ? 0 : -20 * index)
                                })
                            }, {
                                scale: thirdCircle.interpolate({
                                    inputRange: Array(7).fill(0).map((_, index) => index * 15),
                                    outputRange: Array(7).fill(1).map((_, index) => index % 2 == 0 ? _ : 0.5)
                                }),
                            }]
                    }] })));
    }
    else if (name == 'dotGliding') {
        return (React.createElement(View, { style: [containerStyle] },
            React.createElement(Animated.View, { style: [dotOneStyle, {
                        transform: [{
                                translateX: firstCircle.interpolate({
                                    inputRange: Array(11).fill(0).map((_, index) => index * 5),
                                    outputRange: Array(11).fill(0).map((_, index) => index < 3 ? index * 2 : index <= 5 ? 36 + (index - 3) * 2 : index <= 7 ? 36 + (7 - index) * 2 : 4 - (index - 8) * 2)
                                }),
                            }, {
                                scale: firstCircle.interpolate({
                                    inputRange: Array(11).fill(0).map((_, index) => index * 5),
                                    outputRange: Array(11).fill(0.6).map((_, index) => index < 3 ? (12 - (3 * index)) / 10 : index < 6 ? (6 + (index - 3) * 3) / 10 : index < 8 ? (9 - (index - 6) * 3) / 10 : index <= 10 ? (9 + (index - 9) * 3) / 10 : 0.6)
                                }),
                            },]
                    }] })));
    }
    else if (name == 'fadingBox') {
        return (React.createElement(Animated.View, { style: [containerStyle, {
                    transform: [{
                            rotateZ: firstCircle.interpolate({
                                inputRange: Array(2).fill(0).map((_, index) => index * 50),
                                outputRange: Array(2).fill(90).map((_, index) => (_ - (index * 90)) + 'deg')
                            })
                        }]
                }] },
            React.createElement(Animated.View, { style: [backgroundStyle,
                    {
                        transform: [{
                                translateY: secondCircle.interpolate({
                                    inputRange: Array(2).fill(0).map((_, index) => index * 50),
                                    outputRange: Array(2).fill(-30).map((_, index) => (-index * _)),
                                })
                            }]
                    }] })));
    }
    else if (name == '4DotSquare') {
        return (React.createElement(View, { style: [containerStyle] },
            React.createElement(Animated.View, { style: [dotOneStyle, {
                        transform: [{
                                translateY: firstCircle.interpolate({
                                    inputRange: Array(4).fill(0).map((_, index) => index * 30),
                                    outputRange: Array(4).fill(0).map((_, index) => index == 1 ? -20 : 0),
                                }),
                            }, {
                                translateX: firstCircle.interpolate({
                                    inputRange: Array(4).fill(0).map((_, index) => index * 30),
                                    outputRange: Array(4).fill(0).map((_, index) => index == 2 ? -20 : 0),
                                }),
                            }, {
                                scale: firstCircle.interpolate({
                                    inputRange: Array(7).fill(0).map((_, index) => index * 15),
                                    outputRange: Array(7).fill(0).map((_, index) => index % 2 == 0 ? 1.2 : 0.8),
                                }),
                            },]
                    }] }),
            React.createElement(Animated.View, { style: [dotTwoStyle, {
                        transform: [{
                                translateY: secondCircle.interpolate({
                                    inputRange: Array(4).fill(0).map((_, index) => index * 30),
                                    outputRange: Array(4).fill(0).map((_, index) => index == 2 ? 20 : 0),
                                })
                            }, {
                                translateX: secondCircle.interpolate({
                                    inputRange: Array(4).fill(0).map((_, index) => index * 30),
                                    outputRange: Array(4).fill(0).map((_, index) => index == 1 ? -20 : 0),
                                })
                            }, {
                                scale: secondCircle.interpolate({
                                    inputRange: Array(7).fill(0).map((_, index) => index * 15),
                                    outputRange: Array(7).fill(0).map((_, index) => index % 2 == 0 ? 1.2 : 0.8),
                                }),
                            }]
                    }] }),
            React.createElement(Animated.View, { style: [dotThreeStyle, {
                        transform: [{
                                translateY: thirdCircle.interpolate({
                                    inputRange: Array(4).fill(0).map((_, index) => index * 30),
                                    outputRange: Array(4).fill(0).map((_, index) => index == 1 ? 20 : 0),
                                })
                            }, {
                                translateX: thirdCircle.interpolate({
                                    inputRange: Array(4).fill(0).map((_, index) => index * 30),
                                    outputRange: Array(4).fill(0).map((_, index) => index == 2 ? 20 : 0),
                                })
                            }, {
                                scale: thirdCircle.interpolate({
                                    inputRange: Array(7).fill(0).map((_, index) => index * 15),
                                    outputRange: Array(7).fill(0).map((_, index) => index % 2 == 0 ? 1.2 : 0.8),
                                }),
                            }]
                    }] }),
            React.createElement(Animated.View, { style: [dotFourStyle, {
                        transform: [{
                                translateY: thirdCircle.interpolate({
                                    inputRange: Array(4).fill(0).map((_, index) => index * 30),
                                    outputRange: Array(4).fill(0).map((_, index) => index == 2 ? -20 : 0),
                                })
                            }, {
                                translateX: thirdCircle.interpolate({
                                    inputRange: Array(4).fill(0).map((_, index) => index * 30),
                                    outputRange: Array(4).fill(0).map((_, index) => index == 1 ? 20 : 0),
                                })
                            }, {
                                scale: thirdCircle.interpolate({
                                    inputRange: Array(7).fill(0).map((_, index) => index * 15),
                                    outputRange: Array(7).fill(0).map((_, index) => index % 2 == 0 ? 1.2 : 0.8),
                                }),
                            }]
                    }] })));
    }
    else if (name == '3DotScale') {
        return (React.createElement(View, { style: [containerStyle] },
            React.createElement(Animated.View, { style: [dotOneStyle, {
                        transform: [{
                                scale: firstCircle.interpolate({
                                    inputRange: Array(9).fill(0).map((_, index) => index * 10),
                                    outputRange: Array(9).fill(0).map((_, index) => index <= 2 ? 0.5 * index : index == 3 ? 0.5 : 0)
                                })
                            }]
                    }] }),
            React.createElement(Animated.View, { style: [dotTwoStyle, {
                        transform: [{
                                scale: firstCircle.interpolate({
                                    inputRange: Array(9).fill(0).map((_, index) => index * 10),
                                    outputRange: Array(9).fill(0).map((_, index) => index <= 4 && index >= 3 ? 0.5 + 0.5 * (index - 3) : index == 5 ? 0.5 : 0)
                                })
                            }]
                    }] }),
            React.createElement(Animated.View, { style: [dotThreeStyle, {
                        transform: [{
                                scale: firstCircle.interpolate({
                                    inputRange: Array(9).fill(0).map((_, index) => index * 10),
                                    outputRange: Array(9).fill(0).map((_, index) => index <= 6 && index >= 5 ? 0.5 + 0.5 * (index - 5) : index == 7 ? 0.5 : 0)
                                })
                            }]
                    }] })));
    }
    else if (name == '3DotBlinking') {
        return (React.createElement(View, { style: [containerStyle] },
            React.createElement(Animated.View, { style: [dotOneStyle, {
                        opacity: firstCircle.interpolate({
                            inputRange: Array(9).fill(0).map((_, index) => index * 10),
                            outputRange: Array(9).fill(0.25).map((_, index) => index < 5 ? _ * index : 0.75 - (index - 5) * 0.25)
                        })
                    }] }),
            React.createElement(Animated.View, { style: [dotTwoStyle, {
                        opacity: firstCircle.interpolate({
                            inputRange: Array(9).fill(0).map((_, index) => index * 10),
                            outputRange: Array(9).fill(0.25).map((_, index) => index < 5 ? _ * index : 0.75 - (index - 5) * 0.25)
                        })
                    }] }),
            React.createElement(Animated.View, { style: [dotThreeStyle, {
                        opacity: firstCircle.interpolate({
                            inputRange: Array(9).fill(0).map((_, index) => index * 10),
                            outputRange: Array(9).fill(0.25).map((_, index) => index < 5 ? _ * index : 0.75 - (index - 5) * 0.25)
                        })
                    }] })));
    }
    else if (name == '3DotSwap') {
        return (React.createElement(View, { style: [containerStyle] },
            React.createElement(Animated.View, { style: [dotOneStyle, {
                        opacity: firstCircle.interpolate({
                            inputRange: Array(5).fill(0).map((_, index) => index * 10),
                            outputRange: Array(5).fill(0.5).map((_, index) => index == 0 || index == 4 ? 1 : 0.5),
                        })
                    }] }),
            React.createElement(Animated.View, { style: [dotTwoStyle, {
                        opacity: firstCircle.interpolate({
                            inputRange: Array(5).fill(0).map((_, index) => index * 10),
                            outputRange: Array(5).fill(0.5).map((_, index) => index % 2 == 0 ? 0.5 : 1),
                        })
                    }] }),
            React.createElement(Animated.View, { style: [dotThreeStyle, {
                        opacity: firstCircle.interpolate({
                            inputRange: Array(5).fill(0).map((_, index) => index * 10),
                            outputRange: Array(5).fill(0.5).map((_, index) => index == 2 || index == 3 ? 1 : 0.5),
                        })
                    }] })));
    }
    else if (name == '3DotSway') {
        return (React.createElement(View, { style: [containerStyle] },
            React.createElement(Animated.View, { style: [dotOneStyle, {
                        transform: [{
                                translateX: firstCircle.interpolate({
                                    inputRange: Array(3).fill(0).map((_, index) => index * 10),
                                    outputRange: Array(3).fill(0).map((_, index) => index % 2 == 1 ? 15 : 0),
                                })
                            }],
                        opacity: firstCircle.interpolate({
                            inputRange: Array(3).fill(0).map((_, index) => index * 10),
                            outputRange: Array(3).fill(0).map((_, index) => index % 2 == 0 ? 1 : 0),
                        })
                    }] }),
            React.createElement(Animated.View, { style: [dotTwoStyle, {}] }),
            React.createElement(Animated.View, { style: [dotThreeStyle, {
                        transform: [{
                                translateX: firstCircle.interpolate({
                                    inputRange: Array(3).fill(0).map((_, index) => index * 10),
                                    outputRange: Array(3).fill(0).map((_, index) => index % 2 == 1 ? -15 : 0),
                                })
                            }], opacity: firstCircle.interpolate({
                            inputRange: Array(3).fill(0).map((_, index) => index * 10),
                            outputRange: Array(3).fill(0).map((_, index) => index % 2 == 0 ? 1 : 0),
                        })
                    }] })));
    }
    else if (name == '3Rings') {
        return (React.createElement(View, { style: [containerStyle] },
            React.createElement(Animated.View, { style: [dotOneStyle, {
                        borderWidth: firstCircle.interpolate({
                            inputRange: Array(5).fill(0).map((_, index) => index * 5),
                            outputRange: Array(5).fill(0).map((_, index) => index <= 2 ? 2 + (index) * 2 : 6 - (index - 2) * 2)
                        })
                    }] }),
            React.createElement(Animated.View, { style: [dotTwoStyle, {
                        borderWidth: secondCircle.interpolate({
                            inputRange: Array(5).fill(0).map((_, index) => index * 5),
                            outputRange: Array(5).fill(0).map((_, index) => index <= 2 ? 2 + (index) * 2 : 6 - (index - 2) * 2)
                        })
                    }] }),
            React.createElement(Animated.View, { style: [dotThreeStyle, {
                        borderWidth: thirdCircle.interpolate({
                            inputRange: Array(5).fill(0).map((_, index) => index * 5),
                            outputRange: Array(5).fill(0).map((_, index) => index <= 2 ? 2 + (index) * 2 : 6 - (index - 2) * 2)
                        })
                    }] })));
    }
    else if (name == 'tinyCurve') {
        return (React.createElement(View, { style: [containerStyle] },
            React.createElement(Animated.View, { style: [backgroundStyle, {
                        transform: [{
                                rotate: rotation.interpolate({
                                    inputRange: Array(2).fill(0).map((_, index) => index * 360),
                                    outputRange: Array(2).fill(0).map((_, index) => index * 360 + 'deg'),
                                })
                            }, { translateX: 2 }]
                    }] })));
    }
    else if (name == '2Curves') {
        return (React.createElement(View, { style: [containerStyle] },
            React.createElement(View, { style: [backgroundStyle] }),
            React.createElement(Animated.View, { style: [loaderStyle, {
                        transform: [{
                                rotateZ: rotation.interpolate({
                                    inputRange: Array(2).fill(0).map((_, index) => index * 360),
                                    outputRange: Array(2).fill(0).map((_, index) => index * 360 + 'deg'),
                                })
                            }]
                    }] })));
    }
    else if (name == '3Quarters') {
        return (React.createElement(View, { style: [containerStyle] },
            React.createElement(View, { style: [backgroundStyle] }),
            React.createElement(Animated.View, { style: [loaderStyle, {
                        transform: [{
                                rotateZ: rotation.interpolate({
                                    inputRange: Array(2).fill(0).map((_, index) => index * 360),
                                    outputRange: Array(2).fill(0).map((_, index) => index * 360 + 'deg'),
                                })
                            }]
                    }] })));
    }
    else if (name == 'ringExpand') {
        return (React.createElement(View, { style: [containerStyle] },
            React.createElement(Animated.View, { style: [backgroundStyle, {
                        height: firstCircle.interpolate({
                            inputRange: Array(10).fill(0).map((_, index) => index * 10),
                            outputRange: Array(10).fill(48).map((_, index) => index <= 4 ? 36 + (index) * 3 : 48),
                        }),
                        width: firstCircle.interpolate({
                            inputRange: Array(10).fill(0).map((_, index) => index * 10),
                            outputRange: Array(10).fill(48).map((_, index) => index <= 4 ? 36 + (index) * 3 : 48),
                        }),
                        opacity: firstCircle.interpolate({
                            inputRange: Array(2).fill(0).map((_, index) => 50 + (index) * 40),
                            outputRange: Array(2).fill(1).map((_, index) => _ - (index) * 1),
                        })
                    }] }),
            React.createElement(Animated.View, { style: [loaderStyle, {
                        height: firstCircle.interpolate({
                            inputRange: Array(10).fill(0).map((_, index) => index * 10),
                            outputRange: Array(10).fill(36).map((_, index) => index >= 5 ? _ + (index - 5) * 3 : 36),
                        }),
                        width: firstCircle.interpolate({
                            inputRange: Array(10).fill(0).map((_, index) => index * 10),
                            outputRange: Array(10).fill(36).map((_, index) => index >= 5 ? _ + (index - 5) * 3 : 36),
                        })
                    }] })));
    }
    else if (name == 'endlessSquares') {
        return (React.createElement(View, { style: [containerStyle] },
            React.createElement(Animated.View, { style: [backgroundStyle, {
                        transform: [{
                                scale: firstCircle.interpolate({
                                    inputRange: Array(5).fill(0).map((_, index) => index * 10),
                                    outputRange: Array(5).fill(1).map((_, index) => index < 2 ? _ * index - (0.5 * index) : 1)
                                }),
                            }]
                    }] }),
            React.createElement(Animated.View, { style: [loaderStyle, {
                        transform: [{
                                scale: firstCircle.interpolate({
                                    inputRange: Array(5).fill(0).map((_, index) => index * 10),
                                    outputRange: Array(5).fill(0).map((_, index) => index >= 2 ? _ + (index - 2) * 0.5 : 0)
                                }),
                            }]
                    }] })));
    }
    else if (name == 'spinningSquare') {
        return (React.createElement(View, { style: [containerStyle] },
            React.createElement(Animated.View, { style: [backgroundStyle, {
                        transform: [{
                                scale: firstCircle.interpolate({
                                    inputRange: Array(3).fill(0).map((_, index) => index * 180),
                                    outputRange: Array(3).fill(0).map((_, index) => index % 2 == 1 ? 0.8 : 0),
                                })
                            }, {
                                rotate: firstCircle.interpolate({
                                    inputRange: Array(3).fill(0).map((_, index) => index * 180),
                                    outputRange: Array(3).fill(0).map((_, index) => index % 2 == 1 ? '450deg' : '0deg'),
                                })
                            }]
                    }] })));
    }
    else if (name == '5DotWave') {
        return (React.createElement(View, { style: [containerStyle] },
            React.createElement(Animated.View, { style: [dotOneStyle, {
                        transform: [{
                                translateY: firstCircle.interpolate({
                                    inputRange: Array(13).fill(0).map((_, index) => index * 10),
                                    outputRange: Array(13).fill(-10).map((_, index) => index == 1 ? _ : index == 11 ? -1 * _ : 0)
                                })
                            }]
                    }] }),
            React.createElement(Animated.View, { style: [dotTwoStyle, {
                        transform: [{
                                translateY: secondCircle.interpolate({
                                    inputRange: Array(13).fill(0).map((_, index) => index * 10),
                                    outputRange: Array(13).fill(-10).map((_, index) => index == 2 ? _ : index == 10 ? -1 * _ : 0)
                                })
                            }]
                    }] }),
            React.createElement(Animated.View, { style: [dotThreeStyle, {
                        transform: [{
                                translateY: thirdCircle.interpolate({
                                    inputRange: Array(13).fill(0).map((_, index) => index * 10),
                                    outputRange: Array(13).fill(-10).map((_, index) => index == 3 ? _ : index == 9 ? -1 * _ : 0)
                                })
                            }]
                    }] }),
            React.createElement(Animated.View, { style: [dotFourStyle, {
                        transform: [{
                                translateY: fourthCircle.interpolate({
                                    inputRange: Array(13).fill(0).map((_, index) => index * 10),
                                    outputRange: Array(13).fill(-10).map((_, index) => index == 4 ? _ : index == 8 ? -1 * _ : 0)
                                })
                            }]
                    }] }),
            React.createElement(Animated.View, { style: [dotFiveStyle, {
                        transform: [{
                                translateY: fifthCircle.interpolate({
                                    inputRange: Array(13).fill(0).map((_, index) => index * 10),
                                    outputRange: Array(13).fill(-10).map((_, index) => index == 5 ? _ : index == 7 ? -1 * _ : 0)
                                })
                            }]
                    }] })));
    }
    else {
        return (React.createElement(React.Fragment, null));
    }
};
export default memo(Loader);
