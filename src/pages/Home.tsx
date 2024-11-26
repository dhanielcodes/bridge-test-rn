import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import FormInput from '../components/FormInput';
import SettingsIcon from '../../assets/icons/SettingsIcon';
import {screenWidth} from '../utils/Sizes';
import Colors from '../config/Colors';

function Home(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: Colors.DEFAULT_WHITE,
    flex: 1,
    padding: 14,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.top}>
          <FormInput width={screenWidth(0.72)} name="Daniel" />
          <SettingsIcon />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  top: {
    flexDirection: 'row',
    gap: 10,
    width: screenWidth(0.1),
  },
});

export default Home;
