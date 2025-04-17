import { Component, ElementRef, OnInit, OnDestroy, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-3d-car',
  templateUrl: './3d-car.component.html',
  styleUrls: ['./3d-car.component.scss'],
  standalone: true
})
export class Car3dComponent implements OnInit, OnDestroy {
  @ViewChild('rendererContainer') rendererContainer!: ElementRef<HTMLDivElement>;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private controls!: OrbitControls;
  private car!: THREE.Group;
  private animationFrameId: number | null = null;

  constructor() { }

  ngOnInit(): void {
    // We'll initialize the scene after the view is initialized
  }

  ngAfterViewInit(): void {
    this.initScene();
    this.createCar();
    this.animate();
  }

  ngOnDestroy(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    // Clean up resources
    this.renderer.dispose();
    this.scene.clear();
  }

  private initScene(): void {
    const container = this.rendererContainer.nativeElement;
    
    // Create scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);

    // Create camera
    const aspect = container.clientWidth / container.clientHeight;
    this.camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    this.camera.position.set(0, 2, 5);

    // Create renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(this.renderer.domElement);

    // Add controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.enableZoom = false; // Disable zooming for better UX in the small container

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    this.scene.add(directionalLight);

    // Handle container resize
    const resizeObserver = new ResizeObserver(() => {
      this.onContainerResize();
    });
    resizeObserver.observe(container);
  }

  private createCar(): void {
    this.car = new THREE.Group();

    // Create car body
    const bodyGeometry = new THREE.BoxGeometry(2, 0.5, 4);
    const bodyMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xff0000,
      specular: 0x111111,
      shininess: 100
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    this.car.add(body);

    // Add cabin
    const cabinGeometry = new THREE.BoxGeometry(1.5, 0.8, 2);
    const cabinMaterial = new THREE.MeshPhongMaterial({
      color: 0x333333,
      specular: 0x111111,
      shininess: 100
    });
    const cabin = new THREE.Mesh(cabinGeometry, cabinMaterial);
    cabin.position.y = 0.65;
    cabin.position.z = 0.2;
    this.car.add(cabin);

    // Create wheels
    const wheelGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.2, 32);
    const wheelMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x333333,
      specular: 0x111111,
      shininess: 100
    });

    const wheelPositions = [
      { x: -0.8, y: -0.3, z: 1.5 },
      { x: 0.8, y: -0.3, z: 1.5 },
      { x: -0.8, y: -0.3, z: -1.5 },
      { x: 0.8, y: -0.3, z: -1.5 }
    ];

    wheelPositions.forEach(pos => {
      const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
      wheel.position.set(pos.x, pos.y, pos.z);
      wheel.rotation.z = Math.PI / 2;
      this.car.add(wheel);
    });

    this.scene.add(this.car);
  }

  private onContainerResize(): void {
    const container = this.rendererContainer.nativeElement;
    const width = container.clientWidth;
    const height = container.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  private animate(): void {
    this.animationFrameId = requestAnimationFrame(() => this.animate());
    
    // Rotate the car slowly
    if (this.car) {
      this.car.rotation.y += 0.01;
    }
    
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
} 