import React from "react";
import { SvgXml } from "react-native-svg";

export default function DeliveryTruck({ width, height, color }: { width?: any, height?: any, color?: string }) {
  // Replace the 'stroke' color with the dynamic color passed as a prop
  const Svg = `<svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3395_28885)">
<path d="M5.41016 20.7959L7.95329 19.3337L7.95336 19.3339C8.417 19.0882 9.01255 19.1231 9.66238 19.4983C11.1408 20.3519 12.3392 22.6418 12.3392 24.6129C12.3392 25.6967 11.9765 26.4574 11.4046 26.7818L11.4051 26.7826L8.96333 28.1883L5.41016 20.7959Z" fill="url(#paint0_linear_3395_28885)"/>
<path d="M18.6135 28.4184L21.1567 26.9562L21.1567 26.9564C21.6204 26.7107 22.2159 26.7458 22.8657 27.1209C24.3441 27.9744 25.5425 30.2643 25.5425 32.2355C25.5425 33.3193 25.1798 34.08 24.6079 34.4044L24.6084 34.4052L22.1666 35.8109L18.6135 28.4184Z" fill="url(#paint1_linear_3395_28885)"/>
<path d="M3.20715 17.6339V5.43555L22.7858 6.27508V18.4734C22.7858 18.7529 22.6476 19.0324 22.3709 19.1921L14.615 23.67C14.0634 23.9884 13.3838 23.9884 12.8322 23.67L3.62207 18.3527C3.34539 18.1929 3.20708 17.9134 3.20715 17.6339Z" fill="url(#paint2_linear_3395_28885)"/>
<path d="M22.3708 5.55629L13.1607 0.238834C12.6091 -0.0796113 11.9295 -0.0796113 11.3779 0.238834L3.62207 4.71669C3.06885 5.03612 3.06885 5.83458 3.62207 6.15401L12.8322 11.4715C13.3838 11.7899 14.0634 11.7899 14.615 11.4715L22.3709 6.99361C22.9241 6.67419 22.9241 5.87572 22.3708 5.55629Z" fill="url(#paint3_linear_3395_28885)"/>
<path d="M19.3845 3.83192L9.4924 9.54305L6.86841 8.0281L16.7605 2.31689L19.3845 3.83192Z" fill="#DEA861"/>
<path d="M17.8162 2.92578L7.92419 8.63691L8.43818 8.9337L18.3302 3.2225L17.8162 2.92578Z" fill="#CC8241"/>
<path d="M9.4924 9.54327V11.7103L6.86841 10.1954V8.02832L9.4924 9.54327Z" fill="#BA5C25"/>
<path d="M33.115 21.4172L30.0052 19.6218L28.6682 14.0165C28.4435 13.0745 27.841 12.2665 27.0023 11.7823L22.9716 9.45227C22.7301 9.31277 22.4545 9.35348 22.2626 9.50472L15.2167 13.5726L13.8038 14.3883L25.2706 34.7457L33.7397 29.8581V22.4992C33.7397 22.0529 33.5016 21.6404 33.115 21.4172Z" fill="url(#paint4_linear_3395_28885)"/>
<path d="M26.2441 28.9668L27.4253 28.2848C27.4957 28.2442 27.5838 28.2949 27.5838 28.3763V29.4133C27.5838 29.5538 27.5088 29.6837 27.387 29.754L26.2058 30.436C26.1354 30.4766 26.0474 30.4258 26.0474 30.3445V29.3075C26.0474 29.167 26.1224 29.037 26.2441 28.9668Z" fill="#E9E5F6"/>
<path d="M32.0571 25.6074L33.2383 24.9254C33.3087 24.8848 33.3967 24.9356 33.3967 25.0168V26.0538C33.3967 26.1944 33.3217 26.3242 33.2 26.3945L32.0188 27.0765C31.9484 27.1171 31.8604 27.0664 31.8604 26.9851V25.9481C31.8604 25.8076 31.9353 25.6777 32.0571 25.6074Z" fill="#E9E5F6"/>
<path d="M21.5355 24.5092L20.1996 18.9088C19.9749 17.9667 19.3724 17.1587 18.5338 16.6745L14.503 14.3445C14.0812 14.1009 13.5538 14.4054 13.5538 14.8925V22.7703C13.5538 23.3252 12.9525 23.6716 12.4725 23.3931L3.81047 18.3672C3.53667 18.209 3.19446 18.4067 3.19446 18.7228V21.0306C3.19446 21.6084 3.50271 22.1423 4.00312 22.4312L21.2077 32.3951L25.2706 34.7459V27.3871C25.2706 26.9407 25.0325 26.5282 24.6459 26.305L21.5355 24.5092Z" fill="#FFC538"/>
<path d="M28.4089 14.6367L21.1847 18.8077L22.1324 23.0495L29.3566 18.8786L28.4089 14.6367Z" fill="url(#paint5_linear_3395_28885)"/>
<path d="M17.7201 30.5641C17.7201 28.5929 18.9186 27.6869 20.397 28.5405C21.8754 29.394 23.0738 31.6839 23.0738 33.6551C23.0738 35.6263 21.8754 36.5323 20.397 35.6788C18.9185 34.8252 17.7201 32.5353 17.7201 30.5641Z" fill="url(#paint6_linear_3395_28885)"/>
<path d="M18.7302 31.1475C18.7302 29.9202 19.4764 29.356 20.3968 29.8875C21.3173 30.419 22.0635 31.8447 22.0635 33.072C22.0635 34.2993 21.3173 34.8633 20.3968 34.3319C19.4764 33.8004 18.7302 32.3748 18.7302 31.1475Z" fill="#E9E5F6"/>
<path d="M20.9192 33.295C21.2938 33.1353 21.3688 32.469 21.0866 31.8066C20.8044 31.1443 20.2719 30.7368 19.8972 30.8965C19.5225 31.0561 19.4475 31.7225 19.7297 32.3848C20.0119 33.0471 20.5445 33.4546 20.9192 33.295Z" fill="#7662BD"/>
<path d="M4.5166 22.9411C4.5166 20.9699 5.71508 20.0639 7.19347 20.9174C8.67186 21.7709 9.87034 24.0609 9.87034 26.032C9.87034 28.0032 8.67186 28.9092 7.19347 28.0557C5.71508 27.2022 4.5166 24.9123 4.5166 22.9411Z" fill="url(#paint7_linear_3395_28885)"/>
<path d="M8.20632 26.8338C8.94181 26.5204 9.08899 25.2124 8.53507 23.9124C7.98114 22.6124 6.93586 21.8125 6.20037 22.1259C5.46488 22.4393 5.3177 23.7472 5.87162 25.0473C6.42555 26.3473 7.47083 27.1471 8.20632 26.8338Z" fill="#E9E5F6"/>
<path d="M7.71432 25.6792C8.08901 25.5196 8.16399 24.8532 7.88178 24.1909C7.59958 23.5286 7.06705 23.1211 6.69236 23.2807C6.31767 23.4404 6.24269 24.1067 6.5249 24.7691C6.8071 25.4314 7.33963 25.8389 7.71432 25.6792Z" fill="#7662BD"/>
<path d="M33.7122 28.4936L25.0232 33.251L23.4219 32.4814V34.3441L24.7956 35.1373C25.0381 35.2772 25.337 35.2772 25.5795 35.1373L33.9749 30.2901C34.0842 30.2271 34.1388 30.1167 34.1388 30.0063V28.1436L33.7122 28.4936Z" fill="url(#paint8_linear_3395_28885)"/>
<path d="M23.7933 32.2669L25.2671 33.1177L33.7356 28.2284V27.7217L33.9748 27.8598C34.1933 27.9859 34.1933 28.3014 33.9748 28.4275L25.5793 33.2747C25.3368 33.4147 25.038 33.4147 24.7955 33.2747L23.4216 32.4815L23.7933 32.2669Z" fill="#A996EB"/>
<path d="M28.0444 28.0513L31.5957 26.001V26.61C31.5957 26.997 31.3893 27.3546 31.0541 27.5481L28.5779 28.9777C28.3408 29.1146 28.0444 28.9435 28.0444 28.6697V28.0513Z" fill="url(#paint9_linear_3395_28885)"/>
<path d="M18.4711 18.5162C18.3966 18.1523 18.1699 17.8377 17.8481 17.652L14.5951 15.771V20.502L19.4521 23.3062L18.4711 18.5162Z" fill="url(#paint10_linear_3395_28885)"/>
</g>
<defs>
<linearGradient id="paint0_linear_3395_28885" x1="9.13074" y1="22.9518" x2="8.03014" y2="21.0454" gradientUnits="userSpaceOnUse">
<stop stop-color="#43386B"/>
<stop offset="1" stop-color="#7662BD"/>
</linearGradient>
<linearGradient id="paint1_linear_3395_28885" x1="22.3342" y1="30.5744" x2="21.2336" y2="28.668" gradientUnits="userSpaceOnUse">
<stop stop-color="#43386B"/>
<stop offset="1" stop-color="#7662BD"/>
</linearGradient>
<linearGradient id="paint2_linear_3395_28885" x1="15.2884" y1="14.6723" x2="12.5989" y2="14.6723" gradientUnits="userSpaceOnUse">
<stop stop-color="#DEA861"/>
<stop offset="1" stop-color="#CC8241"/>
</linearGradient>
<linearGradient id="paint3_linear_3395_28885" x1="18.4472" y1="2.70821" x2="8.37512" y2="8.52326" gradientUnits="userSpaceOnUse">
<stop stop-color="#DEA861"/>
<stop offset="1" stop-color="#EBCBA0"/>
</linearGradient>
<linearGradient id="paint4_linear_3395_28885" x1="29.9678" y1="30.2874" x2="20.1473" y2="11.2749" gradientUnits="userSpaceOnUse">
<stop stop-color="#E37A34"/>
<stop offset="1" stop-color="#FFC538"/>
</linearGradient>
<linearGradient id="paint5_linear_3395_28885" x1="25.2706" y1="22.7574" x2="25.2706" y2="15.5353" gradientUnits="userSpaceOnUse">
<stop stop-color="#43386B"/>
<stop offset="1" stop-color="#7662BD"/>
</linearGradient>
<linearGradient id="paint6_linear_3395_28885" x1="20.397" y1="37.0983" x2="20.397" y2="27.4397" gradientUnits="userSpaceOnUse">
<stop stop-color="#43386B"/>
<stop offset="1" stop-color="#7662BD"/>
</linearGradient>
<linearGradient id="paint7_linear_3395_28885" x1="7.19347" y1="29.4752" x2="7.19347" y2="19.8167" gradientUnits="userSpaceOnUse">
<stop stop-color="#43386B"/>
<stop offset="1" stop-color="#7662BD"/>
</linearGradient>
<linearGradient id="paint8_linear_3395_28885" x1="24.9245" y1="31.6929" x2="26.217" y2="31.6929" gradientUnits="userSpaceOnUse">
<stop stop-color="#43386B"/>
<stop offset="1" stop-color="#7662BD"/>
</linearGradient>
<linearGradient id="paint9_linear_3395_28885" x1="29.82" y1="28.9208" x2="29.82" y2="26.324" gradientUnits="userSpaceOnUse">
<stop stop-color="#43386B"/>
<stop offset="1" stop-color="#594A8E"/>
</linearGradient>
<linearGradient id="paint10_linear_3395_28885" x1="17.0236" y1="23.0445" x2="17.0236" y2="16.5758" gradientUnits="userSpaceOnUse">
<stop stop-color="#43386B"/>
<stop offset="1" stop-color="#7662BD"/>
</linearGradient>
<clipPath id="clip0_3395_28885">
<rect width="36" height="36" fill="white" transform="translate(0.666626)"/>
</clipPath>
</defs>
</svg>
`;

  return <SvgXml xml={Svg} width={width} height={height} />;
}
