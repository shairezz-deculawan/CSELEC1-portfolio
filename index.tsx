import { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

type TodoItem = {
  id: string;
  title: string;
  completed: boolean;
};

export default function App() {
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState<TodoItem[]>([]);

  const addTask = () => {
    const trimmedText = inputText.trim();

    if (trimmedText === '') {
      return;
    }

    const newTask: TodoItem = {
      id: Date.now().toString(),
      title: trimmedText,
      completed: false,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
    setInputText('');
  };

  const toggleTask = (id: string) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    );
  };

  const renderTask = ({ item }: { item: TodoItem }) => {
    return (
      <View style={styles.taskCard}>
        <TouchableOpacity
          style={styles.taskContent}
          onPress={() => toggleTask(item.id)}
          activeOpacity={0.7}
        >
          <View
            style={[
              styles.checkCircle,
              item.completed && styles.checkCircleCompleted,
            ]}
          >
            {item.completed && (
              <Text style={styles.checkMark}>✓</Text>
            )}
          </View>

          <Text
            style={[
              styles.taskText,
              item.completed && styles.taskTextCompleted,
            ]}
          >
            {item.title}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deleteTask(item.id)}
          activeOpacity={0.7}
        >
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F7F8FC"
      />

      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Stay organized ✨</Text>
          <Text style={styles.title}>My To-Do List</Text>
          <Text style={styles.subtitle}>
            Add tasks and keep track of what you need to do.
          </Text>
        </View>

        {/* Input Area */}
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Enter a new task..."
            placeholderTextColor="#999999"
            value={inputText}
            onChangeText={setInputText}
            onSubmitEditing={addTask}
            returnKeyType="done"
          />

          <TouchableOpacity
            style={styles.addButton}
            onPress={addTask}
            activeOpacity={0.8}
          >
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>

        {/* Task Count */}
        <View style={styles.listHeader}>
          <Text style={styles.listTitle}>My Tasks</Text>

          <View style={styles.countBadge}>
            <Text style={styles.countText}>
              {tasks.length}
            </Text>
          </View>
        </View>

        {/* Dynamic List */}
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={renderTask}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={
            tasks.length === 0
              ? styles.emptyList
              : styles.listContent
          }
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyIcon}>📝</Text>

              <Text style={styles.emptyTitle}>
                No tasks yet
              </Text>

              <Text style={styles.emptyText}>
                Add your first task using the field above.
              </Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F8FC',
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  /* Header */
  header: {
    marginBottom: 22,
  },

  greeting: {
    fontSize: 13,
    color: '#7657F6',
    fontWeight: '600',
    marginBottom: 5,
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#20222A',
  },

  subtitle: {
    fontSize: 12,
    color: '#858894',
    marginTop: 6,
    lineHeight: 18,
  },

  /* Input */
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },

  input: {
    flex: 1,
    height: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#292B34',
    borderWidth: 1,
    borderColor: '#E7E7ED',
  },

  addButton: {
    height: 52,
    paddingHorizontal: 20,
    marginLeft: 10,
    borderRadius: 15,
    backgroundColor: '#7657F6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },

  /* List Header */
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  listTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#20222A',
  },

  countBadge: {
    minWidth: 28,
    height: 28,
    paddingHorizontal: 8,
    borderRadius: 14,
    backgroundColor: '#EEEAFD',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 9,
  },

  countText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#7657F6',
  },

  /* List */
  listContent: {
    paddingBottom: 30,
  },

  emptyList: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
  },

  emptyContainer: {
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  emptyIcon: {
    fontSize: 48,
    marginBottom: 12,
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#292B34',
  },

  emptyText: {
    fontSize: 12,
    color: '#858894',
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 18,
  },

  /* Task Card */
  taskCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 14,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  taskContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#7657F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  checkCircleCompleted: {
    backgroundColor: '#7657F6',
  },

  checkMark: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },

  taskText: {
    flex: 1,
    fontSize: 14,
    color: '#292B34',
    fontWeight: '500',
  },

  taskTextCompleted: {
    color: '#A0A2AC',
    textDecorationLine: 'line-through',
  },

  /* Delete */
  deleteButton: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: '#FFF0F0',
    marginLeft: 8,
  },

  deleteText: {
    color: '#D95353',
    fontSize: 11,
    fontWeight: '700',
  },
});