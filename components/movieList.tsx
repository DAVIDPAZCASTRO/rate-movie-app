import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

import {MovieCard} from './movieCard'

const DATA = [
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'Third Item',
  },
  {
    title: 'Third Item',
  },
  {
    title: 'Third Item',
  },
  {
    title: 'Third Item',
  },

  {
    title: 'Third Item',
  },
  {
    title: 'Third Item',
  },
  {
    title: 'Third Item',
  },
];

function List() {
  return (
    <View style={styles.container}>
    
               
      <FlatList
      horizontal
         style={styles.list}
        data={DATA}
        renderItem={({item}) => <MovieCard title={item.title}></MovieCard>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    height:'100%'
},
list:{
  
},
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})

export default List
