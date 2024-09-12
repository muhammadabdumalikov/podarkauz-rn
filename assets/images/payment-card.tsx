import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function PaymentCardSvg({
  width,
  height,
  color,
}: {
  width?: any;
  height?: any;
  color?: string;
}) {
  // Replace the 'stroke' color with the dynamic color passed as a prop
  const Svg = `<svg width="398" height="239" viewBox="0 0 398 239" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3397_32632)">
<rect width="398" height="239" rx="24" fill="url(#paint0_linear_3397_32632)"/>
<g opacity="0.32">
<path opacity="0.1" d="M242.831 -32.3613L371.137 44.009V173.137L242.831 96.0753V-32.3613Z" fill="white"/>
<path opacity="0.2" d="M498.993 -32.2832L370.691 44.0071V173L498.993 96.0188V-32.2832Z" fill="white"/>
<path opacity="0.3" d="M242.831 -31.938L371.137 -109L499.442 -31.938V-31.3616L371.137 45.7004L242.831 -31.3616V-31.938Z" fill="white"/>
<path opacity="0.1" d="M-119 40.8926L9.30562 117.263V246.391L-119 169.329V40.8926Z" fill="white"/>
<path opacity="0.2" d="M137.162 40.9707L8.85962 117.261V246.254L137.162 169.273V40.9707Z" fill="white"/>
<path opacity="0.3" d="M-119 41.3159L9.30562 -35.7461L137.611 41.3159V41.8923L9.30562 118.954L-119 41.8923V41.3159Z" fill="white"/>
<path opacity="0.1" d="M189.111 -0.238281L242.609 31.6047V85.4454L189.111 53.314V-0.238281Z" fill="white"/>
<path opacity="0.2" d="M295.919 -0.205078L242.423 31.6045V85.3888L295.919 53.2911V-0.205078Z" fill="white"/>
<path opacity="0.3" d="M189.111 -0.0619698L242.609 -32.1934L296.106 -0.0619698V0.178352L242.609 32.3097L189.111 0.178352V-0.0619698Z" fill="white"/>
<path opacity="0.1" d="M233.951 205.316L287.449 237.159V291L233.951 258.869V205.316Z" fill="white"/>
<path opacity="0.2" d="M340.759 205.35L287.263 237.159V290.943L340.759 258.846V205.35Z" fill="white"/>
<path opacity="0.3" d="M233.951 205.493L287.449 173.361L340.947 205.493V205.733L287.449 237.864L233.951 205.733V205.493Z" fill="white"/>
</g>
<path opacity="0.4" d="M348.459 208.999C358.414 208.999 366.484 200.929 366.484 190.973C366.484 181.017 358.414 172.947 348.459 172.947C338.503 172.947 330.433 181.017 330.433 190.973C330.433 200.929 338.503 208.999 348.459 208.999Z" fill="white"/>
<path opacity="0.859468" d="M326.026 208.999C335.982 208.999 344.052 200.929 344.052 190.973C344.052 181.017 335.982 172.947 326.026 172.947C316.071 172.947 308 181.017 308 190.973C308 200.929 316.071 208.999 326.026 208.999Z" fill="white"/>
</g>
<defs>
<linearGradient id="paint0_linear_3397_32632" x1="398" y1="239" x2="-18.3377" y2="37.9795" gradientUnits="userSpaceOnUse">
<stop stop-color="#7210FF"/>
<stop offset="1" stop-color="#9D59FF"/>
</linearGradient>
<clipPath id="clip0_3397_32632">
<rect width="398" height="239" rx="24" fill="white"/>
</clipPath>
</defs>
</svg>
`;

  return <SvgXml xml={Svg} width={width} height={height} />;
}
