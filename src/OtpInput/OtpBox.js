import React, { memo, useRef } from "react";
import { Animated, Text, View } from "react-native";
let otpBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};
const OtpBox = ({ digit, index, length, active, boxStyle }) => {
    const cursorOpacity = useRef(new Animated.Value(0)).current;
    Animated.parallel([
        Animated.loop(Animated.parallel([
            Animated.timing(cursorOpacity, {
                toValue: 2,
                duration: 800,
                useNativeDriver: true
            })
        ]))
    ]).start();
    if (boxStyle) {
        otpBoxStyles = { ...otpBoxStyles, ...boxStyle };
    }
    return (React.createElement(View, { key: index, style: [{ height: 50, width: 50, borderColor: 'black', borderWidth: 2, borderRadius: 9, marginRight: (index == (length - 1)) ? 0 : 4 }, otpBoxStyles] }, active ? React.createElement(Animated.Text, { style: {
            fontSize: 30, opacity: cursorOpacity.interpolate({
                inputRange: Array(3).fill(0).map((_, index) => index * 1),
                outputRange: Array(3).fill(0).map((_, index) => index % 2 == 1 ? 1 : 0),
            })
        } }, "|") : React.createElement(Text, { style: { fontSize: 23 } }, digit)));
};
export default memo(OtpBox);
