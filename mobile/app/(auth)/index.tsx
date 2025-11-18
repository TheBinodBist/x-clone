import { useSocialAuth } from "@/hooks/useSocialAuth";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

export default function Index() {
  const { handleSocialAuth, isLoading } = useSocialAuth();

  return (
    <View style={styles.container} >
      <View style={styles.innerContainer}>
        <View style={styles.centerContent}>
         
          <View style={styles.imageWrapper}>
            <Image
              source={require("../../assets/images/auth2.png")}
              style={styles.demoImage}
              resizeMode="contain"
            />
          </View>

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            {/* GOOGLE SIGN-IN */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSocialAuth("oauth_google")}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator size="small" color="#4285F4" />
              ) : (
                <View style={styles.buttonContent}>
                  <Image
                    source={require("../../assets/images/google.png")}
                    style={styles.googleIcon}
                    resizeMode="contain"
                  />
                  <Text style={styles.buttonText}>Continue with Google</Text>
                </View>
              )}
            </TouchableOpacity>

            {/* APPLE SIGN-IN */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSocialAuth("oauth_apple")}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator size="small" color="#000" />
              ) : (
                <View style={styles.buttonContent}>
                  <Image
                    source={require("../../assets/images/apple.png")}
                    style={styles.appleIcon}
                    resizeMode="contain"
                  />
                  <Text style={styles.buttonText}>Continue with Apple</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>

          {/* Terms and Privacy */}
          <Text style={styles.termsText}>
            By signing up, you agree to our{" "}
            <Text style={styles.linkText}>Terms</Text>,{" "}
            <Text style={styles.linkText}>Privacy Policy</Text>, and{" "}
            <Text style={styles.linkText}>Cookie Use</Text>.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: "space-between",
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
  },
  imageWrapper: {
    alignItems: "center",
    marginBottom: 24,
  },
  demoImage: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    flexDirection: "column",
    gap: 12,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 9999, // rounded-full
    paddingVertical: 12,
    paddingHorizontal: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  googleIcon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  appleIcon: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  buttonText: {
    color: "black",
    fontWeight: "500",
    fontSize: 16,
  },
  termsText: {
    textAlign: "center",
    color: "#6b7280",
    fontSize: 12,
    lineHeight: 16,
    marginTop: 24,
    paddingHorizontal: 8,
  },
  linkText: {
    color: "#3b82f6",
  },
});
