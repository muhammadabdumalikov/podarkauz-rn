import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function SplashScreenDots({
  width,
  height,
  color,
}: {
  width?: any;
  height?: any;
  color?: string;
}) {
  // Replace the 'stroke' color with the dynamic color passed as a prop
  const Svg = `<svg width="369" height="422" viewBox="0 0 369 422" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="156.874" cy="415.676" rx="6.02804" ry="6.03888" fill="white"/>
<ellipse cx="57.4112" cy="397.559" rx="3.01402" ry="3.01944" fill="white"/>
<ellipse cx="228.206" cy="387.494" rx="10.0467" ry="10.0648" fill="white"/>
<ellipse cx="93.5794" cy="355.287" rx="7.03271" ry="7.04536" fill="white"/>
<ellipse cx="313.603" cy="355.287" rx="20.0935" ry="20.1296" fill="white"/>
<ellipse cx="10.1916" cy="312.009" rx="10.0467" ry="10.0648" fill="white"/>
<ellipse cx="362.832" cy="286.847" rx="6.02804" ry="6.03888" fill="white"/>
<ellipse cx="16.2196" cy="206.328" rx="6.02804" ry="6.03888" fill="white"/>
<ellipse cx="357.808" cy="201.296" rx="3.01402" ry="3.01944" fill="white"/>
<ellipse cx="54.3972" cy="134.868" rx="3.01402" ry="3.01944" fill="white"/>
<ellipse cx="347.762" cy="103.667" rx="14.0654" ry="14.0907" fill="white"/>
<ellipse cx="30.285" cy="68.4406" rx="20.0935" ry="20.1296" fill="white"/>
<ellipse cx="277.435" cy="33.2138" rx="7.03271" ry="7.04536" fill="white"/>
<ellipse cx="135.776" cy="6.03888" rx="6.02804" ry="6.03888" fill="white"/>
</svg>
`;

  return <SvgXml xml={Svg} width={width} height={height} />;
}
