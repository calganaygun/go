import LottieView from "lottie-react-native";

export function Paid() {
  return (
    <LottieView
      autoPlay
      style={{
        width: 400,
        height: 400,
      }}
      source={require("../assets/animations/success.json")}
    />
  );
}
