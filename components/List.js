import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, ScrollView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

const API = 'https://rickandmortyapi.com/api';

export function List () {
    const [data, setData] = useState([]);

    async function getCharacters () {
        const res = await fetch(`${API}/character`);
        const resJSON= await res.json();
        setData(resJSON.results);
    }

    useEffect(() => {
        getCharacters();
    }, []);

    return (
        <ScrollView style={styles.container}>
            {data.map(character => (
                <ListItem key={character.id} bottomDivider>
                    <Avatar source={{uri: character.image}}/>
                    <ListItem.Content>
                        <ListItem.Title>{character.name}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%'
    }
})