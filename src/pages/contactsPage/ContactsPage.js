import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function ContactsPage() {


    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const contactTitle = useSelector(state => state.contactTitle)

    const withParams = () => {
        dispatch({
            type: 'WITH_PARAMS',
            payload: 'hello geeks'
        })
    }

    const addInput = () => {
        dispatch({
            type: "FROM_INPUT",
            payload: input
        })
    }

    return (
        <div>
            <h1>{contactTitle}</h1>
            <button onClick={withParams}>change title with params</button>
            <h1>-------------</h1>
            <input type="text" onChange={(event) => setInput(event.target.value)} />
            <button onClick={addInput}>add</button>
        </div>
    )
}

export default ContactsPage