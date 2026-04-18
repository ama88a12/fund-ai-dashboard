import { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    // replace with your backend API later
    setData({
      ticker: "NVDA",
      price: 120,
      intrinsic: 150,
      decision: "BUY",
      score: 4
    })
  }, [])

  if (!data) return <h2>Loading...</h2>

  return (
    <div style={{padding:20,fontFamily:'Arial'}}>
      <h1>📊 Fund AI Dashboard</h1>

      <div style={{display:'flex',gap:20}}>
        <Card title="Ticker" value={data.ticker}/>
        <Card title="Price" value={data.price}/>
        <Card title="Intrinsic" value={data.intrinsic}/>
        <Card title="Score" value={data.score}/>
      </div>

      <h2>🧠 Decision: {data.decision}</h2>
    </div>
  )
}

function Card({title,value}){
  return (
    <div style={{
      padding:15,
      background:'#111',
      color:'#fff',
      borderRadius:10,
      minWidth:120
    }}>
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  )
}
