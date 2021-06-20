import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Animated } from 'react-native'

import {setYellowTextAC} from '../../../Redux/YellowTextRedux'
import { articleSelector } from '../../../Redux/ArticleRedux'

import { setPinkTextAC } from '../../../Redux/PinkTextRedux'
import { adjectiveSelector } from '../../../Redux/AdjectiveRedux'

import { setGreenTextAC } from '../../../Redux/GreenTextRedux'
import { nounSelector } from '../../../Redux/NounRedux'

import { setOrangeTextAC } from '../../../Redux/OrangeTextRedux'
import { caseSelector } from '../../../Redux/CaseRedux'


const TextColorAnimation = (props) => {
    const dispatch= useDispatch();

    const articleType= useSelector(articleSelector)
    const hasAdjective = useSelector(adjectiveSelector)
    const nounType= useSelector(nounSelector);
    const caseType = useSelector(caseSelector)

    const yellowText = new Animated.Value(0);
    const pinkText = new Animated.Value(0);
    const greenText = new Animated.Value(0);
    const orangeText = new Animated.Value(0);

    let [countYellow, setCountYellow] = useState(0);
    let [countPink, setCountPink] = useState(0);
    let [countGreen, setCountGreen] = useState(0);
    let [countOrange, setCountOrange] = useState(0);

    //Creating animated color variable & Starting animation for Article(i.e. yellow)
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

    
    //Creating animated color variable & Starting animation for Adjective(i.e. pink)
    useEffect(()=> {
        if(countPink){
            const animatedPinkText= pinkText.interpolate({
                inputRange:[0,1],
                outputRange: ["rgb(199,21,133)", "rgb(105,105,105)"]
            });
            dispatch(setPinkTextAC(animatedPinkText));
        }
        else
        {
            dispatch(setPinkTextAC('grey'))
        }
        if(countPink){
            let pinkToBlack = Animated.timing(
                pinkText,
                {
                    toValue: 1,
                    duration: 4000,
                    useNativeDriver: false
                }
            );
            pinkToBlack.start();
            
        }
        else{
            
            setCountPink(1)
            
        }
    }, 
    
    [hasAdjective])


    //Creating animated color variable & Starting animation for Adjective(i.e. green)
    useEffect(()=> {
        if(countGreen){
            const animatedGreenText= greenText.interpolate({
                inputRange:[0,1],
                outputRange: ["rgb(0,100,0)", "rgb(105,105,105)"]
            });
            dispatch(setGreenTextAC(animatedGreenText));
        }
        else
        {
            dispatch(setGreenTextAC('grey'))
        }
        if(countGreen){
            let greenToBlack = Animated.timing(
                greenText,
                {
                    toValue: 1,
                    duration: 4000,
                    useNativeDriver: false
                }
            );
            greenToBlack.start();
            
        }
        else{
            
            setCountGreen(1)
            
        }
    }, 
    
    [nounType])

    //Creating animated color variable & Starting animation for Adjective(i.e. orange)
    useEffect(()=> {
        if(countOrange){
            const animatedOrangeText= orangeText.interpolate({
                inputRange:[0,1],
                outputRange: ["rgb(255,69,0)", "rgb(105,105,105)"]
            });
            dispatch(setOrangeTextAC(animatedOrangeText));
        }
        else
        {
            dispatch(setOrangeTextAC('grey'))
        }
        if(countOrange){
            let orangeToBlack = Animated.timing(
                orangeText,
                {
                    toValue: 1,
                    duration: 4000,
                    useNativeDriver: false
                }
            );
            orangeToBlack.start();
            
        }
        else{
            
            setCountOrange(1)
            
        }
    }, 
    
    [caseType])

    return(null)
}

export {TextColorAnimation}