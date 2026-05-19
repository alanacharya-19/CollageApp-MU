import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function Layout() {
  const focusedColor = "#007AFF";
  const nonfocusedColor = "#999";
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          position: "absolute",
          width: "80%",
          marginLeft: 35,
          bottom: 20,
          left: 20,
          right: 20,
          height: 60,
          borderRadius: 30,
          backgroundColor: "#fff",

          elevation: 10,
          shadowColor: "#000",
          shadowOpacity: 0.15,
          shadowOffset: { width: 0, height: 5 },
          shadowRadius: 10,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={25}
              color={focused ? focusedColor : nonfocusedColor}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="notices"
        options={{
          title: "Notices",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "megaphone" : "megaphone-outline"}
              size={25}
              color={focused ? focusedColor : nonfocusedColor}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="event"
        options={{
          title: "Events",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "calendar" : "calendar-outline"}
              size={25}
              color={focused ? focusedColor : nonfocusedColor}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="programs"
        options={{
          title: "Programs",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "school" : "school-outline"}
              size={25}
              color={focused ? focusedColor : nonfocusedColor}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="faculty"
        options={{
          title: "Faculty",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "people" : "people-outline"}
              size={25}
              color={focused ? "#007AFF" : "#999"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
