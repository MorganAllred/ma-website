import React, { useState, useEffect } from 'react';
import { Button, Slider } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import './Quicksort.css';


const Quicksort = () => {
    const [numValues, updateNumValues] = useState(50);
    const [theArray, updateTheArray] = useState([]);
    const [target1, updateTarget1] = useState('');
    const [target2, updateTarget2]= useState('');


    console.log('render');

    const handleSliderChange = (e) => {
        updateNumValues(e.target.value);
    }

    const handleClick = (e) => {
        alert(`Target value is ${e.target.clientHeight}`);
    }

    const handleSortClick = () => {
        const newArray = theArray;
        console.log(theArray);
        let sortedArray = quickSort(newArray, 0, theArray.length-1);
        console.log(sortedArray);
    }

    // Sort Thangs
    function swap(items, leftIndex, rightIndex){
        // console.log(`left index: ${leftIndex} right index:${rightIndex}`);
        // updateTarget1(items[leftIndex].key);
        // updateTarget2(items[rightIndex].key);
        console.log(`target1: ${target1}`);
        console.log(`target2: ${target2}`);
        console.log('swap!');

        var temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;
    }
    function partition(items, left, right) {
        var pivot   = items[Math.floor((right + left) / 2)].value, //middle element
            i       = left, //left pointer
            j       = right; //right pointer
        while (i <= j) {
            while (items[i].value < pivot) {
                i++;
            }
            while (items[j].value > pivot) {
                j--;
            }
            if (i <= j) {
                swap(items, i, j); //sawpping two elements
                i++;
                j--;
            }
        }
        return i;
    }
    
    function quickSort(items, left, right) {
        var index;
        if (items.length > 1) {
            index = partition(items, left, right); //index returned from partition
            if (left < index - 1) { //more elements on the left side of the pivot
                quickSort(items, left, index - 1);
            }
            if (index < right) { //more elements on the right side of the pivot
                quickSort(items, index, right);
            }
        }
        return items;
    }
    // Sort Thangs

    // Generate new array upon changing the slider values
    useEffect(()=>{
        let randomArray = [];

        for (let index = 0; index < numValues; index++) {
            let ranId = uuidv4();
            randomArray[index] = {key: ranId, value:(Math.floor(Math.random() * (200-1) + 1))};
        }
        updateTheArray(randomArray);
        console.log(theArray);
    },[numValues]);

    return(
        <div className='quicksortContainer'>
            <div className='sliderContainer'>
                <Slider
                    className="sliderElement"
                    size="small"
                    min={1}
                    defaultValue={50} 
                    aria-label="Default" 
                    valueLabelDisplay="auto" 
                    onChange={handleSliderChange}
                />
                <Button variant="contained" onClick={handleSortClick}>Sort!</Button>
            </div>
            <div className='graphContainer'>
                    {theArray.map(({key, value}) => {
                        let active = false;
                        (key===target1 || key===target2) ? active = true : active=false;
                        console.log('testing');
                        return (
                            <div 
                                id={key}
                                key={key}
                                className='numbers'
                                style={active ? { backgroundColor: "pink", height: `${value}px`} : {height: `${value}px`}}
                                onClick={handleClick}
                            >
                            </div>
                        )    
                    })}
            </div>
        </div>
        
        
    );
}

export default Quicksort;