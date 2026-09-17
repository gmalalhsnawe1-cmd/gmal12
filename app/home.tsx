import { View, Text, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>IraqJobs</Text>

      <Text style={styles.subtitle}>
        أهلاً بك في منصة الوظائف العراقية
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>ابحث عن وظيفة</Text>
        <Text style={styles.cardText}>
          اكتشف فرص العمل المتوفرة في العراق بسهولة.
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => {}}
        >
          <Text style={styles.buttonText}>عرض الوظائف</Text>
        </Pressable>
      </View>

      <Pressable
        style={styles.logoutButton}
        onPress={() => router.replace("/")}
      >
        <Text style={styles.logoutText}>تسجيل الخروج</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 70,
    backgroundColor: "#f8fafc",
  },
  title: {
    fontSize: 34,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 35,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 22,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    lineHeight: 25,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#111827",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "700",
  },
  logoutButton: {
    marginTop: 25,
    padding: 15,
    alignItems: "center",
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
