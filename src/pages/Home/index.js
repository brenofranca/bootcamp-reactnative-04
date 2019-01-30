import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import api from '~/services/api';

// import { colors } from '~/styles';

import {
  Text,
  TextInput,
  View,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FavoritesActions from '~/store/actions/favorites';

import styles from './styles';

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    addFavoriteRequest: PropTypes.func.isRequired,
    favoritesCount: PropTypes.number.isRequired,
  };

  static navigationOptions = {
    header: null,
  };

  state = {
    repoNameInput: 'facebook/react',
  };

  componentDidMount() {}

  navigateToFavorites = () => {
    const { navigation } = this.props;

    navigation.navigate('Favorites');
  };

  addRepository = () => {
    const { repoNameInput } = this.state;
    const { addFavoriteRequest } = this.props;

    addFavoriteRequest(repoNameInput);
  };

  render() {
    const { repoNameInput } = this.state;
    const { favoritesCount } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View style={styles.content}>
          <Text style={styles.title}>Gitmark</Text>

          <Text style={styles.description}>
            Comece adicionado alguns repositórios aos seus favoritos
          </Text>

          <View style={styles.form}>
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
              <Text style={styles.buttonText}>Adicionar aos favoritos</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            onPress={this.navigateToFavorites}
            activeOpacity={0.6}
          >
            <Text style={styles.footerLink}>
              meus favoritos (
{favoritesCount}
)
</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  favoritesCount: state.favorites.length,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoritesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
