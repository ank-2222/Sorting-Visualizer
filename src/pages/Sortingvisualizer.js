import "./Sortingvisualizer.css";
import React from "react";
import { mergeSortAlgorithm } from "../algo/Mergealgorithm";
import bootstrap from "bootstrap";
import { BubbleSortAlgorithm } from "../algo/Bubblealgorithm";




// const NUMBER_OF_ARRAY = 100;
const PRIMARY_COLOUR = "#069A8E";
const SECONDARY_COLOUR = "red";
// const ANIMATION_SPEED = 100;


export default class Sortingvisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    };
  }

  componentDidMount() {         //initializing at onload
    this.resetArray();
  }

  resetArray() {
    const array = [];
    let NUMBER_OF_ARRAY =document.getElementById("ARRAY_SIZE").value;
    for (let i = 0; i < NUMBER_OF_ARRAY; i++) {
      array.push(randomIntFromInterval(5, 500));                //setting random values between 5-500
    }
     this.setState({ array });
  }

//   enterArray() {
//     let array = [];

//     this.setState({array });
// console.log(this.state.array)
//     let inputVal = document.getElementById("inpt").value;
//     array = inputVal.split(",");
//     this.setState({array});
// console.log(this.state.array)

//   }

  mergeSort() {
    let ANIMATION_SPEED = document.getElementById("DELAY").value;                   //animation technique starting
    const animations = mergeSortAlgorithm(this.state.array);

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColor = i % 3 !== 2;
      if (isColor) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOUR : PRIMARY_COLOUR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED);
      } else {
        setTimeout(() => {
          const [barOneIdx, barTwoIdx] = animations[i]; //barTwoIdx== new height
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${barTwoIdx}px`;
        }, i * ANIMATION_SPEED);
      }
    }
  }



bubbleSort(){

  let ANIMATION_SPEED = document.getElementById("DELAY").value;                   //animation technique starting
  const animations = BubbleSortAlgorithm(this.state.array);
 console.log(animations)
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName("array-bar");
    const isColor = i % 4 !== 2 && i % 4 !== 1;
    if (isColor) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = i % 4 === 0 ? SECONDARY_COLOUR : PRIMARY_COLOUR;
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * ANIMATION_SPEED);
    } else {
      setTimeout(() => {
        const [barOneIdx, barTwoIdx] = animations[i]; //barTwoIdx== new height
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${barTwoIdx}px`;
      }, i * ANIMATION_SPEED);
    }
  }


}







  render() {
    const { array } = this.state;
    
    return (
      <div>
        <div></div>
        <div className="array-container">
          {array.map((value, ids) => (           //mapping bars 
            <div
              className="array-bar"
              key={ids}
              style={{ backgroundColor: PRIMARY_COLOUR, height: `${value}px` }}
            ></div>
          ))}
        </div>

        <div className="footer">
          {/* <input
            className="inp"
            id="inpt"
            type="text"
            placeholder="Enter comma seperated value (5-500)"
            maxLength={200}
          ></input> */}
         <label for="array-size">Size</label>
          <input id="ARRAY_SIZE" name="array-size" type="range" min="5" max="100"></input>
          <label for="delay">Delay</label>
          <input id="DELAY" name="delay" type="range" min="3" max="100"></input>
          <button onClick={() => this.resetArray()}>Generate Array</button>

          <button onClick={() => this.mergeSort()}>Merge Sort</button>
          <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        </div>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


