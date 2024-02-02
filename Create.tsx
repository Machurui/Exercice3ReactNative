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

const fetchData = async (dataName: string, dataEmail: string) => {
    try {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
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

const Create: React.FC<Props> = ({ navigation }) => {
    const [name, onChangeName] = useState('');
    const [email, onChangeEmail] = useState('');

    const handleSubmit = () => {
        if (name != "" && email != "") {
            fetchData(name, email);
        } else {
            Alert.alert("Veuillez saisir tous les champs !")
        }

    }

    return (
        <View>
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

export default Create;