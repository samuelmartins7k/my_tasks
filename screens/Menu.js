import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menu}>
      <Text style={[styles.myTasks, styles.myTasksFlexBox]}>
        <Text style={styles.text}>
          <Text style={styles.text1}>{`  `}</Text>
        </Text>
        <Text style={styles.myTasks1}>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.myTasks2}>My Tasks</Text>
        </Text>
      </Text>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={styles.menuChild}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Pressable
        style={[styles.vector, styles.vectorPosition]}
        onPress={() => navigation.navigate("CadastrarTarefas")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
      </Pressable>
      <Text style={[styles.novoLembrete, styles.myTasksFlexBox]}>
        <Text
          style={styles.text3}
        >{`                                             `}</Text>
        <Text style={styles.novoLembrete1}>Novo Lembrete</Text>
      </Text>
      <View style={styles.menuItem} />
      <Pressable
        style={[styles.verPerfil, styles.verPerfilPosition]}
        onPress={() => navigation.navigate("PerfilDeUsurio")}
      >
        <Text
          style={[styles.verPerfil1, styles.verPerfil1Typo]}
        >{`Ver Perfil `}</Text>
      </Pressable>
      <View style={[styles.menuInner, styles.menuLayout]} />
      <Pressable
        style={[styles.excluirTask, styles.verPerfilPosition]}
        onPress={() => navigation.navigate("ExcluirTarefas")}
      >
        <Text style={[styles.excluirTask1, styles.verPerfil1Typo]}>
          Excluir Task
        </Text>
      </Pressable>
      <View style={[styles.lineView, styles.menuLayout]} />
      <View style={[styles.menuChild1, styles.menuLayout]} />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Pressable
        style={[styles.sairDaContaContainer, styles.verPerfilPosition]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.sairDaConta, styles.verPerfil1Typo]}>
          Sair da conta
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  myTasksFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorPosition: {
    left: "87.5%",
    right: "5.77%",
    width: "6.73%",
    position: "absolute",
  },
  verPerfilPosition: {
    left: 162,
    position: "absolute",
  },
  verPerfil1Typo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.judsonRegular,
    textAlign: "left",
    color: Color.colorBlack,
  },
  menuLayout: {
    height: 1,
    width: 132,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 162,
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
  },
  vectorIcon: {
    height: "1.1%",
    top: "5.16%",
    bottom: "93.75%",
    left: "87.5%",
    right: "5.77%",
    width: "6.73%",
    position: "absolute",
  },
  menuChild: {
    top: 22,
    left: 311,
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
    top: "88.91%",
    bottom: "7.31%",
    height: "3.78%",
  },
  text3: {
    fontFamily: FontFamily.judsonRegular,
    fontSize: FontSize.size_sm,
  },
  novoLembrete1: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.orelegaOneRegular,
  },
  novoLembrete: {
    top: 573,
    left: 52,
    width: 259,
    height: 24,
  },
  menuItem: {
    top: 56,
    left: 145,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    width: 183,
    height: 111,
    position: "absolute",
  },
  verPerfil1: {
    width: 153,
    height: 18,
  },
  verPerfil: {
    top: 67,
  },
  menuInner: {
    top: 85,
  },
  excluirTask1: {
    width: 88,
    height: 11,
  },
  excluirTask: {
    top: 96,
  },
  lineView: {
    top: 118,
  },
  menuChild1: {
    top: 149,
  },
  vectorIcon1: {
    height: "5.47%",
    width: "10%",
    top: "47.19%",
    right: "45%",
    bottom: "47.34%",
    left: "45%",
    position: "absolute",
  },
  sairDaConta: {
    width: 113,
    height: 16,
  },
  sairDaContaContainer: {
    top: 129,
  },
  menu: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default Menu;
