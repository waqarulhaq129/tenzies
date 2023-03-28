import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }


    return (
        <div 
            className="die-face" 
            style={styles}
            onClick={props.holdDice}
        >
            {
        {
          1: <div className="dice first-face">
          <span class="dot"> </span>
          </div>,
          2: <div class="dice second-face">
          <span class="dot"> </span>
          <span class="dot"> </span>
          </div> ,
          3: <div class="dice third-face">
          <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>,
          4:<div class="fourth-face dice">
          <div class="column">
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
          <div class="column">
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
          </div>
      ,
          5:<div class="fifth-face dice">
  
          <div class="column">
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
          
          <div class="column">
            <span class="dot"></span>
          </div>
          
          <div class="column">
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </div>,
          6:<div class="fourth-face dice">
          <div class="column">
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
          <div class="column">
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
           </div>
          </div>
        }[props.value]
      }
        </div>
    )
}