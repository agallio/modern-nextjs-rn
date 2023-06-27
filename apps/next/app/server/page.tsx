import ServerClientScreen from './component'

import { timeApiEndpoint } from 'app/utils/api'

async function getData() {
  const res = await fetch(timeApiEndpoint).then((res) => res.json())
  return res
}

export default async function Server() {
  const data = await getData()

  return <ServerClientScreen data={data} />
}
