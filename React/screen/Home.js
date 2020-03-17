import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, TextInput, Button, View, Alert } from 'react-native';

class Home extends Component {
	constructor(props){
		super(props);
		this.state ={
		isLoading: true,
		userData:[]
	}
}

    static navigationOptions = {
        header: null

    }
	
	getData(){
		return fetch('http://10.0.2.2:3333/api/v0.0.5/chits')
			.then((response) => response.json())
			.then((responseJson) => {
				
			this.setState({
				isLoading: false,
				userData: responseJson,
			});
			
		})
		
	.catch((error) =>{
	console.log(error);
	});
 }
componentDidMount(){
	this.getData();
}

    render() {
		
		 if(this.state.isLoading){
			return(
			<View>
			 <ActivityIndicator/>
			</View>
		)
	}

		
        return ( 
		<View>
			<Text > Home Screen </Text> 
			<Button
				title="Login as User"
				onPress={() => this.props.navigation.navigate('Login')}
			/>
			<Button
				title="Create Account"
				onPress={() => this.props.navigation.navigate('Create')}
			/>

			<FlatList
				data={this.state.userData}
				renderItem={({item}) => <Text>{item.chit_content}</Text>}
				keyExtractor={({id}, index) => id}
			/>
		</View>
		
        );
    }

}
export default Home;