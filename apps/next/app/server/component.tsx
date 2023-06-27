'use client'

import ServerScreen from 'app/screen/server'

import type { DateTimeResponse } from 'app/utils/api'

export default function ServerClientScreen({
  data,
}: {
  data: DateTimeResponse
}) {
  return <ServerScreen data={data} />
}
