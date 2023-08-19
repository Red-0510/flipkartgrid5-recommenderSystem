import SoftBox from 'components/SoftBox'
import React, { useEffect, useState } from 'react'
// import { mapLinear } from 'three/src/math/mathutils'
import MyCard from './MyCard'
import { getSearchResults } from 'myServices/authService';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { List, ListItem } from '@mui/material';

function MySearchResult() {
    // const result = [];
    // console.log("hi")
    const { id } = useParams();
    const [result, setResult] = useState([])
    const style = { display: "flex", alignItems: "center", justifyContent: "center", margin: "2rem auto", height: "100%", overflowY: "hidden" }

    function truncateDescription(text, maxLength) {
        if (text.length <= maxLength) {
            return text;
        } else {
            return text.slice(0, maxLength - 3) + "...";
        }
    }
    const len = 30

    const displaySearch = result.map((p, index) => {
        return (
            <ListItem key={index} sx={{margin:"3rem auto"}}>
                <MyCard
                    title={p.name}
                    id={p._id}
                    desc={truncateDescription(p.description, len)}
                    company={p.company}
                    category={p.category}
                />
                <br />
                <hr />
                <br />
            </ListItem>
        )
    })

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await getSearchResults(id);
                setResult(data);
            } catch (err) {
                console.log(err)
                toast.error("k,o,o error")
            }
        }

        fetchData();
    }, [id])
    return (
        <div style={style}>
            <List>
                {displaySearch}
            </List>
        </div>
    )
}

export default MySearchResult