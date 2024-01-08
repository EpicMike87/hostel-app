import React from "react"
import { FaStar } from "react-icons/fa"

// Display 5 star grid for reviews.

export default function Star ( props)  {
    return <FaStar
    color = {props.selected ? "red" : "grey"}
    onClick = {props.onSelect}
    />
}