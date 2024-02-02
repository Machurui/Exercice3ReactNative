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

const fetchData = async (dataId: number) => {
    try {
        let path = 'https://jsonplaceholder.typicode.com/users/' + dataId
        fetch(path, {
            method: 'DELETE',
        });
    } catch (error) {
        console.log(error);
    }
}

const Delete: React.FC<Props> = ({ navigation }) => {
    const [id, onChangeId] = useState('');

    const handleSubmit = () => {

        let dataId = parseInt(id, 10)
        if (dataId > 0 && dataId <= 10 && id != "") {
            fetchData(dataId);
        } else {
            Alert.alert("Veuillez saisir un id entre 1 et 10 compris !")
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

export default Delete;