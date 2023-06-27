import { Stack } from 'expo-router'

import InteractiveScreen from 'app/screen/interactive'

export default function Interactive() {
  return (
    <>
      <Stack.Screen
        options={{
          // https://reactnavigation.org/docs/headers#setting-the-header-title
          title: 'Interactive',
        }}
      />

      <InteractiveScreen />
    </>
  )
}
