import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>This app push code testing !</Text>
      </View>
    )
  }
}
export default App
