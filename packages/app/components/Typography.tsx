import { Text, TextStyle } from 'react-native'
import { PropsWithChildren } from 'react'

export function H1({
  children,
  style,
}: PropsWithChildren<{ style?: TextStyle }>) {
  return (
    <Text style={[{ fontSize: 28, fontWeight: '700' }, style]}>{children}</Text>
  )
}

export function P({
  children,
  style,
}: PropsWithChildren<{ style?: TextStyle }>) {
  return (
    <Text style={[{ fontSize: 16, color: 'rgb(75, 85, 99)' }, style]}>
      {children}
    </Text>
  )
}
