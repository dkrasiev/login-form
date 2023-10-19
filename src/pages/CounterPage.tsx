import { Typography } from '@mui/material'

import reactLogo from '../../public/react.svg'
import viteLogo from '../../public/vite.svg'
import Counter from '../widgets/Counter'

export default function CounterPage() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Typography variant="h2">Vite + React</Typography>
      <Counter></Counter>
      <Typography>Click on the Vite and React logos to learn more</Typography>
    </>
  )
}
