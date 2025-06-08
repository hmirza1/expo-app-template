import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View className="size-full bg-claude">
      <Text className="text-accent pt-8 text-center text-2xl font-bold">
        Profile
      </Text>
      {/* <Text
        className={
          "animate-bounce text-center text-xl font-bold text-red-500 duration-300"
        }
      >
        If this is red and large, NativeWind works!
      </Text> */}
      <EditScreenInfo path="app/(tabs)/three.tsx" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });
