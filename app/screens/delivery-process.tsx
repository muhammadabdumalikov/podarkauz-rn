import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { horizontalScale, verticalScale, moderateScale } from '@/utils/metrics';
import { textColors } from '@/constants/Colors';

import { FontAwesome6 } from '@expo/vector-icons';
import {
  UrbanistBoldText,
  UrbanistMediumText,
  UrbanistSemiboldText,
} from '@/components/StyledText';
import OpenedBox from '@/assets/images/opened-box';
import DeliveryTruck from '@/assets/images/delivery-truck';
import DeliveryReceive from '@/assets/images/delivery-receive';
import ClosedBox from '@/assets/images/closed-box';
import { ProductCardFullScreenForCompleted } from '@/components/app-components/product-card-full-screen';
import { CustomHeader } from '@/components/app-components/go-back';

const { width } = Dimensions.get('screen');

const DeliveryProcess = () => {
  const statuses = [
    {
      id: 1,
      title: 'Заказ принят - 17 декабря',
      description: 'Ваш заказ был получен',
      time: '15:20',
      completed: true,
      icon: () => (
        <ClosedBox width={moderateScale(36)} height={moderateScale(36)} />
      ),
    },
    {
      id: 2,
      title: 'Заказ подготовлен - 16 декабря',
      description: 'Ваш заказ подготовлен',
      time: '14:40',
      completed: true,
      icon: () => (
        <DeliveryTruck width={moderateScale(36)} height={moderateScale(36)} />
      ),
    },
    {
      id: 3,
      title: 'Доставка в процессе - 15 декабря',
      description: 'Ваш подарок в пути',
      time: '11:30',
      completed: false,
      icon: () => (
        <DeliveryReceive width={moderateScale(36)} height={moderateScale(36)} />
      ),
    },
    {
      id: 4,
      title: 'Доставлен',
      description: 'Желаю вам интересных впечатлений',
      time: '10:04',
      completed: false,
      icon: () => (
        <OpenedBox width={moderateScale(36)} height={moderateScale(36)} />
      ),
    },
  ];

  return (
    <View style={styles.container}>
      <CustomHeader title='Отслеживать заказ' />
      <View style={styles.productCard}>
        <ProductCardFullScreenForCompleted openBottomSheet={() => null} />
      </View>

      <View style={styles.deliveryBox}>
        <View style={styles.imageRow}>
          {statuses.map((status, index) => (
            <React.Fragment key={status.id}>
              <StepImage
                IconComponent={status.icon}
                completed={status.completed}
              />
              {index < statuses.length - 1 && (
                <Connector completed={status.completed} />
              )}
            </React.Fragment>
          ))}
        </View>
        <UrbanistBoldText style={styles.statusText}>
          Посылка в процессе Доставки
        </UrbanistBoldText>
      </View>

      <View style={styles.divider}></View>

      <View style={styles.deliveryBox2}>
        <UrbanistBoldText style={styles.heading}>
          Информация о статусе заказа
        </UrbanistBoldText>
        <View style={styles.timeline}>
          {statuses.map((status, index) => (
            <View key={index} style={styles.statusRow}>
              <View
                style={
                  status.completed
                    ? styles.iconContainer
                    : styles.incompletedIconContainer
                }
              >
                <View
                  style={
                    status.completed
                      ? styles.completedCircle
                      : styles.incompleteCircle
                  }
                />
                {/* {index !== statuses.length - 1 && (
                  <View style={styles.connector}>
                    <View style={styles.dottedLine} />
                  </View>
                )} */}
              </View>
              <View style={styles.textContainer}>
                <View style={styles.statusTimeRow}>
                  <UrbanistBoldText style={styles.statusTitle}>
                    {status.title}
                  </UrbanistBoldText>
                  <UrbanistSemiboldText style={styles.timeText}>
                    {status.time}
                  </UrbanistSemiboldText>
                </View>
                <UrbanistMediumText style={styles.statusDescription}>
                  {status.description}
                </UrbanistMediumText>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const StepImage = ({
  IconComponent,
  completed,
}: {
  IconComponent: () => React.JSX.Element;
  completed?: boolean;
}) => {
  return (
    <View style={styles.stepContainer}>
      <View style={[styles.icon, !completed && styles.iconIncomplete]}>
        <IconComponent />
      </View>
      <View style={[styles.dot, completed && styles.completedDot]}>
        <FontAwesome6
          name='check'
          size={moderateScale(10)}
          color={textColors.pureWhite}
        />
      </View>
    </View>
  );
};

const Connector = ({ completed }: { completed?: boolean }) => (
  <View style={styles.connectorRow}>
    <View
      style={[
        styles.connector,
        completed && styles.completedConnector,
        { width: verticalScale(4) },
      ]}
    />
    <View style={[styles.connector, completed && styles.completedConnector]} />
    <View style={[styles.connector, completed && styles.completedConnector]} />
    <View style={[styles.connector, completed && styles.completedConnector]} />
    <View
      style={[
        styles.connector,
        completed && styles.completedConnector,
        { width: verticalScale(4) },
      ]}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: verticalScale(16),
    backgroundColor: textColors.grey1,
  },
  productCard: {
    marginHorizontal: horizontalScale(16),
    height: verticalScale(168),
  },
  deliveryBox: {
    marginTop: verticalScale(24),
    alignItems: 'center',
  },
  imageRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: verticalScale(24),
  },
  stepContainer: {
    height: verticalScale(64),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dot: {
    width: verticalScale(18),
    height: verticalScale(18),
    borderRadius: verticalScale(10),
    backgroundColor: textColors.grey5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  completedDot: {
    backgroundColor: textColors.purple,
  },
  icon: {
    alignItems: 'center',
    width: verticalScale(36),
    height: verticalScale(36),
    marginBottom: verticalScale(8),
  },
  iconIncomplete: {
    opacity: 0.6,
  },
  connectorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: horizontalScale(8),
    height: verticalScale(20),
  },
  connector: {
    width: horizontalScale(8),
    height: verticalScale(1),
    borderRadius: moderateScale(2),
    backgroundColor: textColors.grey5,
    borderStyle: 'solid',
    marginHorizontal: horizontalScale(2),
  },
  completedConnector: {
    backgroundColor: textColors.purple,
    borderStyle: 'solid',
  },
  statusText: {
    fontSize: moderateScale(18),
    fontWeight: '700',
  },
  divider: {
    width: width - horizontalScale(32),
    height: verticalScale(2),
    marginVertical: verticalScale(24),
    backgroundColor: textColors.grey3,
  },
  deliveryBox2: {
    width: '100%',
    paddingHorizontal: horizontalScale(16),
    alignItems: 'center',
  },
  heading: {
    fontSize: moderateScale(20),
    fontWeight: '700',
    marginBottom: verticalScale(24),
  },
  timeline: {
    width: '100%',
    height: verticalScale(274),
  },
  statusRow: {
    height: verticalScale(48),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(26),
  },
  iconContainer: {
    width: verticalScale(36),
    height: verticalScale(36),
    borderRadius: verticalScale(40),
    borderColor: textColors.purple,
    borderWidth: verticalScale(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  incompletedIconContainer: {
    width: verticalScale(36),
    height: verticalScale(36),
    borderRadius: verticalScale(40),
    borderColor: textColors.grey5,
    borderWidth: verticalScale(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  completedCircle: {
    width: verticalScale(15),
    height: verticalScale(15),
    borderRadius: verticalScale(8),
    backgroundColor: textColors.purple,
    borderColor: textColors.purple,
    borderWidth: verticalScale(3),
  },
  incompleteCircle: {
    width: verticalScale(15),
    height: verticalScale(15),
    borderRadius: verticalScale(8),
    backgroundColor: textColors.grey5,
    borderColor: textColors.grey5,
    borderWidth: verticalScale(3),
  },
  connector2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dottedLine: {
    width: verticalScale(2),
    height: '100%',
    backgroundColor: textColors.grey3,
    borderStyle: 'dashed',
  },
  textContainer: {
    flex: 1,
    marginLeft: horizontalScale(16),
  },
  statusTimeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statusTitle: {
    fontSize: moderateScale(18),
    fontWeight: '700',
  },
  statusDescription: {
    fontSize: moderateScale(14),
    color: textColors.darkGrey,
    fontWeight: '500',
    marginTop: verticalScale(4),
  },
  timeText: {
    fontSize: moderateScale(12),
    fontWeight: '500',
    color: textColors.darkGrey,
  },
});

export default DeliveryProcess;
