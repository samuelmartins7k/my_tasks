import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const DetalhesDaTarefa = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.detalhesDaTarefa}>
      <Pressable
        style={styles.myTasks}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.text, styles.textFlexBox]}>
          <Text style={styles.text1}>
            <Text style={styles.text2}>{`  `}</Text>
          </Text>
          <Text style={styles.myTasks1}>
            <Text style={styles.text1}>{` `}</Text>
            <Text style={styles.myTasks2}>My Tasks</Text>
          </Text>
        </Text>
      </Pressable>
      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-5.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.vector, styles.vectorPosition]}
        onPress={() => navigation.navigate("CadastrarTarefas")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
      </Pressable>
      <Text style={[styles.novoLembrete, styles.textFlexBox]}>
        <Text
          style={styles.text4}
        >{`                                             `}</Text>
        <Text style={styles.novoLembrete1}>Novo Lembrete</Text>
      </Text>
      <Image
        style={[styles.vectorIcon1, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  iconLayout1: {
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
  iconLayout: {
    height: "100%",
    width: "100%",
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
  },
  myTasks: {
    left: 134,
    top: 24,
    position: "absolute",
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
  wrapper: {
    left: 311,
    top: 22,
    width: 33,
    height: 30,
    position: "absolute",
  },
  icon1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vector: {
    top: "88.91%",
    bottom: "7.31%",
    height: "3.78%",
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
    top: 573,
    left: 52,
    width: 259,
    height: 24,
    position: "absolute",
  },
  vectorIcon1: {
    height: "5.47%",
    width: "10%",
    top: "47.34%",
    right: "44.17%",
    bottom: "47.19%",
    left: "45.83%",
    position: "absolute",
  },
  detalhesDaTarefa: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default DetalhesDaTarefa;
