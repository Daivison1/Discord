import * as React from 'react'
import {Text, View,TextInput, Image, ImageBackground, TouchableOpacity, StyleSheet, SafeAreaView, FlatList } from 'react-native';
const DATA=[
    
   {id:"iQWkCtd2NVEkHnbpH3hLMqFOS4eYjt9Q",
  title:"title",
  },
  
   {id:"DHyidOfPCIkQ7iLyVEDk1ymwAqpr6o8U",
  title:"title",
  },
   
   { id:"JgQ5xDSC2czeB95ivbdjbA4WPtzuzVV4",
  title:"title",
   },
   
   {id:"NWsZicjBBi9hUD4zzBGUoz1pO6IGz0FT",
  title:"title",
   }, 
  
  {id:"3XQqxeFc0QzA1sxovRDan5AZITNXphw5",
  title:"title",
   },
]
const Item=({title})=>(
  <View style={styles.balaoDoChat}>
  <Text style={styles.caixaTextoNome}>Davi</Text>
  <Text style={styles.textoBalaoMensagem}>{title}</Text>
  </View>
)
export default class Chat extends React.Component {

  goToLogin=()=>{
   this.props.navigation.navigate('Login')
 }


  render (){
  return (

    

     <View style={styles.container}>
     <ImageBackground source={require("../assets/discord-gaming-community-vector-8bj6he46773yglph.jpg")} style={styles.imageBackground}>

     <View style={styles.butaoexit}>
     <TouchableOpacity  onPress={this.goToLogin} style={styles.butaosaida}> 
     <Text>exit</Text>
     </TouchableOpacity>

     </View>
     <View style={styles.caixafundo}>

          
      <FlatList data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
       />
      </View>
     

     <View style={styles.mensagem}>
     <TextInput style={styles.caixatexto}placeholder="digite sua mensagem " />

     <TouchableOpacity style={styles.butao}>

        <Text style={styles.texto}>enviar</Text>

     </TouchableOpacity>
    
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
caixatexto:{
  backgroundColor:"#E8E8E8",
  width:'80%',
  height:60,
  borderRadius:20,
  padding:13,
  marginRight:10,


},
 imageBackground:{
width:"100%",
height:"100%",


},
butao:{
backgroundColor:"#2E8B57",
height:55,
width:60,
borderRadius:15,
justifyContent:"center",


},
texto:{
alignSelf:"center",


},
mensagem:{
flexDirection:"row",
backgroundColor:"#1C1C1C",
height:"15%",
alignItems:"center"


},
caixafundo:{
height:"85%"


},
balaoDoChat:{
backgroundColor:"#F0FFFF",
marginTop:25,
width:300,
height:40,
borderRadius:5,
alignSelf:"center"


},
caixaTextoNome:{
backgroundColor:"#27408B",
borderRadius:100,
marginRight:220,
paddingLeft:4


},
textoBalaoMensagem:{
paddingLeft:6,

},
butaosaida:{
backgroundColor:"red",
borderRadius:100,
width:40,
alignItems:"center"


},
butaoexit:{
flexDirection:"row",
justifyContent:"end"


}


 


});



