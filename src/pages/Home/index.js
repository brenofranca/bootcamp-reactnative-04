import React, { Component } from 'react';
// import PropTypes from 'prop-types';
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

import styles from './styles';

class Home extends Component {
  static propTypes = {};

  static navigationOptions = {
    header: null,
  };

  state = {};

  componentDidMount() {}

  navigateToFavorites = () => {
    const { navigation } = this.props;

    navigation.navigate('Favorites');
  };

  render() {
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
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => {}}
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
            <Text style={styles.footerLink}>meus favoritos (0)</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;
