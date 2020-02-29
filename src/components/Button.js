import React from 'react'

export default function Button(props) {
    return (
        <button
            style={{ margin: 10 }}
            className="btn waves-effect waves-light"
            onClick={props.onClick}
        >{ props.method }</button>
    )
}
