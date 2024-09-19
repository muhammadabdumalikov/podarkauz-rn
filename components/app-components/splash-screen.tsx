import SplashScreenDots from '@/assets/images/splash-screen-dots';
import { LinearWrapper } from './linear-wrapper';
import { View } from '../Themed';
import { horizontalScale, verticalScale } from '@/utils/metrics';
import SplashScreenGift from '@/assets/images/splash-screen-gift';
import { Chase } from 'react-native-animated-spinkit';
import { textColors } from '@/constants/Colors';

export default function CustomSplashScreen() {
  return (
    <LinearWrapper
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View
        style={{
          width: horizontalScale(368),
          height: verticalScale(421),
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparency',
        }}
      >
        <View
          style={{
            flex: 1,
            position: 'absolute',
            zIndex: 3,
            left: 0,
            bottom: 0,
            right: 0,
            top: 0,
            backgroundColor: 'transparency',
          }}
        >
          <SplashScreenDots />
        </View>
        <View
          style={{
            flex: 1,
            position: 'absolute',
            zIndex: 2,
            left: 0,
            bottom: 0,
            right: 0,
            top: 0,
            backgroundColor: 'transparency',
          }}
        >
          <SplashScreenGift />
        </View>
      </View>
      <Chase
        color={textColors.pureWhite}
        style={{ marginTop: verticalScale(120) }}
      />
    </LinearWrapper>
  );
}
