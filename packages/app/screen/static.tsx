import { Platform, View } from 'react-native'

import { H1, P } from 'app/components/Typography'

export default function StaticScreen() {
  return (
    <View
      style={{
        marginHorizontal: Platform.OS !== 'web' ? 24 : undefined,
        marginTop: Platform.OS !== 'web' ? 24 : undefined,
      }}
    >
      <H1>My Static Pageeeee</H1>
      <P style={{ marginTop: 12 }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis,
        obcaecati doloribus. Culpa perferendis aliquam dolor ipsum. Nisi
        dignissimos reprehenderit minus ex impedit. Dignissimos ex obcaecati
        quaerat esse corporis error ad. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Recusandae quibusdam cupiditate esse error totam non
        numquam. Minus inventore sunt magnam asperiores ea, neque corrupti
        voluptate, quas nemo sint aut mollitia!
      </P>
    </View>
  )
}
