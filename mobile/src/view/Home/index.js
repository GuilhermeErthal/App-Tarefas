import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

// COMPONENTES 
import Header from '../../components/Header';
import Footer from '../../components/Footer';


export default function Home(){
    return (
    <View style={styles.container}>
        <Header showNotification={true} showBack={false}/>  

        <View style={styles.filter}>
            <TouchableOpacity>
                <Text style={styles.filterTextActived}>Todos</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.filterTextActived}>Hoje</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.filterTextActived}>Mês</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.filterTextActived}>Semana</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.filterTextActived}>Ano</Text>
            </TouchableOpacity>
        </View>

        <Footer icon={'add'}/>
    </View>
    )
}
