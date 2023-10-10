import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import Component from "../components/Component";
import Button1 from "../components/Button1";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const CadastrarUsurio = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cadastrarUsurio}>
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
        componentTop={146}
        componentLeft={9}
        componentWidth={343}
        componentHeight={52}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={[styles.eMail, styles.eMailFlexBox]}>{`E-MAIL
`}</Text>
      <Component
        componentPosition="absolute"
        componentTop={338}
        componentLeft={9}
        componentWidth={343}
        componentHeight={52}
      />
      <Component
        componentPosition="absolute"
        componentTop={402}
        componentLeft={9}
        componentWidth={343}
        componentHeight={52}
      />
      <Image
        style={[styles.bieyeFillIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/bieyefill1.png")}
      />
      <Component
        componentPosition="absolute"
        componentTop={274}
        componentLeft={9}
        componentWidth={343}
        componentHeight={52}
      />
      <Component
        componentPosition="absolute"
        componentTop={209}
        componentLeft={9}
        componentWidth={343}
        componentHeight={52}
      />
      <Button1
        buttonText="CADASTRAR"
        buttonPosition="absolute"
        buttonWidth={343}
        buttonTop={493}
        buttonLeft={9}
        rectangleViewBackgroundColor="#000"
        logInLeft="37.98%"
        logInColor="#fff"
      />
      <View style={styles.registerButton}>
        <Text style={[styles.telefone, styles.senhaLayout]}>TELEFONE</Text>
        <Image
          style={[styles.interfaceLoginArrowEnterFIcon, styles.senhaPosition]}
          contentFit="cover"
          source={require("../assets/interfaceloginarrowenterframeleftloginpointrectangle.png")}
        />
      </View>
      <Image
        style={styles.registerButtonIcon}
        contentFit="cover"
        source={require("../assets/register-button.png")}
      />
      <Text style={[styles.dataDeNascimento, styles.eMailFlexBox]}>
        DATA DE NASCIMENTO
      </Text>
      <Image
        style={[styles.vectorIcon1, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <View style={[styles.registerButton1, styles.senhaLayout]}>
        <Text style={[styles.senha, styles.senhaPosition]}>SENHA</Text>
      </View>
      <Image
        style={styles.cadastrarUsurioChild}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Login")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <Image
        style={styles.maleUserIcon}
        contentFit="cover"
        source={require("../assets/male-user.png")}
      />
      <Text style={styles.nomeDeUsurio}>NOME DE USUÁRIO</Text>
      <Image
        style={styles.userIcon}
        contentFit="cover"
        source={require("../assets/user.png")}
      />
      <Image
        style={styles.crayonIcon}
        contentFit="cover"
        source={require("../assets/crayon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  eMailFlexBox: {
    alignItems: "center",
    display: "flex",
    color: Color.colorGray_200,
    fontFamily: FontFamily.openSansRegular,
    left: 48,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    opacity: 0.6,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  senhaLayout: {
    width: 136,
    height: 25,
  },
  senhaPosition: {
    left: 0,
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
    color: Color.colorBlack,
    width: 99,
    height: 32,
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon: {
    top: "25.47%",
    bottom: "71.41%",
    left: "5.56%",
    right: "88.89%",
    width: "5.56%",
    height: "3.13%",
    maxWidth: "100%",
    position: "absolute",
  },
  eMail: {
    top: 157,
    width: 74,
    height: 60,
    fontSize: FontSize.size_lg,
  },
  bieyeFillIcon: {
    top: 418,
    left: 316,
    position: "absolute",
  },
  telefone: {
    left: 28,
    top: 0,
    width: 136,
    alignItems: "center",
    display: "flex",
    color: Color.colorGray_200,
    fontFamily: FontFamily.openSansRegular,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  interfaceLoginArrowEnterFIcon: {
    top: 2,
    opacity: 0.6,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  registerButton: {
    top: 288,
    width: 164,
    height: 25,
    left: 20,
    position: "absolute",
  },
  registerButtonIcon: {
    top: 356,
    left: 20,
    height: 20,
    width: 20,
    position: "absolute",
  },
  dataDeNascimento: {
    top: 357,
    width: 218,
    height: 17,
    fontSize: FontSize.size_xl,
  },
  vectorIcon1: {
    top: "65.31%",
    bottom: "31.56%",
    left: "5.56%",
    right: "88.89%",
    width: "5.56%",
    height: "3.13%",
    maxWidth: "100%",
    position: "absolute",
  },
  senha: {
    width: 136,
    height: 25,
    top: 0,
    alignItems: "center",
    display: "flex",
    color: Color.colorGray_200,
    fontFamily: FontFamily.openSansRegular,
    textAlign: "left",
    fontSize: FontSize.size_xl,
  },
  registerButton1: {
    top: 415,
    width: 136,
    left: 48,
    position: "absolute",
  },
  cadastrarUsurioChild: {
    top: 28,
    left: 15,
    width: 33,
    height: 30,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    width: "100%",
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
  maleUserIcon: {
    top: 45,
    left: 135,
    width: 90,
    height: 90,
    position: "absolute",
  },
  nomeDeUsurio: {
    top: 226,
    color: "rgba(0, 0, 0, 0.25)",
    width: 189,
    height: 20,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_lg,
    left: 48,
    textAlign: "left",
    position: "absolute",
  },
  userIcon: {
    top: 215,
    left: 12,
    width: 35,
    height: 49,
    position: "absolute",
  },
  crayonIcon: {
    top: 113,
    left: 211,
    width: 26,
    height: 12,
    position: "absolute",
  },
  cadastrarUsurio: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default CadastrarUsurio;
