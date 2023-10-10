import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Button1 from "../components/Button1";
import Component from "../components/Component";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const CdigoEmail = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.cdigoEmail, styles.iconLayout]}>
      <Text style={styles.myTasks}>
        <Text style={styles.text}>
          <Text style={styles.text1}>{`  `}</Text>
        </Text>
        <Text style={styles.myTasks1}>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.myTasks2}>My Tasks</Text>
        </Text>
      </Text>
      <Image
        style={styles.cdigoEmailChild}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Login")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <Text style={[styles.verifiqueOSeu, styles.digiteOCdigoTypo]}>
        Verifique o seu e-mail para recuperção de senha!
      </Text>
      <Button1
        buttonText="Voltar para tela inicial"
        buttonPosition="absolute"
        buttonWidth={343}
        buttonTop={381}
        buttonLeft={9}
        rectangleViewBackgroundColor="#000"
        logInLeft="23.41%"
        logInColor="#fff"
      />
      <Text style={[styles.digiteOCdigo, styles.digiteOCdigoTypo]}>
        Digite o código enviado por e-mail
      </Text>
      <Component
        componentPosition="absolute"
        componentTop={303}
        componentLeft={9}
        componentWidth={343}
        componentHeight={52}
      />
      <View style={[styles.cdigoEmailItem, styles.cdigoChildLayout]} />
      <View style={[styles.cdigoEmailInner, styles.cdigoChildLayout]} />
      <View style={[styles.rectangleView, styles.cdigoChildLayout]} />
      <View style={[styles.cdigoEmailChild1, styles.cdigoChildLayout]} />
      <View style={[styles.cdigoEmailChild2, styles.cdigoChildLayout]} />
      <View style={[styles.cdigoEmailChild3, styles.cdigoChildLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  digiteOCdigoTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.robotoBlack,
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    position: "absolute",
  },
  cdigoChildLayout: {
    height: 29,
    width: 26,
    backgroundColor: Color.colorGainsboro_100,
    top: 315,
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
    left: 131,
    textAlign: "left",
    width: 99,
    height: 32,
    color: Color.colorBlack,
    position: "absolute",
  },
  cdigoEmailChild: {
    top: 28,
    left: 15,
    width: 33,
    height: 30,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  vector: {
    left: "7.22%",
    top: "5.47%",
    right: "89.97%",
    bottom: "92.09%",
    width: "2.8%",
    height: "2.44%",
    position: "absolute",
  },
  verifiqueOSeu: {
    top: 136,
    left: 60,
    width: 239,
    height: 84,
  },
  digiteOCdigo: {
    top: 239,
    left: 44,
    width: 274,
    height: 42,
  },
  cdigoEmailItem: {
    left: 31,
  },
  cdigoEmailInner: {
    left: 83,
  },
  rectangleView: {
    left: 135,
  },
  cdigoEmailChild1: {
    left: 187,
  },
  cdigoEmailChild2: {
    left: 239,
  },
  cdigoEmailChild3: {
    left: 291,
  },
  cdigoEmail: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
  },
});

export default CdigoEmail;
