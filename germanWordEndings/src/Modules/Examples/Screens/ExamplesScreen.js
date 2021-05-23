import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import Metrics from '../../../StylingConstants/Metrics';
import Button from '../Component/Button'


const Examples = () => {
    const [articleType, setArticleType] = useState('no');
    const [hasAdjective, setHasAdjective] = useState('with');
    const [nounGenderType, setNounGenderType] = useState('masculine');
    const [caseType, setCaseType] = useState('accusative');

    return (

        <View style={{ flexDirection: 'column', marginTop: Metrics.height * 0.10, borderWidth: 1 }}>
            {/**1. */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start'
            }}>
                <Text style={{ marginLeft: 30, fontSize: 15, paddingRight: 3 }}>Use </Text>
                <View style={{ flex: 0.7, borderWidth: 1, backgroundColor:'#E7F194', }}>
                    <Picker
                        itemStyle={{ fontSize: 15 }}
                        style={{ color: 'black', width: "100%" }}

                        selectedValue={articleType}
                        mode="dropdown"
                        onValueChange={(itemValue, itemIndex) => setArticleType(itemValue)
                        }
                    >
                        <Picker.Item color= "black" label="No" value="no" />
                        <Picker.Item color= "black" label="Indefinite" value="indefinite" />
                        <Picker.Item color= "black" label="definite" value="definite" />
                    </Picker>
                </View>

                <Text style={{ fontSize: 15, marginRight: 50, paddingRight: -5, paddingLeft: 5, flex: 0.5 }}>article</Text>


            </View>
            {/**2. */}
            <View style={{
                marginTop: Metrics.height * 0.035,
                flexDirection: 'row', justifyContent: 'flex-end'
            }}>
                <View style={{ flex: 0.45, backgroundColor:'#FFD6F7', borderWidth:1, borderColor:'black', alignContent: 'center', }}>
                    <Picker style={{color:'black', width: '100%' }}
                        selectedValue={hasAdjective}
                        mode="dropdown"
                        onValueChange={(itemValue, itemIndex) => setHasAdjective(itemValue)}>
                        <Picker.Item color= "black" label="with" value="with" />
                        <Picker.Item color= "black" label="without" value="without" />
                    </Picker>
                </View>
                <Text style={{ fontSize: 15, marginRight: 1, paddingLeft: 8,  paddingRight: 0 , flex: 0.2, alignSelf:'center'}}>adjective</Text>
            </View>
            {/**3. */}
            <View style={{  marginTop: Metrics.height * 0.035, flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{ fontSize: 15, marginLeft: 20, paddingRight: 15,}}>for</Text>
                <View style={{ flex: 0.5, borderWidth: 1, alignContent: 'center', flex: 0.55 , backgroundColor:'#BBFFBF' }}>
                    <Picker
                        mode='dropdown'
                        selectedValue={nounGenderType}
                        onValueChange={(itemValue, itemIndex) => setNounGenderType(itemValue)}
                    >
                        <Picker.Item color= "black" label="masculine" value="masculine" />
                        <Picker.Item color= "black" label="feminine" value="feminine" />
                        <Picker.Item color= "black" label="neutral" value="neutral" />
                    </Picker>
                </View>
                <Text style={{ fontSize: 15, paddingLeft: 10 }}>noun</Text>
            </View>
            {/* 4. */}
            <View style={{  marginTop: Metrics.height * 0.035, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                <Text style={{ fontSize: 15, flex:0.17}}>and for</Text>
                <View style={{ flex: 0.45, backgroundColor:'#FFB778', borderWidth: 1 }}>
                    <Picker
                        itemStyle={{ fontSize: 15 }}
                        style={{ color: 'black', width: "100%" }}

                        selectedValue={caseType}
                        mode="dropdown"
                        onValueChange={(itemValue, itemIndex) => setCaseType(itemValue)
                        }>
                        <Picker.Item color= "black" label="Nominative" value="nominative" />
                        <Picker.Item color= "black" label="Accusative" value="accusative" />
                        <Picker.Item color= "black" label="Dative" value="dative" />
                        <Picker.Item color= "black" label="Genitive" value="genitive" />
                    </Picker>
                </View>
                <Text style={{ fontSize: 15, flex:0.15, paddingLeft: 5 }}>case</Text>
            </View>
            <View style={{marginTop: 100, backgroundColor: 'lightgrey'}}>
                 <Button articleType={articleType} hasAdjective={hasAdjective}
                        nounGenderType={nounGenderType} caseType={caseType}
                 />
            </View>
        </View>
    )
}

export default Examples