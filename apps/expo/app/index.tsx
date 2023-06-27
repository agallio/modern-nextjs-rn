import { Stack } from 'expo-router'

import StaticScreen from 'app/screen/static'

export default function Home() {
  return (
    <>
      <Stack.Screen
        options={{
          // https://reactnavigation.org/docs/headers#setting-the-header-title
          title: 'Static',
        }}
      />

      <StaticScreen />
    </>
  )
}
