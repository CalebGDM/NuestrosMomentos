import React, { useState } from 'react'
import './styles.css'
import colors from '../../data/colors'


export default function Block({styles, date, id, setCurrId, currId, setLastID, color}) {
    const [isHovering, setIsHovering] = useState(false)
    const [isClicked, setIsClicked] = useState(false)

    const onButtonPressed = () => {
        
        if(id !== currId){
            setLastID(currId)  
            setCurrId(id)
            
        }
        setIsClicked(true)
        
        
      }

    const onHoverIn = () => {
        setIsHovering(true)
    }

    const onHoverOut = () => {
        setIsHovering(false)
    }

  return (
    
    <div className={`container ${currId == id ? 'active' : ''}`} style={styles} onClick={onButtonPressed} onMouseOver={onHoverIn} onMouseLeave={onHoverOut}>
    <div className='btnDate' style={{ background: colors[color]}}>
        <div className='btnDatefill' style={isHovering || currId == id ? {opacity: 1} : {opacity:0}}>
        </div>
        
    </div>
    <div className={`date ${isClicked && currId == id ? 'activeDate' : '' }`}>
      <span  style={isHovering || currId == id ? {opacity: 1} : {opacity: 0}}>{date}</span>
    </div>
    
    </div>
   
    
    
  )
}
