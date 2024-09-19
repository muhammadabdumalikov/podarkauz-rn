import { CustomHeader } from '@/components/app-components/go-back';
import { UrbanistMediumText } from '@/components/StyledText';
import { View } from '@/components/Themed';
import { textColors } from '@/constants/Colors';
import { horizontalScale, moderateScale, verticalScale } from '@/utils/metrics';
import { useState } from 'react';
import { StyleSheet, Switch } from 'react-native';

export default function NotificationSettingsScreen() {
  const [notificationEnable, setNotificationEnable] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  // const [darkMode, setDarkMode] = useState(false);
  // const [darkMode, setDarkMode] = useState(false);

  const handleNotificationEnableChange = () => setNotificationEnable(prev => !prev);
  const handleSwitchChange = () => setDarkMode(prev => !prev);
  // const handleSwitchChange = () => setDarkMode(prev => !prev);
  // const handleSwitchChange = () => setDarkMode(prev => !prev);


  return (
    <View style={styles.container}>
      <CustomHeader title='Уведомление' />
      <View style={styles.row}>
        <UrbanistMediumText style={styles.rowTxt}>
          Общее уведомление
        </UrbanistMediumText>
        <Switch
          style={styles.switch}
          trackColor={{ false: textColors.grey3, true: textColors.purple }}
          thumbColor={
            notificationEnable ? textColors.pureWhite : textColors.pureWhite
          }
          onValueChange={handleNotificationEnableChange}
          value={notificationEnable}
        />
      </View>

      <View style={styles.row}>
        <UrbanistMediumText style={styles.rowTxt}>Звук</UrbanistMediumText>
        <Switch
          style={styles.switch}
          trackColor={{ false: textColors.grey3, true: textColors.purple }}
          thumbColor={darkMode ? textColors.pureWhite : textColors.pureWhite}
          onValueChange={handleSwitchChange}
          value={darkMode}
        />
      </View>

      <View style={styles.row}>
        <UrbanistMediumText style={styles.rowTxt}>Вибрация</UrbanistMediumText>
        <Switch
          style={styles.switch}
          trackColor={{ false: textColors.grey3, true: textColors.purple }}
          thumbColor={darkMode ? textColors.pureWhite : textColors.pureWhite}
          onValueChange={handleSwitchChange}
          value={darkMode}
        />
      </View>

      <View style={styles.row}>
        <UrbanistMediumText style={styles.rowTxt}>
          Специальные предложения
        </UrbanistMediumText>
        <Switch
          style={styles.switch}
          trackColor={{ false: textColors.grey3, true: textColors.purple }}
          thumbColor={darkMode ? textColors.pureWhite : textColors.pureWhite}
          onValueChange={handleSwitchChange}
          value={darkMode}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: textColors.pureWhite,
    paddingHorizontal: horizontalScale(16),
  },
  row: {
    flexDirection: 'row',
    height: verticalScale(45),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: verticalScale(10)
  },
  rowTxt: {
    fontSize: moderateScale(18),
    fontWeight: '500',
  },
  switch: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], // Adjust the size here
  },
});
