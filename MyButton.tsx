import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";


const MyButton = ({title = "Click", onPress = () => {} }) => {
  return (
    //  <View >
    //   <Text>Continue</Text>
    //   <Button title="Button"/>

    // </View> */}

    // <View>
    //   <TouchableOpacity
    //     activeOpacity={0.9}
    //     style={{
    //       backgroundColor: "blue",
    //       paddingHorizontal: 40,
    //       paddingVertical: 15,
    //       borderRadius: 10,
    //     }}
    //     onPress={() => alert("Button Pressed")}
    //   >
    //     <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
    //       Continue
    //     </Text>
    //   </TouchableOpacity>
    // </View>


    // Second method


    <View>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.button}
        onPress={onPress}
        
      >
        <Text style={styles.text}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};




export default MyButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "blue",
        paddingHorizontal:40,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    text: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});
