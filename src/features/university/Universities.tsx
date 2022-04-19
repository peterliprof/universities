import React from 'react';
import {
    StyleSheet,
    View,

} from 'react-native';

import { selectStatus } from '../store/universitySlice'
import { useAppSelector } from '../../app/hooks';

import DropdownPicker from './Dropdown';
import UniversityList from './UniversityList';
import StartPage from './StartPage';
import NetworkPending from './NetworkPending';


export default function Universities() {

    const status = useAppSelector(selectStatus);

    return (

        <View style={styles.container}>
           
            <DropdownPicker />

            {(status === '') && <StartPage />}
            {(status === 'pending') && <NetworkPending />}
            {(status === 'idle') && <UniversityList />}
        </View>
        
    );

};


const styles = StyleSheet.create({
    container: {

        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5"

    },
});