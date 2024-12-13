import { Link } from "expo-router";
import { Text, View, Image, StyleSheet } from "react-native";
import { SIZES } from "./constants/theme";

export default function Home () {
  return (
    <View
    style={styles.container}
    >
      <Image style={{
        alignItems:'center',
        width: SIZES.width-40,
        height:400,
      }} source= {require("@/assets/images/wel.png")}   />
      <Text style={styles.text}>Discover your Dream Job here</Text>
      <Text style={styles.text1}>Explore all the existing job roles  based or your interest and study major</Text>
     <View style={styles.row}>
        <Link href="/login" style={styles.button} >Login</Link> 
        <Link href="/register" style={styles.button1} >Register</Link>
        <Link href="/accueil" style={styles.button2} >Ignorer et continuer</Link>
     </View>
      


    </View>
  )
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      padding: 10,
      alignContent: "center",
      alignItems: "center",
    },
    text: {
        fontSize:40,
        textAlign:'center',
        fontWeight:'bold',
        color: '#0F6EFE'

    },
    text1:{
        fontSize:16,
        textAlign:'center',
        fontWeight:'bold',
    },
    row:{

        top:30,
        left:30,
        flexDirection:'row',
        alignItems:'center',
        textAlign:'center',

    },
    button:{
        backgroundColor:'#0F6EFE',
        paddingVertical: 10,
        paddingHorizontal:20,
        width:'40%',
        borderRadius:8,
        color:'white',
        left:10,
        top:10,
        textAlign:'center',
        fontWeight:'bold',
        fontSize:16

    },
    button1:{
        flexDirection:'row',
        paddingVertical: 10,
        paddingHorizontal:20,
        width:'40%',
        borderRadius:8,
        color:'black',
        left:20,
        top:10,
        textAlign:'center',
        fontWeight:'bold',
        fontSize:16,
        borderWidth:1,
        borderColor:'#0F6EFE'


    },
    button2:{
      
      fontSize:16,
      textDecorationLine:'underline',
      top:60,
      right:'55%',
      fontWeight:'semibold'

    }
  })
  