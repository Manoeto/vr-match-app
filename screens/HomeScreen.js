import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import styles from '../styles/AppStyles';

export default function HomeScreen({ navigation }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null);

  const handleLogin = () => setLoggedIn(true);
  const handleBackToHome = () => {
    setLoggedIn(false);
    setSelectedMatch(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require('../assets/stadium_bg.jpg')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/vr_match_logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          {!loggedIn ? (
            <TouchableOpacity style={styles.ctaButton} onPress={handleLogin}>
              <Text style={styles.ctaText}>Login</Text>
            </TouchableOpacity>
          ) : selectedMatch === null ? (
            <View style={styles.matchOptionsContainer}>
              <Text style={styles.title}>Escolha uma partida para assistir:</Text>
              <TouchableOpacity style={styles.matchButton} onPress={() => setSelectedMatch('Barcelona vs Real Madrid')}>
                <Text style={styles.matchText}>⚽ Barcelona vs Real Madrid</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.matchButton} onPress={() => setSelectedMatch('Manchester City vs PSG')}>
                <Text style={styles.matchText}>⚽ Manchester City vs PSG</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.backButton} onPress={handleBackToHome}>
                <Text style={styles.backText}>🔙 Voltar ao Início</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.matchOptionsContainer}>
              <Text style={styles.title}>{selectedMatch}</Text>
              <TouchableOpacity style={styles.matchButton} onPress={() => navigation.navigate('Live')}>
                <Text style={styles.matchText}>🎥 Assistir em Tempo Real</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.matchButton} onPress={() => navigation.navigate('VR')}>
                <Text style={styles.matchText}>🕶️ Assistir em 3D</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.matchButton} onPress={() => navigation.navigate('Stats')}>
                <Text style={styles.matchText}>📊 Ver Estatísticas</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.backButton} onPress={() => setSelectedMatch(null)}>
                <Text style={styles.backText}>🔙 Voltar às Partidas</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
