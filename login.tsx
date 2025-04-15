// import { View, Text, TextInput,Image } from 'react-native'
// import React, { useState,useEffect } from 'react'
// import MyButton from '../components/MyButton'
// import { useRouter } from 'expo-router'

// const Login = () => {
//     const [value,setValue] = useState("");
//     const [value1,setValue1] = useState("");

//     // USing single state

//     // const [value,setValue]= useState({
//     //     value1:"",
//     //     value2:"",
//     // });

//     // useEffect(()=>{
//     //      console.log("Calling.....");
//     // },[value?.value1])

//     //const onLogin = () => {
//         //console.log(value, value1);
//         //console.log(Number(value) + Number(value1));
//          // console.log(Number(value?.value1) + Number(value?.value2));

//    //}

//     const router = useRouter();
//     const onLogin = () => {
//         // console.log(value, value1);
//         router.navigate("/signup");
//     }
//   return (
//      <View style={{flex:1}}>
//         <Image
//                 source={require("@/assets/images/login.png")}
//                 style={{ width: "100%", height: 400 }}
//                 resizeMode="cover"
//               />
//         <View style={{ padding: 20, gap: 20 }}>
//         <TextInput
//                 placeholder="Enter  Your Email"
//                 style={{
//                   borderWidth: 1,
//                   height: 50,
//                   paddingHorizontal: 20,
//                   borderRadius: 10,
//                 }}
//                 onChangeText={(e) => setValue(e)}
//                 // onChangeText={(e)=> setValue(prev => ({...prev,value1:e}))}
//               />

//               <TextInput
//                 placeholder="Enter  Your Password"
//                 style={{
//                   borderWidth: 1,
//                   height: 50,
//                   paddingHorizontal: 20,
//                   borderRadius: 10,
//                 }}
//                 onChangeText={(e) => setValue1(e)}
//                 // onChangeText={(e)=>setValue(prev => ({...prev,value2:e}))}
//               />

//       <MyButton title={"Login"} onPress={onLogin}/>
//     </View>
//     </View>
//   )
// }

// export default Login;

// Next

// import { View, ScrollView, FlatList, Text } from "react-native";
// import React from "react";

// const Login = () => {
//   return (
//     // <ScrollView
//     //   horizontal
//     //   contentContainerStyle={{ marginTop: 40, padding: 20 }}
//     // >
//     //   {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1].map((item) => {
//     //     return (
//     //       <View
//     //         style={{
//     //           width: 100,
//     //           height: 100,
//     //           backgroundColor: "red",
//     //           marginBottom: 20,
//     //           marginRight: 20,
//     //         }}
//     //       />
//     //     );
//     //   })}
//     // </ScrollView>

//     // Flatlist
//     <View>
//       <FlatList
//         data={[
//           1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 1, 22, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1,
//           2, 1, 22, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 1, 22, 1, 2, 3, 4, 5, 6, 7,
//           8, 9, 1, 2, 1, 22, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 1, 2
//         ]}
//         contentContainerStyle={{ marginTop: 40, padding: 20 }}
//         numColumns={3}
//         ListHeaderComponent={
//           <View
//             style={{ width: 500, height: 40, backgroundColor: "blue" }}
//           ></View>
//         }
//         ListFooterComponent={
//           <View
//             style={{ width: 500, height: 40, backgroundColor: "blue" }}
//           ></View>
//         }
//         renderItem={({ item }) => {
//           // console.log(item.item);
//           return (
//             <View
//               style={{
//                 width: 100,
//                 height: 100,
//                 backgroundColor: "red",
//                 marginBottom: 20,
//                 marginRight: 20,
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <Text>{item}</Text>
//             </View>
//           );
//         }}
//       />
//     </View>
//   );
// };

// export default Login;
