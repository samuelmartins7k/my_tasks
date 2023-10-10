import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const CadastrarTarefas = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cadastrarTarefas}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
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
        style={[styles.vectorIcon1, styles.vectorIconPosition1]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("ListarTarefras")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/ellipse-5.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.container, styles.wrapperLayout]}
        onPress={() => navigation.navigate("ListarTarefras")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/ellipse-5.png")}
        />
      </Pressable>
      <Image
        style={[styles.vectorIcon2, styles.vectorIconPosition1]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Text style={[styles.novoLembrete, styles.ellipseIconLayout]}>
        <Text
          style={styles.text3}
        >{`                                             `}</Text>
        <Text style={styles.novoLembrete1}>Novo Lembrete</Text>
      </Text>
      <Image
        style={[styles.touch1Icon, styles.touch1IconLayout]}
        contentFit="cover"
        source={require("../assets/touch-1.png")}
      />
      <View style={[styles.cadastrarTarefasChild, styles.touch1IconLayout]} />
      <View style={[styles.cadastrarTarefasItem, styles.lineViewPosition]} />
      <Text style={[styles.novoLembrete2, styles.notasPosition]}>
        Novo Lembrete
      </Text>
      <View style={styles.cadastrarTarefasInner} />
      <Text style={[styles.notas, styles.notasPosition]}>Notas</Text>
      <Image
        style={[styles.vectorIcon3, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text
        style={[styles.adicionarTemporizador, styles.notasPosition]}
      >{`Adicionar Temporizador `}</Text>
      <View style={[styles.lineView, styles.lineViewPosition]} />
      <Image
        style={styles.timeIcon}
        contentFit="cover"
        source={require("../assets/time.png")}
      />
      <Image
        style={styles.timeIcon}
        contentFit="cover"
        source={require("../assets/time1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  myTasksFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  vectorIconPosition1: {
    left: "87.5%",
    right: "5.77%",
    width: "6.73%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  wrapperLayout: {
    height: 30,
    width: 33,
    top: 22,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 24,
    position: "absolute",
  },
  touch1IconLayout: {
    width: 360,
    position: "absolute",
  },
  lineViewPosition: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 15,
    position: "absolute",
  },
  notasPosition: {
    left: 15,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  vectorIconPosition: {
    top: "56.72%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "2.44%",
    width: "2.8%",
    top: "4.53%",
    right: "88.86%",
    bottom: "93.03%",
    left: "8.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    position: "absolute",
  },
  vectorIcon1: {
    height: "1.1%",
    top: "5.16%",
    bottom: "93.75%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 311,
  },
  container: {
    left: 19,
  },
  vectorIcon2: {
    height: "3.78%",
    top: "88.91%",
    bottom: "7.31%",
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
    textAlign: "left",
    color: Color.colorBlack,
  },
  touch1Icon: {
    top: 405,
    left: 0,
    height: 235,
  },
  cadastrarTarefasChild: {
    top: 59,
    left: -2,
    backgroundColor: "rgba(217, 217, 217, 0)",
    height: 343,
  },
  cadastrarTarefasItem: {
    top: 95,
    width: 326,
  },
  novoLembrete2: {
    top: 76,
    fontSize: FontSize.size_base,
    width: 146,
    height: 26,
    fontFamily: FontFamily.judsonRegular,
  },
  cadastrarTarefasInner: {
    top: 84,
    left: 10,
    borderRightWidth: 1,
    width: 1,
    height: 22,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  notas: {
    top: 102,
    fontSize: FontSize.size_smi,
    width: 94,
    height: 17,
    fontFamily: FontFamily.judsonRegular,
  },
  vectorIcon3: {
    height: "2.34%",
    width: "3.89%",
    right: "91.94%",
    bottom: "40.94%",
    left: "4.17%",
  },
  vectorIcon4: {
    height: "2.66%",
    width: "4.44%",
    right: "5.56%",
    bottom: "40.63%",
    left: "90%",
  },
  ellipseIcon: {
    top: 360,
    left: 319,
    width: 26,
  },
  adicionarTemporizador: {
    top: 139,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.abhayaLibreExtraBold,
    width: 168,
    height: 18,
  },
  lineView: {
    top: 154,
    width: 124,
  },
  timeIcon: {
    top: 134,
    left: 138,
    width: 23,
    height: 23,
    position: "absolute",
  },
  cadastrarTarefas: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default CadastrarTarefas;
