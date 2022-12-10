import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Sanak = () => {
  return (
    <View style={styles.container}>
      <Text>Санақ</Text>
    </View>
  )
}

export default Sanak

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})