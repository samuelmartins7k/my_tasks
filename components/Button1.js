import React, { useMemo, memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Button1 = memo(
  ({
    buttonText,
    buttonPosition,
    buttonWidth,
    buttonTop,
    buttonLeft,
    rectangleViewBackgroundColor,
    logInLeft,
    logInColor,
    onButtonPress,
  }) => {
    const buttonStyle = useMemo(() => {
      return {
        ...getStyleValue("position", buttonPosition),
        ...getStyleValue("width", buttonWidth),
        ...getStyleValue("top", buttonTop),
        ...getStyleValue("left", buttonLeft),
      };
    }, [buttonPosition, buttonWidth, buttonTop, buttonLeft]);

    const rectangleViewStyle = useMemo(() => {
      return {
        ...getStyleValue("backgroundColor", rectangleViewBackgroundColor),
      };
    }, [rectangleViewBackgroundColor]);

    const logInStyle = useMemo(() => {
      return {
        ...getStyleValue("left", logInLeft),
        ...getStyleValue("color", logInColor),
      };
    }, [logInLeft, logInColor]);

    return (
      <View style={[styles.button, buttonStyle]} onPress={onButtonPress}>
        <View style={[styles.buttonChild, rectangleViewStyle]} />
        <Text style={[styles.logIn, logInStyle]}>{buttonText}</Text>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  buttonChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 2,
    position: "absolute",
  },
  logIn: {
    top: "36.54%",
    left: "36.53%",
    fontSize: FontSize.size_smi,
    letterSpacing: 0.5,
    textTransform: "uppercase",
    fontWeight: "900",
    fontFamily: FontFamily.robotoBlack,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  button: {
    width: 167,
    height: 52,
  },
});

export default Button1;
