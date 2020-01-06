import React, {Component} from 'react';
import {Text, View, FlatList, SafeAreaView} from 'react-native';
import EventItem from '../../Components/eventItem';
import {swipeData} from '../../utils/contains';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: swipeData,
    };
  }

  render() {
    const {data} = this.state;
    return (
      <View>
        <SafeAreaView>
          <FlatList
            data={swipeData}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => (
              <EventItem item={item} componentId={this.props.componentId} />
            )}
          />
        </SafeAreaView>
      </View>
    );
  }
}
