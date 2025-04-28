import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
//import ProductListings from './productListings';
import StudentList from './studentList';



const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Hello from fetch API</Text> */}
      {/* <ProductListings/> */}
      <StudentList/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
    },

});


export default Index;

