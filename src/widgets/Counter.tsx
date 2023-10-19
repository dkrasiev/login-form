import { Button, Card, Typography } from '@mui/material'
import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <Card>
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      <Typography>
        Edit <code>src/App.tsx</code> and save to test HMR
      </Typography>
    </Card>
  )
}
