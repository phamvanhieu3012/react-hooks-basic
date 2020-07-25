import { useState, useEffect, useRef } from 'react';

function randomColor(currentColor) {
    const COlOR_LIST = ['red', 'green', 'yellow'];
    // random 0 ---> 2
    const currentIndex = COlOR_LIST.indexOf(currentColor);
    let newIndex = currentIndex;
    while (currentIndex === newIndex) {
        newIndex = Math.trunc(Math.random() * 3);
    }
    console.log(COlOR_LIST[newIndex]);
    return COlOR_LIST[newIndex];
}

function useMagicColor() {
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent');

    useEffect(() => {
        //Change color every 1 seconds
        const colorInterval = setInterval(() => {
            const newColor = randomColor(colorRef.current);
            // console.log('First color: ', color);
            // console.log('Change color: ', colorRef.current);
            setColor(newColor);
            colorRef.current = newColor;
        }, 1000);
        return () => {
            clearInterval(colorInterval);
        }
    }, []);

    return color;
}

export default useMagicColor;