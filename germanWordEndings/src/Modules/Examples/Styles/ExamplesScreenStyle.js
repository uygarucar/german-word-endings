import React from 'react';
import {StyleSheet} from 'react-native';
import Metrics from '../../../StylingConstants/Metrics';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginTop: Metrics.height * 0.10
    },
    //article related styles
    articleContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
     textBeforeArticle:{
         marginLeft: 30,
         fontSize: 15,
         paddingRight: 3
     },
     articleBox: {
         flex: 0.7,
         borderWidth: 1,
         backgroundColor: '#E7F194'
     },
     articlePicker:{
         color: 'black',
         width: "100%"
     },
     textAfterArticle:{
        fontSize: 15,
        marginRight: 50,
        paddingRight: -5,
        paddingLeft: 5,
        flex: 0.5
     },
     //adjective related styles
     adjectiveContainer:{
        marginTop: Metrics.height * 0.035,
        flexDirection: 'row',
        justifyContent: 'flex-end'
     },
     adjectiveBox:{
         flex: 0.45,
         backgroundColor: '#FFD6F7',
         borderWidth: 1,
         borderColor: 'black',
         alignContent: 'center'
     },
     adjectivePicker: {
         color: 'black',
         width: "100%"
     },
     textAfterAdjective:{
         fontSize: 15,
         marginRight: 1,
         paddingLeft: 8,
         paddingRight: 0,
         flex: 0.2,
         alignSelf: 'center',
     },
     //Noun Gender styles
     nounGenderContainer:{
         marginTop: Metrics.height * 0.035,
         flexDirection: 'row',
         alignItems: 'center',
     },
     textBeforeNounGender:{
         fontSize: 15,
         marginLeft: 20,
         paddingRight: 15,
     },
     nounGenderBox:{
         flex: 0.5,
         borderWidth: 1,
         alignContent: 'center',
         flex: 0.55,
         backgroundColor: '#BBFFBF'
     },
     textAfterNounGender:{
         fontSize: 15,
         paddingLeft: 10,
     },
     //Case related styles
     caseContainer:{
         marginTop: Metrics.height * 0.035,
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'flex-end',
     },
     textBeforeCase:{
         fontSize: 15,
         flex: 0.17
     },
     caseBox:{
         flex: 0.45,
         backgroundColor: '#FFB778',
         borderWidth: 1,
     },
     casePicker:{
         color: 'black',
         width: "100%"
     },
     textAfterCase:{
         fontSize: 15,
         flex: 0.15,
         paddingLeft: 5,
     },
     buttonContainer: {
         marginTop: 100,
         backgroundColor: 'lightgrey'
     }
})
export default styles