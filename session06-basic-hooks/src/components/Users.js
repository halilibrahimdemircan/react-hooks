import { useEffect, useState } from 'react'
import axios from 'axios'

const Users = () => {
  const [users, setUsers] = useState([])

  const [newUsers, setNewUsers] = useState([])

  const data = [
    { id: 11, name: 'Jenny Doe' },
    { id: 12, name: 'Jason Response' },
    { id: 13, name: 'Miles Tone' }
  ]
  const getUsers = () => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((res) => res.json())
    //   .then((json) => setUsers(json))
    //   .catch((err) => console.log(err))
  }
  useEffect(() => {
    // axios
    //   .get('https://jsonplaceholder.typicode.com/users')
    //   .then((res) => setUsers(res.data))
    //   .catch((err) => err)
    axios({
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'GET'
    })
      .then((res) => setUsers(res.data))
      .catch((err) => err)
  }, [])

  const postNewUsers = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', { data }).then((res) => setNewUsers(res.data.data))
  }

  // console.log(users)

  return (
    <div className="users">
      <h1>Users</h1>
      {/* <button onClick={getUsers}>Get Users</button> */}
      <button onClick={postNewUsers}>Post Users</button>
      <div className="users-cards">
        {users.map((user) => (
          <div key={user.id} className="useritem">
            <img src={`https://avatars.dicebear.com/v2/avataaars/${user.id}.svg`} alt="" />
            {user.name}
          </div>
        ))}

        {newUsers.map((user) => (
          <div key={user.id} className="useritem">
            <img src={`https://avatars.dicebear.com/v2/avataaars/${user.id}.svg`} alt="" />
            {user.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users
