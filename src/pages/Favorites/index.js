import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
 View, Text, Image, FlatList 
} from 'react-native';

import { connect } from 'react-redux';

import styles from './styles';

class Favorites extends Component {
  static navigationOptions = {
    title: 'Meus Favoritos',
  };

  static propTypes = {
    favorites: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          full_name: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  };

  renderListItem = item => (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={{ uri: item.owner.avatar_url }} />
      <View style={styles.item}>
        <Text style={styles.name}>{item.full_name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  renderList = () => {
    const { favorites } = this.props;

    return (
      <FlatList
        style={styles.list}
        data={favorites.data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => this.renderListItem(item)}
      />
    );
  };

  render() {
    const { favorites } = this.props;

    return (
      <View style={styles.container}>
        {!favorites.data.length ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.empty}>Nenhum favorito adicionado</Text>
          </View>
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
});

export default connect(mapStateToProps)(Favorites);
