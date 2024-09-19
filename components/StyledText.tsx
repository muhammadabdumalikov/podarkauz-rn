import { TextInput, TextInputProps } from 'react-native';
import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}

export function UrbanistMediumText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'UrbanistMedium' }]} />;
}

export function UrbanistSemiboldText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'UrbanistSemibold' }]} />;
}

export function UrbanistBoldText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'UrbanistBold' }]} />;
}

export function UrbanistSemiboldTextInput(props: TextInputProps) {
  return (
    <TextInput
      {...props}
      style={[props.style, { fontFamily: 'UrbanistSemibold' }]}
    />
  );
}
