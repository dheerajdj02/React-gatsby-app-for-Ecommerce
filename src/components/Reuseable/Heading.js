import React from 'react'

export default function Heading({tittle}) {
    return (
        <div className="row">
            <div className="col text-center mb-4">
                <h1 className="display-3">{tittle}</h1>
            </div> 
        </div>
    )
}
