import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function ChatScreen() {
  const { providerId } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#FFF',
          },
          headerTitle: 'Chat',
          headerBackTitle: 'Chats', // Custom back button text
          fullScreenGestureEnabled: true,
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title} className="text-red-2">
          This is a chat with {providerId}
        </Text>
        <View style={styles.separator} color="#eee" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
