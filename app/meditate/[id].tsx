import { View, Text, ImageBackground, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import AppGradient from "@/components/AppGradient";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "@/components/CustomButton";
import { router, useLocalSearchParams } from "expo-router";
import { useExpoRouter } from "expo-router/build/global-state/router-store";
import { TimerContext } from "@/context/TimeContext";

const Meditate = () => {
  const { id } = useLocalSearchParams();

  const { duration: secondsRemaining, setDuration } = useContext(TimerContext);

  // const [secondsRemaining, setSecondRemaining] = useState<number>(10);
  const [isMeditating, setIsMeditating] = useState<boolean>(false);

  const toggleMeditationSessionStatus = () => {
    setIsMeditating(!isMeditating);
  };

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if (secondsRemaining === 0) {
      setIsMeditating(false);
      return;
    }
    if (isMeditating) {
      timerId = setTimeout(() => setDuration(secondsRemaining - 1), 1000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [secondsRemaining, isMeditating]);

  const handleAdjustDuration = () => {
    // if (isMeditating) toggleMeditationSessionStatus();
    router.push("/(modal)/adjust-meditation-duration");
  };

  // format time left to ensure double digits
  const formattedTimeMinutes = String(
    Math.floor(secondsRemaining / 60)
  ).padStart(2, "0");
  const formattedTimeSeconds = String(secondsRemaining % 60).padStart(2, "0");

  useEffect(() => {
    setDuration(60);
  }, []);

  return (
    <View className="flex-1">
      <ImageBackground
        source={MEDITATION_IMAGES[Number(id) - 1]}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["transparent", "rgba(0,0,0,0.8)"]}>
          {/* <Pressable
            onPress={() => console.log("pressed")}
            className="absolute top-5"
          >
            <AntDesign name="leftcircleo" size={50} color="white" />
          </Pressable> */}
          <Pressable
            onPress={() => router.back()}
            className="absolute top-5 z-10"
          >
            <AntDesign name="leftcircleo" size={50} color="white" />
          </Pressable>
          <View className="flex-1 justify-center">
            <View className="mx-auto bg-neutral-200 rounded-full w-44 h-44 items-center justify-center">
              <Text className="text-4xl text-blue-800 font-rmono">
                {formattedTimeMinutes}:{formattedTimeSeconds}
              </Text>
            </View>
          </View>
          <View className="mb-5">
            <CustomButton
              title="Adjust duration"
              onPress={handleAdjustDuration}
            />
            <CustomButton
              title={isMeditating ? "Pause" : "Start"}
              onPress={toggleMeditationSessionStatus}
              containerStyles="mt-4"
            />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Meditate;
