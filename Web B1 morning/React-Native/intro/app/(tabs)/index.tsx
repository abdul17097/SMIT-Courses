import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ padding: 10, backgroundColor: "#999", flex: 1 }}>
      <Text>This is the home screen. You can edit this screen in </Text>
      <TextInput
        placeholder="Search..."
        style={{
          borderColor: "#ffff",
          borderWidth: 2,
          borderStyle: "solid",
          padding: 20,
        }}
      />
      <TouchableOpacity
        style={{ backgroundColor: "blue", borderRadius: 10, padding: 10 }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            // borderColor: "white",
            // borderStyle: "solid",
            // borderWidth: 2,
            fontSize: 20,
          }}
        >
          Click ME
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
