import React from 'react';
import { type ViewStyle } from 'react-native';
interface OtpProps {
    length: number;
    onChange: (text: String) => void;
    onComplete?: (text: String) => void;
    containerStyle?: ViewStyle;
    boxStyle?: ViewStyle;
}
declare const _default: React.NamedExoticComponent<OtpProps>;
export default _default;
