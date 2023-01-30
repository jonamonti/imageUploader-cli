import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native';

export default function Loader() {
  return (
    <View style={styles.view__Loader}>
      <View style={styles.view__ContLoader}>
        <View style={styles.view__TextLoader}>
          {/* <Text style={styles.titleUploading}>Uploading...</Text> */}
          <LottieView 
            autoPlay
            source={require('../assets/animations/loading.json')}
            autosize
            />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  view__Loader:{
    height: '100%',
    width:'100%',
    backgroundColor: '#fafafb',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  view__ContLoader:{
    height:120,
    width:350,
    borderRadius:12,
    backgroundColor:'#fffffa'
  },
  view__TextLoader:{
    margin:20,
  },
  titleUploading:{
    fontWeight:'400'
  }
});