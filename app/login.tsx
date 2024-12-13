import { View , Text, StyleSheet, TextInput, Image,} from "react-native";
import { Link } from "expo-router";
export default function Login() {
    return (
        <View
        style={{
            flex: 1,
            backgroundColor:'white',
            padding:10,
            alignContent:'center',
            alignItems:'center',

          }}
        >
            <Text style={styles.title}>Login Here</Text>
            <Text style={styles.subtitle}>Welcome back you're been missed !</Text>
            <TextInput placeholder="Email" style={styles.input} ></TextInput>
            <TextInput placeholder="Password"  secureTextEntry style={styles.input} ></TextInput>
            <Text style={styles.password}>Forgot password ?</Text>
          <View style={styles.button}>
             <Link href="/accueil"  style={styles.text}>Sign in</Link>
          </View>
          <View style={styles.button1}>
             <Link href="/register" style={styles.text1}>Create new account </Link>
          </View>
          <Text style={styles.text2}>Or continue with </Text>

         <View style={styles.bordu}>
            <View style={styles.bord}>
            <Image  style = {styles.image} source= {require("@/assets/images/f.png")}/>
            </View>
            <View style={styles.bords}>
            <Image  style = {styles.image} source= {require("@/assets/images/g.png")}/>
            </View>
         </View>

        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize:28,
        fontWeight:'bold',
        color:'#0F6EFE',
        textAlign:'center',
    
  
    },
    subtitle:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
        maxWidth:'70%',
        padding:'10%',

    },
    input:{
        backgroundColor: '#F4F6F8',
        width:'95%',
        borderRadius:8,
        marginVertical:12,
        paddingHorizontal:10,
        height:50,
        borderColor:'#0F6EFE',
        borderWidth:1,
        

    },
    password:{
        color:'#0F6EFE',
        left:'30%',
        fontWeight: 'bold'
        
    },
    
    button:{
        backgroundColor:'#0F6EFE',
        paddingVertical: 10,
        paddingHorizontal:20,
        width:'95%',
        borderRadius:8,
        top:30,
        textAlign:'center',
        fontWeight:'bold',
        fontSize:16, 
        height:60,
        shadowColor:'#90CAF9',
        shadowOffset:{
            width:0, 
            height:0

        },
        shadowOpacity:0.3,
        shadowRadius:8

    },
    button1:{
        paddingVertical: 10,
        paddingHorizontal:20,
        width:'95%',
        borderRadius:8,
        top:30,
        textAlign:'center',
        fontWeight:'bold',
        fontSize:16, 
        height:60,
        shadowColor:'#90CAF9',
        shadowOffset:{
            width:0, 
            height:0

        },
        shadowOpacity:0.3,
        shadowRadius:8

    },
    text:{
        textAlign:'center',
        color:'white',
        fontWeight: 'bold',
        fontSize:18,
        top:5

    },
    text1:{
        textAlign:'center',
        color:'black',
        fontWeight: 'bold',
        fontSize:18,
        top:5

    },
    text2:{
        textAlign:'center',
        color:'#0F6EFE',
        fontWeight: 'bold',
        fontSize:16,
        top:30,


    },
    bord:{
        borderWidth:0.3,
        borderColor:'gray',
        padding:5,
        width:40,
        height:40,
        backgroundColor:'#F4F6F8',
        borderRadius:3  

    },
    bords:{
        borderWidth:0.3,
        borderColor:'gray',
        left:20,
        width:40,
        height:40,
        backgroundColor:'#F4F6F8',
        borderRadius:3
    },
    bordu:{
         flexDirection:'row',
         top:'8%',
         paddingHorizontal:10,

    },
    image:{
        width:30,
        height:30,
        textAlign:'center',
        alignItems:'center',
        left:2,
        top:2
       

    },
    })