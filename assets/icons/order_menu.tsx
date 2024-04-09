import Svg, { Path } from "react-native-svg"
const OrderMenuIcon = (props: any) => (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.486 21.5h8.348c3.066 0 5.419-1.108 4.75-5.565l-.777-6.041c-.412-2.225-1.831-3.076-3.076-3.076H6.553c-1.264 0-2.6.915-3.076 3.076l-.778 6.04C2.132 19.89 4.42 21.5 7.486 21.5Z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.349 6.598a4.32 4.32 0 0 1 4.32-4.32v0a4.32 4.32 0 0 1 4.339 4.32v0M8.704 11.102h.045M14.534 11.102h.046"
    />
  </Svg>
);

export default OrderMenuIcon;