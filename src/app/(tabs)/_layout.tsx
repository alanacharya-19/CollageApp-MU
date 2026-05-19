import { Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router"
import { View } from "react-native"
import { neu } from "../../components/ui"

const bg = neu.bg
const dark = neu.dark
const light = neu.light
const insetBg = neu.insetBg

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          width: "88%",
          marginHorizontal: "6%",
          bottom: 18,
          height: 66,
          borderRadius: 33,
          backgroundColor: bg,
          borderTopWidth: 0,
          elevation: 0,
          shadowColor: "transparent",
          shadowOpacity: 0,
        },
        tabBarBackground: () => (
          <View style={{ flex: 1, backgroundColor: bg, borderRadius: 33, shadowColor: light, shadowOffset: { width: -7, height: -7 }, shadowOpacity: 0.8, shadowRadius: 15 }}>
            <View style={{ flex: 1, backgroundColor: bg, borderRadius: 33, shadowColor: dark, shadowOffset: { width: 7, height: 7 }, shadowOpacity: 0.5, shadowRadius: 15, elevation: 12 }} />
          </View>
        ),
        tabBarActiveTintColor: neu.accent,
        tabBarInactiveTintColor: neu.textMuted,
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "700",
          marginTop: -2,
          letterSpacing: 0.3,
          marginBottom: 4,
        },
        tabBarItemStyle: {
          paddingTop: 6,
        },
      }}
    >
      <Tabs.Screen name="home" options={{ title: "Home", tabBarIcon: ({ focused }) => <TabIcon focused={focused} name={focused ? "home" : "home-outline"} /> }} />
      <Tabs.Screen name="notices" options={{ title: "Notices", tabBarIcon: ({ focused }) => <TabIcon focused={focused} name={focused ? "megaphone" : "megaphone-outline"} /> }} />
      <Tabs.Screen name="event" options={{ title: "Events", tabBarIcon: ({ focused }) => <TabIcon focused={focused} name={focused ? "calendar" : "calendar-outline"} /> }} />
      <Tabs.Screen name="programs" options={{ title: "Programs", tabBarIcon: ({ focused }) => <TabIcon focused={focused} name={focused ? "school" : "school-outline"} /> }} />
      <Tabs.Screen name="faculty" options={{ title: "Faculty", tabBarIcon: ({ focused }) => <TabIcon focused={focused} name={focused ? "people" : "people-outline"} /> }} />
    </Tabs>
  )
}

function TabIcon({ focused, name }: { focused: boolean; name: React.ComponentProps<typeof Ionicons>["name"] }) {
  if (focused) {
    return (
      <View style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: insetBg, alignItems: "center", justifyContent: "center", shadowColor: dark, shadowOffset: { width: -3, height: -3 }, shadowOpacity: 0.35, shadowRadius: 5 }}>
        <View style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: insetBg, alignItems: "center", justifyContent: "center", shadowColor: light, shadowOffset: { width: 3, height: 3 }, shadowOpacity: 0.6, shadowRadius: 5, elevation: 2 }}>
          <Ionicons name={name} size={22} color={neu.accent} />
        </View>
      </View>
    )
  }
  return (
    <View style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: bg, alignItems: "center", justifyContent: "center", shadowColor: light, shadowOffset: { width: -4, height: -4 }, shadowOpacity: 0.8, shadowRadius: 6 }}>
      <View style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: bg, alignItems: "center", justifyContent: "center", shadowColor: dark, shadowOffset: { width: 4, height: 4 }, shadowOpacity: 0.5, shadowRadius: 6, elevation: 5 }}>
        <Ionicons name={name} size={20} color={neu.textMuted} />
      </View>
    </View>
  )
}
