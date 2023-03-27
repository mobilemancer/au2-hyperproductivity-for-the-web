import { RouterConfiguration } from '@aurelia/router';
import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import * as reg from './globalRegistry';

Aurelia
  .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .register(reg)
  .app(MyApp)
  .start();
