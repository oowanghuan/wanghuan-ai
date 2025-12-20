<template>
  <div class="page" ref="pageEl">
    <!-- Three.js 渲染挂载点 -->
    <div ref="mountEl" class="stage" />

    <!-- 顶部文案层 -->
    <div class="overlay">
      <div class="brand">
        <div class="title">Huan Wang</div>
        <div class="subtitle">Brand Globalization × AI Coding Systems</div>
      </div>

      <div class="actions">
        <router-link class="btn primary" to="/blog">Enter</router-link>
        <a class="btn ghost" href="https://github.com/oowanghuan" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>

  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import * as THREE from "three";

const mountEl = ref(null);
const pageEl = ref(null);

let renderer = null;
let scene = null;
let camera = null;

let points = null;
let geometry = null;
let material = null;

let raf = 0;
const clock = new THREE.Clock();

const state = {
  width: 0,
  height: 0,
  dpr: 1,
  mouseNDC: new THREE.Vector2(999, 999),
  mouseWorld: new THREE.Vector3(0, 0, 0),
  pointerDown: false,
};

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function initThree() {
  if (!mountEl.value) return;

  state.width = mountEl.value.clientWidth;
  state.height = mountEl.value.clientHeight;
  state.dpr = clamp(window.devicePixelRatio || 1, 1, 2);

  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0a1628, 0.06);

  camera = new THREE.PerspectiveCamera(55, state.width / state.height, 0.1, 200);
  camera.position.set(0, 0, 20);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(state.dpr);
  renderer.setSize(state.width, state.height);
  renderer.setClearColor(0x000000, 0);
  mountEl.value.appendChild(renderer.domElement);

  // ===== 粒子几何 =====
  const COUNT = 35000;
  const positions = new Float32Array(COUNT * 3);
  const seeds = new Float32Array(COUNT);
  const sizes = new Float32Array(COUNT);

  for (let i = 0; i < COUNT; i++) {
    const r = Math.pow(Math.random(), 0.55) * 26;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);

    positions[i * 3 + 0] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    seeds[i] = Math.random() * 10.0;
    sizes[i] = 0.6 + Math.random() * 1.6;
  }

  geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));
  geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));

  // ===== 青色渐变粒子材质 =====
  material = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector3(999, 999, 999) },
      uPulse: { value: 0 },
      uPixelRatio: { value: state.dpr },
      uBaseSize: { value: 1.2 },
    },
    vertexShader: `
      uniform float uTime;
      uniform vec3 uMouse;
      uniform float uPulse;
      uniform float uPixelRatio;
      uniform float uBaseSize;

      attribute float aSeed;
      attribute float aSize;

      varying float vAlpha;
      varying float vDist;
      varying float vSeed;

      float hash(float n){ return fract(sin(n)*43758.5453123); }
      float noise(vec3 x){
        vec3 p = floor(x);
        vec3 f = fract(x);
        f = f*f*(3.0-2.0*f);
        float n = p.x + p.y*57.0 + 113.0*p.z;
        return mix(mix(mix(hash(n+0.0), hash(n+1.0), f.x),
                       mix(hash(n+57.0), hash(n+58.0), f.x), f.y),
                   mix(mix(hash(n+113.0), hash(n+114.0), f.x),
                       mix(hash(n+170.0), hash(n+171.0), f.x), f.y), f.z);
      }

      void main() {
        vec3 pos = position;

        // 呼吸漂浮
        float t = uTime * 0.3 + aSeed;
        float n = noise(pos * 0.1 + vec3(t));
        pos += normalize(pos) * (n - 0.5) * 1.2;

        // 鼠标扰动 - 增强效果
        float d = distance(pos, uMouse);
        float influence = smoothstep(12.0, 0.0, d);
        vec3 dir = normalize(pos - uMouse);
        pos += dir * influence * (2.0 + 1.2*sin(uTime * 2.0 + aSeed));

        // 点击脉冲
        float pulse = uPulse * smoothstep(28.0, 0.0, length(pos));
        pos += normalize(pos) * pulse * 3.0;

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;

        float size = (aSize * uBaseSize) * (24.0 / -mvPosition.z);
        gl_PointSize = size * uPixelRatio;

        vAlpha = smoothstep(35.0, 6.0, length(pos)) * 0.92;
        vDist = length(pos) / 26.0;
        vSeed = aSeed;
      }
    `,
    fragmentShader: `
      precision highp float;
      varying float vAlpha;
      varying float vDist;
      varying float vSeed;

      void main() {
        vec2 uv = gl_PointCoord - 0.5;
        float r = length(uv);
        float alpha = smoothstep(0.5, 0.08, r) * vAlpha;

        float core = smoothstep(0.12, 0.0, r);

        // 星云多色渐变
        vec3 purple = vec3(0.545, 0.361, 0.965);    // #8B5CF6 紫色
        vec3 blue = vec3(0.231, 0.510, 0.965);      // #3B82F6 蓝色
        vec3 cyan = vec3(0.024, 0.714, 0.831);      // #06B6D4 青色
        vec3 pink = vec3(0.925, 0.282, 0.600);      // #EC4899 粉色
        vec3 white = vec3(0.95, 0.95, 1.0);         // 亮心

        // 根据 seed 和距离混合颜色，创造星云效果
        float colorMix = fract(vSeed * 2.718);
        vec3 baseColor;
        if (colorMix < 0.35) {
          baseColor = mix(purple, blue, colorMix / 0.35);
        } else if (colorMix < 0.65) {
          baseColor = mix(blue, cyan, (colorMix - 0.35) / 0.3);
        } else if (colorMix < 0.85) {
          baseColor = mix(cyan, purple, (colorMix - 0.65) / 0.2);
        } else {
          baseColor = mix(purple, pink, (colorMix - 0.85) / 0.15);
        }

        // 距离影响：中心更亮更青，外围更紫
        baseColor = mix(baseColor, purple * 0.7, vDist * 0.4);

        // 亮心效果
        vec3 color = mix(baseColor, white, core * 0.7);
        color *= 0.85 + core * 0.5;

        gl_FragColor = vec4(color, alpha);
      }
    `,
  });

  points = new THREE.Points(geometry, material);
  scene.add(points);

  points.rotation.x = -0.12;
  updateMouseWorld();
}

