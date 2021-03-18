import React from 'react'


const Phonebook = (props) => {
    return (
        <div>
            <Header title={props.phonebook.title} />
            <Contacts phonebook={props.phonebook} />
            <Counter counter={props.phonebook.contacts.length} />
        </div>
    )
}


//Header-komponentti
const Header = (props) => {
    return (
        <div>
            <h1 style={{ fontFamily: 'helvetica' }}>{props.title}</h1>
        </div>
    )
}
//Contents-komponentti
const Contacts = (props) => {

    return (
        <div style={{ fontFamily: 'Arial' }}>
            <table style={{ width: "25%", border: 'solid black 1px', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: 'solid black 1px' }}> NAME </th>
                        <th style={{ border: 'solid black 1px' }}> NUMBER </th>
                    </tr>
                </thead>
                <tbody>
                    {props.phonebook.contacts.map(entry => <Entry key={entry.id} contact={entry} />)}
                </tbody>
            </table>
        </div>
    )
}

//Entry-komponentti
const Entry = (props) => {
    return (
        <tr style={{ padding: "10px" }}>
            <td style={{ padding: "5px 20px 5px", border: 'solid black 1px' }}>
                {props.contact.name}
            </td>
            <td style={{ padding: "5px 20px 5px", borderBottom: 'solid black 1px' }}>
                {props.contact.phonenumber}
            </td>
        </tr>
    )
}

//Counter-komponentti
const Counter = (props) => {
    return (
        <div>
            <p>Total number of entries: {props.counter} </p>
        </div>
    )
}

export default Phonebook