import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';

enableScreens();

type RootStackParamList = {
    Home: undefined;
    Profile: { data: string } | undefined;
};

// Définir le type pour la prop `navigation`
type Props = {
    navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const fetchData = async (dataName: string, dataEmail: string, dataId: number) => {
    try {
        let path = 'https://jsonplaceholder.typicode.com/users/' + dataId
        fetch(path, {
            method: 'PUT',
            body: JSON.stringify({
                id: dataId,
                name: dataName,
                email: dataEmail,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    } catch (error) {
        console.log(error);
    }
}

const Update: React.FC<Props> = ({ navigation }) => {
    const [name, onChangeName] = useState('');
    const [email, onChangeEmail] = useState('');
    const [id, onChangeId] = useState('');

    const handleSubmit = () => {

        let dataId = parseInt(id, 10)
        if (name != "" && email != "" && dataId > 0 && dataId <= 10) {
            fetchData(name, email, dataId);
        } else {
            Alert.alert("Veuillez saisir tous les champs et contenir un id entre 1 et 10 compris !")
        }

    }

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeId}
                value={id}
                placeholder="Id"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeName}
                value={name}
                placeholder="Name"
            />
            <Button
                onPress={handleSubmit}
                title="Submit"
                color="#000010"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default Update;