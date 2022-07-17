import React, { useState, useEffect } from 'react';
import { Button, Slider } from '@mui/material';
import './Quicksort.css';


const Quicksort = () => {
    const [numValues, updateNumValues] = useState(50);
    const [theArray, updateTheArray] = useState([]);

    console.log('render');

    const handleSliderChange = (e) => {
        updateNumValues(e.target.value);
    }

    const handleGraphClick = (e) => {
        alert(`Target value is ${e.target.clientHeight}`);
    }

    const handleSort = () => {
        let newArray = [...theArray];

        quickSort(newArray, 0, newArray.length-1);

        updateTheArray(newArray);
    }

    // Generate new array upon changing the slider values
    useEffect(()=>{
        let randomArray = [];

        for (let index = 0; index < numValues; index++) {
            // let ranId = uuidv4();
            randomArray[index] = {key: index, value:(Math.floor(Math.random() * (200-1) + 1)), active: false};
        }
        updateTheArray(randomArray);
    }, [numValues]);

    //#region Quicksort
    const swap = (items, leftIndex, rightIndex) => {
        var temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;

        updateTheArray(items);
    }
    const partition = (items, left, right) => {
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
    
    const quickSort = (items, left, right) => {
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
    //#endregion Quicksort

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
                <Button variant="contained" onClick={handleSort}>Sort!</Button>
            </div>
            <div className='graphContainer'>
                    {theArray.map(({key, value, active}) => {
                        return (
                            <div 
                                key={key}
                                className='numbers'
                                style={active ? { backgroundColor: "pink", height: `${value}px`} : {height: `${value}px`}}
                                onClick={handleGraphClick}
                            >
                            </div>
                        )    
                    })}
            </div>
        </div>
    );
}

export default Quicksort;