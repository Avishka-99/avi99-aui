import React from 'react';
import { type ViewStyle } from 'react-native';
interface SwitchProps {
    value: Boolean;
    onChange: (value: Boolean) => void;
    color?: string;
    containerStyle?: ViewStyle;
}
declare const _default: React.NamedExoticComponent<SwitchProps>;
export default _default;
