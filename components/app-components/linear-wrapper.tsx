import { LinearGradient } from "expo-linear-gradient";
import { ViewProps } from "react-native";
import React from "react";

interface LinearWrapperProps extends ViewProps {
  children?: React.ReactNode;
}

export function LinearWrapper(props: LinearWrapperProps & {
  from?: string, to?: string
}) {
  const fromColor = props.from || '#7210FF';
  const toColor = props.from || '#9D59FF';

  return (
    <LinearGradient
      colors={[fromColor, toColor]}
      {...props}
      style={props.style}
    >
      {props.children}
    </LinearGradient>
  );
}
