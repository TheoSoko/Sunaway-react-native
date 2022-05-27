import ModalSelector from 'react-native-modal-selector'
import {View, StyleSheet} from 'react-native'

    export default function Selector() {
        const data = [
            { key: 0, section: true, label: 'Zones géographiques' },
            { key: 1, label: 'Europe' },
            { key: 2, label: 'Asie' },
            { key: 3, label: 'Afrique'},
            { key: 4, label: 'Amérique'},
        ];

        return (
                <ModalSelector
                    data={data}
                    initValue="Zone géographique"
                    selectStyle={styles.selectBox}
                    selectTextStyle={styles.selectText}
                    sectionTextStyle={styles.selectText}
                />
        );
    }

    const styles = StyleSheet.create({
        selectBox: {
            width: 250,
            marginVertical: 26, 
            height: 50,
            justifyContent: 'center',
            backgroundColor: 'white',
            borderRadius: 10,
            alignItems: 'flex-start',
            paddingLeft: 27,
        },
        selectText: {
            color: '#353535',
        }
    })