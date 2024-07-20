import { Stack, router, useFocusEffect } from "expo-router";
import React from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import Toast from "react-native-toast-message";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Text } from "~/components/ui/text";
import { useAppStore } from "~/lib/state/appStore";

export function LightningAddress() {
  const selectedWalletId = useAppStore((store) => store.selectedWalletId);
  const wallets = useAppStore((store) => store.wallets);
  const [lightningAddress, setLightningAddress] = React.useState("");
  React.useEffect(() => {
    setLightningAddress(wallets[selectedWalletId].lightningAddress || "");
  }, [wallets, selectedWalletId]);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View className="flex-1 flex flex-col p-3 gap-3">
        <Stack.Screen
          options={{
            title: "Lightning Address",
          }}
        />
        <Input
          autoFocus
          className="w-full text-center mt-6"
          placeholder="hello@getalby.com"
          value={lightningAddress}
          onChangeText={setLightningAddress}
          // aria-errormessage="inputError"
        />
        <Button
          onPress={() => {
            useAppStore.getState().updateCurrentWallet({ lightningAddress });
            Toast.show({
              type: "success",
              text1: "Lightning address updated",
              text2:
                "You can now easily receive payments to " + lightningAddress,
            });
            router.back();
          }}
        >
          <Text>Update Lightning Address</Text>
        </Button>
      </View>
    </TouchableWithoutFeedback>
  );
}