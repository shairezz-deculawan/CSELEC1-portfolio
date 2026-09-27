import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F7F8FC" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.smallGreeting}>Good morning 👋</Text>
            <Text style={styles.headerTitle}>My Dashboard</Text>
          </View>

          <TouchableOpacity style={styles.notificationButton}>
            <Text style={styles.notificationIcon}>🔔</Text>
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.profileTop}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>SK</Text>
            </View>

            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Shairezz Krisha</Text>
              <Text style={styles.profileCourse}>
                Bachelor of Science in Computer Science
              </Text>
              <Text style={styles.profileYear}>3rd Year Student</Text>
            </View>
          </View>

          <View style={styles.profileLine} />

          <View style={styles.profileBottom}>
            <View>
              <Text style={styles.profileLabel}>Student ID</Text>
              <Text style={styles.profileValue}>23-02225</Text>
            </View>

            <TouchableOpacity style={styles.viewProfileButton}>
              <Text style={styles.viewProfileText}>View Profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Overview */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Overview</Text>
          <Text style={styles.sectionLink}>This Week</Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <View style={styles.statIconBox}>
              <Text style={styles.statIcon}>📚</Text>
            </View>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Courses</Text>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statIconBox}>
              <Text style={styles.statIcon}>✓</Text>
            </View>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statIconBox}>
              <Text style={styles.statIcon}>⏳</Text>
            </View>
            <Text style={styles.statNumber}>4</Text>
            <Text style={styles.statLabel}>Pending</Text>
          </View>
        </View>

        {/* Overall Progress */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Overall Progress</Text>
          <Text style={styles.progressPercentage}>78%</Text>
        </View>

        <View style={styles.progressCard}>
          <View style={styles.progressTop}>
            <View>
              <Text style={styles.progressTitle}>Semester Progress</Text>
              <Text style={styles.progressSubtitle}>
                Keep going! You're doing great.
              </Text>
            </View>

            <View style={styles.progressCircle}>
              <Text style={styles.progressCircleText}>78%</Text>
            </View>
          </View>

          <View style={styles.progressBarBackground}>
            <View style={styles.progressBar} />
          </View>

          <View style={styles.progressBottom}>
            <Text style={styles.progressSmallText}>Started</Text>
            <Text style={styles.progressSmallText}>Final Week</Text>
          </View>
        </View>

        {/* Recent Activities */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Activities</Text>
          <Text style={styles.sectionLink}>See All</Text>
        </View>

        {/* Activity 1 */}
        <View style={styles.activityCard}>
          <View style={[styles.activityIcon, styles.purple]}>
            <Text>📖</Text>
          </View>

          <View style={styles.activityContent}>
            <Text style={styles.activityTitle}>
              Human Computer Interaction
            </Text>

            <Text style={styles.activitySubtitle}>
              UI Redesign Activity submitted
            </Text>

            <Text style={styles.activityTime}>
              Today • 10:30 AM
            </Text>
          </View>

          <View style={styles.completedBadge}>
            <Text style={styles.completedText}>Done</Text>
          </View>
        </View>

        {/* Activity 2 */}
        <View style={styles.activityCard}>
          <View style={[styles.activityIcon, styles.blue]}>
            <Text>💻</Text>
          </View>

          <View style={styles.activityContent}>
            <Text style={styles.activityTitle}>
              Mobile Application Development
            </Text>

            <Text style={styles.activitySubtitle}>
              Activity 2 • Static UI
            </Text>

            <Text style={styles.activityTime}>
              Today • 2:15 PM
            </Text>
          </View>

          <View style={styles.pendingBadge}>
            <Text style={styles.pendingText}>Due</Text>
          </View>
        </View>

        {/* Activity 3 */}
        <View style={styles.activityCard}>
          <View style={[styles.activityIcon, styles.orange]}>
            <Text>🎨</Text>
          </View>

          <View style={styles.activityContent}>
            <Text style={styles.activityTitle}>
              Visual Arts
            </Text>

            <Text style={styles.activitySubtitle}>
              Artwork analysis
            </Text>

            <Text style={styles.activityTime}>
              Yesterday • 4:20 PM
            </Text>
          </View>

          <View style={styles.completedBadge}>
            <Text style={styles.completedText}>Done</Text>
          </View>
        </View>

        {/* Upcoming */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Upcoming</Text>
          <Text style={styles.sectionLink}>Calendar</Text>
        </View>

        <View style={styles.upcomingCard}>
          <View style={styles.dateBox}>
            <Text style={styles.dateMonth}>SEP</Text>
            <Text style={styles.dateNumber}>28</Text>
          </View>

          <View style={styles.upcomingContent}>
            <Text style={styles.upcomingTitle}>
              Activity 2 Submission
            </Text>

            <Text style={styles.upcomingSubtitle}>
              Mobile Application Development
            </Text>

            <Text style={styles.upcomingTime}>
              11:59 PM
            </Text>
          </View>

          <Text style={styles.upcomingArrow}>›</Text>
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F8FC',
  },

  container: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 30,
  },

  /* Header */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },

  smallGreeting: {
    fontSize: 13,
    color: '#8A8E9B',
    marginBottom: 5,
  },

  headerTitle: {
    fontSize: 27,
    fontWeight: '800',
    color: '#20222A',
  },

  notificationButton: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  notificationIcon: {
    fontSize: 20,
  },

  notificationDot: {
    position: 'absolute',
    top: 11,
    right: 11,
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#7657F6',
  },

  /* Profile */
  profileCard: {
    backgroundColor: '#7657F6',
    borderRadius: 24,
    padding: 20,
    marginBottom: 24,
  },

  profileTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 58,
    height: 58,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    fontSize: 19,
    fontWeight: '800',
    color: '#7657F6',
  },

  profileInfo: {
    flex: 1,
    marginLeft: 14,
  },

  profileName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  profileCourse: {
    fontSize: 10,
    color: '#E9E4FF',
    marginTop: 4,
  },

  profileYear: {
    fontSize: 10,
    color: '#E9E4FF',
    marginTop: 3,
  },

  profileLine: {
    height: 1,
    backgroundColor: '#8F7AF8',
    marginVertical: 18,
  },

  profileBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  profileLabel: {
    fontSize: 9,
    color: '#DCD5FF',
  },

  profileValue: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF',
    marginTop: 3,
  },

  viewProfileButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  viewProfileText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#7657F6',
  },

  /* Section */
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#20222A',
  },

  sectionLink: {
    fontSize: 10,
    fontWeight: '600',
    color: '#7657F6',
  },

  /* Statistics */
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },

  statCard: {
    width: '31.5%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 13,
  },

  statIconBox: {
    width: 34,
    height: 34,
    borderRadius: 11,
    backgroundColor: '#F0EDFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  statIcon: {
    fontSize: 16,
  },

  statNumber: {
    fontSize: 22,
    fontWeight: '800',
    color: '#20222A',
    marginTop: 10,
  },

  statLabel: {
    fontSize: 9,
    color: '#8A8E9B',
    marginTop: 2,
  },

  /* Progress */
  progressPercentage: {
    fontSize: 13,
    fontWeight: '800',
    color: '#7657F6',
  },

  progressCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    marginBottom: 24,
  },

  progressTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  progressTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#292B34',
  },

  progressSubtitle: {
    fontSize: 10,
    color: '#858894',
    marginTop: 4,
  },

  progressCircle: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: '#F0EDFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  progressCircleText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#7657F6',
  },

  progressBarBackground: {
    height: 9,
    borderRadius: 5,
    backgroundColor: '#EEEAFD',
    marginTop: 18,
    overflow: 'hidden',
  },

  progressBar: {
    width: '78%',
    height: '100%',
    borderRadius: 5,
    backgroundColor: '#7657F6',
  },

  progressBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },

  progressSmallText: {
    fontSize: 9,
    color: '#A0A2AC',
  },

  /* Activities */
  activityCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 14,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  activityIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  purple: {
    backgroundColor: '#F0EDFF',
  },

  blue: {
    backgroundColor: '#EAF3FF',
  },

  orange: {
    backgroundColor: '#FFF1E6',
  },

  activityContent: {
    flex: 1,
    marginLeft: 12,
    marginRight: 7,
  },

  activityTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#292B34',
  },

  activitySubtitle: {
    fontSize: 10,
    color: '#858894',
    marginTop: 3,
  },

  activityTime: {
    fontSize: 9,
    color: '#A5A7B0',
    marginTop: 4,
  },

  completedBadge: {
    backgroundColor: '#E8F8EF',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
  },

  completedText: {
    color: '#2F9D60',
    fontSize: 9,
    fontWeight: '700',
  },

  pendingBadge: {
    backgroundColor: '#FFF1E5',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
  },

  pendingText: {
    color: '#D77A2E',
    fontSize: 9,
    fontWeight: '700',
  },

  /* Upcoming */
  upcomingCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  dateBox: {
    width: 50,
    height: 58,
    borderRadius: 14,
    backgroundColor: '#F0EDFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  dateMonth: {
    fontSize: 9,
    fontWeight: '700',
    color: '#7657F6',
  },

  dateNumber: {
    fontSize: 22,
    fontWeight: '800',
    color: '#7657F6',
    marginTop: 1,
  },

  upcomingContent: {
    flex: 1,
    marginLeft: 13,
  },

  upcomingTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#292B34',
  },

  upcomingSubtitle: {
    fontSize: 10,
    color: '#858894',
    marginTop: 4,
  },

  upcomingTime: {
    fontSize: 10,
    color: '#7657F6',
    fontWeight: '600',
    marginTop: 4,
  },

  upcomingArrow: {
    fontSize: 27,
    color: '#B4B6C0',
    marginLeft: 5,
  },
});