import React from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import styles from "./styles"

const HomeScreen = () => {
    return (
        <View>
            <Text>Home screen</Text>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)