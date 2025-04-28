// import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator } from 'react-native';
// import React, { useEffect, useState } from 'react';

// const StudentList = () => {
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getStudents();
//   }, []);

//   const getStudents = async () => {
//     try {
//       const URL = 'https://project.pisofterp.com/pipl/restworld/getAllCollegeStudents';
//       const response = await fetch(URL);
//       const data = await response.json();
//       console.log("Fetched Students:", data);
//       setStudents(data);
//     } catch (error) {
//       console.log("Error fetching students:", error);
//     } finally {
//       setLoading(false);
//     }
//   };



// const renderItem = ({ item }) => (
//     <View style={styles.card}>
//       {item.studentProfilePic ? (
//         <Image
//           source={{ uri: item.studentProfilePic }}
//           style={styles.profileImage}
//         />
//       ) : null}
//       <View style={styles.info}>
//         <Text style={styles.name}>Name: {item.name}</Text>
//         <Text>Email: {item.email}</Text>
//         <Text>Contact: {item.contact}</Text>
//       </View>
//     </View>
//   );

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#0000ff" />
//         <Text>Loading Students...</Text>
//       </View>
//     );
//   }

//   return (
//     <FlatList
//       data={students}
//       keyExtractor={(item, index) => index.toString()}
//       renderItem={renderItem}
//       contentContainerStyle={styles.listContainer}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   listContainer: {
//     padding: 10,
//   },
//   card: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#e0e0e0',
//     marginVertical: 8,
//     padding: 10,
//     borderRadius: 8,
//   },
//   profileImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: '#ccc',
//   },
//   info: {
//     marginLeft: 10,
//   },
//   name: {
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   loadingContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default StudentList;






// Final code
// import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator } from 'react-native';
// import React, { useEffect, useState } from 'react';

// const StudentList = () => {
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getStudents();
//   }, []);

//   const getStudents = async () => {
//     try {
//       const URL = 'https://project.pisofterp.com/pipl/restworld/getAllCollegeStudents';
//       const response = await fetch(URL);
//       const data = await response.json();
//       console.log("Fetched Students:", data);
//       setStudents(data);
//     } catch (error) {
//       console.log("Error fetching students:", error);
//     } finally {
//       setLoading(false);
//     }
//   };




// // const renderItem = ({ item }) => (
    
    
// //     <View style={styles.card}>
// //       {item.studentProfilePic ? (
// //         <Image
// //           source={{ uri: item.studentProfilePic }}
// //           style={styles.profileImage}
// //         />
// //       ) : null}
  
// //       <View style={styles.info}> {/* ye View hamesha hona chahiye */}
// //         <Text style={styles.name}>Name: {item.name}</Text>
// //         <Text>Email: {item.email}</Text>
// //         <Text>Contact: {item.contact}</Text>
// //       </View>
// //     </View>
// //   );





// const renderItem = ({ item }) => {
//     let imageSource = null;
  
//     if (item.studentProfilePic) {
     
//       if (item.studentProfilePic.startsWith('http')) {
//         imageSource = { uri: item.studentProfilePic };
//       } 
      
//       else {
//         imageSource = { uri: `data:image/jpeg;base64,${item.studentProfilePic}` };
//       }
//     }
  
//     return (
//       <View style={styles.card}>
//         {imageSource && (
//           <Image
//             source={imageSource}
//             style={styles.profileImage}
//           />
//         )}
  
//         <View style={styles.info}>
//           <Text style={styles.name}>Name: {item.name}</Text>
//           <Text>Email: {item.email}</Text>
//           <Text>Contact: {item.contact}</Text>
//         </View>
//       </View>
//     );
//   };
  
  
  

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#0000ff" />
//         <Text>Loading Students...</Text>
//       </View>
//     );
//   }

// return (
//     <View style={{flex: 1}}>
//       <FlatList
//         data={students}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={renderItem}
//         contentContainerStyle={styles.listContainer}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   listContainer: {
//     padding: 10,
//   },
//   card: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#e0e0e0',
//     marginVertical: 8,
//     padding: 10,
//     borderRadius: 8,
//   },
//   profileImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: '#ccc',
//   },
//   info: {
//     marginLeft: 10,
//   },
//   name: {
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   loadingContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default StudentList;





// import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator, Modal, TouchableOpacity } from 'react-native';
// import React, { useEffect, useState } from 'react';

// const StudentList = () => {
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedImage, setSelectedImage] = useState(null); // To store selected image URL
//   const [modalVisible, setModalVisible] = useState(false); // To control Modal visibility

//   useEffect(() => {
//     getStudents();
//   }, []);

//   const getStudents = async () => {
//     try {
//       const URL = 'https://project.pisofterp.com/pipl/restworld/getAllCollegeStudents';
//       const response = await fetch(URL);
//       const data = await response.json();
//       console.log("Fetched Students:", data);
//       setStudents(data);
//     } catch (error) {
//       console.log("Error fetching students:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleImageClick = (imageUri) => {
//     setSelectedImage(imageUri);
//     setModalVisible(true); // Show modal on image click
//   };

//   const renderItem = ({ item }) => {
//     let imageSource = null;

//     if (item.studentProfilePic) {
//       if (item.studentProfilePic.startsWith('http')) {
//         imageSource = { uri: item.studentProfilePic };
//       } else {
//         imageSource = { uri: `data:image/jpeg;base64,${item.studentProfilePic}` };
//       }
//     }

