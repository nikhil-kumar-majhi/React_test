import React from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native'

 const Info= ({ navigation }) =>{
    return (
        <View>
           
   <Text>I'm back</Text>
   <Button style={styles.style}onPress={() => navigation.navigate("Main")} 
      title="Reg"/>
        </View>
    )
}
export default Info
const styles = StyleSheet.create({
    style:{
        top: 100,
    }
})
