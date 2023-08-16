import React from 'react'
import { ScrollMenu ,VisibilityContext} from 'react-horizontal-scrolling-menu'
import 'react-horizontal-scrolling-menu/dist/styles.css';
import MyCard from './MyCard'
import { Button, Grid } from '@mui/material'
import SoftBox from 'components/SoftBox'
import { useNavigate } from 'react-router-dom';


function MyScrollMenu(props) {
    const {cards} = props;
    const navigate = useNavigate();
    console.log(cards)

    const cardComp = cards.map((item,index) => {
        return (
            <MyCard 
                img="https://www.google.com/logos/doodles/2023/india-independence-day-2023-6753651837110072-l.webp"
                title="apple ipad" 
                desc="Product of the day in $50000"
                key={index}
            />
        )   
    });


  return (
    <ScrollMenu>
        <SoftBox p={2}>
            <div style={{ overflowX: 'hidden', whiteSpace: 'nowrap',display:'flex' }}>
                {/* <MyCard 
                    img="https://www.google.com/logos/doodles/2023/india-independence-day-2023-6753651837110072-l.webp"
                    title="apple ipad" 
                    desc="Product of the day in $50000"
                /> */}
                {cardComp}
            </div>
        </SoftBox>
  </ScrollMenu>
  )
}

export default MyScrollMenu

