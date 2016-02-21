import * as React from 'react';
import greeter from '../greeter';

const style = require('./style.css');

interface IWelcomeBarProps {
  name: string;
}

export default class WelcomeBar extends React.Component<IWelcomeBarProps, any> {
  render() {
    return (
      <div className={style.normal}>
        {greeter(this.props.name)}
      </div>
    );
  }
}
