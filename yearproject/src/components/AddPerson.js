import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView,Button,Alert} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import { MKTextField, MKColor } from 'react-native-material-kit';
import * as actions from '../actions';

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


class AddPerson extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name={'plus'} size={50} color={tintColor} />
        )
    }

    onAddPress() {
        const {email, password} = this.props;

        this.props.createNewContact({email, password});
        this.props.navigation.navigate('Company');
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.form}>
                    <Text>Register A New User</Text>

                    <MKTextField 
                        textInputStyle={styles.fieldStyles}
                        placeholder={'Email...'}
                        tintColor={MKColor.Teal}
                        value={this.props.email}
                        onChangeText={value => this.props.formUpdate({ prop: 'email', value})}
                    />
                    <MKTextField 
                        textInputStyle={styles.fieldStyles}
                        placeholder={'password...'}
                        tintColor={MKColor.Teal}
                        value={this.props.password}
                        onChangeText={value => this.props.formUpdate({ prop: 'password', value})}
                    />

                    <View style={styles.addButton}>
                        <Button
                        title="Register"
                        onPress= {this.onAddPress.bind(this)}
                         />                   
                     </View>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    const {email, password} = state;
    return {email, password};
}

export default connect(mapStateToProps, actions)(AddPerson);
