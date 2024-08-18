import React, { useState, useRef, memo, useEffect } from 'react';
import { Pressable, Text, type ViewStyle, type TextStyle, View, type ColorValue, Animated } from 'react-native';
import { BUTTON_DEFAULT_HEIGHT } from '../utils/Constants';
interface ButtonProps {
    mode: 'flat' | 'outlined' | 'text';
    onPress: () => void;
    title: String;
    color?: ColorValue;
    outlineColor?: ColorValue;
    background?: ColorValue;
    rounded?: Boolean;
    ripple?: Boolean;
    rippleColor?: ColorValue;
    containerStyle?: ViewStyle;
}
interface RippleTranslation {
    x: any,
    y: any,
}
const Button: React.FC<ButtonProps> = ({ mode, onPress, title, color, background, rounded, outlineColor, ripple, rippleColor, containerStyle }) => {
    let buttonStyle: ViewStyle = {};
    let titleStyle: TextStyle = {};
    let backgroundStyle: ViewStyle = {};
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
    }, [])
    const [translateValue, setTranslateValue] = useState<RippleTranslation>({ x: 0, y: 0 });
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
        return (
            <Pressable style={[{ borderRadius: rounded ? BUTTON_DEFAULT_HEIGHT : 5, height: BUTTON_DEFAULT_HEIGHT, display: 'flex', alignItems: 'center', justifyContent: 'center' }, buttonStyle, backgroundStyle]} onPress={onPress}>
                <Text style={titleStyle} >{title}</Text>
            </Pressable>
        );
    } else if (ripple) {
        return (
            <Pressable style={
                [
                    {
                        borderRadius: rounded ? BUTTON_DEFAULT_HEIGHT : 5,
                        height: BUTTON_DEFAULT_HEIGHT,
                        overflow: 'hidden',
                        display: 'flex',

                    },
                    buttonStyle,
                    backgroundStyle
                ]}
                onPress={(event) => {
                    onPress();
                    setTranslateValue({ x: event.nativeEvent.locationX, y: event.nativeEvent.locationY })
                    Animated.parallel([
                        Animated.sequence([
                            Animated.timing(
                                ripple_, {
                                toValue: 100,
                                duration: 300,
                                useNativeDriver: true,
                            }
                            ),
                            Animated.timing(
                                ripple_, {
                                toValue: 0,
                                duration: 1,
                                useNativeDriver: true,
                            }
                            ),
                        ])
                    ]).start();
                }}
                onLongPress={(event) => {
                    onPress();
                    setTranslateValue({ x: event.nativeEvent.locationX, y: event.nativeEvent.locationY })
                    Animated.parallel([
                        Animated.sequence([
                            Animated.timing(
                                ripple_, {
                                toValue: 100,
                                duration: 1000,
                                useNativeDriver: true,
                            }
                            ),
                            Animated.timing(
                                ripple_, {
                                toValue: 0,
                                duration: 1,
                                useNativeDriver: true,
                            }
                            ),
                        ])
                    ]).start();
                }}


            >

                <View style={{ pointerEvents: 'none', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Text style={[titleStyle, { pointerEvents: 'none' }]} >{title}</Text></View>
                <Animated.View style={[{
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

                }]}></Animated.View>
            </Pressable>
        )
    } else {
        return (
            <></>
        )
    }

};

export default memo(Button);
