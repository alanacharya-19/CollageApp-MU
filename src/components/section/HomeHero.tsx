import { View, Text, TextInput } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { NeumorphicBox } from "../ui"
import { neu } from "../ui"

export default function HomeHero() {
  return (
    <View className="px-5 mt-2">
      <NeumorphicBox radius={neu.radius.xl}>
        <View className="p-6">
          <View className="flex-row items-center mb-2">
            <View className="w-12 h-12 rounded-2xl items-center justify-center" style={{ backgroundColor: neu.accent + "15" }}>
              <Ionicons name="school" size={24} color={neu.accent} />
            </View>
            <View className="ml-4">
              <Text className="text-[11px] font-bold tracking-[2px]" style={{ color: neu.textLight }}>UNIVERSITY OF TECHNOLOGY</Text>
              <Text className="text-lg font-bold -mt-0.5" style={{ color: neu.text }}>Empowering minds since 1965</Text>
            </View>
          </View>

          <Text className="text-xs leading-5 mb-5" style={{ color: neu.textMuted }}>
            Excellence in education, research, and innovation. Ranked among top 50 universities nationally.
          </Text>

          <NeumorphicBox radius={neu.radius.md} inset>
            <View className="flex-row items-center px-4 py-3.5">
              <Ionicons name="search" size={18} color={neu.textLight} />
              <TextInput
                placeholder="Search courses, events, faculty..."
                placeholderTextColor={neu.textLight}
                className="flex-1 ml-2.5 text-sm"
                style={{ color: neu.text, outline: "none" }}
              />
              <View className="w-7 h-7 rounded-full items-center justify-center" style={{ backgroundColor: neu.dark + "20" }}>
                <Ionicons name="options" size={14} color={neu.textMuted} />
              </View>
            </View>
          </NeumorphicBox>

          <View className="flex-row justify-between mt-5 pt-5" style={{ borderTopWidth: 1, borderTopColor: neu.dark + "30" }}>
            <View className="items-center">
              <Text className="text-sm font-extrabold" style={{ color: neu.text }}>12k+</Text>
              <Text className="text-[9px] font-bold tracking-wide mt-0.5" style={{ color: neu.textLight }}>Students</Text>
            </View>
            <View className="w-px" style={{ backgroundColor: neu.dark + "30" }} />
            <View className="items-center">
              <Text className="text-sm font-extrabold" style={{ color: neu.text }}>680</Text>
              <Text className="text-[9px] font-bold tracking-wide mt-0.5" style={{ color: neu.textLight }}>Faculty</Text>
            </View>
            <View className="w-px" style={{ backgroundColor: neu.dark + "30" }} />
            <View className="items-center">
              <Text className="text-sm font-extrabold" style={{ color: neu.text }}>45+</Text>
              <Text className="text-[9px] font-bold tracking-wide mt-0.5" style={{ color: neu.textLight }}>Programs</Text>
            </View>
            <View className="w-px" style={{ backgroundColor: neu.dark + "30" }} />
            <View className="items-center">
              <Text className="text-sm font-extrabold" style={{ color: neu.text }}>92%</Text>
              <Text className="text-[9px] font-bold tracking-wide mt-0.5" style={{ color: neu.textLight }}>Placements</Text>
            </View>
          </View>
        </View>
      </NeumorphicBox>
    </View>
  )
}
