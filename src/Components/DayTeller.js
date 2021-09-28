import React from 'react'

function DayTeller({day}) {
    return (
        <div>
            <h1>
                GOOD {day ? "MORNING" : "NIGHT"}
            </h1>
        </div>
    )
}

export default DayTeller
