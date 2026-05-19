import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { getEvents } from "../../services/api";
import EventItem from "../items/EventItem";

interface Event {
  _id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  status: string;
}

export default function UpcomingEvents() {
  const router = useRouter();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const { data } = await getEvents();
      setEvents(
        (data.events || [])
          .filter((e: Event) => ["upcoming", "ongoing"].includes(e.status))
          .slice(0, 5),
      );
    } catch (err) {
      console.error("Failed to load events", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Upcoming Events</Text>
        <Pressable
          style={({ pressed }) => ({ opacity: pressed ? 0.7 : 1 })}
          onPress={() => router.push("/(tabs)/events")}
        >
          <Text style={styles.viewAll}>View All</Text>
        </Pressable>
      </View>

      {loading ? (
        <ActivityIndicator size="small" color="#811cd4" />
      ) : events.length === 0 ? (
        <Text style={styles.emptyText}>No upcoming events</Text>
      ) : (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {events.map((event) => (
            <View key={event._id} style={styles.cardWrapper}>
              <EventItem
                event={{
                  id: event._id,
                  title: event.title,
                  description: event.description,
                  date: event.date,
                  time: event.time,
                  location: event.location,
                  status: event.status,
                }}
              />
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  title: {
    fontWeight: "900",
    fontSize: 16,
    color: "#1E2A3A",
  },
  viewAll: {
    color: "#811cd4",
    fontWeight: "500",
    fontSize: 13,
  },
  scrollContent: {
    paddingRight: 10,
  },
  cardWrapper: {
    width: 280,
    marginRight: 12,
  },
  emptyText: {
    fontSize: 14,
    color: "#94a3b8",
    textAlign: "center",
    paddingVertical: 12,
  },
});
