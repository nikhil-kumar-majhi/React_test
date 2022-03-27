import React ,{useEffect, useState}from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Button, TouchableHighlight} from 'react-native';
import { StatusBar } from 'expo-status-bar'
import axios from '../axios';
import requests from '../requests'
import Banner from '../components/Banner'



const Category = ({title, fetchUrl,navigation,Info}) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
       async function fetchData() {
         const request = await axios.get(fetchUrl);
         setMovies(request.data.results);
         return request;
       } 
       fetchData();
    }, [fetchUrl]);
  
   
    return (
      <View style={styles.row}>
        <Text style={styles.text}>{title}</Text>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        
        <View style={styles.rowItem}>
          
          {movies.map(movie =>(
            <View>
              <TouchableHighlight onPress={() => navigation.navigate('Info')}>
          <Image
          key ={movie.id} 
            style={styles.image}
            source={{uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`}}
            />
            </TouchableHighlight>
            </View>
          ))}
          
        </View>
        <Youtube></Youtube>
        
        </ScrollView>
      </View>
    )
  }
const Main =({navigation})=> {
  return (
    
    <View style={styles.Container}>
       <ScrollView style={{flexGrow : 1}}>
      <Banner /> 
      <View style={styles.row}>
      <Category navigation={navigation} title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Category title="TRENDING NOW" fetchUrl={requests.fetchTrending}/>
      <Category title="TOP RATED" fetchUrl={requests.fetchTopRated}/>
      <Category title="Genre Movies" fetchUrl={requests.fetchComedyMovies}/>
      </View>
      </ScrollView>
      <StatusBar style="light"/>
    </View>
    
    
  )
}

const styles = StyleSheet.create({
  Container :{
    flex: 1,
    backgroundColor: '#171717',
  },
  row:{
    paddingTop: 10,
    left: 8,
  },
  text:{
    fontSize: 20,
    color:'#fff'
  },
  rowItem:{
  flexDirection:'row',
  paddingTop:10,
  padding: 5,
  },
 
  image:{
    // resizeMode: 'contain',
    width: 136,
    height: 201,
    borderRadius: 10,
    marginRight: 10,
  }
})
export default Main;