import React, { useState, useRef, memo, useEffect } from 'react';
import { Pressable, Text, View, Animated } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BUTTON_DEFAULT_HEIGHT } from '../utils/Constants';
const IconButton = ({ onPress, title, color, background, rounded, reversed, ripple, icon, outlined, containerStyle }) => {
    let buttonStyle = {};
    let backgroundStyle = {};
    let titleStyle = {};
    let iconColor;
    const rippleValue = useRef(new Animated.Value(0)).current;
    const [translateValue, setTranslateValue] = useState({ x: 0, y: 0 });
    useEffect(() => {
        if (icon == undefined) {
            console.error('icon must be provided');
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
        if (typeof icon != 'string') {
            console.error('icon should be a string');
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
    if (outlined) {
        if (color) {
            buttonStyle = { backgroundColor: 'white', flexDirection: reversed ? 'row-reverse' : 'row', borderRadius: rounded ? BUTTON_DEFAULT_HEIGHT : 5, borderWidth: 3, borderColor: color };
            titleStyle = { color: color };
            iconColor = color;
        }
        else if (background) {
            buttonStyle = { backgroundColor: 'white', flexDirection: reversed ? 'row-reverse' : 'row', borderRadius: rounded ? BUTTON_DEFAULT_HEIGHT : 5, borderWidth: 3, borderColor: background };
            titleStyle = { color: background };
            iconColor = background;
        }
        else {
            buttonStyle = { backgroundColor: 'white', flexDirection: reversed ? 'row-reverse' : 'row', borderRadius: rounded ? BUTTON_DEFAULT_HEIGHT : 5, borderWidth: 2, borderColor: 'black' };
            titleStyle = { color: 'black' };
            iconColor = 'black';
        }
    }
    else {
        buttonStyle = { backgroundColor: background ? background : 'dodgerblue', flexDirection: reversed ? 'row-reverse' : 'row', borderRadius: rounded ? BUTTON_DEFAULT_HEIGHT : 5 };
        titleStyle = { color: color ? color : 'white' };
        iconColor = "white";
    }
    if (containerStyle) {
        backgroundStyle = containerStyle;
    }
    if ((ripple && outlined) || (!ripple)) {
        return (React.createElement(Pressable, { style: [{ paddingLeft: 10, paddingRight: 10, paddingTop: 0, paddingBottom: 0, height: BUTTON_DEFAULT_HEIGHT, display: 'flex', alignItems: 'center', justifyContent: 'center' }, buttonStyle, backgroundStyle], onPress: onPress },
            React.createElement(MaterialCommunityIcons, { name: icon, size: 20, color: iconColor }),
            React.createElement(View, { style: { width: 7 } }),
            React.createElement(View, { style: { display: 'flex', alignItems: 'center', justifyContent: 'center' } },
                React.createElement(Text, { style: [titleStyle, { fontWeight: '700' }] }, title))));
    }
    else if (ripple && !outlined) {
        return (React.createElement(Pressable, { style: [
                {
                    borderRadius: rounded ? BUTTON_DEFAULT_HEIGHT : 5,
                    height: BUTTON_DEFAULT_HEIGHT,
                    overflow: 'hidden',
                },
                backgroundStyle
            ], onPress: (event) => {
                onPress();
                setTranslateValue({ x: event.nativeEvent.locationX, y: event.nativeEvent.locationY });
                Animated.parallel([
                    Animated.sequence([
                        Animated.timing(rippleValue, {
                            toValue: 100,
                            duration: 300,
                            useNativeDriver: true,
                        }),
                        Animated.timing(rippleValue, {
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
                        Animated.timing(rippleValue, {
                            toValue: 100,
                            duration: 1000,
                            useNativeDriver: true,
                        }),
                        Animated.timing(rippleValue, {
                            toValue: 0,
                            duration: 1,
                            useNativeDriver: true,
                        }),
                    ])
                ]).start();
            } },
            React.createElement(View, { style: [{
                        pointerEvents: 'none',
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 0,
                        paddingBottom: 0,
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }, buttonStyle] },
                React.createElement(View, { style: { pointerEvents: 'none' } },
                    React.createElement(MaterialCommunityIcons, { name: icon, size: 20, color: iconColor })),
                React.createElement(View, { style: [{ width: 7, pointerEvents: 'none' }] }),
                React.createElement(Text, { style: [titleStyle, { pointerEvents: 'none', fontWeight: '700' }] }, title)),
            React.createElement(Animated.View, { style: [{
                        width: 1,
                        height: 1,
                        borderRadius: 1,
                        backgroundColor: 'white',
                        position: 'absolute',
                        transform: [
                            { translateX: translateValue.x },
                            { translateY: translateValue.y },
                            {
                                scale: rippleValue.interpolate({
                                    inputRange: [0, 100],
                                    outputRange: [0, 100],
                                })
                            },
                        ],
                        pointerEvents: 'none',
                        opacity: rippleValue.interpolate({
                            inputRange: [0, 100],
                            outputRange: [0.7, 0],
                        }),
                    }] })));
    }
    else {
        return (React.createElement(React.Fragment, null));
    }
};
export default memo(IconButton);
