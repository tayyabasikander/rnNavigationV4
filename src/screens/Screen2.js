import React from 'react'
 import {View,Text,StyleSheet,Button} from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'

 class Screen2 extends React.Component{
     render(){
         return(
             <View style={s.container}>
                 <Text>Screen2</Text>
                 <Button title='Main' 
                 onPress={()=>this.props.navigation.navigate('Main')}
                 />
             </View>
         )
     }
 }
 const s = StyleSheet.create({
     container:{
         flex:1,
         justifyContent:'center',
         alignSelf:'center'
     }
 })
 export default Screen2