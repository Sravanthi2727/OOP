// all scripts
// --- 3D PARTICLE BACKGROUND ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg-canvas"),
  alpha: true, // Make canvas transparent
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// Create particle geometry
const particleCount = 5000;
const positions = new Float32Array(particleCount * 3);
for (let i = 0; i < particleCount * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 100;
}
const particlesGeometry = new THREE.BufferGeometry();
particlesGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(positions, 3)
);

// Create particle material
const particlesMaterial = new THREE.PointsMaterial({
  size: 0.05,
  color: 0x00ffff,
  blending: THREE.AdditiveBlending,
});

const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

// Mouse tracking for interaction
const mouse = new THREE.Vector2();
window.addEventListener("mousemove", (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Animate particles
  particles.rotation.x += 0.0001;
  particles.rotation.y += 0.0002;

  // Make particles react to mouse movement
  camera.position.x += (mouse.x * 5 - camera.position.x) * 0.02;
  camera.position.y += (mouse.y * 5 - camera.position.y) * 0.02;
  camera.lookAt(scene.position);

  renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// --- SCROLL FADE-IN ANIMATION ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      // Optional: remove class to re-animate on scroll up
      // entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// --- HAMBURGER MENU ---
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navIcon = hamburger.querySelector("i");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Toggle icon between bars and times (X)
  if (navLinks.classList.contains("active")) {
    navIcon.classList.remove("fa-bars");
    navIcon.classList.add("fa-times");
  } else {
    navIcon.classList.remove("fa-times");
    navIcon.classList.add("fa-bars");
  }
});
