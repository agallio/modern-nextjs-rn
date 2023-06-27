import { useState } from 'react'
import { View, Platform, TouchableOpacity, Text } from 'react-native'

import { H1 } from 'app/components/Typography'

export default function InteractiveScreen() {
  const [count, setCount] = useState(0)

  return (
    <View
      style={{
        marginHorizontal: Platform.OS !== 'web' ? 24 : undefined,
        marginTop: Platform.OS !== 'web' ? 24 : undefined,
      }}
    >
      <H1>My Interactive Page</H1>

      <View style={{ marginTop: 20 }}>
        <H1>{count}</H1>
        <TouchableOpacity
          onPress={() => setCount(count + 1)}
          style={{
            width: 100,
            marginTop: 14,
            paddingVertical: 8,
            backgroundColor: 'black',
            borderRadius: 8,
          }}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>Increment</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
