import React from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import 'react-horizontal-scrolling-menu/dist/styles.css';
import MyCard from './MyCard'
import { Button, Grid } from '@mui/material'
import SoftBox from 'components/SoftBox'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function MyScrollMenu() {
    const userRecommendationsCards = useSelector(state => state.homeProduct.userRecommendations);
    const locationRecommendationsCards = useSelector(state => state.homeProduct.locationRecommendations);
    const salesRecommendationsCards = useSelector(state => state.homeProduct.salesRecommendations);
    const ageRecommendationsCards = useSelector(state => state.homeProduct.ageRecommendations);
    const userHistoryCards = useSelector(state => state.homeProduct.userHistory);
    const navigate = useNavigate();

    function truncateDescription(text, maxLength) {
        if (text.length <= maxLength) {
            return text;
        } else {
            return text.slice(0, maxLength - 3) + "...";
        }
    }
    const len = 30
    const cardStyle = { height: "50%", width: "30rem", margin: "1rem" }
    const scrollStyle = { overflowX: 'hidden', whiteSpace: 'nowrap', height: '10%', width: '100%', display: 'flex', gap: '2rem' }
    const userRecommendationsCardComp = userRecommendationsCards.map((item, index) => {
        // console.log("hello world")
        // console.log(item)
        return (
            <MyCard
                sx={cardStyle}
                category={item.category}
                company={item.company}
                img={item.image}
                title={item.name}
                desc={truncateDescription(item.description, len)}
                id={item._id}
                key={index}
            />
        )
    });
    const locationRecommendationsCardComp = locationRecommendationsCards.map((item, index) => {
        return (
            <MyCard
                sx={cardStyle}
                category={item.category}
                company={item.company}
                img={item.image}
                title={item.name}
                desc={truncateDescription(item.description, len)}
                id={item._id}
                key={index}
            />
        )
    });
    const salesRecommendationsCardComp = salesRecommendationsCards.map((item, index) => {
        return (
            <MyCard
                sx={cardStyle}
                category={item.category}
                company={item.company}
                img={item.image}
                title={item.name}
                desc={truncateDescription(item.description, len)}
                id={item._id}
                key={index}
            />
        )
    });
    const ageRecommendationsCardComp = ageRecommendationsCards.map((item, index) => {
        return (
            <MyCard
                sx={cardStyle}
                category={item.category}
                company={item.company}
                img={item.image}
                title={item.name}
                desc={truncateDescription(item.description, len)}
                id={item._id}
                key={index}
            />
        )
    });
    const userHistoryCardComp = userHistoryCards.map((item, index) => {
        return (
            <MyCard
                sx={cardStyle}
                category={item.category}
                company={item.company}
                img={item.image}
                title={item.name}
                desc={truncateDescription(item.description, len)}
                id={item._id}
                key={index}
            />
        )
    });

    return (
        <SoftBox>
            <h2>sale of the day</h2>
            <ScrollMenu>
                <SoftBox p={2}>
                    <div style={scrollStyle}>
                        {salesRecommendationsCardComp}
                    </div>
                </SoftBox>
            </ScrollMenu>
            <br />
            <hr />
            <br />
            <h2>Recommendations for you</h2>
            <ScrollMenu>
                <SoftBox p={2}>
                    <div style={scrollStyle}>
                        {userRecommendationsCardComp}
                    </div>
                </SoftBox>
            </ScrollMenu>
            <br />
            <hr />
            <br />
            <h2>Famous in your location</h2>
            <ScrollMenu>
                <SoftBox p={2}>
                    <div style={scrollStyle}>
                        {locationRecommendationsCardComp}
                    </div>
                </SoftBox>
            </ScrollMenu>
            <br />
            <hr />
            <br />
            <h2>similar user has also bought</h2>
            <ScrollMenu>
                <SoftBox p={2}>
                    <div style={scrollStyle}>
                        {ageRecommendationsCardComp}
                    </div>
                </SoftBox>
            </ScrollMenu>
            <br />
            <hr />
            <br />
            <h2>you might want to buy again</h2>
            <ScrollMenu>
                <SoftBox p={2}>
                    <div style={scrollStyle}>
                        {userHistoryCardComp}
                    </div>
                </SoftBox>
            </ScrollMenu>
        </SoftBox>
    )
}

export default MyScrollMenu