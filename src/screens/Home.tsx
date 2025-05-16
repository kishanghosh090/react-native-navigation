import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

// React native navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import ProductItem from '../components/ProductItem';
import Seprator from '../components/Seprator';
// data
import {PRODUCTS_LIST} from '../data/constants';
import {SafeAreaView} from 'react-native-safe-area-context';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
const Home = ({navigation}: HomeProps) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={PRODUCTS_LIST}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={Seprator}
          renderItem={({item}) => (
            <Pressable
              onPress={() => navigation.navigate('Details', {product: item})}>
              <ProductItem product={item} />
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});
export default Home;
