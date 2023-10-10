import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Component from "../components/Component";
import Button1 from "../components/Button1";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const RecuperaoDeSenha = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.recuperaoDeSenha}>
      <Text style={styles.myTasks}>
        <Text style={styles.text}>
          <Text style={styles.text1}>{`  `}</Text>
        </Text>
        <Text style={styles.myTasks1}>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.myTasks2}>My Tasks</Text>
        </Text>
      </Text>
      <Component
        componentPosition="absolute"
        componentTop={151}
        componentLeft={9}
        componentWidth={343}
        componentHeight={52}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={[styles.eMail, styles.eMailFlexBox]}>{`E-MAIL
`}</Text>
      <Button1
        buttonText="Recuperar senha"
        buttonPosition="absolute"
        buttonWidth={343}
        buttonTop={236}
        buttonLeft={9}
        rectangleViewBackgroundColor="#000"
        logInLeft="30.99%"
        logInColor="#fff"
        onButtonPress={() => navigation.navigate("CdigoEmail")}
      />
      <Image
        style={styles.recuperaoDeSenhaChild}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Pressable
        style={[styles.vector, styles.vectorPosition]}
        onPress={() => navigation.navigate("Login")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <Text style={[styles.recuperaoDeSenha1, styles.eMailFlexBox]}>
        Recuperação de senha
      </Text>
      <Image
        style={styles.recuperaoDeSenhaItem}
        contentFit="cover"
        source={require("../assets/line-9.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  eMailFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  vectorPosition: {
    left: "7.22%",
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
    width: 99,
    height: 32,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  vectorIcon: {
    height: "3.13%",
    width: "5.56%",
    top: "26.25%",
    right: "87.22%",
    bottom: "70.63%",
    left: "7.22%",
    position: "absolute",
  },
  eMail: {
    top: 162,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.openSansRegular,
    color: Color.colorGray_200,
    width: 74,
    height: 60,
    left: 61,
  },
  recuperaoDeSenhaChild: {
    top: 28,
    left: 15,
    width: 33,
    height: 30,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  vector: {
    top: "5.47%",
    right: "89.97%",
    bottom: "92.09%",
    width: "2.8%",
    height: "2.44%",
  },
  recuperaoDeSenha1: {
    top: 84,
    left: 71,
    width: 218,
    height: 34,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.orelegaOneRegular,
    color: Color.colorBlack,
    alignItems: "center",
    display: "flex",
  },
  recuperaoDeSenhaItem: {
    top: 112,
    width: 215,
    height: 2,
    left: 61,
    position: "absolute",
  },
  recuperaoDeSenha: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default RecuperaoDeSenha;
