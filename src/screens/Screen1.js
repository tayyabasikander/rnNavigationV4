import React from 'react'
 import {View,Text,StyleSheet,TouchableOpacity,Button} from 'react-native'


 class Screen1 extends React.Component{


    
    
      /* render function, etc */
    
    
     render(){
         return(
             <View style={s.container}>
                 <Text>Screen1</Text>
{/* 
                 <TouchableOpacity onPress={()=>this.props.navigation.navigate('Screen1')} >
                     <Text>Screen2</Text>
                 </TouchableOpacity> */}
                 <Button title='screen2' onPress={()=>this.props.navigation.navigate('Screen2')}/>
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
 export default Screen1