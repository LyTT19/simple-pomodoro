import React from "react";
import { Text, StyleSheet, View } from "react-native";

export type TimerModes = "Focus" | "Break";

type Props = {
  timerMode: TimerModes;
};

export const TimerModeDisplay: React.FC<Props> = ({ timerMode }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.TimerModeText}>
        {timerMode} Time!
        {timerMode === "Focus" ? "🔥" : "😴"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
  },
  TimerModeText: {
    fontSize: 40,
    fontWeight: "800",
    color: "#fff",
  },
});
