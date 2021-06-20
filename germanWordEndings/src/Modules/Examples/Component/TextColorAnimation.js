import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Animated } from 'react-native'

import {setYellowTextAC} from '../../../Redux/YellowTextRedux'
import { articleSelector } from '../../../Redux/ArticleRedux'

const TextColorAnimation = (props) => {
    const dispatch= useDispatch();
    const articleType= useSelector(articleSelector)


    const yellowText = new Animated.Value(0);
    let [countYellow, setCountYellow] = useState(0);

    useEffect(()=> {
        if(countYellow){
            const animatedYellowText= yellowText.interpolate({
                inputRange:[0,1],
                outputRange: ["rgb(170, 188, 16)", "rgb(105,105,105)"]
            });
            dispatch(setYellowTextAC(animatedYellowText));
        }
        else
        {
            dispatch(setYellowTextAC('grey'))
        }
        if(countYellow){
            let yellowToBlack = Animated.timing(
                yellowText,
                {
                    toValue: 1,
                    duration: 4000,
                    useNativeDriver: false
                }
            );
            yellowToBlack.start();
            
        }
        else{
            
            setCountYellow(1)
            
        }
    }, 
    
    [articleType])
    
    return(null)
}

export {TextColorAnimation}