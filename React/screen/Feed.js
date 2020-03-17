import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Feed extends Component {

    static navigationOptions = {
        header: null

    }

    render() {
        return ( 
		<View>
			<Text > feed Screen </Text> 
		</View>
        );
    }

}
export default Feed;