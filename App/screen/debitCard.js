import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ListItem, Avatar, Switch, Slider} from 'react-native-elements';
import AppHeader from '../components/header';

const listData = [
  {
    id: 1,
    icon: require('../assets/icons/insight.png'),
    title: 'Top-up account',
    subTitle: 'Deposit money to your account to use with card',
  },
  {
    id: 2,
    icon: require('../assets/icons/Transfer.png'),
    title: 'Weekly spending limit',
    subTitle: 'You haven’t set any spending limit on card',
    rightIcon: 'toggle',
    checked: false,
  },
  {
    id: 3,
    icon: require('../assets/icons/freezeCard.png'),
    title: 'Freeze card',
    subTitle: 'Your debit card is currently active',
    rightIcon: 'toggle',
    checked: false,
  },
  {
    id: 4,
    icon: require('../assets/icons/newCard.png'),
    title: 'Get a new card',
    subTitle: 'This deactivates your current debit card',
  },
  {
    id: 5,
    icon: require('../assets/icons/deactivateCard.png'),
    title: 'Deactivated cards',
    subTitle: 'Your previously deactivated cards',
  },
];

const DebitCardScreen = () => {
  const [list, setList] = useState(listData);

  const handleChange = idx => {
    const data = [...list];
    data[idx].checked = !data[idx].checked;
    setList(data);
  };

  return (
    <View style={{flex: 1, position: 'relative'}}>
      <AppHeader title="Debit Card" />
      <View style={Style.balanceContainer}>
        <Text style={Style.title}>Available balance</Text>
        <View style={Style.subTitleContainer}>
          <View style={Style.balanceBadge}>
            <Text style={Style.badgeText}>S$</Text>
          </View>
          <Text style={Style.balance}>3,000</Text>
        </View>
      </View>
      <ScrollView
        style={Style.scrollView}
        contentContainerStyle={Style.scrollContentContainer}>
        <TouchableOpacity activeOpacity={0.7} style={Style.hideContainer}>
          <Image source={require('../assets/icons/closeEye.png')} />
          <Text style={Style.hideText}>Hide card number</Text>
        </TouchableOpacity>
        <View style={Style.cardContainer}>
          <Image
            source={require('../assets/icons/logo.png')}
            style={Style.logo}
          />
          <Text style={Style.userName}>Mark Henry</Text>
          <Text style={Style.cardNumber}>5677 5678 7889 9987</Text>
          <View style={Style.cardDetail}>
            <Text style={[Style.cardDetailText, {marginRight: 32}]}>
              Thru: 12/20
            </Text>
            <Text style={Style.cardDetailText}>CVV: 456</Text>
          </View>
          <Image
            source={require('../assets/icons/visaLogo.png')}
            style={Style.logo}
          />
        </View>
        <View style={Style.slideContainer}>
          <View style={Style.limitTitle}>
            <Text style={Style.limitTitleText}>Debit card spending limit</Text>
            <Text style={Style.limitValue}>
              <Text style={Style.activeValue}>$345</Text> | $5,000
            </Text>
          </View>
          <Slider
            value={3}
            maximumValue={10}
            minimumValue={0}
            step={1}
            maximumTrackTintColor="#01d16733"
            minimumTrackTintColor="#01D167"
            allowTouchTrack
            trackStyle={Style.trackStyle}
            thumbStyle={Style.thumbStyle}
          />
        </View>
        <View style={Style.listContainer}>
          {list.length > 0 &&
            list.map((i, idx) => (
              <ListItem key={i.id}>
                <Avatar source={i.icon} />
                <ListItem.Content>
                  <ListItem.Title style={Style.listTitle}>
                    {i.title}
                  </ListItem.Title>
                  <ListItem.Subtitle style={Style.listSubTitle}>
                    {i.subTitle}
                  </ListItem.Subtitle>
                </ListItem.Content>
                {i.rightIcon && i.rightIcon === 'toggle' ? (
                  <Switch
                    value={i.checked}
                    onValueChange={() => handleChange(idx)}
                  />
                ) : null}
              </ListItem>
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

const Style = StyleSheet.create({
  balanceContainer: {
    backgroundColor: '#0C365A',
    paddingHorizontal: 15,
    paddingVertical: 30,
    flex: 0.3,
  },
  title: {
    fontWeight: '500',
    fontSize: 14,
    color: '#fff',
    marginBottom: 10,
  },
  subTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    lineHeight: 33,
  },
  balanceBadge: {
    backgroundColor: '#01D167',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  balance: {
    fontWeight: '600',
    fontSize: 24,
    color: '#fff',
    paddingLeft: 10,
  },
  scrollView: {
    backgroundColor: '#fff',
    overflow: 'visible',
    // paddingBottom: 140,
  },
  scrollContentContainer: {
    flexGrow: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 15,
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '-8%',
    // marginBottom: 200,
  },
  hideContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingHorizontal: 14,
    paddingTop: 8,
    paddingBottom: 13,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    top: '-20%',
  },
  hideText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#01D167',
    marginLeft: 6,
  },
  cardContainer: {
    backgroundColor: '#01D167',
    borderRadius: 8,
    lineHeight: 220,
    paddingVertical: 24,
    paddingHorizontal: 24,
    marginTop: -80,
    position: 'relative',
    marginBottom: 24,
  },
  logo: {
    alignSelf: 'flex-end',
  },
  userName: {
    marginVertical: 24,
    fontSize: 22,
    fontWeight: '600',
    color: '#fff',
  },
  cardNumber: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 15,
  },
  cardDetail: {
    flexDirection: 'row',
  },
  cardDetailText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '400',
  },
  listTitle: {
    color: '#25345F',
    fontSize: 14,
    fontWeight: '500',
  },
  listSubTitle: {
    color: '#c4c4c4',
    fontSize: 13,
  },
  limitTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  limitTitleText: {
    fontSize: 13,
    color: '#222222',
    fontWeight: '400',
  },
  limitValue: {
    color: '#22222233',
    fontSize: 13,
    fontWeight: '400',
  },
  activeValue: {
    color: '#01D167',
    fontWeight: '600',
  },
  trackStyle: {
    height: 15,
    backgroundColor: 'transparent',
    borderRadius: 30,
  },
  thumbStyle: {height: 20, width: 20, backgroundColor: 'transparent'},
  slideContainer: {marginBottom: 0},
  listContainer: {marginBottom: 150},
});

export default DebitCardScreen;
