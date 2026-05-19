import { Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router"
import { View } from "react-native"

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
          height: 64,
          borderRadius: 32,
          backgroundColor: "#E8EDF2",
          borderTopWidth: 0,
          elevation: 0,
          shadowColor: "transparent",
          shadowOpacity: 0,
        },
        tabBarBackground: () => (
          <View
            style={{
              flex: 1,
              backgroundColor: "#E8EDF2",
              borderRadius: 32,
              margin: 0,
              shadowColor: "#FFFFFF",
              shadowOffset: { width: -6, height: -6 },
              shadowOpacity: 0.8,
              shadowRadius: 12,
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "#E8EDF2",
                borderRadius: 32,
                shadowColor: "#C8D0D9",
                shadowOffset: { width: 6, height: 6 },
                shadowOpacity: 0.6,
                shadowRadius: 12,
                elevation: 10,
              }}
            />
          </View>
        ),
        tabBarActiveTintColor: "#5B7FFF",
        tabBarInactiveTintColor: "#9BA6B8",
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "700",
          marginTop: -2,
          letterSpacing: 0.3,
        },
        tabBarItemStyle: {
          paddingTop: 6,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color }) => (
            <NeumorphicTabIcon focused={focused} color={color}>
              <Ionicons name={focused ? "home" : "home-outline"} size={22} color={color} />
            </NeumorphicTabIcon>
          ),
        }}
      />
      <Tabs.Screen
        name="notices"
        options={{
          title: "Notices",
          tabBarIcon: ({ focused, color }) => (
            <NeumorphicTabIcon focused={focused} color={color}>
              <Ionicons name={focused ? "megaphone" : "megaphone-outline"} size={22} color={color} />
            </NeumorphicTabIcon>
          ),
        }}
      />
      <Tabs.Screen
        name="event"
        options={{
          title: "Events",
          tabBarIcon: ({ focused, color }) => (
            <NeumorphicTabIcon focused={focused} color={color}>
              <Ionicons name={focused ? "calendar" : "calendar-outline"} size={22} color={color} />
            </NeumorphicTabIcon>
          ),
        }}
      />
      <Tabs.Screen
        name="programs"
        options={{
          title: "Programs",
          tabBarIcon: ({ focused, color }) => (
            <NeumorphicTabIcon focused={focused} color={color}>
              <Ionicons name={focused ? "school" : "school-outline"} size={22} color={color} />
            </NeumorphicTabIcon>
          ),
        }}
      />
      <Tabs.Screen
        name="faculty"
        options={{
          title: "Faculty",
          tabBarIcon: ({ focused, color }) => (
            <NeumorphicTabIcon focused={focused} color={color}>
              <Ionicons name={focused ? "people" : "people-outline"} size={22} color={color} />
            </NeumorphicTabIcon>
          ),
        }}
      />
    </Tabs>
  )
}

function NeumorphicTabIcon({ focused, color, children }: { focused: boolean; color: string; children: React.ReactNode }) {
  return focused ? (
    <View
      style={{
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: "#E8EDF2",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#FFFFFF",
        shadowOffset: { width: -3, height: -3 },
        shadowOpacity: 0.9,
        shadowRadius: 5,
      }}
    >
      <View
        style={{
          width: 44,
          height: 44,
          borderRadius: 22,
          backgroundColor: "#E8EDF2",
          alignItems: "center",
          justifyContent: "center",
          shadowColor: "#C8D0D9",
          shadowOffset: { width: 3, height: 3 },
          shadowOpacity: 0.5,
          shadowRadius: 5,
          elevation: 4,
        }}
      >
        {children}
      </View>
    </View>
  ) : (
    <View style={{ width: 44, height: 44, alignItems: "center", justifyContent: "center" }}>
      {children}
    </View>
  )
}
