import { StyleSheet } from 'react-native';

import { ScrollView, Text, View } from '@/components/Themed';
import {GoBackButton} from '@/components/app-components/go-back';
import { UrbanistBoldText } from '@/components/StyledText';
import Constants from 'expo-constants';
import { horizontalScale, moderateScale, verticalScale } from '@/utils/metrics';
import { Ionicons } from '@expo/vector-icons';
import { textColors } from '@/constants/Colors';
import { NotificationList } from '@/components/app-components/notifiсation-element';

const notifications = [
  {
    date: '2024-08-30',
    notifications: [{ body: 'Специальная акция действует только сегодня', title: 'Пополните свой кошелек!' }]
  },
  {
    date: '2024-08-29',
    notifications: [{ body: 'Теперь вы можете отслеживать заказы в режиме реального времени', title: 'Доступны новые услуги!' }]
  },
  {
    date: '2024-08-25',
    notifications: [{ body: 'Теперь вы можете отслеживать заказы в режиме реального времени', title: 'Настройка учетной записи прошла успешно!' }]
  },
  {
    date: '2024-08-21',
    notifications: [{ body: 'Теперь вы можете отслеживать заказы в режиме реального времени', title: 'Настройка учетной записи прошла успешно!' }]
  },
   {
    date: '2024-08-29',
    notifications: [{ body: 'Теперь вы можете отслеживать заказы в режиме реального времени', title: 'Доступны новые услуги!' }]
  },
{
    date: '2024-08-30',
    notifications: [{ body: 'Специальная акция действует только сегодня', title: 'Пополните свой кошелек!' }]
  },
  {
    date: '2024-08-30',
    notifications: [{ body: 'Специальная акция действует только сегодня', title: 'Пополните свой кошелек!' }]
  },
  {
    date: '2024-08-29',
    notifications: [{ body: 'Теперь вы можете отслеживать заказы в режиме реального времени', title: 'Доступны новые услуги!' }]
  },
];

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.goBackRow}>
        <View style={styles.goBackBox}>
          <GoBackButton />
          <UrbanistBoldText style={styles.screenNameTxt}>Уведомление</UrbanistBoldText>
        </View>
        <Ionicons style={styles.moreIcon} name="ellipsis-horizontal-circle" size={moderateScale(24)} color="black" />
      </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerStyle}
        showsVerticalScrollIndicator={false}
      >
        {
          notifications.length > 0
          &&
          notifications?.map((item, index) => <NotificationList date={item.date} notifications={item.notifications} key={index} />)
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: textColors.offGrey2,
  },
  containerStyle: {
    alignItems: 'center',
    paddingBottom: verticalScale(55)
  },
  goBackRow: {
    width: '100%',
    flexDirection: 'row',
    height: verticalScale(68),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(16),
    backgroundColor: textColors.offGrey2

  },
  goBackBox: {
   flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: textColors.offGrey2
  },
  screenNameTxt: {
    marginLeft: horizontalScale(16),
    fontWeight: '700',
    fontSize: moderateScale(24),
  },
  moreIcon: {
    padding: verticalScale(8),
    backgroundColor: textColors.softGrey,
    borderRadius: moderateScale(12),
    overflow: 'hidden',
  }
});
