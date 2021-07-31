import React, {useState} from 'react'
import Star from "./Star";

export default function Rating({stars, max}) {
    const [dynamicValue, setDynamicValue] = useState(stars);
    const [value, setValue] = useState(0);

    const colors = {
        1: "#f44336",
        2: "#FF5722",
        3: "#FF9800",
        4: "#FFC107",
        5: "#FFEB3B"
    };
    const meanings = {
        0: "No Rating 🚫",
        1: "Terrible 🤮",
        2: "Mediocre 😒",
        3: "Average 😐",
        4: "Solid 🙂",
        5: "Fantastic 🔥"
    };

    const starSpans = [];

    const handleClick = (newValue) => {
        setDynamicValue(newValue);
        setValue(newValue);
    };

    const handleMouseEnter = (newValue) => setDynamicValue(newValue);
    const handleMouseLeave = () => setDynamicValue(value);

    for (let v = 1; v <= max; v++) {
        starSpans.push(
            <Star
                key={v}
                color={colors[dynamicValue]}
                isFilled={v <= dynamicValue}
                value={v}
                handleHover={handleMouseEnter}
                handleHoverLeave={handleMouseLeave}
                handleClick={handleClick}
            />
        )
    }

    return (
        <div>
            <p>{meanings[value]}</p>
            {starSpans}
        </div>
    )
};

Rating.defaultProps = {
    max: 5
};
