import { ScrollView, View, Text, Pressable, Alert } from "react-native"
import { useRouter } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import { Card, CircleIcon } from "../../components/ui"
import { useTheme } from "../../context/ThemeContext"
import { userProfile } from "../../sample"

export default function ProfileScreen() {
  const { neu, isDark, toggle } = useTheme()
  const router = useRouter()

  const menuItems = [
    { icon: "book-outline" as const, label: "My Courses", color: neu.royal, route: "/(tabs)/home" },
    { icon: "calendar-outline" as const, label: "Timetable", color: neu.cyan, route: "" },
    { icon: "checkbox-outline" as const, label: "Attendance Report", color: neu.success, route: "" },
    { icon: "stats-chart-outline" as const, label: "Academic Report", color: "#8B5CF6", route: "" },
    { icon: "card-outline" as const, label: "Fee Details", color: neu.warning, route: "" },
    { icon: isDark ? "sunny-outline" as const : "moon-outline" as const, label: isDark ? "Light Mode" : "Dark Mode", color: neu.midnight, route: "" },
    { icon: "log-out-outline" as const, label: "Sign Out", color: neu.error, route: "" },
  ]

  const handlePress = (item: typeof menuItems[number]) => {
    if (item.label === "Dark Mode" || item.label === "Light Mode") {
      toggle()
    } else if (item.label === "Sign Out") {
      Alert.alert("Sign Out", "Are you sure you want to sign out?", [
        { text: "Cancel", style: "cancel" },
        { text: "Sign Out", style: "destructive" },
      ])
    } else if (item.route) {
      router.push(item.route as any)
    }
  }

  return (
    <View className="flex-1" style={{ backgroundColor: neu.bg }}>
      <View className="px-5 pt-14 pb-3" style={{ backgroundColor: neu.midnight }}>
        <View className="flex-row items-center">
          <Pressable onPress={() => router.back()} className="mr-4">
            <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
          </Pressable>
          <Text className="text-lg font-bold text-white">Profile</Text>
        </View>
      </View>
      <ScrollView className="flex-1 px-5 pt-5">
        <Card elevated radius={neu.radius.xl}>
          <View className="items-center py-2">
            <CircleIcon size={72} color={neu.cyan}>
              <Text className="text-2xl font-extrabold" style={{ color: neu.cyan }}>AJ</Text>
            </CircleIcon>
            <Text className="text-lg font-bold mt-3" style={{ color: neu.text }}>{userProfile.name}</Text>
            <Text className="text-xs font-medium" style={{ color: neu.textMuted }}>{userProfile.id}</Text>
          </View>
        </Card>

        <Card radius={neu.radius.lg} style={{ marginTop: 16 }}>
          <View className="flex-row items-center justify-between py-2">
            <Text className="text-xs font-semibold" style={{ color: neu.textMuted }}>Department</Text>
            <Text className="text-xs font-bold" style={{ color: neu.text }}>{userProfile.department}</Text>
          </View>
          <View className="flex-row items-center justify-between py-2" style={{ borderTopWidth: 1, borderTopColor: neu.border }}>
            <Text className="text-xs font-semibold" style={{ color: neu.textMuted }}>Year</Text>
            <Text className="text-xs font-bold" style={{ color: neu.text }}>{userProfile.year} · {userProfile.semester}</Text>
          </View>
          <View className="flex-row items-center justify-between py-2" style={{ borderTopWidth: 1, borderTopColor: neu.border }}>
            <Text className="text-xs font-semibold" style={{ color: neu.textMuted }}>CGPA</Text>
            <Text className="text-xs font-extrabold" style={{ color: neu.royal }}>{userProfile.cgpa} / 10</Text>
          </View>
          <View className="flex-row items-center justify-between py-2" style={{ borderTopWidth: 1, borderTopColor: neu.border }}>
            <Text className="text-xs font-semibold" style={{ color: neu.textMuted }}>Email</Text>
            <Text className="text-xs font-bold" style={{ color: neu.text }}>{userProfile.email}</Text>
          </View>
          <View className="flex-row items-center justify-between pt-2" style={{ borderTopWidth: 1, borderTopColor: neu.border }}>
            <Text className="text-xs font-semibold" style={{ color: neu.textMuted }}>Phone</Text>
            <Text className="text-xs font-bold" style={{ color: neu.text }}>{userProfile.phone}</Text>
          </View>
        </Card>

        <Card radius={neu.radius.lg} style={{ marginTop: 16, marginBottom: 32 }}>
          {menuItems.map((item, i) => (
            <Pressable key={item.label} onPress={() => handlePress(item)} className={`flex-row items-center py-3.5 ${i < menuItems.length - 1 ? "" : ""}`} style={{ borderBottomWidth: i < menuItems.length - 1 ? 1 : 0, borderBottomColor: neu.border }}>
              <CircleIcon size={34} color={item.color}>
                <Ionicons name={item.icon} size={16} color={item.color} />
              </CircleIcon>
              <Text className="flex-1 text-sm font-semibold ml-3" style={{ color: neu.text }}>{item.label}</Text>
              <Ionicons name="chevron-forward" size={16} color={neu.textLight} />
            </Pressable>
          ))}
        </Card>
      </ScrollView>
    </View>
  )
}
