import React from 'react'
import { InfoSection } from '../../components'
import Pricing from '../../components/Pricing/Pricing'
import Tools from '../Tools/Tools'

import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data'

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <Pricing />
            <InfoSection {...homeObjFour}/>
            <Tools />

            
        </>
    )
}

export default Home
