import * as React from 'react';
import * as TestUtils from 'react-addons-test-utils';
import { Root } from '../src/containers/Root';
const expect = chai.expect;

describe('Root', () => {
  it('should render', () => {
    const dispatch = action => action; // mimic the IDispatch
    const renderer = TestUtils.createRenderer();
    renderer.render(<Root dispatch={ dispatch } />);
    const result = renderer.getRenderOutput();
    expect(result).to.be.ok;
  });
});
