import * as React from 'react'
import {Text, View, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Alert} from 'react-native';
import firebase from "firebase/app"
import firebaseConfig from "../firebaseConfig"
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

const auth = getAuth();

export default class Login extends React.Component {

constructor (props){
  super(props)
  this.state={
    email:"",
    password:"",
    userSignedIn:false
  }
} 
createUserWithEmailAndPassword=async(auth, email, password)=>{
  firebase
  .then((userCredenttial) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMenssage = error.message;
  });
}
signIn=async(email,password)=>{
  firebase  
    .auth()
    .signInWithEmailAndPassword(email,password)
    .then(()=>{
      this.props.navigation.replace('Chat')
    })
    .catch(error=>{
      Alert.alert(error.message)
    })

 }
 goToRegister=()=>{
  this.props.navigation.navigate('Register')
 }

  render (){
    const{email,password}=this.state
  return (
<View style={styles.container }>
<ImageBackground source={require("../assets/discord-gaming-community-vector-8bj6he46773yglph.jpg")} style={styles.imageBackground}>
<View style={styles.image}> 

<Text style={styles.criarumaconta}>
Boas-vindas de volta!
</Text>

<Text style={styles.caixatexto}>E-MAIL OU NUMERO DE TELEFONE</Text> 

<TextInput 
 style={styles.caixadetexto}
 onChangeText={text=>this.setState({
   email:text
 })}
 />

<Text style={styles.caixatexto}>SENHA</Text>

<TextInput  
style={styles.caixadetexto}
onChangeText={text=>this.setState({
 password:text
})}
secureTextEntry
 
/>
<TouchableOpacity>

<Text style={styles.esqueceusenha}>esqueceu a suna senha</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.butaofundo}onPress={()=>this.signIn(email,password)}>
<Text style={styles.butao}>Entrar</Text>
</TouchableOpacity>

<View>
<Text style={styles.precisadeconta}>precisa de uma conta?</Text>
<TouchableOpacity onPress={this.goToRegister}>
<Text style={styles.registro}>registre-se</Text>
</TouchableOpacity>
</View>

</View>
</ImageBackground>
</View>



 );
}
}

const styles = StyleSheet.create({
  container:{
  flex:1,
  
  
  
  
  },
  caixadetexto:{
      backgroundColor:"#E8E8E8",
      width:480,
     height:40,
      borderRadius:3,
     margin:1,
     alignSelf:"center"
  
  },
  butao:{
     color: "white",
      fontWeight:"bold"
   
  
  },
  butaofundo:{
     backgroundColor: "#1C86EE",
     width: 480,
     margin: 60,
     height: 40,
     borderRadius: 3,
     justifyContent:"center",
     alignItems:"center",
  
  },
  
  image:{
      backgroundColor:"#1C1C1C",
      width:600,
      height:400,
      borderRadius: 15,
      alignSelf:"center",
      justifyContent:"center"
  
  },
      criarumaconta:{
      alignSelf:"center",
      fontWeight:"bold",
      fontSize: 20,
  
  },
      caixatexto:{
      marginLeft:60,
      marginTop:30,
      fontWeight:"bold"
  
  },
      precisadeconta:{
      color:'#1E90FF',
      marginLeft:60,
  
  
  },
      registro:{
      color:'#696969',
      marginLeft:60,
  
  },
      esqueceusenha:{
      marginLeft:60,
      color:'#1E90FF',
  
  
  },
  imageBackground:{
   height:'100%',
   justifyContent:'center',

  }
  
  });