import React, { useState } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import Svgs from '../../../StylingConstants/Svgs'
import Metrics from '../../../StylingConstants/Metrics'
import styles from '../Styles/VisibilityToggleStyle'

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
                <TouchableOpacity  onPress={_changeVisibility}>
                    <Text style={{ fontSize: 20 }}>{props.title}</Text>
                </TouchableOpacity>
            </View>
            <View>
                {
                    shouldShow ?
                        <Text>{props.content}</Text>
                        :
                        null}
            </View>
        </>
    )
}

export default VisibilityToggle