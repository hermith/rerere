import * as React from 'react';
import { render } from 'react-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import Router from './components/router';
import './style/base.styl';

injectTapEventPlugin();

render(<Router compiler="TypeScript" framework="React" />, document.getElementById('app'));
