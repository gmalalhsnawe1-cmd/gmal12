import { View, Text, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>IraqJobs</Text>

      <Text style={styles.title}>فرصتك الوظيفية تبدأ من هنا</Text>

      <Text style={styles.subtitle}>
        ابحث عن الوظائف في العراق وتواصل مع أصحاب العمل بسهولة.
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/register")}
      >
        <Text style={styles.buttonText}>إنشاء حساب</Text>
      </Pressable>

      <Pressable
        style={styles.loginButton}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.loginText}>تسجيل الدخول</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#ffffff",
  },
  logo: {
    fontSize: 38,
    fontWeight: "800",
    marginBottom: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 14,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 26,
    textAlign: "center",
    marginBottom: 35,
  },
  button: {
    width: "100%",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: "#111827",
    marginBottom: 12,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "700",
  },
  loginButton: {
    width: "100%",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#111827",
  },
  loginText: {
    fontSize: 17,
    fontWeight: "700",
  },
});
