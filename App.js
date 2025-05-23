import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// React Navigation is enabled for full screen navigation below

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleBackToHome = () => {
    setLoggedIn(false);
    setSelectedMatch(null);
  };

  const handleSelectMatch = (match) => {
    setSelectedMatch(match);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require('./assets/stadium_bg.jpg')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.logoContainer}>
            <Image
              source={require('./assets/vr_match_logo.png')}
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
              <Text style={styles.title}>Chose your Game</Text>
              <TouchableOpacity style={styles.matchButton} onPress={() => handleSelectMatch('Barcelona vs Real Madrid')}>
                <Text style={styles.matchText}>⚽ Barcelona vs Real Madrid</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.matchButton} onPress={() => handleSelectMatch('Manchester City vs PSG')}>
                <Text style={styles.matchText}>⚽ Manchester City vs PSG</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.backButton} onPress={handleBackToHome}>
                <Text style={styles.backText}>🔙</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.matchOptionsContainer}>
              <Text style={styles.title}>{selectedMatch}</Text>
              <TouchableOpacity style={styles.matchButton} onPress={() => navigation.navigate('Live')}> 
                <Text style={styles.matchText}>🎥 Live</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.matchButton} onPress={() => navigation.navigate('VR')}>
                <Text style={styles.matchText}>🕶️ 3D/VR</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.matchButton} onPress={() => navigation.navigate('Stats')}>
                <Text style={styles.matchText}>📊 Stats</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.backButton} onPress={() => setSelectedMatch(null)}>
                <Text style={styles.backText}>Another Game</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

function LiveScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>🎥 Live Streaming....</Text>
    </View>
  );
}

function VRScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>🕶️ 3D/VR MODE</Text>
    </View>
  );
}

function StatsScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>📊 Real Time Stats</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer> 
   <Stack.Navigator
  screenOptions={({ route }) => ({
    headerShown: route.name !== 'Home',
    headerStyle: { backgroundColor: '#000' },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
  })}
>

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Live" component={LiveScreen} />
        <Stack.Screen name="VR" component={VRScreen} />
        <Stack.Screen name="Stats" component={StatsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  logo: {
    width: 180,
    height: 180,
    tintColor: '#f9f9f6',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  ctaButton: {
    backgroundColor: '#0066cc',
    paddingVertical: 14,
    paddingHorizontal: 80,
    borderRadius: 14,
    marginBottom: 30,
  },
  ctaText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  matchOptionsContainer: {
    alignItems: 'center',
  },
  matchButton: {
    backgroundColor: '#f25c54',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
  },
  matchText: {
    color: '#fff',
    fontSize: 16,
  },
  backButton: {
    marginTop: 20,
    paddingVertical: 14,
    paddingHorizontal: 60,
    backgroundColor: '#ffffffaa',
    borderRadius: 10,
  },
  backText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  screenText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
});

