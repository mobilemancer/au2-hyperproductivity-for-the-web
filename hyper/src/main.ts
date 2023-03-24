import Aurelia from 'aurelia';
import { RouterConfiguration } from '@aurelia/router';
import { MyApp } from './my-app';

import * as personsModule from "./pages/4star-wars-persons/persons-registry";
import * as filmsModule from "./pages/5star-wars-films/films-registry";
import * as gamesModule from "./pages/6star-wars-games/games-registry";

Aurelia
  .register(personsModule)
  .register(filmsModule)
  .register(gamesModule)
  .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(MyApp)
  .start();
