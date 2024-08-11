import React from 'react';
import { View } from 'react-native';
const Seperator = ({ color }) => {
    let containerStyles = {};
    containerStyles = { ...containerStyles, backgroundColor: color ? color : 'rgb(202, 196, 208)' };
    return (React.createElement(View, { style: [containerStyles, { width: '100%', height: 0.5 }] }));
};
export default Seperator;
