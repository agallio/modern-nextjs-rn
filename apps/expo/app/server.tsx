import { useEffect, useState } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Stack } from 'expo-router'

import ServerScreen from 'app/screen/server'

import { timeApiEndpoint } from 'app/utils/api'

async function getData() {
  const res = await fetch(timeApiEndpoint).then((res) => res.json())
  return res
}

export default function Server() {
  const [data, setData] = useState()

  useEffect(() => {
    getData().then((data) => setData(data))
  }, [])

  const StackData = (
    <Stack.Screen
      options={{
        // https://reactnavigation.org/docs/headers#setting-the-header-title
        title: 'Server',
      }}
    />
  )

  if (!data) {
    return (
      <>
        {StackData}
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <ActivityIndicator size="large" />
        </View>
      </>
    )
  }

  return (
    <>
      {StackData}
      <ServerScreen data={data} />
    </>
  )
}