function updateMouseWorld() {
  if (!camera) return;

  const ndc = state.mouseNDC.clone();
  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(ndc, camera);

  const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  const hit = new THREE.Vector3();
  raycaster.ray.intersectPlane(plane, hit);

  if (!Number.isFinite(hit.x)) {
    state.mouseWorld.set(999, 999, 999);
  } else {
    state.mouseWorld.copy(hit);
  }

  if (material) material.uniforms.uMouse.value.copy(state.mouseWorld);
}

function animate() {
  raf = requestAnimationFrame(animate);
  if (!renderer || !scene || !camera || !material || !points) return;

  const t = clock.getElapsedTime();
  material.uniforms.uTime.value = t;

  material.uniforms.uPulse.value *= 0.9;

  points.rotation.y = Math.sin(t * 0.15) * 0.15;
  points.rotation.z = Math.cos(t * 0.1) * 0.08;

  renderer.render(scene, camera);
}

function resize() {
  if (!mountEl.value || !renderer || !camera) return;

  state.width = mountEl.value.clientWidth;
  state.height = mountEl.value.clientHeight;
  state.dpr = clamp(window.devicePixelRatio || 1, 1, 2);

  renderer.setPixelRatio(state.dpr);
  renderer.setSize(state.width, state.height);

  camera.aspect = state.width / state.height;
  camera.updateProjectionMatrix();

  if (material) material.uniforms.uPixelRatio.value = state.dpr;
  updateMouseWorld();
}

// 改用 window 监听鼠标事件，解决 overlay 遮挡问题
function onPointerMove(e) {
  if (!mountEl.value) return;
  const rect = mountEl.value.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
  state.mouseNDC.set(x, y);
  updateMouseWorld();
}

