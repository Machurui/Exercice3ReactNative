import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import axios from 'axios';

enableScreens();

type RootStackParamList = {
    Home: undefined;
    Profile: { data: string } | undefined;
};

// Définir le type pour la prop `navigation`
type Props = {
    navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};


const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error);

    }
}

const Read: React.FC<Props> = ({ navigation }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData().then(setData)

    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    item: {
        padding: 10,
        fontSize: 18,
    },
});

export default Read;