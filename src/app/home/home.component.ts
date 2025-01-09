import {AfterViewInit, Component} from '@angular/core';
import {Router, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    RouterLinkActive
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  constructor(private router: Router) {
  }

  navigateToPage(path: string): void {
    this.router.navigate([path]);
  }

  ngAfterViewInit() {
    this.createRotatingPixelGlobe();
  }

  createRotatingPixelGlobe() {
    if (typeof document !== 'undefined') {
      // Access and manipulate the DOM here
      const canvas: HTMLCanvasElement = document.getElementById('globeCanvas') as HTMLCanvasElement;

      // const canvas = document.getElementById('globeCanvas') as HTMLCanvasElement;
      const ctx = canvas.getContext('2d')!;

      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        globeCenterX = canvas.width / 2;
        globeCenterY = canvas.height / 2;
      };

      let globeCenterX: number = canvas.width / 2;
      let globeCenterY: number = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height); // Adjust globe size relative to screen size

      const pixels: any[] = [];
      let rotation = 0;
      const maxRotationSpeed = 0.0008;

      // Generate pixel points
      for (let lat = -90; lat <= 90; lat += 5) {
        for (let lon = -180; lon <= 180; lon += 5) {
          const theta = (lon * Math.PI) / 180;
          const phi = ((lat + 90) * Math.PI) / 180;

          const x = radius * Math.sin(phi) * Math.cos(theta);
          const y = radius * Math.sin(phi) * Math.sin(theta);
          const z = radius * Math.cos(phi);

          pixels.push({x, y, z});
        }
      }

      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        rotation += maxRotationSpeed;

        const cosRotation = Math.cos(rotation);
        const sinRotation = Math.sin(rotation);

        for (const pixel of pixels) {
          const x = pixel.x * cosRotation - pixel.z * sinRotation;
          const z = pixel.x * sinRotation + pixel.z * cosRotation;

          const perspective = canvas.width / (canvas.width + z);
          const px = globeCenterX + x * perspective;
          const py = globeCenterY + pixel.y * perspective;

          ctx.beginPath();
          ctx.arc(px, py, 2 * perspective, 0, Math.PI * 2);
          ctx.fillStyle = 'grey';
          ctx.fill();
        }

        requestAnimationFrame(draw);
      };

      // Initial setup
      resizeCanvas();
      // Listen for window resize
      window.addEventListener('resize', resizeCanvas);
      draw();
    }
  }
}
