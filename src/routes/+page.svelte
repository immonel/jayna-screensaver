<script lang="ts">
  import { onMount } from 'svelte';

  let x: number = 0;
  let y: number = 0;
  let dx: number = 2;
  let dy: number = 2;
  let width: number;
  let height: number;
  let scaleFactor: number = 1;
  let speedFactor: number = 1;
  let imageIndex: number = 0; // Current image index
  let loadedImages: number = 0; // To track the number of images loaded
  let imagesReady: boolean = false; // Flag to check if all images are preloaded
  let animationFrameId: number; // To hold the requestAnimationFrame ID
  const imageSources: string[] = [
    'jayna-red.svg',
    'jayna-blue.svg',
    'jayna-yellow.svg',
    'jayna-green.svg'
  ]; // Array of image sources
  const preloadedImages: HTMLImageElement[] = []; // Array to store preloaded image elements

  onMount(() => {
    const image = document.querySelector('img') as HTMLImageElement;
    preloadImages();
    window.addEventListener('resize', checkImageBounds);

    function preloadImages() {
      for (let src of imageSources) {
        const img = new Image();
        img.onload = () => {
          loadedImages++;
          if (loadedImages === imageSources.length) {
            imagesReady = true;
            image.src = imageSources[imageIndex]; // Set initial image src
            setupImage(); // Start the initial setup
          }
        };
        img.src = src;
        preloadedImages.push(img);
      }
    }

    function setupImage() {
      if (!imagesReady) return; // Prevent setup if images are not ready

      // Cancel the previous animation frame request
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      // Recalculate width and height based on the image's natural dimensions
      width = image.naturalWidth * scaleFactor;
      height = image.naturalHeight * scaleFactor;
      image.width = width;
      image.height = height;
      animate(); // Start the animation loop
    }

    function checkImageBounds() {
      if (x + width > window.innerWidth) {
        x = window.innerWidth - width;
      }
      if (x < 0) {
        x = 0;
      }
      if (y + height > window.innerHeight) {
        y = window.innerHeight - height;
      }
      if (y < 0) {
        y = 0;
      }
    }

    function animate(): void {
        let adjustedDx = dx * speedFactor;
        let adjustedDy = dy * speedFactor;

        if (x + adjustedDx > window.innerWidth - width || x + adjustedDx < 0) {
          dx = -dx;
          changeImage(); // Change image on horizontal collision
        }
        if (y + adjustedDy > window.innerHeight - height || y + adjustedDy < 0) {
          dy = -dy;
          changeImage(); // Change image on vertical collision
        }

        x += adjustedDx;
        y += adjustedDy;

        image.style.left = `${x}px`;
        image.style.top = `${y}px`;

        animationFrameId = requestAnimationFrame(animate);
    }

    function changeImage() {
      // Increment image index and wrap around if at the end of the array
      imageIndex = (imageIndex + 1) % imageSources.length;
      image.src = imageSources[imageIndex];
    }
  });
</script>

<style>
  img {
    position: absolute;
  }
</style>

<img alt="Jayna logo">