import React, { memo, useEffect, useRef, useState } from 'react';
import { Pressable, View, TextInput } from 'react-native';
import OtpBox from './OtpBox';
const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 60,
    alignItems: 'center',
    backgroundColor: 'red'
};
const otpContainer = {
    height: 60,
    width: '100%',
    zIndex: 2,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
};
const OtpInput = ({ length, onChange, onComplete }) => {
    const [otp, setOtp] = useState(Array(length).fill(''));
    const inputRef = useRef(null);
    useEffect(() => {
        if (length == undefined) {
            console.error('icon must be provided');
            return;
        }
        if (onChange == undefined) {
            console.error('onPress function must be provided');
            return;
        }
        if (typeof length != 'number') {
            console.error('length should be a number');
            return;
        }
        if (typeof onChange != 'function') {
            console.error('onChange should be a function');
            return;
        }
    }, []);
    const onChangeText = (text) => {
        const otpArray = Array.from(text);
        if (otpArray.length >= length) {
            setOtp(otpArray);
        }
        else {
            const emptyArray = Array(length - otpArray.length).fill('');
            const newOtpArray = otpArray.concat(emptyArray);
            setOtp(newOtpArray);
        }
        onChange(text);
        if (text.length == length) {
            inputRef.current?.blur();
            if (onComplete) {
                onComplete(text);
            }
        }
    };
    const focusTextInput = () => {
        if (inputRef.current?.isFocused()) {
            inputRef.current.blur();
        }
        else {
            inputRef.current?.focus();
        }
    };
    return (React.createElement(Pressable, { style: containerStyle, onPress: focusTextInput },
        React.createElement(TextInput, { ref: inputRef, onChangeText: onChangeText, style: { zIndex: 1, flex: 1, height: 60 }, cursorColor: 'red', maxLength: length, keyboardType: 'phone-pad' }),
        React.createElement(View, { style: otpContainer },
            React.createElement(View, { style: { display: 'flex', flexDirection: 'row' } }, Array(length).fill(0).map((_, index) => (React.createElement(OtpBox, { key: index, digit: otp[index], index: index, length: length, active: otp.indexOf('') == index ? true : false })))))));
};
export default memo(OtpInput);
