import { useEffect, useState } from 'react'

const FunctionalComponent = () => {
  const [count, setCount] = useState(0)
  const [age, setAge] = useState(4)
  const [user, setUser] = useState({ name: 'Halo', age: 30, email: 'halilibrahimdemircan@gmail.com' })

  useEffect(() => {
    console.log('use effect')
    let timeout = setTimeout(() => {
      alert('Hello')
    })
    return () => {
      console.log('functional com unmounted')
    }
  }, [])

  const increase = () => {
    setCount(count + 1)
  }
  const decrease = () => setCount(count - 1)
  const updateUser = () => {
    setUser({ ...user, name: 'Aydın' })
  }

  return (
    <div className="function">
      <h2>Functional Component</h2>
      <p>Count: {count}</p>
      <button onClick={increase}>İncrease</button>
      <button onClick={decrease}>Decrease</button>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email:{user.email}</p>
      <button onClick={updateUser}>Update User</button>
    </div>
  )
}

export default FunctionalComponent
