import { Platform, Text, View } from 'react-native'

import { H1 } from 'app/components/Typography'

import type { DateTimeResponse } from 'app/utils/api'

export default function ServerScreen({ data }: { data: DateTimeResponse }) {
  return (
    <View
      style={{
        marginHorizontal: Platform.OS !== 'web' ? 24 : undefined,
        marginTop: Platform.OS !== 'web' ? 24 : undefined,
      }}
    >
      <H1>My SSG / SSR Page</H1>

      <View style={{ marginTop: 20 }}>
        <Text>
          Date: <Text style={{ fontWeight: 'bold' }}>{data.date}</Text>
        </Text>
        <Text style={{ marginTop: 4 }}>
          Date Time: <Text style={{ fontWeight: 'bold' }}>{data.dateTime}</Text>
        </Text>
      </View>
    </View>
  )
}
