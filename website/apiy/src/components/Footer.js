import React from 'react'

export default function Footer() {
    return (
        <div className="row">
            <div className="col s4">
            <p style={{ display: 'inline' }}>Find Apiy..</p>

            <a
                style={{ margin: 10 }}
                href="https://www.npmjs.com/package/apiy"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-npm"></i>
            </a>

            <a
                href="https://github.com/muhammedMoussa/apiy"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-github" ></i>
            </a>
            </div>
        </div>
    )
}
