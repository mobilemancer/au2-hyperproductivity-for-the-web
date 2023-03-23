import Aurelia from 'aurelia';
import { RouterConfiguration } from '@aurelia/router';
import { MyApp } from './my-app';

import * as personsModule from "./pages/4star-wars-persons/persons-registry";
import * as filmsModule from "./pages/5star-wars-films/films-registry";

Aurelia
  .register(personsModule)
  .register(filmsModule)
  .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(MyApp)
  .start();
