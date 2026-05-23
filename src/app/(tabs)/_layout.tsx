import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";
import { useNeu } from "../../context/ThemeContext";

export default function Layout() {
  const neu = useNeu()

  function TabIcon({
    focused,
    activeName,
    inactiveName,
  }: {
    focused: boolean;
    activeName: React.ComponentProps<typeof Ionicons>["name"];
    inactiveName: React.ComponentProps<typeof Ionicons>["name"];
  }) {
    if (focused) {
      return (
        <View
          style={{
            width: 44,
            height: 36,
            borderRadius: 18,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: neu.royal + "18",
          }}
        >
          <Ionicons name={activeName} size={20} color={neu.royal} />
        </View>
      );
    }
    return (
      <View
        style={{
          width: 44,
          height: 36,
          borderRadius: 18,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name={inactiveName} size={20} color={neu.textLight} />
      </View>
    );
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 0,
          height: 80,
          paddingBottom: 6,
          paddingTop: 6,
          elevation: 8,
          shadowColor: neu.royal,
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.08,
          shadowRadius: 12,
        },
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: neu.textLight,
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "700",
          letterSpacing: 0.3,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              activeName="home"
              inactiveName="home-outline"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notices"
        options={{
          title: "Notices",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              activeName="megaphone"
              inactiveName="megaphone-outline"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="event"
        options={{
          title: "Events",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              activeName="calendar"
              inactiveName="calendar-outline"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="programs"
        options={{
          title: "Programs",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              activeName="school"
              inactiveName="school-outline"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="faculty"
        options={{
          title: "Faculty",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              activeName="people"
              inactiveName="people-outline"
            />
          ),
        }}
      />
    </Tabs>
  );
}