//     return (
//       <View style={styles.card}>
//         {imageSource && (
//           <TouchableOpacity onPress={() => handleImageClick(imageSource.uri)}>
//             <Image
//               source={imageSource}
//               style={styles.profileImage}
//             />
//           </TouchableOpacity>
//         )}

//         <View style={styles.info}>
//           <Text style={styles.name}>Name: {item.name}</Text>
//           <Text>Email: {item.email}</Text>
//           <Text>Contact: {item.contact}</Text>
//         </View>
//       </View>
//     );
//   };

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#0000ff" />
//         <Text>Loading Students...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={{ flex: 1 }}>
//       <FlatList
//         data={students}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={renderItem}
//         contentContainerStyle={styles.listContainer}
//       />

//       {/* Modal to display image in full screen */}
//       <Modal
//         visible={modalVisible}
//         animationType="fade"
//         transparent={true}
//         onRequestClose={() => setModalVisible(false)} // Close the modal on back press
//       >
//         <View style={styles.modalContainer}>
//           <TouchableOpacity style={styles.modalCloseButton} onPress={() => setModalVisible(false)}>
//             <Text style={styles.modalCloseText}>X</Text>
//           </TouchableOpacity>
//           <Image source={{ uri: selectedImage }} style={styles.modalImage} />
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   listContainer: {
//     padding: 10,
//   },
//   card: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#e0e0e0',
//     marginVertical: 8,
//     padding: 10,
//     borderRadius: 8,
//   },
//   profileImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: '#ccc',
//   },
//   info: {
//     marginLeft: 10,
//   },
//   name: {
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   loadingContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//   },
//   modalImage: {
//     width: '90%',
//     height: '80%',
   
//     resizeMode: 'contain',
//   },
//   modalCloseButton: {
//     position: 'absolute',
//     top: 40,
//     right: 20,
//     backgroundColor: '#fff',
//     borderRadius: 20,
//     padding: 10,
//   },
//   modalCloseText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#000',
//   },
// });

// export default StudentList;


// This is the final code for the StudentList component with image modal functionality.
// import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator, Modal, TouchableOpacity } from 'react-native';
// import React, { useEffect, useState } from 'react';

// const StudentList = () => {
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedImage, setSelectedImage] = useState(null); // To store selected image URL
//   const [modalVisible, setModalVisible] = useState(false); // To control Modal visibility

//   useEffect(() => {
//     getStudents();
//   }, []);

//   const getStudents = async () => {
//     try {
//       const URL = 'https://project.pisofterp.com/pipl/restworld/getAllCollegeStudents';
//       const response = await fetch(URL);
//       const data = await response.json();
//       console.log("Fetched Students:", data);
//       setStudents(data);
//     } catch (error) {
//       console.log("Error fetching students:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleImageClick = (imageUri) => {
//     setSelectedImage(imageUri);
//     setModalVisible(true); // Show modal on image click
//   };

//   const renderItem = ({ item }) => {
//     let imageSource = null;

//     if (item.studentProfilePic) {
//       if (item.studentProfilePic.startsWith('http')) {
//         imageSource = { uri: item.studentProfilePic };
//       } else {
//         imageSource = { uri: `data:image/jpeg;base64,${item.studentProfilePic}` };
//       }
//     }

//     return (
//       <View style={styles.card}>
//         {imageSource && (
//           <TouchableOpacity onPress={() => handleImageClick(imageSource.uri)}>
//             <Image
//               source={imageSource}
//               style={styles.profileImage}
//             />
//           </TouchableOpacity>
//         )}

//         <View style={styles.info}>
//           <Text style={styles.name}>Name: {item.name}</Text>
//           <Text>Email: {item.email}</Text>
//           <Text>Contact: {item.contact}</Text>
//         </View>
//       </View>
//     );
//   };

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#0000ff" />
//         <Text>Loading Students...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={{ flex: 1 }}>
//       <FlatList
//         data={students}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={renderItem}
//         contentContainerStyle={styles.listContainer}
//       />

     
//       <Modal
//         visible={modalVisible}
//         animationType="fade"
//         transparent={true}
//         onRequestClose={() => setModalVisible(false)} // Close the modal on back press
//       >
//         <View style={styles.modalContainer}>
//           <TouchableOpacity style={styles.modalCloseButton} onPress={() => setModalVisible(false)}>
//             <Text style={styles.modalCloseText}>X</Text>
//           </TouchableOpacity>
//           <View style={styles.imageContainer}>
//             <Image source={{ uri: selectedImage }} style={styles.modalImage} />
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   listContainer: {
//     padding: 10,
//   },
//   card: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#e0e0e0',
//     marginVertical: 8,
//     padding: 10,
//     borderRadius: 8,
//   },
//   profileImage: {
    
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: '#ccc',
//   },
//   info: {
//     marginLeft: 10,
//   },
//   name: {
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   loadingContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.7)', // Blur the background
//   },
//   modalCloseButton: {
//     position: 'absolute',
//     top: 40,
//     right: 20,
//     backgroundColor: '#fff',
//     borderRadius: 20,
//     padding: 10,
//   },
//   modalCloseText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   imageContainer: {
//     // width: '100%',
//     // height: '100%',
//     width: 300,
//     height: 300,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 150, // Full circle for image container
//     overflow: 'hidden', 
//   },
//   modalImage: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
// });

// export default StudentList;