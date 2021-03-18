import React from 'react'
import ReactDOM from 'react-dom'
import Phonebook from './components/Phonebook.js'


const App = () => {
  const phonebook = {
    title: 'Superadvanced web phonebook app',
    contacts: [
      {
        name: 'John Doe',
        phonenumber: '358401234567',
        id: 1
      },
      {
        name: 'Jane Doe',
        phonenumber: '44551234567',
        id: 2
      },
      {
        name: 'Foo bar',
        phonenumber: '000',
        id: 3
      },
      {
        name: 'Teemu Selänne',
        phonenumber: '88888888888',
        id: 4
      },
      {
        name: 'Esa Tikkanen',
        phonenumber: '101010101010101',
        id: 5
      },
      {
        name: 'Jari Kurri',
        phonenumber: '22222222222',
        id: 6
      }
    ]
  }

  return (
    <div style={{ padding: "5%" }}>
      <Phonebook phonebook={phonebook} />
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)