function onPointerLeave() {
  state.mouseNDC.set(999, 999);
  state.mouseWorld.set(999, 999, 999);
  if (material) material.uniforms.uMouse.value.set(999, 999, 999);
}

function onPointerDown() {
  state.pointerDown = true;
  if (material) material.uniforms.uPulse.value = 1.0;
}

function cleanup() {
  cancelAnimationFrame(raf);

  if (renderer && mountEl.value?.contains(renderer.domElement)) {
    mountEl.value.removeChild(renderer.domElement);
  }

  geometry?.dispose();
  material?.dispose();
  renderer?.dispose();

  points = null;
  geometry = null;
  material = null;
  renderer = null;
  scene = null;
  camera = null;
}

onMounted(() => {
  initThree();
  animate();

  window.addEventListener("resize", resize, { passive: true });
  // 改用 window 监听，确保不被 overlay 挡住
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  window.addEventListener("pointerdown", onPointerDown, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", resize);
  window.removeEventListener("pointermove", onPointerMove);
  window.removeEventListener("pointerdown", onPointerDown);
  cleanup();
});
</script>

<style scoped>
.page {
  min-height: 100vh;
  background:
    /* 星云光晕层 */
    radial-gradient(ellipse 1200px 800px at 30% 25%, rgba(139, 92, 246, 0.18), transparent 55%),
    radial-gradient(ellipse 1000px 700px at 70% 35%, rgba(59, 130, 246, 0.15), transparent 50%),
    radial-gradient(ellipse 800px 500px at 55% 70%, rgba(168, 85, 247, 0.12), transparent 45%),
    radial-gradient(ellipse 600px 400px at 20% 80%, rgba(6, 182, 212, 0.10), transparent 40%),
    radial-gradient(ellipse 500px 350px at 85% 75%, rgba(236, 72, 153, 0.08), transparent 40%),
    /* 深空背景 */
    linear-gradient(180deg, #0c0a1d 0%, #1a1333 40%, #0f172a 100%);
  color: rgba(255, 255, 255, 0.92);
}

.stage {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.overlay {
  position: relative;
  z-index: 2;
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 56px 20px;
  pointer-events: none; /* 让鼠标事件穿透到下层 */
}

.brand {
  text-align: center;
  max-width: 920px;
  padding: 28px 36px;
  border-radius: 24px;
  backdrop-filter: blur(16px);
  background: linear-gradient(
    135deg,
    rgba(139, 92, 246, 0.12),
    rgba(59, 130, 246, 0.08),
    rgba(168, 85, 247, 0.06)
  );
  border: 1px solid rgba(139, 92, 246, 0.25);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.4),
    0 0 80px rgba(139, 92, 246, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  pointer-events: auto;
}

.title {
  font-size: 58px;
  letter-spacing: -0.02em;
  font-weight: 700;
  line-height: 1.1;
  background: linear-gradient(135deg, #a78bfa 0%, #818cf8 30%, #06b6d4 70%, #22d3ee 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 40px rgba(139, 92, 246, 0.3);
}

.subtitle {
  margin-top: 14px;
  font-size: 18px;
  opacity: 0.85;
  line-height: 1.5;
  color: rgba(196, 181, 253, 0.9);
}

.actions {
  margin-top: 20px;
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
  pointer-events: auto; /* 恢复交互 */
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  border-radius: 14px;
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
  transition: all 250ms ease;
}

.btn.primary {
  color: #ffffff;
  background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 50%, #3b82f6 100%);
  border: 1px solid rgba(139, 92, 246, 0.5);
  box-shadow:
    0 4px 16px rgba(139, 92, 246, 0.35),
    0 0 30px rgba(99, 102, 241, 0.2);
}

.btn.primary:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow:
    0 6px 24px rgba(139, 92, 246, 0.45),
    0 0 40px rgba(99, 102, 241, 0.3);
}

.btn.ghost {
  color: rgba(167, 139, 250, 0.95);
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.3);
}

.btn.ghost:hover {
  transform: translateY(-2px);
  background: rgba(139, 92, 246, 0.18);
  border-color: rgba(139, 92, 246, 0.5);
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.2);
}

</style>
