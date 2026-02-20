import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions, ScrollView } from 'react-native';

export default function ProfileScreen() {
  const { width } = useWindowDimensions();

  const isDesktop = width >= 1024;
  const isTablet = width >= 768;
  const isLandscapeMobile = width >= 667;

  const flexDirection = isLandscapeMobile ? 'row' : 'column';

  return (
    <ScrollView style={styles.container}>
      {/* CONTAINER */}
      <View style={[
        styles.card,
        isDesktop ? { width: 950 } : isTablet ? { width: 700 } : { width: '90%' }
      ]}>
        
        {/* ROW / COLUMN logic */}
        <View style={[styles.layout, { flexDirection: flexDirection }]}>
          
          {/* AVATAR STACK */}
          <View style={styles.avatarStack}>
            <Image 
              source={{ uri: 'https://images.hdqwalls.com/download/ezio-assassins-creed-4k-xq-1920x1080.jpg' }} 
              style={styles.avatar} 
            />
          </View>

          {/* INFO STACK */}
          <View style={styles.infoStack}>
            <Text style={[styles.bio, !isLandscapeMobile && { textAlign: 'center' }]}>
             ¡Mi Perfil!
            </Text>
            <Text style={[styles.name, !isLandscapeMobile && { textAlign: 'center' }]}>
              Cristian Chavez
            </Text>
            <Text style={[styles.bio, !isLandscapeMobile && { textAlign: 'center' }]}>
              Practica 2 - Interfas responsiva utilizando Expo Go y VS Code.
            </Text>
            
            {/* STATS ROW */}
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statNum}>0</Text>
                <Text style={styles.statLabel}>Proyectos</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNum}>0</Text>
                <Text style={styles.statLabel}>Seguidores</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNum}>0</Text>
                <Text style={styles.statLabel}>Seguidos</Text>
              </View>
            </View>
          </View>

        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  card: {
    backgroundColor: '#ffffff',
    marginTop: 40,
    marginBottom: 40,
    padding: 24,
    borderRadius: 20,
    alignSelf: 'center',
    // Sombra para iOS y Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  layout: {
    alignItems: 'center',
    gap: 20,
  },
  avatarStack: {
    alignItems: 'center',
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: '#6366f1',
  },
  infoStack: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1f2937',
    marginBottom: 8,
  },
  bio: {
    fontSize: 16,
    color: '#6b7280',
    lineHeight: 22,
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    padding: 15,
  },
  statItem: {
    alignItems: 'center',
  },
  statNum: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4f46e5',
  },
  statLabel: {
    fontSize: 12,
    color: '#9ca3af',
    textTransform: 'uppercase',
  },
});