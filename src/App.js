import React from "react";
import Star from "components/Star";
import Rating from "components/Rating";


export default function App() {
    return (
        <div>
            <h1> Star Component </h1>
            <Star color="pink" isFilled />
            <Star color="indigo"  />
            <Star color="purple"  />
            <h1>Rating Challenges</h1>
            <Rating/>
        </div>
    );
}
