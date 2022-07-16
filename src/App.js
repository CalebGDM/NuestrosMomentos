import Block from "./components/block";
import dates from "./data/dates";
import './AppStyles.css'
import React, { useEffect, useState } from "react";

import colors from "./data/colors";

function App() {

  const [currId, setCurrId] = useState(0);
  const [lasId, setLastID] = useState(0)
  const [change, setChange] = useState("off") 
  const [whidth, setWidth] = useState(0)
  const [color, setColor] = useState(0)

  const updateDimensions = () => {
    setWidth(window.innerWidth)
  }

  window.addEventListener("resize", updateDimensions)

  

  useEffect(() => {
      if(currId < lasId){
        setChange('FadeIn')
        setTimeout(() => setChange(''), 500)
        setColor(color + 1)
        
      }
      else if(currId > lasId){
        setChange('FadeOut') 
        setTimeout(() => setChange(''), 500) 
        setColor(color + 1)
      }

      if(color > colors.length - 2){
        setColor(0)
      }

      console.log(colors[color])
      
    
  },[currId, lasId])

  //Fechas
  const first = dates[0].date;
  const last = dates[dates.length - 1].date;

  const firstDay = parseInt(first.split("/")[0]);
  const firstMonth = parseInt(first.split("/")[1]);
  const firstYear = parseInt(first.split("/")[2]);

  const lastMonth = parseInt(last.split("/")[1]);
  const lastDay = parseInt(last.split("/")[0]);
  const lastYear = parseInt(last.split("/")[2]);

 

  const lastInt =
    (lastMonth - firstMonth) * 30 +
    (lastDay - firstDay) +
    (lastYear - firstYear) * 300;


  console.log("id: " +currId)

 
    
    
  
return (
  <div className="App" style={{background: colors[color] }}>
    
    <div className="timeLine">
    <div className="line"></div>
    <div className="datesConainer">
      {dates.map((item, index) => {
        const date = item.date;
        const thisDay = parseInt(date.split("/")[0]);
        const thisMonth = parseInt(date.split("/")[1]);
        const thisYear = parseInt(date.split("/")[2]);

        const thisInt =
          (thisMonth - firstMonth) * 30 +
          (thisDay - firstDay) +
          (thisYear - firstYear) * 1;
          
        
        const position = (thisInt / lastInt) * 1300;

        

        return (
          <Block
            styles={{ left: position + 10 }}
            date={date.split("/")[0] == "20" || date.split("/")[0] == "25" || date.split("/")[0] == "31" ? "∞" : date}
            id={index}
            setCurrId={setCurrId}
            currId ={currId}
            setLastID={setLastID}
            color={color}
          />
        );
      })}
    </div>
   
    </div>
    <div className="message">
      <div className={`MessageBox ${change}`}>
      <span>{dates[currId].mensaje}</span>
      </div>
      
    </div>
  </div>
);
}

export default App;
