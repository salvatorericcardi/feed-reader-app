import { useEffect, useRef, useState } from "react";
import { Pressable } from "react-native";
import { Linking } from "react-native";
import { Text } from "react-native";
import { Image } from "react-native";
import { View, StyleSheet } from "react-native";

export default function Feed(props) {
    const [feed, setFeed] = useState({});
    const ref = useRef(true);
  
    const [src, setSrc] = useState('');

    useEffect(() => {
      if(ref.current) {
        ref.current = false;
        
        fetch('http://localhost:8000/src')
          .then(response => response.json())
          .then(res => setFeed({ ...feed, ...res }))
            .catch(err => console.log(err));
      }
    }, []);

    useEffect(() => {
        if(Object.keys(feed).length !== 0 && feed.link.search(/governo/i) > -1) {
            setSrc(require('../assets/images/governo.jpeg'));
        }
    }, [feed])

    return (
        <View style={styles.row}>
            <Image source={src} style={[styles.image, styles.flex]}></Image>
            <View style={[styles.innerRow, styles.flex]}>
                <Text style={styles.title}>{feed.title}</Text>
                <Pressable onPress={() => Linking.openURL(feed.link)} style={styles.lineHeight}>
                    <Text style={styles.link}>{feed.link}</Text>
                </Pressable>
                <Text style={styles.lineHeight}>{feed.pubdate}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        backgroundColor: '#fff',
        padding: '3rem',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        rowGap: 0,
        columnGap: '1.5rem',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 'calc(-1 * 0)',
        marginRight: 'calc(-.5 * 1.5rem)',
        marginLeft: 'calc(-.5 * 1.5rem)'
    },
    flex: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: 'auto'
    },
    image: {
        width: 200,
        height: 200
    },
    innerRow: {
        width: '75%'
    },
    title: {
        fontSize: '1.75rem',
        fontWeight: 500,
        lineHeight: '1.2',
        marginBottom: '.5rem'
    },
    link: {
        color: 'rgb(10, 88, 202)',
        textDecorationLine: 'underline'
    },
    lineHeight: {
        lineHeight: '1.5'
    }
});