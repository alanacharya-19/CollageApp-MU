import { Stack } from "expo-router"
import { ThemeProvider } from "../context/ThemeContext"
import "../../global.css"

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="search" options={{ presentation: "modal" }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </ThemeProvider>
  )
}
