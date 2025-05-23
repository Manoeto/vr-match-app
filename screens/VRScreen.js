import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/AppStyles';

export default function VRScreen({ navigation }) {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>🕶️ Modo 3D/VR disponível aqui...</Text>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>🔙 Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
