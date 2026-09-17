import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import { router } from "expo-router";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister() {
    if (!name || !email || !password) {
      Alert.alert("تنبيه", "يرجى ملء جميع الحقول");
      return;
    }

    if (password.length < 6) {
      Alert.alert(
        "تنبيه",
        "كلمة المرور يجب أن تكون 6 أحرف أو أكثر"
      );
      return;
    }

    Alert.alert(
      "تم",
      "تم إدخال البيانات. سنربط التسجيل بقاعدة البيانات لاحقًا."
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>إنشاء حساب</Text>

      <Text style={styles.label}>الاسم</Text>
      <TextInput
        style={styles.input}
        placeholder="اكتب اسمك"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>البريد الإلكتروني</Text>
      <TextInput
        style={styles.input}
        placeholder="example@email.com"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>كلمة المرور</Text>
      <TextInput
        style={styles.input}
        placeholder="6 أحرف على الأقل"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Pressable
        style={styles.button}
        onPress={handleRegister}
      >
        <Text style={styles.buttonText}>إنشاء الحساب</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/login")}>
        <Text style={styles.loginText}>
          عندك حساب؟ تسجيل الدخول
        </Text>
      </Pressable>

      <Pressable onPress={() => router.back()}>
        <Text style={styles.backText}>رجوع</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 35,
  },
  label: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    marginBottom: 18,
  },
  button: {
    backgroundColor: "#111827",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  loginText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 20,
  },
  backText: {
    textAlign: "center",
    fontSize: 15,
  },
});
