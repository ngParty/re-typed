import * as React from 'react';
import { connect } from 'react-redux';
import greeter from './greeter';
const initAction = () => {
    return {
        type: 'ROOT_MOUNTED',
        payload: 42
    };
};
class Root extends React.Component {
    render() {
        return React.createElement("div", null, greeter('from Root component!'));
    }
    componentDidMount() {
        this.props.dispatch(initAction());
    }
}
export default connect()(Root);
