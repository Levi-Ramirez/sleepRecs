import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
// import { auth } from '../firebase'

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const signUp = () => {
    auth.createUserWithEmailAndPassword(email, password)
  }

  const nav = useNavigation()
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    })
  }, [])

  return (


    // keyboard won't cover input fields

    <KeyboardAvoidingView
      style={styles.container}
      behavior='padding'
    >
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>SideQuest</Text>
      </View>

      <View style={styles.introContainer}>
        <Text style={styles.introText}>Welcome Aboard</Text>
      </View>

      <View style={styles.inputContainer}>
      <TextInput
          placeholder='Username'
          value={username}
          onChangeText={text => setUsername(text)}
          style={styles.input}
          placeholderTextColor={'#D90429'}
        />
        <TextInput
          placeholder='Email'
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
          placeholderTextColor={'#D90429'}
          keyboardType='email-address'

        />

        <TextInput
          placeholder='Password'
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
          placeholderTextColor={'#D90429'}
        />
      </View>

      <View
        style={styles.buttonContainer}
      >
        <TouchableOpacity onPress={() => { }} style={styles.button}>
          <Text style={styles.buttonText}>Lets Go</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate('Login')}} style={[styles.button, styles.buttonOutline]}>
          <Text style={styles.buttonOutlineText}>Sign In</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>

  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E63946'
  },
  logoContainer: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: '#FFF',
    fontSize: 50,
    fontWeight: 'bold',
    fontStyle: 'italic'

  },

  introContainer: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20

  },
  introText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '500',
    // fontStyle: 'italic'
  },
  inputContainer: {
    width: '70%',

  },
  input: {
    backgroundColor: '#E63946',
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderRadius: 10,
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D90429',
    color: '#FFF',
  },

  buttonContainer: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    width: '100%',
    backgroundColor: '#D90429',
    color: '#FFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#e5e5e5'
  },
  buttonOutline: {
    backgroundColor: '#E63946',
    marginTop: 10,
    borderColor: '#D90429',
    borderWidth: 3

  },
  buttonOutlineText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFF'

  }
})
