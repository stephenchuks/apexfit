import React from 'react';
import { Tabs } from 'expo-router';
import { Platform, useColorScheme } from 'react-native';

// Example color schemes
const colors = {
  light: {
    text: '#000',
    background: '#fff',
    tint: '#0d9488',
    icon: '#64748b',
    tabIconDefault: '#aaa',
    tabIconSelected: '#0d9488'
  },
  dark: {
    text: '#fff',
    background: '#222',
    tint: '#0d9488',
    icon: '#64748b',
    tabIconDefault: '#444',
    tabIconSelected: '#0d9488'
  }
};

export default function Layout() {
  const colorScheme = useColorScheme() as 'light' | 'dark';

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors[colorScheme].tabIconSelected,
        tabBarInactiveTintColor: colors[colorScheme].tabIconDefault,
        tabBarStyle: {
          backgroundColor: colors[colorScheme].background
        },
        tabBarIcon: ({ color }: { color: string }) => (
          // Replace with your icon component
          <YourIconComponent color={color} />
        )
      }}
    >
      {/* Example tab screens */}
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }: { color: string }) => (
            // Replace with your icon component
            <YourIconComponent color={color} />
          )
        }}
      />
      {/* Add other Tabs.Screen components as needed */}
    </Tabs>
  );
}

// Dummy Icon Component for demonstration
function YourIconComponent({ color }: { color: string }) {
  // Replace with your actual icon implementation
  return <></>;
}
