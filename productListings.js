// import { StyleSheet, Text, View } from 'react-native'
// import React, { useEffect } from 'react'

// const ProductListings = () => {
//     useEffect(()=>{
//         getProducts();
//     }, []);
  
//     const getProducts=()=>{
//         const URL ="https://fakestoreapi.com/products";
//         fetch(URL)
//         .then((res)=>{
//             return res.json();
//         })
//         .then((data)=>{
//             console.log(data);
//         });
//     };
//   return (
//     <View>
//       <Text>Hello from fetch API</Text>
//     </View>
//   )
// }

// export default ProductListings;



import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';

const ProductListings = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

//   const getProducts = () => {
//     const URL = "https://fakestoreapi.com/products";
//     fetch(URL)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Fetched Products:", data); // Console check ke liye
//         setProducts(data);
//       })
//       .catch((error) => {
//         console.log("Error fetching products:", error);
//       });
//   };

const getProducts = () => {
    const URL = "https://fakestoreapi.com/products";
    console.log("Fetching Products from API...");
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Products:", data); // 👈 Check yaha kya print ho raha
        setProducts(data);
      })
      .catch((error) => {
        console.log("Error fetching products:", error); // 👈 Check agar error aaye to
      });
};

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {products.length > 0 ? (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>Type: {item.title}</Text>
              <Text>Price: ₹{item.price}</Text>
            </View>
          )}
        />
      ) : (
        <Text>Loading Products...</Text> // Loading message jab tak data aata
      )}
    </View>
  );
};

export default ProductListings;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});


