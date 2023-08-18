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

    const userRecommendationsCardComp = userRecommendationsCards.map((item, index) => {
        // console.log("hello world")
        return (
            <MyCard
                img={item.img}
                title={item.title}
                desc={item.desc}
                key={index}
            />
        )
    });
    const locationRecommendationsCardComp = locationRecommendationsCards.map((item, index) => {
        return (
            <MyCard
                img={item.img}
                title={item.title}
                desc={item.desc}
                key={index}
            />
        )
    });
    const salesRecommendationsCardComp = salesRecommendationsCards.map((item, index) => {
        return (
            <MyCard
                img={item.img}
                title={item.title}
                desc={item.desc}
                key={index}
            />
        )
    });
    const ageRecommendationsCardComp = ageRecommendationsCards.map((item, index) => {
        return (
            <MyCard
                img={item.img}
                title={item.title}
                desc={item.desc}
                key={index}
            />
        )
    });
    const userHistoryCardComp = userHistoryCards.map((item, index) => {
        return (
            <MyCard
                img={item.img}
                title={item.title}
                desc={item.desc}
                key={index}
            />
        )
    });

    return (
        <SoftBox>
            <h2>sale of the day</h2>
            <ScrollMenu>
                <SoftBox p={2}>
                    <div style={{ overflowX: 'hidden', whiteSpace: 'nowrap', display: 'flex' }}>
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
                    <div style={{ overflowX: 'hidden', whiteSpace: 'nowrap', display: 'flex' }}>
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
                    <div style={{ overflowX: 'hidden', whiteSpace: 'nowrap', display: 'flex' }}>
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
                    <div style={{ overflowX: 'hidden', whiteSpace: 'nowrap', display: 'flex' }}>
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
                    <div style={{ overflowX: 'hidden', whiteSpace: 'nowrap', display: 'flex' }}>
                        {userHistoryCardComp}
                    </div>
                </SoftBox>
            </ScrollMenu>
        </SoftBox>
    )
}

export default MyScrollMenu