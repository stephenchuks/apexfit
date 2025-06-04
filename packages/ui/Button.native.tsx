import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  label: string;
};

export const Button: React.FC<ButtonProps> = ({ label, ...props }) => (
  <TouchableOpacity 
    {...props as TouchableOpacityProps}
    className="px-4 py-2 rounded-xl bg-primary"
  >
    <Text className="text-white font-semibold">{label}</Text>
  </TouchableOpacity>
);
