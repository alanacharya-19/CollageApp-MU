import { Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router"
import { View } from "react-native"
import { neu } from "../../components/ui"

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: neu.card,
          borderTopWidth: 1,
          borderTopColor: neu.border,
          height: 60,
          paddingBottom: 6,
          paddingTop: 6,
          elevation: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.06,
          shadowRadius: 8,
        },
        tabBarActiveTintColor: neu.royal,
        tabBarInactiveTintColor: neu.textLight,
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "700",
          letterSpacing: 0.3,
        },
      }}
    >
      <Tabs.Screen name="home" options={{ title: "Home", tabBarIcon: ({ focused }) => <TabIcon focused={focused} activeName="home" inactiveName="home-outline" /> }} />
      <Tabs.Screen name="notices" options={{ title: "Notices", tabBarIcon: ({ focused }) => <TabIcon focused={focused} activeName="megaphone" inactiveName="megaphone-outline" /> }} />
      <Tabs.Screen name="event" options={{ title: "Events", tabBarIcon: ({ focused }) => <TabIcon focused={focused} activeName="calendar" inactiveName="calendar-outline" /> }} />
      <Tabs.Screen name="programs" options={{ title: "Programs", tabBarIcon: ({ focused }) => <TabIcon focused={focused} activeName="school" inactiveName="school-outline" /> }} />
      <Tabs.Screen name="faculty" options={{ title: "Faculty", tabBarIcon: ({ focused }) => <TabIcon focused={focused} activeName="people" inactiveName="people-outline" /> }} />
    </Tabs>
  )
}

function TabIcon({ focused, activeName, inactiveName }: { focused: boolean; activeName: React.ComponentProps<typeof Ionicons>["name"]; inactiveName: React.ComponentProps<typeof Ionicons>["name"] }) {
  return (
    <View style={{ width: 36, height: 36, borderRadius: 18, alignItems: "center", justifyContent: "center", backgroundColor: focused ? neu.royal + "10" : "transparent" }}>
      <Ionicons name={focused ? activeName : inactiveName} size={20} color={focused ? neu.royal : neu.textLight} />
    </View>
  )
}
