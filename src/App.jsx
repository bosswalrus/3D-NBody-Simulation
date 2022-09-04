import { useEffect } from 'react';

import World  from './World';
import Simulation from './Simulation';

let iter = 0 
function App() {
  useEffect(() => {
      
    const world = new World();
    world.init();
    const simulation = new Simulation(world.scene, 1000);
    world.loadSimulation(simulation);
    simulation.init();

    world.animate();
  

  }, []);

  return (
    <div>
      <canvas id="display"></canvas>
	</div>
  );
}

export default App;