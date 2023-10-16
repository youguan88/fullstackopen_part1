import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <div>{text} {value}</div>
  )
}

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const total = good + neutral + bad
  const avg = (good - bad) / total
  const positive = (good * 100 / total) + ' %'
  if (total !== 0) {
    return (
      <>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="total" value={total} />
        <StatisticLine text="average" value={avg} />
        <StatisticLine text="positive" value={positive} />
      </>
    )
  }
  else {
    return (
      <div>No feedback given</div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App