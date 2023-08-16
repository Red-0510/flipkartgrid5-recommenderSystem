import React from 'react'
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import { useNavigate } from 'react-router-dom';

export default function MyCard(props) {
  // console.log(props)
  const navigate=useNavigate();
  return (
    // Soft UI Dashboard PRO React examples
    <DefaultProjectCard
    image={props.img}
    label="hello"
    title={props.title}
    description={props.desc}
    action={{
        type: "internal",
        route: "/singleproduct",
        color: "info",
        label: "view",
        onclick:()=>{console.log("sojnfsn")}
    }}
    authors={[
    ]}
    />
  )
}
