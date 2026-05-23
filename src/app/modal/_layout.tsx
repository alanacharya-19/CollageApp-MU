import { Stack } from "expo-router"

export default function ModalLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, presentation: "modal" }}>
      <Stack.Screen name="notice" />
      <Stack.Screen name="event" />
      <Stack.Screen name="profile" />
      <Stack.Screen name="program" />
      <Stack.Screen name="faculty" />
    </Stack>
  )
}
