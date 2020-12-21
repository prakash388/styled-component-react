import React from 'react'
import { homeObjThree, homeObjFour } from "./Data";
import {InfoSection} from '../../components';

const Services = () => {
    return (
        <>
        <InfoSection {...homeObjThree} />   
        <InfoSection {...homeObjFour} />  
        </>
    )
}

export default Services
