import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const Login = () => {
  return (
    <View style={estilos.container}>
      <Image
        style={estilos.logo}
        source={require('../assets/snack-icon.png')}
      />
      <Text style={estilos.titulo}>Login</Text>
      <TextInput style={estilos.input} placeholder={'E-mail'} keyboardType={'email-address'} />
      <TextInput style={estilos.input} placeholder={'Senha'} secureTextEntry={true} />
      <Button title="entrar" />
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  logo: {
    height: 72,
    width: 72,
    alignSelf: 'center'
  },
  titulo: {
    fontSize: 28,
    fontWeight: 400,
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    lineHeight: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 16,
  },
});

export default Login;
