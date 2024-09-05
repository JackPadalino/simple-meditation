import { View, Text, ImageBackground } from "react-native";
import React from "react";
import beachImage from "@/assets/meditation-images/beach.webp";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import AppGradient from "@/components/AppGradient";
import { useExpoRouter } from "expo-router/build/global-state/router-store";

const App = () => {
  const router = useExpoRouter();
  return (
    <>
      <StatusBar style="light" />
      <View className="flex-1 ">
        <ImageBackground
          source={beachImage}
          resizeMode="cover"
          className="flex-1"
        >
          <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
            {/* <SafeAreaView className="flex-1 mx-5 my-12 justify-between"> */}
            <View>
              <Text className="text-center text-white font-bold text-4xl">
                Simple Meditation
              </Text>
              <Text className="text-center text-white text-2xl mt-3">
                Simplifying Meditation for Everyone
              </Text>
            </View>
            <View>
              <CustomButton
                onPress={() => router.push("/nature-meditate")}
                title="Get Started"
              />
            </View>
            {/* </SafeAreaView> */}
          </AppGradient>
        </ImageBackground>
      </View>
    </>
  );
};

export default App;
