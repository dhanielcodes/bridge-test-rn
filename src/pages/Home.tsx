/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import FormInput from '../components/FormInput';
import SettingsIcon from '../../assets/icons/SettingsIcon';
import {screenHeight, screenWidth} from '../utils/Sizes';
import Colors from '../config/Colors';
import {ApiService} from '../service';
import {useQuery} from '@tanstack/react-query';
import ItemCard from '../components/ItemCard';
import ProductCard from '../components/ProductCard';

function Home(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: Colors.DEFAULT_WHITE,
    flex: 1,
    padding: 16,
  };

  const {data: array} = useQuery({
    queryKey: ['GetProductsQuery'],
    queryFn: () => ApiService.GetProductsQuery(),
  });

  const {data: arrayCategory} = useQuery({
    queryKey: ['GetProductsCategoryQuery'],
    queryFn: () => ApiService.GetProductsCategoryQuery(),
  });

  const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
  const data = array?.map((item?: any) => {
    return {
      ...item,
      color: generateRandomColor(),
    };
  });

  const categories = arrayCategory?.map((item?: string) => {
    return {
      title: item,
      color: generateRandomColor(),
    };
  });

  console.log(data);

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
        <View style={styles.searchTop}>
          <Text style={styles.searchText}>Search History</Text>
          <Text style={styles.clearText}>clear</Text>
        </View>
        <View style={styles.historyTab}>
          <View style={styles.historyTabItem}>
            <Text style={styles.historyTabText}>Others</Text>
          </View>
          <View style={styles.historyTabItem}>
            <Text style={styles.historyTabText}>Others</Text>
          </View>

          <View style={styles.historyTabItem}>
            <Text style={styles.historyTabText}>Others</Text>
          </View>
          <View style={styles.historyTabItem}>
            <Text style={styles.historyTabText}>Others</Text>
          </View>
        </View>
        <View style={styles.cardDisplaySection}>
          {categories?.map(
            (item?: {title: string; image: string; color: string}) => {
              return (
                <View key={item?.title} style={styles.cardDisplayTab}>
                  <ItemCard
                    title={item?.title}
                    image={item?.image}
                    color={item?.color}
                  />
                </View>
              );
            },
          )}
        </View>

        <View style={styles.cardDisplaySection}>
          {data?.map(
            (item?: {
              title: string;
              image: string;
              color: string;
              price: string;
              description: string;
            }) => {
              return (
                <View key={item?.title} style={styles.cardDisplayProduct}>
                  <ProductCard
                    title={item?.title}
                    image={item?.image}
                    amount={item?.price}
                    desc={item?.description}
                  />
                </View>
              );
            },
          )}
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
    width: '100%',
  },
  searchTop: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: screenHeight(0.04),
  },
  searchText: {
    fontFamily: 'Poppins-Bold',
  },
  clearText: {
    color: Colors.DEFAULT_YELLOW,
    fontFamily: 'Poppins-Light',
  },
  historyTab: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  historyTabItem: {
    width: '20%',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  historyTabText: {
    color: Colors.DEFAULT_GREY,
    fontFamily: 'Poppins-Medium',
    fontSize: screenWidth(0.026),
  },
  cardDisplaySection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 14,
    justifyContent: 'space-around',
  },
  cardDisplayTab: {
    aspectRatio: 1,
    width: '47%',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  cardDisplayProduct: {
    aspectRatio: 0.7,
    width: '47%',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default Home;
