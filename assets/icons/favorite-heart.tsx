import React from "react";
import { SvgXml } from "react-native-svg";

export default function FavoriteHeartSvg({ width, height, color }: { width?: any, height?: any, color?: string }) {
  // Replace the 'stroke' color with the dynamic color passed as a prop
  const FavoriteHeartSvg = `<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.43108 7.73221C1.71574 5.49888 2.55174 2.94621 4.89641 2.19088C6.12974 1.79288 7.49108 2.02755 8.51641 2.79888C9.48641 2.04888 10.8977 1.79555 12.1297 2.19088C14.4744 2.94621 15.3157 5.49888 14.6011 7.73221C13.4877 11.2722 8.51641 13.9989 8.51641 13.9989C8.51641 13.9989 3.58174 11.3135 2.43108 7.73221Z" stroke="${color || 'white'}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.1832 4.46666C11.8965 4.69733 12.4005 5.33399 12.4612 6.08133" stroke="${color || 'white'}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

  return <SvgXml xml={FavoriteHeartSvg} width={width} height={height} />;
}
