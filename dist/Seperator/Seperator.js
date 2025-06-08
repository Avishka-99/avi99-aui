import React from 'react';
import { View } from 'react-native';
const Seperator = ({ color, containerStyle }) => {
    let backgroundStyle = {};
    backgroundStyle = { ...backgroundStyle, backgroundColor: color ? color : 'rgb(202, 196, 208)' };
    if (containerStyle) {
        backgroundStyle = { ...backgroundStyle, ...containerStyle };
    }
    return (React.createElement(View, { style: [{ width: '100%', height: 0.5 }, backgroundStyle] }));
};
export default Seperator;
