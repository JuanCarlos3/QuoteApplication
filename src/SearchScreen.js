import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TextInput} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


class SearchScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ""};
    }

    render() {
        return (
            <View>
                <View style={styles.navbar}>
                    <Text style={styles.title}>Paul Zhang</Text>
                    <Icon name="md-create" size={40} color="black"/>
                </View>
                <View style={styles.profileFlex}>
                    <Text>{this.state.text}</Text>
                </View>
                <View style={styles.quoteTextBox}>
                    <TextInput style={styles.quoteText}
                               placeholder="Quote or Value"
                               onChangeText={(text) => this.setState({text})}/>
                </View>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    layout: {
        flex: 1
    },
    title: {
        fontSize: 30,
        color: "#ffcd5e",
        fontFamily: "Helvetica neue",
        marginTop: 10,
    },
    navbar: {
        width: 100 + "%",
        height: 60,
        alignItems: "center",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "black"
    },
    profileIcon: {
        width: 100,
        height: 100,
        borderRadius: 50,
        margin: 30
    },
    profileFlex: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    profileName: {
        fontWeight: "bold",
        fontSize: 35,
        color: "black",
        fontFamily: "georgia",
        marginTop: 50,
        marginRight: 10
    },
    quoteText: {
        fontSize: 20
    },
    quoteTextBox: {
        height: 50,
        width: 80+"%",
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "grey",
        alignSelf: "center",
        marginTop: 50
    }

})

export default SearchScreen;