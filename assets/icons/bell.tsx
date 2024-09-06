import React from "react";
import { SvgXml } from "react-native-svg";

export default function BellSvg({ width, height, color }: { width?: any, height?: any, color?: string }) {
  const Bell = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 20.8222C20.5791 20.8222 23.6227 19.9782 23.9166 16.5906C23.9166 13.2052 21.7947 13.4229 21.7947 9.26928C21.7947 6.02481 18.7194 2.33331 14 2.33331C9.28055 2.33331 6.2053 6.02481 6.2053 9.26928C6.2053 13.4229 4.08331 13.2052 4.08331 16.5906C4.37842 19.991 7.42205 20.8222 14 20.8222Z" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.7869 24.3334C15.1954 26.1005 12.7127 26.1215 11.106 24.3334" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    ;

  const Svg = () => (
    <SvgXml xml={Bell} width={width} height={height} color={color} />
  );

  return <Svg />;
}