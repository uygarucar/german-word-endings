import React, { useState } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import Svgs from '../../../StylingConstants/Svgs'
import Metrics from '../../../StylingConstants/Metrics'
import styles from '../Styles/VisibilityToggleStyle'
import { DataTable } from 'react-native-paper'

const VisibilityToggle = (props) => {

    const [shouldShow, setShouldShow] = useState(false);
    const SvgRight = Svgs.ArrowRight;
    const SvgDown = Svgs.ArrowDown;

    const _changeVisibility = () => {
        if (!shouldShow) {
            setShouldShow(true);
        }
        else {
            setShouldShow(false)
        }
    }
    return (
        <>
            <View style={styles.container}>
                {!shouldShow
                    ?
                    <TouchableOpacity style={styles.iconWhenNotClicked} onPress={_changeVisibility}>
                        <SvgRight width="40%" height="80%" />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.iconWhenClicked}
                        onPress={_changeVisibility}>
                        <SvgDown width="40%" height="80%" />
                    </TouchableOpacity>
                }
                <TouchableOpacity onPress={_changeVisibility}>
                    <Text style={{ fontSize: 20 }}>{props.title}</Text>
                </TouchableOpacity>
            </View>
            {/* <View>
                {
                    shouldShow ?
                        <Text>{props.content}</Text>
                        :
                        null}
            </View> */}
            <View>
                {shouldShow ?
                    <DataTable>
                        <DataTable.Header style={styles.headerContainer}> 
                            {/* <DataTable.Title>Only Adj.</DataTable.Title> */}
                            <View style={styles.headerTitlesContainer}>
                                <View><Text>Masculine</Text></View>
                                <View><Text>Feminine</Text></View>
                                <View><Text>Neutral</Text></View>
                                <View><Text>Plural</Text></View>
                            </View>
                        </DataTable.Header>

                        <DataTable.Row>
                            <View style={styles.rowContainer}>
                                <View style={styles.caseContainer} ><Text>Nominative</Text></View>
                                <View style={styles.rowValuesContainer}>
                                    <View style={styles.rowValuesInnerContainer}>
                                        <View style={styles.rowItem}><Text>einer</Text><Text>gutem</Text></View>
                                        <View style={styles.rowItem}><Text>einer</Text><Text>gutem</Text></View>
                                        <View style={styles.rowItem}><Text>einer</Text><Text>gutem</Text></View>
                                        <View style={styles.rowItem}><Text>einer</Text><Text>gutem</Text></View>
                                    </View>
                                </View>
                            </View>
                        </DataTable.Row>

                        <DataTable.Row>
                            <View style={styles.rowContainer}>
                                <View style={styles.caseContainer} ><Text>Accusative</Text></View>
                                <View style={styles.rowValuesContainer}>
                                    <View style={styles.rowValuesInnerContainer}>
                                        <View style={styles.rowItem}><Text>einer</Text><Text>gutem</Text></View>
                                        <View style={styles.rowItem}><Text>einer</Text><Text>gutem</Text></View>
                                        <View style={styles.rowItem}><Text>einer</Text><Text>gutem</Text></View>
                                        <View style={styles.rowItem}><Text>einer</Text><Text>gutem</Text></View>
                                    </View>
                                </View>
                            </View>
                        </DataTable.Row>

                        <DataTable.Row>
                            <View style={styles.rowContainer}>
                                <View style={styles.caseContainer} ><Text>Dative</Text></View>
                                <View style={styles.rowValuesContainer}>
                                    <View style={styles.rowValuesInnerContainer}>
                                        <View style={styles.rowItem}><Text>einer</Text><Text>gutem</Text></View>
                                        <View style={styles.rowItem}><Text>einer</Text><Text>gutem</Text></View>
                                        <View style={styles.rowItem}><Text>einer</Text><Text>gutem</Text></View>
                                        <View style={styles.rowItem}><Text>einer</Text><Text>gutem</Text></View>
                                    </View>
                                </View>
                            </View>
                        </DataTable.Row>
                        <DataTable.Row>
                            <View style={styles.rowContainer}>
                                <View style={styles.caseContainer} ><Text>Genitive</Text></View>
                                <View style={styles.rowValuesContainer}>
                                    <View style={styles.rowValuesInnerContainer}>
                                        <View style={styles.rowItem}><Text>einer</Text><Text>gutem</Text></View>
                                        <View style={styles.rowItem}><Text>einer</Text><Text>gutem</Text></View>
                                        <View style={styles.rowItem}><Text>einer</Text><Text>gutem</Text></View>
                                        <View style={styles.rowItem}><Text>einer</Text><Text>gutem</Text></View>
                                    </View>
                                </View>
                            </View>
                        </DataTable.Row>
                        {/* <DataTable.Pagination
                            page={0}
                            numberOfPages={2}
                            onPageChange={page => {
                                console.log(page);
                            }}
                            label="1-2 of 6"
                        /> */}
                    </DataTable>
                    :
                    null
                }
            </View>
        </>
    )
}

export default VisibilityToggle