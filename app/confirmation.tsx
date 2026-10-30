import { router, useLocalSearchParams } from "expo-router";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ConfirmationScreen() {
  const { firstName } = useLocalSearchParams<{
    firstName: string;
  }>(); // getting first name after user successfully validated

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Sign-Up Successful!
      </Text>

      <Text style={styles.message}>
        Account created for {firstName}!
      </Text>

      <Text style={styles.description}>
        Your form has been submitted successfully.
      </Text>

      <Pressable
        accessibilityRole="button"
        onPress={() => router.replace("/")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          Back to Sign Up
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1E293B",
    textAlign: "center",
    marginBottom: 12,
  },
  message: {
    fontSize: 20,
    color: "#2563EB",
    textAlign: "center",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#64748B",
    textAlign: "center",
    marginBottom: 28,
  },
  button: {
    backgroundColor: "#2563EB",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});