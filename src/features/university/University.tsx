import React from "react";
import { StyleSheet } from "react-native";
import { Card, Title, Paragraph } from 'react-native-paper';
import { UniversityState } from "../../app/types";

export default function University(university: UniversityState) {

    return (

        <Card style={styles.container}>
            <Card.Content style={{}}>
                <Title style={{ fontSize: 15 }}>{university.name}</Title>
                <Paragraph>{university.webPage[0]}</Paragraph>
            </Card.Content>
        </Card>

    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 10,

    }
});