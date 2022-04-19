import React from 'react';
import {
    View,
    FlatList,
    StyleSheet,
} from 'react-native';

import { useAppSelector } from '../../app/hooks';
import { selectUniversities } from '../store/universitySlice';
import University from './University';

export default function UniversityList() {

    const selectedUniversities = useAppSelector(selectUniversities);

    return (
        <View style={styles.container}>
            <FlatList keyExtractor={university => university.id} data={selectedUniversities} renderItem={(university) => <University id={university.item.id} name={university.item.name} webPage={university.item.webPage} thumbsUp={0} />} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 5,

    },
});