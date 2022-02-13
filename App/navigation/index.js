import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Image} from 'react-native';
import DebitCardScreen from '../screen/debitCard';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
    </View>
  );
};
const PaymentScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>PaymentScreen</Text>
    </View>
  );
};
const CreditScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>CreditScreen</Text>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Debit Card"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let icon = null;
          if (route.name === 'Home') {
            icon = require('../assets/icons/home.png');
          } else if (route.name === 'Debit Card') {
            icon = require('../assets/icons/pay.png');
          } else if (route.name === 'Payments') {
            icon = require('../assets/icons/Payments.png');
          } else if (route.name === 'Credit') {
            icon = require('../assets/icons/Credit.png');
          } else if (route.name === 'Profile') {
            icon = require('../assets/icons/Account.png');
          }

          // You can return any component that you like here!
          return <Image source={icon} style={{tintColor: color}} />;
        },
        tabBarActiveTintColor: '#01D167',
        tabBarInactiveTintColor: '#DDDDDD',
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Debit Card" component={DebitCardScreen} />
      <Tab.Screen name="Payments" component={PaymentScreen} />
      <Tab.Screen name="Credit" component={CreditScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;
