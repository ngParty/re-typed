import * as React from 'react';
import { IDispatch } from 'redux';
import { connect } from 'react-redux';
import WelcomeBar from '../components/WelcomeBar';

const initAction = () => {
  return {
    type: 'ROOT_MOUNTED',
    payload: 42
  };
};

interface RootProps {
  dispatch: IDispatch;
}

export class Root extends React.Component<RootProps, void> {

  render() {
    return (
      <div>
        <WelcomeBar name={'Re-typed'}/>
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch(initAction());
  }
}

export default connect()(Root);
