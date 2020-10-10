import React from 'react'

export default function RelativeTime(props) {
  const datetime = new Date(props.dateInput)
  const delta = datetime.getTime() - Date.now()
  const minutes = Math.floor(delta / 1000 / 60)
  const relative = minutes <= 0 ? 'now' : minutes
  return <time dateTime={datetime.toISOString()}>{relative}</time>
}
