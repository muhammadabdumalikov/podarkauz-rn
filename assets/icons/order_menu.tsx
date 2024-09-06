import React from "react";
import { SvgXml } from "react-native-svg";

export function OrderMenuIconInactive({ width, height, color }: { width?: any, height?: any, color?: string }) {
  const Xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.75012 3.25L4.83012 3.61L5.79312 15.083C5.87012 16.02 6.65312 16.739 7.59312 16.736H18.5021C19.3991 16.738 20.1601 16.078 20.2871 15.19L21.2361 8.632C21.3421 7.899 20.8331 7.219 20.1011 7.113C20.0371 7.104 5.16412 7.099 5.16412 7.099" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.1251 10.7949H16.8981" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.15441 20.2026C7.45541 20.2026 7.69841 20.4466 7.69841 20.7466C7.69841 21.0476 7.45541 21.2916 7.15441 21.2916C6.85341 21.2916 6.61041 21.0476 6.61041 20.7466C6.61041 20.4466 6.85341 20.2026 7.15441 20.2026Z" fill="#9E9E9E" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.4347 20.2026C18.7357 20.2026 18.9797 20.4466 18.9797 20.7466C18.9797 21.0476 18.7357 21.2916 18.4347 21.2916C18.1337 21.2916 17.8907 21.0476 17.8907 20.7466C17.8907 20.4466 18.1337 20.2026 18.4347 20.2026Z" fill="#9E9E9E" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  const Svg = () => (
    <SvgXml xml={Xml} width={width} height={height} color={color} />
  );

  return <Svg />;
}

export function OrderMenuIcon({ width, height, color }: { width?: any, height?: any, color?: string }) {
  const Xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.1213 11.2331H16.8891C17.3088 11.2331 17.6386 10.8861 17.6386 10.4677C17.6386 10.0391 17.3088 9.70236 16.8891 9.70236H14.1213C13.7016 9.70236 13.3719 10.0391 13.3719 10.4677C13.3719 10.8861 13.7016 11.2331 14.1213 11.2331ZM20.1766 5.92749C20.7861 5.92749 21.1858 6.1418 21.5855 6.61123C21.9852 7.08067 22.0551 7.7542 21.9652 8.36549L21.0159 15.06C20.8361 16.3469 19.7569 17.2949 18.4879 17.2949H7.58639C6.25742 17.2949 5.15828 16.255 5.04837 14.908L4.12908 3.7834L2.62026 3.51807C2.22057 3.44664 1.94079 3.04864 2.01073 2.64043C2.08068 2.22305 2.47038 1.94649 2.88006 2.00874L5.2632 2.3751C5.60293 2.43735 5.85274 2.72207 5.88272 3.06905L6.07257 5.35499C6.10254 5.68257 6.36234 5.92749 6.68209 5.92749H20.1766ZM7.42631 18.9079C6.58697 18.9079 5.9075 19.6018 5.9075 20.459C5.9075 21.3061 6.58697 22 7.42631 22C8.25567 22 8.93514 21.3061 8.93514 20.459C8.93514 19.6018 8.25567 18.9079 7.42631 18.9079ZM18.6676 18.9079C17.8282 18.9079 17.1487 19.6018 17.1487 20.459C17.1487 21.3061 17.8282 22 18.6676 22C19.4969 22 20.1764 21.3061 20.1764 20.459C20.1764 19.6018 19.4969 18.9079 18.6676 18.9079Z" fill="#212121"/>
</svg>
`;

  const Svg = () => (
    <SvgXml xml={Xml} width={width} height={height} color={color} />
  );

  return <Svg />;
}