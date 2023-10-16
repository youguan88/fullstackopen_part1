import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = (props) => {
  return (
    <div>{props.text} {props.value}</div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const avg = ( good*1 + neutral*0 + bad*-1 ) / total
  const positive = (good * 100 / total)+' %'
  const handleGood = () => { setGood(good + 1) }
  const handleNeutral = () => { setNeutral(neutral + 1) }
  const handleBad = () => { setBad(bad + 1) }
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />
      <h1>statistics</h1>
      <Statistics text="good" value={good}/>
      <Statistics text="neutral" value={neutral}/>
      <Statistics text="bad" value={bad}/>
      <Statistics text="all" value={total}/>
      <Statistics text="average" value={avg}/>
      <Statistics text="positive" value={positive}/>
    </div>
  )
}

export default App