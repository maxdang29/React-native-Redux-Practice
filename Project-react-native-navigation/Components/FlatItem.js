import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class FlatItem extends Component {
  constructor(props) {
    super(props);
  }

  moveToDetailScreen = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'navigation.detail',
        passProps: {
          item: this.props.item,
        },
        options: {
          topBar: {
            title: {
              text: 'Pushed screen title',
            },
          },
        },
      },
    });
  };
  render() {
    const {item} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <TouchableOpacity
            style={{width: '100%'}}
            onPress={this.moveToDetailScreen}>
            <Image
              resizeMode="stretch"
              source={{uri: item.imageUrl}}
              style={{width: '100%', height: '100%', borderRadius: 7}}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.date}>{item.date.en}</Text>
        <Text style={styles.title}>{item.title}</Text>
        {/* <Text style={styles.subTitle}>{item.subtitle.en}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 150,
  },
  date: {
    color: 'red',
    fontSize: 22,
  },
  title: {
    color: 'black',
    fontSize: 30,
  },
  subTitle: {
    color: 'gray',
    fontSize: 20,
  },
});
