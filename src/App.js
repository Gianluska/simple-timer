import { Timer } from './Timer.js';

const App = {
  init() {
    const time = 25 * 60;
    Timer.init(time);
  }
}

export { App };