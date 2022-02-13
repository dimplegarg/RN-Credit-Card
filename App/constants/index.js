export const listData = [
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

export const AVAILABLE_BALANCE = 'Available balance';
export const S$_LABEL = 'S$';
export const BALANCE_AMOUNT = '3,000';
export const HIDE_CARD_NUMBER = 'Hide card number';
export const DEBIT_CARD_SPENDING_LIMIT = 'Debit card spending limit';
export const TOGGLE = 'toggle';
