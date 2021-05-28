import React, { useState } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import Svgs from '../../../StylingConstants/Svgs'
import Metrics from '../../../StylingConstants/Metrics'
import styles from '../Styles/VisibilityToggleStyle'
import { DataTable } from 'react-native-paper'
import OneOrMultiline from './OneOrMultiline'

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
                                <View style={styles.caseContainer}>
                                    <Text>Nominative</Text>
                                </View>
                                <View style={styles.rowValuesContainer}>
                                    <View style={styles.rowValuesInnerContainer}>
                                        <OneOrMultiline multiline={props.multiline}
                                            style={styles.rowItem}
                                            value={props.content.nominative.masculine}
                                            article={props.content.nominative.masculine.article}
                                            adjective={props.content.nominative.masculine.adjective}
                                        />
                                        <OneOrMultiline multiline={props.multiline}
                                            style={styles.rowItem}
                                            value={props.content.nominative.feminine}
                                            article={props.content.nominative.feminine.article}
                                            adjective={props.content.nominative.feminine.adjective}
                                        />
                                        <OneOrMultiline multiline={props.multiline}
                                            style={styles.rowItem}
                                            value={props.content.nominative.neuter}
                                            article={props.content.nominative.neuter.article}
                                            adjective={props.content.nominative.neuter.adjective}
                                        />
                                        <OneOrMultiline multiline={props.multiline}
                                            style={styles.rowItem}
                                            value={props.content.nominative.plural}
                                            article={props.content.nominative.plural.article}
                                            adjective={props.content.nominative.plural.adjective}
                                        />
                                    </View>
                                </View>
                            </View>
                        </DataTable.Row>

                        <DataTable.Row>
                            <View style={styles.rowContainer}>
                                <View style={styles.caseContainer} ><Text>Accusative</Text></View>
                                <View style={styles.rowValuesContainer}>
                                    <View style={styles.rowValuesInnerContainer}>
                                    <OneOrMultiline multiline={props.multiline}
                                            style={styles.rowItem}
                                            value={props.content.accusative.masculine}
                                            article={props.content.accusative.masculine.article}
                                            adjective={props.content.accusative.masculine.adjective}
                                        />
                                        <OneOrMultiline multiline={props.multiline}
                                            style={styles.rowItem}
                                            value={props.content.accusative.feminine}
                                            article={props.content.accusative.feminine.article}
                                            adjective={props.content.accusative.feminine.adjective}
                                        />
                                        <OneOrMultiline multiline={props.multiline}
                                            style={styles.rowItem}
                                            value={props.content.accusative.neuter}
                                            article={props.content.accusative.neuter.article}
                                            adjective={props.content.accusative.neuter.adjective}
                                        />
                                        <OneOrMultiline multiline={props.multiline}
                                            style={styles.rowItem}
                                            value={props.content.accusative.plural}
                                            article={props.content.accusative.plural.article}
                                            adjective={props.content.accusative.plural.adjective}
                                        />
                                    </View>
                                </View>
                            </View>
                        </DataTable.Row>

                        <DataTable.Row>
                            <View style={styles.rowContainer}>
                                <View style={styles.caseContainer} ><Text>Dative</Text></View>
                                <View style={styles.rowValuesContainer}>
                                    <View style={styles.rowValuesInnerContainer}>
                                    <OneOrMultiline multiline={props.multiline}
                                            style={styles.rowItem}
                                            value={props.content.dative.masculine}
                                            article={props.content.dative.masculine.article}
                                            adjective={props.content.dative.masculine.adjective}
                                        />
                                        <OneOrMultiline multiline={props.multiline}
                                            style={styles.rowItem}
                                            value={props.content.dative.feminine}
                                            article={props.content.dative.feminine.article}
                                            adjective={props.content.dative.feminine.adjective}
                                        />
                                        <OneOrMultiline multiline={props.multiline}
                                            style={styles.rowItem}
                                            value={props.content.dative.neuter}
                                            article={props.content.dative.neuter.article}
                                            adjective={props.content.dative.neuter.adjective}
                                        />
                                        <OneOrMultiline multiline={props.multiline}
                                            style={styles.rowItem}
                                            value={props.content.dative.plural}
                                            article={props.content.dative.plural.article}
                                            adjective={props.content.dative.plural.adjective}
                                        />
                                    </View>
                                </View>
                            </View>
                        </DataTable.Row>
                        <DataTable.Row>
                            <View style={styles.rowContainer}>
                                <View style={styles.caseContainer} ><Text>Genitive</Text></View>
                                <View style={styles.rowValuesContainer}>
                                    <View style={styles.rowValuesInnerContainer}>
                                    <OneOrMultiline multiline={props.multiline}
                                            style={styles.rowItem}
                                            value={props.content.genitive.masculine}
                                            article={props.content.genitive.masculine.article}
                                            adjective={props.content.genitive.masculine.adjective}
                                        />
                                        <OneOrMultiline multiline={props.multiline}
                                            style={styles.rowItem}
                                            value={props.content.genitive.feminine}
                                            article={props.content.genitive.feminine.article}
                                            adjective={props.content.genitive.feminine.adjective}
                                        />
                                        <OneOrMultiline multiline={props.multiline}
                                            style={styles.rowItem}
                                            value={props.content.genitive.neuter}
                                            article={props.content.genitive.neuter.article}
                                            adjective={props.content.genitive.neuter.adjective}
                                        />
                                        <OneOrMultiline multiline={props.multiline}
                                            style={styles.rowItem}
                                            value={props.content.genitive.plural}
                                            article={props.content.genitive.plural.article}
                                            adjective={props.content.genitive.plural.adjective}
                                        />
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