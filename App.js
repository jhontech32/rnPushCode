import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import codePush from 'react-native-code-push'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_START }

class App extends Component {
  componentDidMount () {
    this.codePushSync()
  }

  codePushSync = () => {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>This app push code testing !</Text>
      </View>
    )
  }
}
export default codePush(codePushOptions)(App)
