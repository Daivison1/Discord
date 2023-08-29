import * as React from 'react'
import {Text, View, StyleSheet, ImageBackground, TextInput, TouchableOpacity,CheckBox, Alert} from 'react-native';
import firebase from "firebase/app";
import {firebaseConfig} from "../firebaseConfig";
export default class Register extends React.Component {
   constructor (props){
    super(props)
    this.state={
      email:"",
      name:"", 
      password:"",
      confirmPassword:"",
      checkBox:false
    };
  }
  registerUser=( email, name, password, confirmPassword )=>{
    console.log("butaoFuncionando")
    if(password==confirmPassword){
      firebase
        .auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential)=>{
          Alert.alert("usuario cadastrado")
          this.props.navigator.replace("Login")
          firebase.database().ref("/users/"+userCredential.user.uid)
            .set({
              email:userCredential.user.email,
              name:name

            })
        })
        .catch(error=>{
          Alert.alert(error.menssage)
        })
    }
    else{
      Alert.alert("as senhas não são iguais")
    }
  }
  render(){
    const {email,name,password,confirmPassword}=this.state
  return (


<View style={styles.container }>
<ImageBackground source={require("../assets/discord-gaming-community-vector-8bj6he46773yglph.jpg")} style={styles.imageBackgroud}>
<View style={styles.image}> 

<Text style={styles.criarumaconta}>
Crie sua conta
</Text>

<Text style={styles.caixatexto}>E-MAIL OU NUMERO DE TELEFONE</Text> 
<TextInput  
style={styles.caixadetexto}
onChangeText={text=>this.setState({email:text})}/>

<Text style={styles.caixatexto}>NOME DE USUARIO</Text>
<TextInput 
style={styles.caixadetexto}
onChangeText={text=>this.setState({name:text})}/>

<Text style={styles.caixatexto}>SENHA</Text>
<TextInput  
style={styles.caixadetexto}
onChangeText={text=>this.setState({password:text})}/>

<Text style={styles.caixatexto}>CONFIRMAR SENHA</Text>
<TextInput  
 style={styles.caixadetexto}
 onChangeText={text=>this.setState({confirmPassword:text})}/>

<View style={styles.pos}>
<View style={styles.textocaixinha}>
                <View style={styles.espacocaixa}>
                <CheckBox style={styles.caixinha}/>
                
                </View>
                <View style={styles.espacodotexto}>
                <Text style={styles.info}>(Opcional) Tudo bem me mandar e-mails com atualizações do Discord, dicas e ofertas especiais. Você pode mudar isso a qualquer momento. </Text>
                </View>
                </View>


<TouchableOpacity onPress={()=>this.registerUser(email, name, password, confirmPassword)} style={styles.butaofundo}>
<Text style={styles.butao}>continuar</Text>
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
backgroundColor:"White",



},
caixadetexto:{
  backgroundColor:"#E8E8E8",
  width:235,
  height:20,
  borderRadius:3,
  alignSelf:"center"

},
butao:{
  color: "white",
 fontWeight:"bold"
 

},
butaofundo:{
   backgroundColor: "#1C86EE",
   width: 235,
   margin: 20,
   height: 20,
   borderRadius: 3,
   justifyContent:"center",
   alignItems:"center",

   
},
imageBackgroud:{
 width:'100%',
 height:'100%',
 justifyContent:"center"
},

image:{
backgroundColor:"#1C1C1C",
width:280,
height: 420,
borderRadius: 5,
alignSelf:"center"

},
criarumaconta:{
alignSelf:"center",
fontWeight:"bold",
fontSize: 20,

},
caixatexto:{
marginLeft:25,
marginTop:25,
fontWeight:"bold"

},

textocaixinha:{
flexDirection:"row",
marginTop:20,

},
espacocaixa:{
width:10,
marginLeft:20,
marginRight:10,

},
espacodotexto:{
width:220,

},
info:{
textAlign:"justify",
fontSize:10

},
pos:{
marginTop:20,

},


});