import React from 'react';
import {StyleSheet} from 'react-native';
import Metrics from '../../../StylingConstants/Metrics';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginTop: Metrics.height * 0.10,
        flex:1
    },
    //article related styles
    articleContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
     textBeforeArticle:{
         marginLeft: Metrics.width * 0.13,
         fontSize: Metrics.width * 0.04,
         paddingRight: Metrics.width * 0.02
     },
     articleBox: {
         flex: 0.8,
         borderWidth: 1,
         backgroundColor: '#E7F194',
         borderRadius: Metrics.width * 0.02,
         
     },
     articlePicker:{
         color: 'black',
         width: "100%"
     },
     textAfterArticle:{
        fontSize: Metrics.width * 0.04,
        marginRight: Metrics.width * 0.12,
        paddingLeft: Metrics.width * 0.01,
        flex: 0.4
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
         alignContent: 'center',
         borderRadius: Metrics.width * 0.02,
     },
     adjectivePicker: {
         color: 'black',
         width: "100%"
     },
     textAfterAdjective:{
         fontSize: Metrics.width * 0.04,
         marginRight: Metrics.width * 0.01,
         paddingLeft: Metrics.width * 0.015,
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
         fontSize: Metrics.width * 0.04,
         marginLeft: Metrics.width * 0.05,
         paddingRight: Metrics.width * 0.03,
     },
     nounGenderBox:{
         flex: 0.5,
         borderWidth: 1,
         alignContent: 'center',
         flex: 0.55,
         backgroundColor: '#BBFFBF',
         borderRadius: Metrics.width * 0.02,
     },
     textAfterNounGender:{
         fontSize: Metrics.width * 0.04,
         paddingLeft: Metrics.width * 0.025,
     },
     //Case related styles
     caseContainer:{
         marginTop: Metrics.height * 0.035,
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'flex-end',
     },
     textBeforeCase:{
         fontSize: Metrics.width * 0.04,
         flex: 0.17
     },
     caseBox:{
         flex: 0.45,
         backgroundColor: '#FFB778',
         borderWidth: 1,
         borderRadius: Metrics.width * 0.02,
     },
     casePicker:{
         color: 'black',
         width: "100%"
     },
     textAfterCase:{
         fontSize: Metrics.width * 0.04,
         flex: 0.15,
         paddingLeft: Metrics.width * 0.01,
     },
     buttonContainer: {
        backgroundColor: 'lightblue',
        paddingHorizontal: Metrics.width * 0.01,
        borderRadius: Metrics.width * 0.02,
        width: Metrics.width * 1,
        height: Metrics.height * 0.07,

     },
     innerButtonContainer:{
         backgroundColor: '#EBEBEB',
         flex:1,
     },
    
     //Sample sentence text
     textOverButton:{
        fontSize: Metrics.width * 0.04,
        alignSelf: 'center'
    },
     textOverButtonContainer:{
         marginTop: Metrics.height*0.11,
         marginBottom: Metrics.height * 0.02
     },
     button:{
        alignContent: 'center',
        marginHorizontal: Metrics.width * 0.025, 
        alignItems: 'center' 
     },
     clickMessageFontSize:{
         fontSize: Metrics.width * 0.036
     },
     sampleSentencesFontSize:{
         fontSize: Metrics.width * 0.048
     }
})
export default styles