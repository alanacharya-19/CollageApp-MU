import { ScrollView, View } from "react-native"
import { neu } from "../../components/ui"
import { HeaderHome, HomeHero, QuickActions, LatestAnnouncements, UpcomingEvents, CurrentCourses } from "../../components/section"

export default function HomeScreen() {
  return (
    <View className="flex-1" style={{ backgroundColor: neu.bg }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        <HeaderHome />
        <HomeHero />
        <QuickActions />
        <LatestAnnouncements />
        <CurrentCourses />
        <UpcomingEvents />
      </ScrollView>
    </View>
  )
}
