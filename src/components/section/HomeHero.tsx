import { View, Text, TextInput } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"
import { stats } from "../../sample"

const bg = "#E8EDF2"

export default function HomeHero() {
  return (
    <View className="px-5 mt-1">
      <View style={{ borderRadius: 28, backgroundColor: bg }}>
        <View style={{ borderRadius: 28, backgroundColor: bg, shadowColor: "#FFFFFF", shadowOffset: { width: -6, height: -6 }, shadowOpacity: 0.8, shadowRadius: 14 }}>
          <View style={{ borderRadius: 28, backgroundColor: bg, shadowColor: "#C8D0D9", shadowOffset: { width: 6, height: 6 }, shadowOpacity: 0.5, shadowRadius: 14, elevation: 6 }}>
            <LinearGradient
              colors={["#5B7FFF", "#3B5BDB"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1.2 }}
              className="rounded-3xl p-6 pt-7"
            >
              <View className="flex-row items-center mb-2">
                <View className="w-10 h-10 rounded-2xl bg-white/15 items-center justify-center mr-3">
                  <Ionicons name="school" size={20} color="white" />
                </View>
                <View>
                  <Text className="text-white/60 text-[11px] font-bold tracking-[2px]">UNIVERSITY OF TECHNOLOGY</Text>
                  <Text className="text-white text-lg font-bold -mt-0.5">Empowering minds since 1965</Text>
                </View>
              </View>

              <Text className="text-white/50 text-xs leading-5 mb-4">
                Excellence in education, research, and innovation. Ranked among top 50 universities nationally.
              </Text>

              <View style={{ borderRadius: 16 }} className="flex-row items-center px-4 py-3" >
                <View style={{ borderRadius: 16, backgroundColor: "rgba(255,255,255,0.12)", flex: 1, flexDirection: "row", alignItems: "center", paddingHorizontal: 14, paddingVertical: 12 }}>
                  <Ionicons name="search" size={18} color="rgba(255,255,255,0.5)" />
                  <TextInput
                    placeholder="Search courses, events, faculty..."
                    placeholderTextColor="rgba(255,255,255,0.35)"
                    className="flex-1 ml-2.5 text-white text-sm"
                    style={{ outline: "none" }}
                  />
                  <View className="w-7 h-7 rounded-full bg-white/15 items-center justify-center">
                    <Ionicons name="options" size={14} color="rgba(255,255,255,0.7)" />
                  </View>
                </View>
              </View>

              <View className="flex-row justify-between mt-4 pt-4 border-t border-white/10">
                {stats.map((s) => (
                  <View key={s.id} className="items-center">
                    <Text className="text-white text-sm font-extrabold">{s.value}</Text>
                    <Text className="text-white/45 text-[9px] font-bold tracking-wide mt-0.5">{s.label}</Text>
                  </View>
                ))}
              </View>
            </LinearGradient>
          </View>
        </View>
      </View>
    </View>
  )
}
