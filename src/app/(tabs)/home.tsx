import { ScrollView, View } from "react-native"
import { neu } from "../../components/ui"
import { HeaderHome, HomeHero, QuickActions, LatestAnnouncements, UpcomingEvents, CurrentCourses } from "../../components/section"
import { AttendanceWidget, MarksWidget, TimeTableWidget } from "../../components/widget"

export default function HomeScreen() {
  return (
    <View className="flex-1" style={{ backgroundColor: neu.bg }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        <HeaderHome />
        <HomeHero />
        <QuickActions />

        <View className="mt-6 px-5">
          <View className="flex-row">
            <View className="flex-1 mr-2">
              <AttendanceWidget />
            </View>
            <View className="flex-1 ml-2">
              <MarksWidget />
            </View>
          </View>
        </View>

        <View className="mt-4 px-5">
          <TimeTableWidget />
        </View>

        <LatestAnnouncements />
        <CurrentCourses />
        <UpcomingEvents />
      </ScrollView>
    </View>
  )
}
