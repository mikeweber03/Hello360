import {AppRegistry} from 'react-360';

import WorldView from './views/viewWorld';
import PeriodicTable from './views/viewPeriodicTable';
import SelectedElement from './views/viewSelectedElement';
import ViewBohrDiagram from './views/viewBohrDiagram';
import * as Store from './store';
Store.initialize();

AppRegistry.registerComponent('WorldView', () => WorldView);
AppRegistry.registerComponent('PeriodicTable', () => PeriodicTable);
AppRegistry.registerComponent('SelectedElement', () => SelectedElement);
AppRegistry.registerComponent('ViewBohrDiagram', () => ViewBohrDiagram);
