import {
    StyleSheet,
    View,

} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function StartPage() {

    return (
        <View style={styles.container}>

            <Icon name="university" size={200} color="#0000ff" />

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      
    }
});