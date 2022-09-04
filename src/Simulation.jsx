import Body from './Body';
import * as THREE from 'three';
import { randomNum, max } from './Math';

export default class Simulation {

    constructor(scene, N) {
        this.N = N;
        this.scene = scene;
        this.bodies = [];
        this.dim = 3;
        this.quant_vec = [];
        this.mass_vec = [];
        this.G = 6.67408;

        this.time = 0;
        this.dt = 1/60;

        this.clock = new THREE.Clock();

        this.X_MIN = -200;
        this.X_MAX = 200;
        this.Y_MIN = -200;
        this.Y_MAX = 200;
        this.Z_MIN = -200;
        this.Z_MAX = 200;

        this.VX_MIN = -10;
        this.VX_MAX = 10;
        this.VY_MIN = -10;
        this.VY_MAX = 10;
        this.VZ_MIN = -10;
        this.VZ_MAX = 10;
        
        this.MASS_MIN = 0.8;
        this.MASS_MAX = 8.0;
        this.iter = 0;
        this.dampening = 1e-6;
    }

    init() {
        //let sunMass =  1000;
        //let Sun = new Body(
        //    sunMass,
        //    [0, 0, 0],
        //    [0, 0, 0],
        //)
//
        //this.bodies.push(Sun);
        //Sun.draw(this.scene);

        for (let i = 0; i < this.N; i++) {
            const theta = randomNum(0, 2 * Math.PI);
            const phi = randomNum(0, Math.PI);
//
            const x = 200*Math.sin(theta) * Math.cos(phi);
            const y = 200*Math.sin(theta) * Math.sin(phi);
            const z = 200*Math.cos(theta);
            const vx = randomNum(this.VX_MIN, this.VX_MAX);
            const vy = randomNum(this.VY_MIN, this.VY_MAX);
            const vz = randomNum(this.VZ_MIN, this.VZ_MAX);
            const mass = randomNum(this.MASS_MIN, this.MASS_MAX)
            //const x = randomNum(this.X_MIN, this.X_MAX);
            //const y = randomNum(this.Y_MIN, this.Y_MAX);
            //const z = randomNum(this.Z_MIN, this.Z_MAX);
            //const vx = randomNum(this.VX_MIN, this.VX_MAX);
            //const vy = randomNum(this.VY_MIN, this.VY_MAX);
            //const vz = randomNum(this.VZ_MIN, this.VZ_MAX);
            //const mass = randomNum(this.MASS_MIN, this.MASS_MAX);

            const body = new Body(
                mass,
                [x, y, z],
                [vx, vy, vz]
            );
            this.bodies.push(body);
            body.draw(this.scene);
        }

        this.quant_vec = [].concat(...this.bodies.map(body => body.return_vec()));
        this.mass_vec = [].concat(...this.bodies.map(body => body.mass));
        
    }
    

    rk4(t, dt) {
        const k1 = this.solve(t, this.quant_vec).map((val) => val * dt);
        const k2 = this.solve(t + 0.5 * dt, this.quant_vec.map((quant, i) => quant + 0.5 * k1[i])).map((val) => val * dt);
        const k3 = this.solve(t + 0.5 * dt, this.quant_vec.map((quant, i) => quant + 0.5 * k2[i])).map((val) => val * dt);
        const k4 = this.solve(t + dt, this.quant_vec.map((quant, i) => quant + k3[i])).map((val) => val * dt);


        let _2k2 = k2.map((val) => val * 2);
        let _2k3 = k3.map((val) => val * 2);

        let k_sum = k1.map((val, i) => val + _2k2[i] + _2k3[i] + k4[i]);
        let k_div = k_sum.map((val) => val / 6);

        return this.quant_vec.map((quant, i) => quant + k_div[i]);
    }

    solve(t, y) {
        let N = y.length/6;
        
        let solved_vector = new Array(y.length).fill(0);
       
        for (let i = 0; i < N; i++) {
            let ioffset = i * 6;
            for (let j = 0; j < N; j++) {
                let joffset = j * 6;
                solved_vector[ioffset] = y[ioffset + 3]
                solved_vector[ioffset + 1] = y[ioffset + 4]
                solved_vector[ioffset + 2] = y[ioffset + 5]
                

                if (i != j) {
                    let dx = y[ioffset] - y[joffset];
                    let dy = y[ioffset + 1] - y[joffset + 1];
                    let dz = y[ioffset + 2] - y[joffset + 2];
                    
                    let r = Math.sqrt(dx * dx + dy * dy + dz * dz);
                    let ax = (-this.G * this.mass_vec[j] * dx) / (r * r + this.dampening) ;
                    let ay = (-this.G * this.mass_vec[j] * dy) / (r * r + this.dampening) ;
                    let az = (-this.G * this.mass_vec[j] * dz) / (r * r + this.dampening) ;


                    solved_vector[ioffset + 3] += ax;
                    solved_vector[ioffset + 4] += ay;
                    solved_vector[ioffset + 5] += az;
                }
            }

        }
        return solved_vector;
    }

    update() {
        this.dt = this.clock.getDelta();
        
        let y_new = this.rk4(0, this.dt); // positions and velocities of the bodies
        for (let i = 0; i < this.N; i++) {
            let ioffset = i * 6;
            let body = this.bodies[i];
            if (body) {
                this.bodies[i].pos_vec = [y_new[ioffset], y_new[ioffset + 1], y_new[ioffset + 2]];
                this.bodies[i].vel_vec = [y_new[ioffset + 3], y_new[ioffset + 4], y_new[ioffset + 5]];
                this.bodies[i].mesh.position.set(this.bodies[i].pos_vec[0], this.bodies[i].pos_vec[1], this.bodies[i].pos_vec[2]);
            }
            
           
            
        }
        this.quant_vec = [].concat(...this.bodies.map(body => body.return_vec()))
        this.iter += 1;
        console.log("Iteration: ", this.iter);
    }

}   