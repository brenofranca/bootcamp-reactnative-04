import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  TextInput,
  View,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FavoritesActions from '~/store/actions/favorites';

import styles from './styles';

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired,
    addFavoriteRequest: PropTypes.func.isRequired,
    favorites: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape),
      loading: PropTypes.bool,
      errorOnAdd: PropTypes.oneOfType([null, PropTypes.string])
    }).isRequired
  };

  static navigationOptions = {
    header: null
  };

  state = {
    repoNameInput: ''
  };

  componentDidMount() {}

  navigateToFavorites = () => {
    const { navigation } = this.props;

    navigation.navigate('Favorites');
  };

  addRepository = () => {
    const { repoNameInput } = this.state;
    const { addFavoriteRequest } = this.props;

    if (!repoNameInput) return;

    addFavoriteRequest(repoNameInput);

    this.setState({ repoNameInput: '' });
  };

  render() {
    const { repoNameInput } = this.state;
    const { favorites } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View style={styles.content}>
          <Text style={styles.title}>Gitmark</Text>

          <Text style={styles.description}>
            Comece adicionado alguns repositórios aos seus favoritos
          </Text>

          <View style={styles.form}>
            {!!favorites.errorOnAdd && (
              <Text style={styles.error}>{favorites.errorOnAdd}</Text>
            )}

            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="usuário/repositório"
              underlineColorAndroid="transparent"
              value={repoNameInput}
              onChangeText={text => this.setState({ repoNameInput: text })}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={this.addRepository}
              activeOpacity={0.6}
            >
              {favorites.loading ? (
                <ActivityIndicator size="small" style={styles.loading} />
              ) : (
                <Text style={styles.buttonText}>Adicionar aos favoritos</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            onPress={this.navigateToFavorites}
            activeOpacity={0.6}
          >
            <Text style={styles.footerLink}>
              meus favoritos ({favorites.data.length})
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoritesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
