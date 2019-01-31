import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  description: {
    color: colors.regular,
    fontSize: 11,
    lineHeight: 15,
  },
  empty: {
    color: colors.white,
    fontSize: 20,
  },
  emptyContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    height: 50,
    width: 50,
  },
  item: {
    flex: 1,
    marginLeft: metrics.baseMargin,
  },
  itemContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: metrics.baseMargin,
    padding: metrics.basePadding - 5,
  },
  list: {
    padding: metrics.basePadding,
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 2,
  },
});

export default styles;
