import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const PerfilDeUsurio = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.perfilDeUsurio, styles.iconLayout]}>
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
        style={styles.perfilDeUsurioChild}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <View style={styles.perfilDeUsurioItem} />
      <View
        style={[styles.perfilDeUsurioInner, styles.rectangleViewPosition]}
      />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View style={styles.perfilDeUsurioChild1} />
      <Text style={[styles.seuNome, styles.seuNomeTypo]}>Seu Nome</Text>
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <Text style={[styles.telefone, styles.seuNomeTypo]}>Telefone</Text>
      <Text style={[styles.editarDados, styles.editarDadosTypo]}>
        Editar Dados
      </Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.perfilDeUsurioChild2, styles.lineViewLayout]} />
      <Text style={[styles.senha, styles.emailTypo]}>Senha</Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <Image
        style={styles.maleUserIcon}
        contentFit="cover"
        source={require("../assets/male-user.png")}
      />
      <Pressable
        style={styles.sairDaContaContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.sairDaConta, styles.editarDadosTypo]}>
          Sair da conta
        </Text>
      </Pressable>
      <Image
        style={styles.crayonIcon}
        contentFit="cover"
        source={require("../assets/crayon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  rectangleViewPosition: {
    left: 49,
    height: 23,
    width: 263,
    backgroundColor: Color.colorGainsboro_200,
    position: "absolute",
  },
  seuNomeTypo: {
    fontFamily: FontFamily.baloo,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  emailTypo: {
    height: 16,
    left: 150,
    fontFamily: FontFamily.baloo,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  editarDadosTypo: {
    fontFamily: FontFamily.amikoRegular,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
  },
  lineViewLayout: {
    height: 1,
    width: 104,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 128,
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
  perfilDeUsurioChild: {
    top: 25,
    left: 14,
    width: 33,
    height: 30,
    position: "absolute",
  },
  perfilDeUsurioItem: {
    top: 255,
    height: 23,
    width: 263,
    backgroundColor: Color.colorGainsboro_200,
    left: 48,
    position: "absolute",
  },
  perfilDeUsurioInner: {
    top: 314,
  },
  rectangleView: {
    top: 373,
  },
  perfilDeUsurioChild1: {
    top: 198,
    height: 21,
    width: 263,
    backgroundColor: Color.colorGainsboro_200,
    left: 48,
    position: "absolute",
  },
  seuNome: {
    top: 193,
    width: 235,
    left: 131,
  },
  email: {
    top: 250,
    width: 162,
  },
  telefone: {
    top: 309,
    left: 140,
    width: 127,
    height: 25,
  },
  editarDados: {
    top: 427,
    width: 136,
    height: 15,
    left: 131,
    position: "absolute",
  },
  lineView: {
    top: 448,
  },
  perfilDeUsurioChild2: {
    top: 484,
  },
  senha: {
    top: 368,
    width: 185,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  vector: {
    left: "6.94%",
    top: "5%",
    right: "90.25%",
    bottom: "92.56%",
    width: "2.8%",
    height: "2.44%",
    position: "absolute",
  },
  maleUserIcon: {
    top: 72,
    left: 135,
    width: 90,
    height: 90,
    position: "absolute",
  },
  sairDaConta: {
    width: 106,
    height: 20,
  },
  sairDaContaContainer: {
    top: 464,
    left: 131,
    position: "absolute",
  },
  crayonIcon: {
    top: 139,
    left: 212,
    width: 26,
    height: 12,
    position: "absolute",
  },
  perfilDeUsurio: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
  },
});

export default PerfilDeUsurio;
