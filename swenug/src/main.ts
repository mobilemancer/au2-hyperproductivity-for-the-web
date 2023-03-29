import { RouterConfiguration } from '@aurelia/router';
import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import * as globalRegistry from "./globalRegistry";

Aurelia
  .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .register(globalRegistry)
  .app(MyApp)
  .start();
