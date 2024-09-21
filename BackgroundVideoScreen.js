import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Animated } from 'react-native';
import Video from 'react-native-video';

const { width, height } = Dimensions.get('window');

const BackgroundVideoScreen = () => {
  const titleAnim = new Animated.Value(0);
  const descriptionAnim = new Animated.Value(0);
  const buttonAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(titleAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(descriptionAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(buttonAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* Background Video */}
      <Video
        source={{ uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }} // Replace with your video URL
        style={styles.backgroundVideo}
        muted={true}
        repeat={true}
        resizeMode="cover"
      />

      {/* Overlay */}
      <View style={styles.overlay} />

      {/* Text Elements */}
      <Animated.View style={{ ...styles.titleContainer, opacity: titleAnim }}>
        <Text style={styles.title}>Welcome</Text>
      </Animated.View>

      <Animated.View style={{ ...styles.descriptionContainer, opacity: descriptionAnim }}>
        <Text style={styles.description}>This is the description text.</Text>
      </Animated.View>

      {/* Buttons */}
      <Animated.View style={{ ...styles.buttonContainer, opacity: buttonAnim }}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Decline</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundVideo: {
    position: 'absolute',
    width: width,
    height: height,
    top: 0,
    left: 0,
  },
  overlay: {
    position: 'absolute',
    width: width,
    height: height,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay to make text more visible
  },
  titleContainer: {
    position: 'absolute',
    top: 50,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    position: 'absolute',
    top: 100,
    width: '100%',
    alignItems: 'center',
  },
  description: {
    color: 'white',
    fontSize: 16,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
});

export default BackgroundVideoScreen;
