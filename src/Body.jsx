import * as THREE from 'three';

export default class Body {
    constructor(mass, pos_vec, vel_vec) {

        this.mass = mass;
        this.pos_vec = pos_vec;
        this.vel_vec = vel_vec;


        this.radius = Math.pow(this.mass, 1);
        this.geometry = new THREE.SphereGeometry(this.radius, 32, 32);
        this.material = new THREE.MeshBasicMaterial({ color: 0x80cbc4 });

    
        

        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(pos_vec[0], pos_vec[1], pos_vec[2]);

    }

    return_vec() {
        return this.pos_vec.concat(this.vel_vec);
    }

    draw(scene) {
        scene.add(this.mesh);
    }

    remove(scene) {
        this.alive = false
        scene.remove(this.mesh);
    }


    


}