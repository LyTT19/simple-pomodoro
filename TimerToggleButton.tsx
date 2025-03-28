import React from "react";
import { Button, Pressable, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
  isTimerRunnig: boolean;
  startTimer: () => void;
  stopTimer: () => void;
};

export const TimerToggleButton: React.FC<Props> = ({
  isTimerRunnig,
  startTimer,
  stopTimer,
}) => {
  return (
    <Pressable onPress={isTimerRunnig ? stopTimer : startTimer}>
      <View style={styles.container}>
        <FontAwesome
          style={styles.icon}
          name={isTimerRunnig ? "pause" : "play"}
          size={125}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    alignSelf: "center",
    color: "#fff",
  },
  container: {
    borderWidth: 5,
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    justifyContent: "center",
    borderColor: "#fff",
    marginVertical: 50,
  },
});
