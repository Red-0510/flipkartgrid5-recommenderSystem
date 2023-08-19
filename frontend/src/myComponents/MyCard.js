import React from 'react'
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import { useNavigate, useParams } from 'react-router-dom';

export default function MyCard(props) {
  // console.log(props)
  const navigate=useNavigate();
  const {id}= props
  const imgLink="https://m.media-amazon.com/images/I/41cY4if-lHL._AC_SY200_.jpg"
  // console.log(props.company)
  return (
    // Soft UI Dashboard PRO React examples
    <DefaultProjectCard 
      image={imgLink}
      title={props.title}
      category={props.category}
      company={props.company}
      description={props.desc}
      action={{
          type: "internal",
          route: `/singleproduct/${id}`,
          color: "info",
          label: "view",
      }}
      authors={[
      ]}
    />
  )
}
