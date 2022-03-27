import axios from '../axios';
import requests from '../requests';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Text, View, Image,StyleSheet, ImageBackground} from 'react-native';



function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);//
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length-1)]);
            return request;
        }
        fetchData();
    }, []);
    console.log(movie);
    return (
        <View >
            
        <ImageBackground   
            style={styles.banner}
            source={{uri: `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}}> 
           <LinearGradient
            colors={['transparent','black']}
            style={styles.banner}>
            <View style={styles.details}>
                <Text style={styles.text}>{movie?.name || movie?.title}</Text>
                <Text style={styles.desc}>{movie?.overview}</Text>
                <Text style={styles.rating}>{movie?.vote_average}</Text>               
            </View>
            </LinearGradient>
            </ImageBackground>
            
        </View>
        
    )
}
const styles = StyleSheet.create({
    banner:{
        height: 448,
        resizeMode:'contain',
        justifyContent: "center",
    },
    details:{
        top: 120,
        padding:20,
    },
    text:{
        
        fontSize: 30,
        color:'#fff'
        
    },
    desc:{
        color:'#fff'
    },
    rating:{
        color: 'black',
        top:10,
        width: '20%',
       
        backgroundColor: '#fff',
    },
    gradient:{
    }
})
export default Banner
