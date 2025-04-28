// This is also the final code for the StudentList component with image modal functionality.
import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator, Modal, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = async () => {
    try {
      const URL = 'https://project.pisofterp.com/pipl/restworld/getAllCollegeStudents';
      const response = await fetch(URL);
      const data = await response.json();
      console.log("Fetched Students:", data);
      setStudents(data);
    } catch (error) {
      console.log("Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => {
    let imageSource = null;
    if (item.studentProfilePic) {
      if (item.studentProfilePic.startsWith('http')) {
        imageSource = { uri: item.studentProfilePic };
      } else {
        imageSource = { uri: `data:image/jpeg;base64,${item.studentProfilePic}` };
      }
    }

    return (
      <View style={styles.card}>
        {imageSource && (
          <Pressable onPress={() => setSelectedImage(imageSource)}>
            <Image
              source={imageSource}
              style={styles.profileImage}
            />
          </Pressable>
        )}
        <View style={styles.info}>
          <Text style={styles.name}>Name: {item.name}</Text>
          <Text>Email: {item.email}</Text>
          <Text>Contact: {item.contact}</Text>
        </View>
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading Students...</Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={students}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />

      {/* Modal for full-screen image */}
      <Modal visible={selectedImage !== null} transparent animationType="fade">
        <Pressable style={styles.modalBackground} onPress={() => setSelectedImage(null)}>
          <View style={styles.modalContent}>
            <Image source={selectedImage} style={styles.fullImage} />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    marginVertical: 8,
    padding: 10,
    borderRadius: 8,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ccc',
  },
  info: {
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)', // blur dark background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: 'hidden', // circular clipping
  },
  fullImage: {
    width: '100%',
    height: '100%',
  },
});

export default StudentList;
