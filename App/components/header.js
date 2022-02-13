import React from 'react';
import {Header} from 'react-native-elements';
import {Text, StyleSheet, Image} from 'react-native';

const AppHeader = ({title}) => {
  return (
    <Header
      backgroundColor="#0C365A"
      leftComponent={<Text style={Style.title}>{title}</Text>}
      rightComponent={
        <Image
          source={require('../assets/icons/home.png')}
          style={Style.image}
        />
      }
      leftContainerStyle={Style.leftContainer}
      rightContainerStyle={Style.rightContainer}
      containerStyle={Style.container}
    />
  );
};

const Style = StyleSheet.create({
  container: {borderBottomWidth: 0},
  leftContainer: {flex: 3, paddingLeft: 10},
  rightContainer: {paddingRight: 10},
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
  image: {
    tintColor: '#01D167',
  },
});

export default AppHeader;
