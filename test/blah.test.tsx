import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Overlay } from '../stories/Overlay.stories';

describe('Overlay', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Overlay />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
