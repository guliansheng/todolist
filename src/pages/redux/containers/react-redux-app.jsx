import React from 'react';
import {connect} from 'react-redux';

import {increment, decrement, incrementAsync} from '../redux-js/actions';
import ReduxTest from '../test/redux-test';

export default connect(
  state => ({count: state}),
  {increment, decrement, incrementAsync}
)(ReduxTest);