import React, { useState } from "react";
import TabsComponent from "../../components/TabsComponent";
import Souz from "../../components/Souz";
import { Container } from "@mui/material";
import PaginationComponent from "../../components/Pagination";
import { SwiperComponent } from "../../components/Swiper";



const VALUES = {
    souz: 'souz',
    history: 'history',
    organ: 'organ',
    projects: 'projects',
    ourTeam: 'ourTeam'
}

const GetCategories = ({ action }) => {
    
    switch (action) {
        case VALUES.souz: {
            return <Souz />
        }
        case VALUES.history: {
            return <h1>Красивые картиночки</h1>
        }
        default: return <></>
    }
}


const Main = () => {

    const categoriesSelect = [
        { value: VALUES.souz, label: 'О союзе' },
        { value: VALUES.history, label: 'История организации' },
        { value:  VALUES.organ, label: "Органы управления и их деятельность"},
        { value: VALUES.projects, label: "Реализуемые проекты"},
        { value: VALUES.ourTeam, label: "Наша команда"}
    ]

    const [value, setValue] = useState(categoriesSelect?.[1].value)

    const swiperImage = [
        { url: 'https://www.atlasandboots.com/wp-content/uploads/2016/03/big-wall-climbs-asgard-1.jpg' },
        { url: 'https://www.atlasandboots.com/wp-content/uploads/2016/03/big-wall-mount-ulvetanna-and-fenris-mountains-gordon-wiltsie.jpg' },
        { url: 'https://www.atlasandboots.com/wp-content/uploads/2016/03/big-wall-half-dome.jpg' },
        { url: 'https://www.atlasandboots.com/wp-content/uploads/2016/02/Mountaineering-calendar-matterhorn-.jpg'},
        { url: 'https://www.atlasandboots.com/wp-content/uploads/2019/05/ama-dablam2-most-beautiful-mountains-in-the-world.jpg' },
        { url: 'https://www.atlasandboots.com/wp-content/uploads/2019/05/cuernos-del-paine-most-beautiful-mountains-in-the-world.jpg' },
        { url: 'https://www.atlasandboots.com/wp-content/uploads/2019/05/mount-thor-most-beautiful-mountains-in-the-world.jpg' },
        { url: 'https://www.atlasandboots.com/wp-content/uploads/2019/05/alpamayo-most-beautiful-mountains-in-the-world.jpg'}
    ]

    return (
        <Container maxWidth={'lg'} >
            <h1>О союзе МСУ</h1>
            <TabsComponent categoriesSelect={categoriesSelect} value={value} setValue={setValue} /> 
            <GetCategories action={value} />
            <SwiperComponent swiperImage={swiperImage} />
            {/* <PaginationComponent /> */}
        </Container>
    )

}

export default Main