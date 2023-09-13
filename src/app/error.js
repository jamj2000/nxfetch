'use client'
 
export default function Error({ reset}) {
  return (
    <div>
      <h2>Algo fue mal!</h2>
      <button onClick={() => reset()}>Intentar de nuevo</button>
    </div>
  )
}