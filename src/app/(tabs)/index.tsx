import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';

export default function ChatsScreen() {
  const scale = useSharedValue(1);
  const rotation = useSharedValue(0);

  React.useEffect(() => {
    scale.value = withRepeat(
      withSpring(1.2, {
        damping: 2,
        mass: 20,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 2,
        stiffness: 80,
      }),
      -1,
      true,
    );
    rotation.value = withRepeat(
      withSpring(5, {
        damping: 3,
        stiffness: 100,
      }),
      -1,
      true,
    );
  }, [scale, rotation]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }, { rotate: `${rotation.value}deg` }],
    } as any;
  });
  return (
    <View className="flex-1 items-center justify-center bg-claude">
      <Animated.View style={animatedStyle}>
        <Text className="mb-4 text-3xl font-bold text-slate-900">
          NativeWind Test
        </Text>
      </Animated.View>

      <Link href="/chat/drsyed" push>
        <Text className="text-destructive text-2xl font-bold underline">
          Go to Chat
        </Text>
      </Link>

      <View className="my-8 h-px w-4/5 bg-gray-300" />

      {/* Color Tests */}
      <Text className="mb-4 text-lg font-semibold">Color Tests:</Text>
      <Text className="text-lg text-blue-500">Blue Text</Text>
      <Text className="text-lg text-green-600">Green Text</Text>
      <Text className="text-lg text-purple-700">Purple Text</Text>

      {/* Background Tests */}
      <View className="mt-6 rounded-lg border-2 border-amber-300 bg-amber-100 p-4">
        <Text className="font-medium text-amber-900">Amber Background</Text>
      </View>

      {/* Flexbox Test */}
      <View className="mt-4 flex-row gap-3">
        <View className="rounded-md bg-red-200 p-3">
          <Text className="font-bold text-red-800">Red Box</Text>
        </View>
        <View className="rounded-md bg-blue-200 p-3">
          <Text className="font-bold text-blue-800">Blue Box</Text>
        </View>
        <View className="rounded-md bg-green-200 p-3">
          <Text className="font-bold text-green-800">Green Box</Text>
        </View>
      </View>

      {/* Dynamic Test - Change this to test hot reload */}
      <View className="mt-6 rounded-full bg-indigo-500 px-6 py-3">
        <Text className="font-semibold text-white">
          Change my color in code!
        </Text>
      </View>
    </View>
  );
}
