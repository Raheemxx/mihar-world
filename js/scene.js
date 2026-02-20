
let scene, camera, renderer;
let mouseX = 0;

init();
animate();

function init() {
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 10, 100);

    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 8;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x222222);
    scene.add(ambientLight);

    const redLight = new THREE.PointLight(0xff0000, 3, 20);
    redLight.position.set(-1, 1.5, 2);
    scene.add(redLight);

    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 5000; i++) {
        vertices.push(
            THREE.MathUtils.randFloatSpread(100),
            THREE.MathUtils.randFloatSpread(100),
            THREE.MathUtils.randFloatSpread(100)
        );
    }

    geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(vertices, 3)
    );

    const material = new THREE.PointsMaterial({
        color: 0xff0000,
        size: 0.1
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    window.addEventListener("mousemove", (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    });

    window.addEventListener("resize", onResize);
}

function animate() {
    requestAnimationFrame(animate);

    camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
}

function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
