import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const TelaInicial = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.telaInicial}>
      <Pressable
        style={styles.myTasks}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.text, styles.textClr]}>
          <Text style={styles.text1}>
            <Text style={styles.text2}>{`  `}</Text>
          </Text>
          <Text style={styles.myTasks1}>
            <Text style={styles.text1}>{` `}</Text>
            <Text style={styles.myTasks2}>My Tasks</Text>
          </Text>
        </Text>
      </Pressable>
      <Text style={[styles.bemVindoAo, styles.seuAppDeTypo]}>
        Bem vindo ao My Tasks!
      </Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("CadastrarTarefas")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
      </Pressable>
      <Text style={[styles.novoLembrete, styles.textClr]}>
        <Text
          style={styles.text4}
        >{`                                             `}</Text>
        <Text style={styles.novoLembrete1}>Novo Lembrete</Text>
      </Text>
      <Text style={[styles.seuAppDe, styles.seuAppDeTypo]}>
        Seu App de tarefas e lembretes.
      </Text>
      <Image
        style={[styles.iconTaskSquare, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-icon-task-square.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textClr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  seuAppDeTypo: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.baloo,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  text2: {
    fontFamily: FontFamily.judsonRegular,
  },
  text1: {
    fontSize: FontSize.size_sm,
  },
  myTasks2: {
    fontSize: FontSize.size_xl,
  },
  myTasks1: {
    fontFamily: FontFamily.orelegaOneRegular,
  },
  text: {
    width: 99,
    height: 32,
    textAlign: "left",
  },
  myTasks: {
    left: 134,
    top: 24,
    position: "absolute",
  },
  bemVindoAo: {
    top: 170,
    left: 53,
    width: 267,
    height: 44,
    textAlign: "left",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vector: {
    left: "87.5%",
    top: "88.13%",
    right: "5.77%",
    bottom: "8.09%",
    width: "6.73%",
    height: "3.78%",
    position: "absolute",
  },
  text4: {
    fontFamily: FontFamily.judsonRegular,
    fontSize: FontSize.size_sm,
  },
  novoLembrete1: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.orelegaOneRegular,
  },
  novoLembrete: {
    top: 568,
    left: 52,
    width: 259,
    height: 24,
    textAlign: "left",
    position: "absolute",
  },
  seuAppDe: {
    top: 419,
    left: 17,
    textAlign: "center",
    width: 332,
    height: 75,
  },
  iconTaskSquare: {
    height: "12.38%",
    width: "22.02%",
    top: "43.13%",
    right: "39.1%",
    bottom: "44.49%",
    left: "38.89%",
    position: "absolute",
  },
  telaInicial: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default TelaInicial;
