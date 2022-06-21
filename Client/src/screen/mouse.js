import React, { useState } from 'react'

const Mouse = () => {
    const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 })
    const onMouseMove = (e) => {

        setCursorPosition({ top: e.screenY, left: e.screenX });
    }
    return (

        <div onMouseMove={onMouseMove} >
            <div style={{ position: 'absolute', ...cursorPosition,backgroundColor:"black", }} />
            hello
        </div>
    )
}

export default Mouse