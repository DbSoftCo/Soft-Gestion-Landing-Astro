import { useState } from 'react'
import './globalStyles.scss'
import { HeadingSection } from './home/components/section/headingSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeadingSection />
    </>
  )
}

export default App
