// @flow

import * as React from 'react';
import {View, Platform, StyleSheet} from 'react-native';

import {WHITE, LIGHT_GREY} from '../constants/colors';

type Props = {
  style?: Object | Array<?Object>;
  color?: string;
  children: string | React.Node;
};

function Card(props: Props) {
  let {style, color, children} = props;
  let cardStyle = [
    styles.container,
    styles.shadow,
    style && style,
    color && {backgroundColor: color},
  ];
  return <View style={cardStyle}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    padding: 10,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: LIGHT_GREY,
    alignSelf: 'stretch',
    backgroundColor: WHITE,
  },
  shadow: Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 1,
    },
    android: {
      elevation: 4,
    },
  }),
});

export default Card;
