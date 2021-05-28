import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

const OneOrMultiline = (props) => {
    const multiline = props.multiline;
    const value = props.value;
    const style = props.style;
    const valueArticle = props.article;
    const valueAdjective = props.adjective

    if(multiline){
        console.log("valueArticle", valueArticle)
    }
    return (
        <View style={style}>
            {!multiline ?
                <Text>{value} </Text>
                :
                <>
                    <Text>{valueArticle}</Text>
                    <Text>{valueAdjective}</Text>
                </>
            }
        </View>
    )
}

export default OneOrMultiline
