import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '@ui/Button';

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-primary text-2xl font-bold mb-4">
        Welcome to NativeWind!
      </Text>
      <Button label="Hello from shared Button" onPress={() => alert('Clicked!')} />
    </View>
  );
}
