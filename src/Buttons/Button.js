import React, { useState, useRef, memo, useEffect } from 'react';
import { Pressable, Text, View, Animated } from 'react-native';
import { BUTTON_DEFAULT_HEIGHT } from '../utils/Constants';
const Button = ({ mode, onPress, title, color, background, rounded, outlineColor, ripple, rippleColor, containerStyle }) => {
    let buttonStyle = {};
    let titleStyle = {};
    let backgroundStyle = {};
    const ripple_ = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        if (mode == undefined) {
            console.error('mode must be provided');
            return;
        }
        if (onPress == undefined) {
            console.error('onPress function must be provided');
            return;
        }
        if (title == undefined) {
            console.error('title must be provided');
            return;
        }
        if (typeof mode != 'string') {
            console.error('mode should be a string');
            return;
        }
        if (typeof onPress != 'function') {
            console.error('onPress should be a function');
            return;
        }
        if (typeof title != 'string') {
            console.error('title should be a string');
            return;
        }
    }, []);
    const [translateValue, setTranslateValue] = useState({ x: 0, y: 0 });
    switch (mode) {
        case 'flat':
            buttonStyle = {
                ...buttonStyle, backgroundColor: background ? background : 'dodgerblue', borderWidth: 2, borderColor: outlineColor ? outlineColor : background ? background : 'dodgerblue',
                paddingLeft: 10, paddingRight: 10
            };
            titleStyle = { color: color ? color : 'white', fontWeight: '700' };
            break;
        case 'outlined':
            buttonStyle = { ...buttonStyle, borderWidth: 3, borderColor: outlineColor ? outlineColor : 'royalblue', backgroundColor: background ? background : 'dodgerblue' };
            titleStyle = { color: color ? color : 'white', fontWeight: '700' };
            break;
        case 'text':
            titleStyle = { color: color ? color : 'white', fontWeight: '700' };
            break;
        default:
            buttonStyle = { backgroundColor: 'dodgerblue' };
            break;
    }
    if (containerStyle) {
        backgroundStyle = containerStyle;
    }
    if (!ripple) {
        return (React.createElement(Pressable, { style: [{ borderRadius: rounded ? BUTTON_DEFAULT_HEIGHT : 5, height: BUTTON_DEFAULT_HEIGHT, display: 'flex', alignItems: 'center', justifyContent: 'center' }, buttonStyle, backgroundStyle], onPress: onPress },
            React.createElement(Text, { style: titleStyle }, title)));
    }
    else if (ripple) {
        return (React.createElement(Pressable, { style: [
                {
                    borderRadius: rounded ? BUTTON_DEFAULT_HEIGHT : 5,
                    height: BUTTON_DEFAULT_HEIGHT,
                    overflow: 'hidden',
                    display: 'flex',
                },
                buttonStyle,
                backgroundStyle
            ], onPress: (event) => {
                onPress();
                setTranslateValue({ x: event.nativeEvent.locationX, y: event.nativeEvent.locationY });
                Animated.parallel([
                    Animated.sequence([
                        Animated.timing(ripple_, {
                            toValue: 100,
                            duration: 300,
                            useNativeDriver: true,
                        }),
                        Animated.timing(ripple_, {
                            toValue: 0,
                            duration: 1,
                            useNativeDriver: true,
                        }),
                    ])
                ]).start();
            }, onLongPress: (event) => {
                onPress();
                setTranslateValue({ x: event.nativeEvent.locationX, y: event.nativeEvent.locationY });
                Animated.parallel([
                    Animated.sequence([
                        Animated.timing(ripple_, {
                            toValue: 100,
                            duration: 1000,
                            useNativeDriver: true,
                        }),
                        Animated.timing(ripple_, {
                            toValue: 0,
                            duration: 1,
                            useNativeDriver: true,
                        }),
                    ])
                ]).start();
            } },
            React.createElement(View, { style: { pointerEvents: 'none', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' } },
                React.createElement(Text, { style: [titleStyle, { pointerEvents: 'none' }] }, title)),
            React.createElement(Animated.View, { style: [{
                        width: 1,
                        height: 1,
                        borderRadius: 1,
                        backgroundColor: rippleColor ? rippleColor : 'white',
                        position: 'absolute',
                        transform: [
                            { translateX: translateValue.x },
                            { translateY: translateValue.y },
                            {
                                scale: ripple_.interpolate({
                                    inputRange: [0, 100],
                                    outputRange: [0, 150],
                                })
                            },
                        ],
                        pointerEvents: 'none',
                        opacity: ripple_.interpolate({
                            inputRange: [0, 100],
                            outputRange: [0.7, 0],
                        }),
                    }] })));
    }
    else {
        return (React.createElement(React.Fragment, null));
    }
};
export default memo(Button);
