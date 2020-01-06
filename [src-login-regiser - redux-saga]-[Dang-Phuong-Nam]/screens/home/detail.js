import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  ImageBackground,
} from 'react-native';

export default class Detail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {item} = this.props;
    const images = [item.imageUrl, item.imageUrl, item.imageUrl, item.imageUrl];
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <ImageBackground
            resizeMode="stretch"
            source={{uri: item.imageUrl}}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 7,
              justifyContent: 'flex-end',
            }}>
            <View style={{marginLeft: 15}}>
              <Text style={styles.overText}>{item.title}</Text>
              <Text style={[styles.overText, styles.address]}>
                {item.address.en}
              </Text>
              <Text style={[styles.overText, styles.date]}>{item.date.en}</Text>
            </View>
          </ImageBackground>
        </View>
        <Text style={styles.title}>Image</Text>

        <View style={styles.subImage}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={images}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => (
              <Image
                resizeMode="stretch"
                source={{uri: item}}
                style={{
                  width: 150,
                  height: 100,
                  borderRadius: 20,
                  marginRight: 10,
                }}
              />
            )}
          />
        </View>

        <View>
          <Text style={styles.title}>Description</Text>
          <Text style={styles.subTitle}>{item.subtitle.en}</Text>
        </View>

        <Text style={styles.title}>SOCIAL</Text>
        <View style={{flexDirection: 'row'}}>
          <Icon name="ios-globe" style={styles.icon} solid />
          <Text style={styles.textIcon}>enouvo.com</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    marginRight: 5,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 200,
  },
  subImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 100,
  },
  date: {
    color: 'white',
    fontSize: 16,
  },
  title: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 15,
  },
  subTitle: {
    color: 'gray',
    fontSize: 15,
  },
  overText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Roboto',
  },
  address: {
    color: 'white',
    fontSize: 16,
  },
  icon: {
    fontSize: 20,
    color: 'red',
    marginLeft: 10,
  },
  textIcon: {
    fontSize: 20,
    marginLeft: 15,
  },
});
