import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';

export default class World {
    constructor(scene, camera, renderer, controls, stats, simulatuon) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.controls = controls;
        this.stats = stats;
        this.simulation = simulatuon;
    } 

    init() {
        this.scene = new THREE.Scene();

        
        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
        this.camera.position.set(0, 0, 800);
        this.camera.lookAt(0, 0, 0);

        const canvas = document.getElementById('display');

        this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x192227);
        document.body.appendChild(this.renderer.domElement);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        this.stats = new Stats();
        document.body.appendChild(this.stats.dom);

        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        }
        , false);

    }

    loadSimulation(simulation) {
        this.simulation = simulation;
    }

    animate() {
        this.stats.update();
        this.controls.update();
        this.renderer.render(this.scene, this.camera);

        if (this.simulation) {   
            this.simulation.update();
        }

        window.requestAnimationFrame(this.animate.bind(this));
    }


}