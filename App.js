import * as React from "react"
import Register from "./screens/Register"
import Login from "./screens/Login"
import ChatScrem from "./screens/ChatScrem"
import { initializeApp } from 'firebase/app'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {getAuth, onAuthStateChanged} from "firebase/auth"
import app from "firebaseConfig"



const auth = getAuth(app);
onAuthStateChanged( auth, (user) => {
if (user) {
   const uid = user.uid;
} else {

}
})

const Stack=createStackNavigator()
const StackNavigator=()=>{

  return(

    <Stack.Navigator
      initialRouteName="ChatScrem"
      screenOpitions={{
      headerShow:false,
      gestureEnabled:false,
    }}
    >
      <Stack.Screen name= "Login" component={Login}/>
      <Stack.Screen name= "ChatScrem" component={ChatScrem}/>
      <Stack.Screen name= "Register" component={Register}/>
     
    </Stack.Navigator>
   
  )
}
export default class App extends React.Component  {

render(){
  return(
   <NavigationContainer>
     <StackNavigator/>
   </NavigationContainer>
  );

 }
}
