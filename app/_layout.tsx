import { Slot, Stack } from "expo-router";
// this component acts the same as children prop in web apps (like Next.js)

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
