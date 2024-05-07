import Toast from "react-native-toast-message";

export function errorToast(error: Error) {
  Toast.show({
    type: "error",
    text1: error.message,
    //text2: JSON.stringify(error, Object.getOwnPropertyNames(error)),
  });
}
