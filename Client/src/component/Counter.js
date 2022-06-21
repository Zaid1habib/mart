import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import React, { useState } from "react";
import { useEffect } from "react";
const GroupedButtons = () => {
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        console.log(counter)
    }, [counter])
    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    const handleDecrement = () => {
        setCounter(counter - 1);

    };


    return (
        <>
            < ButtonGroup size="small" ariaLabel="small outlined button group"  >
                <Button onClick={handleDecrement} >-</Button>
                <Button disabled>{counter}</Button>
                <Button onClick={handleIncrement}>+</Button>
            </ButtonGroup >
        </>
    );
}

export default GroupedButtons;
