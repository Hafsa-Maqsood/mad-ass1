import React from 'react'
import { View,Text, Button } from 'react-native'
export default function aboutus({navigation}) {
  return (
   <>
    <View>
        <Text>Heelo I am about us page</Text>
        <Button onPress={()=> navigation.navigate('Contact')}  title='Go to About Page'/> 
    </View>
   </>
  )
}
