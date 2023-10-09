import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const Login = () => {
  return (
    <View style={estilos.container}>
      <Text style={estilos.topo}>My Tasks</Text>
      <Image style={estilos.logo} source={require('../assets/perfil.png')} />
      <Text style={estilos.titulo}>Login</Text>
      <TextInput
        style={estilos.input}
        placeholder={'E-mail'}
        keyboardType={'email-address'}
      />
      <TextInput
        style={estilos.input}
        placeholder={'Senha'}
        secureTextEntry={true}
      />
      <Button title="entrar" />
      <View style={{ marginVertical: 10 }}>
        {/* Espaço vertical entre os botões */}
      </View>

      <Button title="Não tem conta? Cadastrar" />
      <Text style={estilos.esqueceuSenha}> Esqueceu sua senha? </Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  logo: {
    height: 72,
    width: 72,
    alignSelf: 'center',
    marginTop: 40,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    lineHeight: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 16,
  },
  topo: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 24,
    fontFamily: '',
  },
  esqueceuSenha: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 24,
  },
});

export default Login;
