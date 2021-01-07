import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';


class loginScreen extends Component {


    props = {
      email: '',
      password: '',
    };
  
  
  onLogin() {
    const { email, password } = this.props;
    this.props.login({ email, password});

    // Alert.alert('Credentials', `email: ${email} + password: ${password}`);
    this.props.navigation.navigate('AddPerson');

  }

  render() {
    return (
      <View style={styles.form}>
          
      <Text style={styles.titleText}>Login</Text>
        <MKTextField
            textInputStyle={styles.fieldStyles}
            placeholder={'Email...'}
            tintColor={MKColor.Teal}
            value={this.props.email}
            onChangeText={value => this.props.formUpdate({ prop: 'email', value})}
        />
        <MKTextField
            textInputStyle={styles.fieldStyles}
            placeholder={'Password'}
            tintColor={MKColor.Teal}
            value={this.props.password}
            onChangeText={value => this.props.formUpdate({ prop: 'password', value})}
        />
        
     
        <View style={styles.addButton}>
            <Button
            title="Login"
            onPress= {this.onLogin.bind(this)}
            />                   
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    useNativeDriver: true,

    form: {
        flex: 1,
        paddingTop: 50,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
    },
    fieldStyles: {
        height: 40,
        color: MKColor.Orange,
    },
    addButton: {
        marginTop: 20,
    },
});

const mapStateToProps = state => {
    const { email ,password} = state;
    return {email ,password  };
}
export default connect(mapStateToProps, actions)(loginScreen);
