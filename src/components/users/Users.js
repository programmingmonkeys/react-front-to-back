import React, { Component } from 'react'
import UserItem from './UserItem'

class Users extends Component {
  state = {
    users: [],
  }

  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColunmns: 'repeat(3, 1fr)',
  gridGap: '1rem',
}

export default Users
