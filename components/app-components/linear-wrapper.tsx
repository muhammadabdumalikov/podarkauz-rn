import { LinearGradient } from "expo-linear-gradient";
import { ViewProps } from "react-native";
import React from "react";

interface LinearWrapperProps extends ViewProps {
  children?: React.ReactNode;
}

export function LinearWrapper(props: LinearWrapperProps) {
  return (
    <LinearGradient
      colors={['#7210FF', '#9D59FF']}
      {...props}
      style={props.style}
    >
      {props.children}
    </LinearGradient>
  );
}
