import React, { useState } from 'react';
import {
    StyleSheet
} from 'react-native';


import { store } from '../../app/store';
import { fetchUniversities } from '../store/universitySlice';

import DropDownPicker from 'react-native-dropdown-picker';

import { countries } from '../../app/data';

function DropdownPicker() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
   
    const handleChange = (country: string | null) => {
        if (country) {
            store.dispatch(fetchUniversities(country));

        }
    }

    return (

        <DropDownPicker
            open={open}
            value={value}
            items={countries}
            setOpen={setOpen}
            setValue={setValue}
            onChangeValue={handleChange}
            placeholder='Select a Country'
            style={styles.container}
        />


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
        marginBottom: 15,

    }
});

export default DropdownPicker;