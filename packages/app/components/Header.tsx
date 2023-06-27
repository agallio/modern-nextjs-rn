import { Text, View } from 'react-native'
import { Link } from 'solito/link'

export default function WebHeader() {
  return (
    <View
      style={{ flexDirection: 'row', gap: 8, marginTop: 20, marginBottom: 12 }}
    >
      {['static', 'server', 'interactive'].map((item) => (
        <Link key={item} href={item === 'static' ? '/' : `/${item}`}>
          <Text
            style={{
              textTransform: 'capitalize',
              textDecorationLine: 'underline',
            }}
          >
            {item}
          </Text>
        </Link>
      ))}
    </View>
  )
}
