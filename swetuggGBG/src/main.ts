import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import { RouterConfiguration } from '@aurelia/router';
import * as globalRegistry from './globalRegistry';
Aurelia
  .register(globalRegistry)
  .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(MyApp)
  .start();
