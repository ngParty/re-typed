/// <reference path="../typings/tsd.d.ts" />
import * as React from 'react';
import greeter from './greeter';

export default class MyComponent extends React.Component<{}, {}> {
  render(): React.ReactElement<{}> {
    return <div>{greeter('from MyComponent!')}</div>;
  }
}