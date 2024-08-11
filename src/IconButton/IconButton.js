import React, { useState, useRef, memo, useEffect } from 'react';
import { Pressable, Text, View, Animated } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const IconButton = ({ onPress, title, color, background, rounded, reversed, width, ripple, icon, outlined }) => {
    let buttonStyle = {};
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
            buttonStyle = { backgroundColor: 'white', flexDirection: reversed ? 'row-reverse' : 'row', borderRadius: rounded ? 35 : 5, borderWidth: 3, borderColor: color };
            titleStyle = { color: color };
            iconColor = color;
        }
        else if (background) {
            buttonStyle = { backgroundColor: 'white', flexDirection: reversed ? 'row-reverse' : 'row', borderRadius: rounded ? 35 : 5, borderWidth: 3, borderColor: background };
            titleStyle = { color: background };
            iconColor = background;
        }
        else {
            buttonStyle = { backgroundColor: 'white', flexDirection: reversed ? 'row-reverse' : 'row', borderRadius: rounded ? 35 : 5, borderWidth: 2, borderColor: 'black' };
            titleStyle = { color: 'black' };
            iconColor = 'black';
        }
    }
    else {
        buttonStyle = { backgroundColor: background ? background : 'dodgerblue', flexDirection: reversed ? 'row-reverse' : 'row', borderRadius: rounded ? 35 : 5 };
        titleStyle = { color: color ? color : 'white' };
        iconColor = "white";
    }
    if (width) {
        buttonStyle = { ...buttonStyle, width: width };
    }
    if ((ripple && outlined) || (!ripple)) {
        return (React.createElement(Pressable, { style: [{ padding: 10, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }, buttonStyle], onPress: onPress },
            React.createElement(MaterialCommunityIcons, { name: icon, size: 16, color: iconColor }),
            React.createElement(View, { style: { width: 4 } }),
            React.createElement(Text, { style: titleStyle }, title)));
    }
    else if (ripple && !outlined) {
        return (React.createElement(Pressable, { style: [
                {
                    borderRadius: rounded ? 35 : 5,
                    height: 38,
                    overflow: 'hidden',
                }
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
                        padding: 10,
                        height: 38,
                        justifyContent: 'space-between'
                    }, buttonStyle] },
                React.createElement(View, { style: { pointerEvents: 'none' } },
                    React.createElement(MaterialCommunityIcons, { name: icon, size: 16, color: iconColor })),
                React.createElement(View, { style: [{ width: 4, pointerEvents: 'none' }] }),
                React.createElement(Text, { style: [titleStyle, { pointerEvents: 'none' }] }, title)),
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
