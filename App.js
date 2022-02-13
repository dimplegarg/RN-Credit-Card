import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {SafeAreaView, StatusBar, View, StyleSheet} from 'react-native';
import store from './App/store';
import Navigation from './App/navigation';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

const App = () => {
  return (
    <NavigationContainer>
      <MyStatusBar backgroundColor="#0C365A" barStyle="light-content" />
      <Provider store={store}>
        <Navigation />
      </Provider>
    </NavigationContainer>
  );
};

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
// const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  // appBar: {
  //   backgroundColor: '#79B45D',
  //   height: APPBAR_HEIGHT,
  // },
});

export default App;
