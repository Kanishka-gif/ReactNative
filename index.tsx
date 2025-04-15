import { Text,View } from "react-native";
import { Link } from "expo-router";

const index = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center', backgroundColor:'red'}}>
      <Text style={{fontSize:30, fontWeight:"700" , color: "white"}}>Hello Welcome to my first react native </Text>
      <Link href={"/about"}>Go to about</Link>
    </View>
    
  )
}

export default index;