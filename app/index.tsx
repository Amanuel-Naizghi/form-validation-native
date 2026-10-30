import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";

import { SignUpFormData, signUpSchema } from "../schemas/signUpSchema";

export default function SignUpScreen() {
  const [focusedField, setFocusedField] = useState<string | null>(null); // We are using this state for identifying the focused fields so that we can style them accordingly

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = (data: SignUpFormData) => {
    // Just for testing user inputs
    // console.log("First name:", data.firstName);
    // console.log("Last name:", data.lastName);
    // console.log("Email:", data.email);

    // routes us to confirmation page after user inputs are succesfully validated
    router.push({
      pathname: "./confirmation",
      params: { firstName: data.firstName },
    });
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Create an Account</Text>

      <Text style={styles.subtitle}>Enter your information to sign up.</Text>
      {/* first name input */}
      <Text style={styles.label}>First Name</Text>
      <Controller
        control={control}
        name="firstName"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              styles.input,
              focusedField === "firstName" && styles.focusedInput,
              errors.firstName && styles.errorInput,
            ]}
            placeholder="Enter first name"
            value={value}
            onChangeText={onChange}
            onBlur={() => {
              onBlur();
              setFocusedField(null);
            }}
            onFocus={() => setFocusedField("firstName")}
            autoCapitalize="words"
          />
        )}
      />
      {errors.firstName && (
        <Text style={styles.errorText}>{errors.firstName.message}</Text>
      )}
      {/* last name input */}
      <Text style={styles.label}>Last Name</Text>
      <Controller
        control={control}
        name="lastName"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              styles.input,
              focusedField === "lastName" && styles.focusedInput,
              errors.lastName && styles.errorInput,
            ]}
            placeholder="Enter last name"
            value={value}
            onChangeText={onChange}
            onBlur={() => {
              onBlur();
              setFocusedField(null);
            }}
            onFocus={() => setFocusedField("lastName")}
            autoCapitalize="words"
          />
        )}
      />
      {errors.lastName && (
        <Text style={styles.errorText}>{errors.lastName.message}</Text>
      )}
      {/* email input */}
      <Text style={styles.label}>Email</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              styles.input,
              focusedField === "email" && styles.focusedInput,
              errors.email && styles.errorInput,
            ]}
            placeholder="you@example.com"
            value={value}
            onChangeText={onChange}
            onBlur={() => {
              onBlur();
              setFocusedField(null);
            }}
            onFocus={() => setFocusedField("email")}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        )}
      />
      {errors.email && (
        <Text style={styles.errorText}>{errors.email.message}</Text>
      )}
      {/* password input */}
      <Text style={styles.label}>Password</Text>
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              styles.input,
              focusedField === "password" && styles.focusedInput,
              errors.password && styles.errorInput,
            ]}
            placeholder="At least 8 characters"
            value={value}
            onChangeText={onChange}
            onBlur={() => {
              onBlur();
              setFocusedField(null);
            }}
            onFocus={() => setFocusedField("password")}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
          />
        )}
      />
      {errors.password && (
        <Text style={styles.errorText}>{errors.password.message}</Text>
      )}
      {/* confirm password input */}
      <Text style={styles.label}>Confirm Password</Text>
      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              styles.input,
              focusedField === "confirmPassword" && styles.focusedInput,
              errors.confirmPassword && styles.errorInput,
            ]}
            placeholder="Enter password again"
            value={value}
            onChangeText={onChange}
            onBlur={() => {
              onBlur();
              setFocusedField(null);
            }}
            onFocus={() => setFocusedField("confirmPassword")}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
          />
        )}
      />
      {errors.confirmPassword && (
        <Text style={styles.errorText}>{errors.confirmPassword.message}</Text>
      )}

      <Pressable
        accessibilityRole="button"
        onPress={() => handleSubmit(onSubmit)()}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#1E293B",
  },
  subtitle: {
    fontSize: 16,
    color: "#64748B",
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
    marginTop: 12,
    color: "#1E293B",
  },
  input: {
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: "#1E293B",
  },
  focusedInput: {
    borderColor: "#2563EB",
    borderWidth: 2,
  },
  errorInput: {
    borderColor: "#DC2626",
  },
  errorText: {
    color: "#DC2626",
    fontSize: 13,
    marginTop: 4,
  },
  button: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 28,
    marginBottom: 24,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
