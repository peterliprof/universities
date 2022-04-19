import React, { useState } from 'react';
import {
    View, StyleSheet, ScrollView, SafeAreaView
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { store } from '../../app/store';
import { fetchUniversities } from '../store/universitySlice';

import { countryData } from '../../app/data';

import { Card} from 'react-native-paper';

function DropdownPicker() {
   
    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (country: string | null) => {
        if (country) {

            setSelectedValue(country);
            store.dispatch(fetchUniversities(country));

        }
    }

    return (

        <SafeAreaView style={styles.container}>
            <View>
                <Card style={styles.card}>
                    <ScrollView>
                        <Picker
                            style={styles.pikerbox}
                            selectedValue={selectedValue}
                            onValueChange={handleChange}
                            placeholder={'Select a Country'}
                        >
                            {countryData.map((country, index) => {
                   
                                    return (< Picker.Item label={country.label} value={country.value} key={index} />);
                               
                            })}

                        </Picker>
                    </ScrollView>
                </Card>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        width: "100%"
    },

    pikerbox: {
        height: 40,
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "transparent",
        borderBottomWidth: 1,
        marginBottom: 25
    },

    card: {
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 10,
    }

});

export default DropdownPicker;