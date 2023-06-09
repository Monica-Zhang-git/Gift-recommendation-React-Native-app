import * as React from "react";
import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Pressable,
  Image,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Constants from "expo-constants";

const BACKGROUNDCOLOR = "#fc6208";

export default function App() {
  const [gender, setGender] = useState("man");
  const [age, setAge] = useState();
  const [price_Min, setprice_Min] = useState("10");
  const [price_Max, setprice_Max] = useState("100");
  const [hobbies, setHobbies] = useState("");

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState("");

  const API_URL = "http://13.211.157.13:3000/api";

  const onSubmit = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    setResult("");
    try {
      const body = JSON.stringify({
        price_Min,
        price_Max,
        gender,
        age,
        hobbies,
      });
      console.log(body);
      const response = await fetch(`${API_URL}/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });
      const data = await response.json();
      setResult(data.result);
    } catch (e) {
      alert("Couldn't generate ideas", e.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.title}>Looking for the best gift ideas 🎁 💡</Text>
        <Image
          source={require("./assets/loading.gif")}
          style={styles.loading}
          resizeMode="contain"
        />
      </View>
    );
  }
  const onTryAgain = () => {
    setResult("");
  };

  if (result) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          Here are some great gift recommendations
        </Text>
        <Text style={styles.result}>{result}</Text>
        <Pressable onPress={onTryAgain} style={styles.button}>
          <Text style={styles.buttonText}>Try again</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  const isValid =
    !!age &&
    !isNaN(price_Min || NaN) &&
    price_Min >= 0 &&
    !isNaN(price_Max || NaN) &&
    price_Max > price_Min;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gift Recommendations</Text>
      <Text style={styles.subTitle}>Who is the gift for</Text>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <Text style={styles.label}>Age</Text>
          <TextInput
            placeholder="Put your age here"
            keyboardType="numeric"
            style={styles.input}
            value={age}
            onChangeText={setAge}
          />

          <Text style={styles.label}>Price from</Text>
          <TextInput
            placeholder="Price from"
            keyboardType="numeric"
            style={styles.input}
            value={price_Min}
            onChangeText={setprice_Min}
          />

          <Text style={styles.label}>Price to</Text>
          <TextInput
            placeholder="Price to"
            keyboardType="numeric"
            style={styles.input}
            value={price_Max}
            onChangeText={setprice_Max}
          />

          <Text style={styles.label}>Hobbies</Text>
          <TextInput
            placeholder="Hobbies"
            style={styles.input}
            value={hobbies}
            onChangeText={setHobbies}
          />

          <View style={styles.selectorContainer}>
            <Text
              onPress={() => setGender("man")}
              style={[
                styles.selector,
                gender === "man" && {
                  backgroundColor: BACKGROUNDCOLOR,
                  color: "white",
                },
              ]}
            >
              Man
            </Text>
            <Text
              onPress={() => setGender("woman")}
              style={[
                styles.selector,
                gender === "woman" && {
                  backgroundColor: BACKGROUNDCOLOR,
                  color: "white",
                },
              ]}
            >
              Woman
            </Text>
          </View>
          <Pressable
            onPress={onSubmit}
            style={{
              ...styles.button,
              backgroundColor: isValid ? BACKGROUNDCOLOR : "gainsboro",
            }}
            disabled={!isValid}
          >
            <Text
              style={{
                ...styles.buttonText,
                color: isValid ? "white" : "black",
              }}
            >
              Generate gift ideas
            </Text>
          </Pressable>
        </ScrollView>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 16,
  },

  input: {
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 4,

    padding: 16,
    marginTop: 6,
    marginBottom: 12,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: 500,
  },
  subTitle: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    color: "gray",
  },
  //selector
  selectorContainer: {
    flexDirection: "row",
  },
  selector: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "gainsboro",
    margin: 5,
    padding: 16,
    borderRadius: 5,
    overflow: "hidden",
  },
  button: {
    marginTop: "auto",
    backgroundColor: BACKGROUNDCOLOR,
    padding: 16,
    borderRadius: 4,
    alignItems: "center",
    marginVertical: 6,
  },
  buttonText: {
    color: "white",
    // fontWeight: "bold",
  },
  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 10,
  },
  loading: {
    width: "100%",
  },
});
