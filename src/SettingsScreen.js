import React, {Component} from 'react';
import {SafeAreaView} from "react-native";


class SettingsScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ""};
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} />
        )
    };
}

export default SettingsScreen;