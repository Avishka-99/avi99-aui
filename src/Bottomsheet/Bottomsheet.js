import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { TouchableWithoutFeedback, Dimensions, StyleSheet, Animated, View, StatusBar } from "react-native";
const Bottomsheet = forwardRef(({ children, height, close, backdropColor }, ref) => {
    useEffect(() => {
        if (height == undefined) {
            console.error('height must be provided');
            return;
        }
        if (children == undefined) {
            console.error('childern must be provided');
            return;
        }
        if (close == undefined) {
            console.error('close function must be provided');
            return;
        }
        if (ref == undefined) {
            console.error('reference must be provided');
            return;
        }
        if (typeof close != 'function') {
            console.error('close shound be a function');
            return;
        }
    }, []);
    const screenHeight = Dimensions.get('window').height;
    const [open, setOpen] = useState(false);
    const style = StyleSheet.create({
        container: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'green',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            zIndex: 1000,
            width: Dimensions.get('screen').width,
            height: height,
        }
    });
    const translateY = useRef(new Animated.Value(0)).current;
    const opacity = useRef(new Animated.Value(0)).current;
    useImperativeHandle(ref, () => ({
        open: () => {
            setOpen(true);
            Animated.parallel([
                Animated.timing(translateY, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(opacity, {
                    toValue: 0.7,
                    duration: 300,
                    useNativeDriver: true,
                })
            ]).start();
        },
        close: () => {
            Animated.parallel([
                Animated.timing(translateY, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                })
            ]).start(() => {
                setOpen(false);
            });
        }
    }));
    return (React.createElement(React.Fragment, null,
        open && React.createElement(TouchableWithoutFeedback, { onPress: close },
            React.createElement(Animated.View, { style: { height: Dimensions.get('screen').height, backgroundColor: backdropColor ? backdropColor : 'black', width: '100%', position: 'absolute', opacity: opacity, paddingTop: StatusBar.currentHeight, zIndex: 999 } })),
        React.createElement(Animated.View, { style: [style.container,
                { transform: [{ translateY: translateY.interpolate({ inputRange: [0, 1], outputRange: [screenHeight, 0] }) }] },
            ] },
            React.createElement(View, { style: { height: '100%', width: '100%', backgroundColor: 'grey' } }, children))));
});
export default Bottomsheet;
