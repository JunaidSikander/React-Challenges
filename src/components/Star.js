import React from 'react'

export default function Star({isFilled, color, value, handleHover, handleHoverLeave, handleClick}) {
    if (!handleHover) {
        return (
            <span className='Star'
                  style={{color}}
                  onMouseEnter={() => console.log('HOVERED IN')}
                  onMouseLeave={() => console.log('HOVERED OUT')}
                  onClick={() => alert("CLICKED A STAR!")}
            >
            {isFilled ? "★" : "☆"}
        </span>
        )
    }
    return (
        <span className='Star'
              style={{color}}
              onMouseEnter={() => handleHover(value)}
              onMouseLeave={handleHoverLeave}
              onClick={() => handleClick(value)}
        >
            {isFilled ? "★" : "☆"}
        </span>
    )
}

Star.defaultProps = {
    isFilled: false
};
