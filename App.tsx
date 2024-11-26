/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainStackParamList} from './src/types/navigation';
import Home from './src/pages/Home';
import {screenHeight, screenWidth} from './src/utils/Sizes';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      // staleTime: 5 * 60 * 1000,
    },
  },
});

const MainStack = createBottomTabNavigator<MainStackParamList>();

interface User {
  focused?: any;
}

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <MainStack.Navigator
          screenOptions={{
            tabBarStyle: {
              height: screenHeight(0.099),
              paddingTop: screenHeight(0.02),
            },
          }}>
          <MainStack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              tabBarLabel: ({focused}: User) => (
                <Text
                  style={{
                    fontSize: screenWidth(0.039),
                    color: focused ? Colors.DARK_GREY : Colors.OTHER_GREY,
                  }}>
                  Home
                </Text>
              ),
            }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
