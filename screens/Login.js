import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import Button1 from "../components/Button1";
import { useNavigation } from "@react-navigation/native";
import Component from "../components/Component";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <Text style={styles.myTasks}>
        <Text style={styles.text}>
          <Text style={styles.text1}>{`  `}</Text>
        </Text>
        <Text style={styles.myTasks1}>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.myTasks2}>My Tasks</Text>
        </Text>
      </Text>
      <Button1
        buttonText="entrar"
        buttonPosition="absolute"
        buttonWidth={343}
        buttonTop={341}
        buttonLeft={9}
        rectangleViewBackgroundColor="#000"
        logInLeft="42.07%"
        logInColor="#fff"
      />
      <Pressable
        style={styles.noTemContaContainer}
        onPress={() => navigation.navigate("CadastrarUsurio")}
      >
        <Text style={[styles.text3, styles.text3Typo]}>
          {`Não tem conta? `}
          <Text style={styles.cadastrar}>Cadastrar</Text>
        </Text>
      </Pressable>
      <Component
        componentPosition="absolute"
        componentTop={198}
        componentLeft={9}
        componentWidth={343}
        componentHeight={52}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={[styles.eMail, styles.senhaFlexBox]}>{`E-MAIL
`}</Text>
      <Component
        componentPosition="absolute"
        componentTop={268}
        componentLeft={9}
        componentWidth={343}
        componentHeight={52}
      />
      <Image
        style={styles.bieyeFillIcon}
        contentFit="cover"
        source={require("../assets/bieyefill.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <View style={[styles.registerButton, styles.senhaLayout]}>
        <Text style={[styles.senha, styles.senhaLayout]}>SENHA</Text>
      </View>
      <Image
        style={styles.maleUserIcon}
        contentFit="cover"
        source={require("../assets/male-user.png")}
      />
      <Pressable
        style={styles.esqueceuSuaSenhaContainer}
        onPress={() => navigation.navigate("RecuperaoDeSenha")}
      >
        <Text style={[styles.esqueceuSuaSenha, styles.senhaFlexBox]}>
          Esqueceu sua senha?
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  text3Typo: {
    fontFamily: FontFamily.abhayaLibreExtraBold,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "5.56%",
    right: "88.89%",
    width: "5.56%",
    height: "3.13%",
    position: "absolute",
    overflow: "hidden",
  },
  senhaFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  senhaLayout: {
    height: 25,
    width: 136,
    position: "absolute",
  },
  text1: {
    fontFamily: FontFamily.judsonRegular,
  },
  text: {
    fontSize: FontSize.size_sm,
  },
  myTasks2: {
    fontSize: FontSize.size_xl,
  },
  myTasks1: {
    fontFamily: FontFamily.orelegaOneRegular,
  },
  myTasks: {
    top: 24,
    left: 134,
    width: 99,
    height: 32,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  cadastrar: {
    textDecoration: "underline",
  },
  text3: {
    width: 177,
    height: 20,
    textAlign: "left",
  },
  noTemContaContainer: {
    left: 92,
    top: 403,
    position: "absolute",
  },
  vectorIcon: {
    top: "33.44%",
    bottom: "63.44%",
  },
  eMail: {
    top: 208,
    fontSize: FontSize.size_lg,
    width: 74,
    height: 60,
    color: Color.colorGray_200,
    fontFamily: FontFamily.openSansRegular,
    alignItems: "center",
    display: "flex",
    left: 48,
    position: "absolute",
  },
  bieyeFillIcon: {
    top: 284,
    left: 316,
    width: 20,
    opacity: 0.6,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon1: {
    top: "44.38%",
    bottom: "52.5%",
  },
  senha: {
    top: 0,
    left: 0,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_xl,
  },
  registerButton: {
    top: 281,
    left: 48,
  },
  maleUserIcon: {
    top: 82,
    left: 138,
    width: 90,
    height: 90,
    position: "absolute",
  },
  esqueceuSuaSenha: {
    width: 240,
    height: 8,
    fontFamily: FontFamily.abhayaLibreExtraBold,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  esqueceuSuaSenhaContainer: {
    left: 108,
    top: 444,
    position: "absolute",
  },
  login: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default Login;
