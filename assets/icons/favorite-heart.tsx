import React from 'react';
import { SvgXml } from 'react-native-svg';

export function FavoriteHeartSvg({
  width,
  height,
  color,
}: {
  width?: any;
  height?: any;
  color?: string;
}) {
  // Replace the 'stroke' color with the dynamic color passed as a prop
  const FavoriteHeartSvg = `<svg width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.43108 7.73221C1.71574 5.49888 2.55174 2.94621 4.89641 2.19088C6.12974 1.79288 7.49108 2.02755 8.51641 2.79888C9.48641 2.04888 10.8977 1.79555 12.1297 2.19088C14.4744 2.94621 15.3157 5.49888 14.6011 7.73221C13.4877 11.2722 8.51641 13.9989 8.51641 13.9989C8.51641 13.9989 3.58174 11.3135 2.43108 7.73221Z" stroke="${color || 'white'}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.1832 4.46666C11.8965 4.69733 12.4005 5.33399 12.4612 6.08133" stroke="${color || 'white'}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

  return <SvgXml xml={FavoriteHeartSvg} width={width} height={height} />;
}

export function FavoriteHeartWhiteSvg({
  width,
  height,
}: {
  width?: any;
  height?: any;
}) {
  // Replace the 'stroke' color with the dynamic color passed as a prop
  const FavoriteHeartSvg = `<svg width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.083 1.6671C11.5037 1.6671 11.9237 1.72643 12.323 1.86043C14.7837 2.66043 15.6703 5.36043 14.9297 7.72043C14.5097 8.92643 13.823 10.0271 12.9237 10.9264C11.6363 12.1731 10.2237 13.2798 8.70301 14.2331L8.53635 14.3338L8.36301 14.2264C6.83701 13.2798 5.41635 12.1731 4.11701 10.9198C3.22368 10.0204 2.53635 8.92643 2.10968 7.72043C1.35635 5.36043 2.24301 2.66043 4.73035 1.84643C4.92368 1.77977 5.12301 1.7331 5.32301 1.7071H5.40301C5.59035 1.67977 5.77635 1.6671 5.96301 1.6671H6.03635C6.45635 1.67977 6.86301 1.7531 7.25701 1.8871H7.29635C7.32301 1.89977 7.34301 1.91377 7.35635 1.92643C7.50368 1.97377 7.64301 2.0271 7.77635 2.10043L8.02968 2.21377C8.0909 2.24641 8.15961 2.2963 8.21899 2.33941C8.25661 2.36673 8.29049 2.39133 8.31635 2.4071C8.32723 2.41352 8.33829 2.41997 8.34943 2.42648C8.4066 2.45985 8.46614 2.49461 8.51635 2.5331C9.25701 1.9671 10.1563 1.66043 11.083 1.6671ZM12.8563 6.4671C13.1297 6.45977 13.363 6.24043 13.383 5.95976V5.88043C13.403 4.94643 12.837 4.10043 11.9763 3.77377C11.703 3.67977 11.403 3.8271 11.303 4.1071C11.2097 4.3871 11.3563 4.69377 11.6363 4.7931C12.0637 4.9531 12.3497 5.37377 12.3497 5.83977V5.86043C12.337 6.0131 12.383 6.16043 12.4763 6.27377C12.5697 6.3871 12.7097 6.4531 12.8563 6.4671Z" fill="white"/>
</svg>`;

  return <SvgXml xml={FavoriteHeartSvg} width={width} height={height} />;
}

export function WishlistHeartSvg({
  width,
  height,
  color,
}: {
  width?: any;
  height?: any;
  color?: string;
}) {
  // Replace the 'stroke' color with the dynamic color passed as a prop
  const FavoriteHeartSvg = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.35059 13.5314C2.09876 9.62304 3.56176 5.15588 7.66492 3.83404C9.82326 3.13754 12.2056 3.54821 13.9999 4.89804C15.6974 3.58554 18.1673 3.14221 20.3233 3.83404C24.4264 5.15588 25.8988 9.62304 24.6481 13.5314C22.6998 19.7264 13.9999 24.498 13.9999 24.498C13.9999 24.498 5.36426 19.7987 3.35059 13.5314Z" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.6667 7.81665C19.9151 8.22032 20.7971 9.33448 20.9032 10.6423" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

  return (
    <SvgXml
      xml={FavoriteHeartSvg}
      width={width}
      height={height}
      color={color}
    />
  );
}
