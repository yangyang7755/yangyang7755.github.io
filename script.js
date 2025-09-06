// Brain region data with personal information
const brainData = {
    prefrontal: {
        title: "Prefrontal Cortex - Planning & Sports",
        content: `
            <h3>🏃‍♂️ Sports & Physical Activities</h3>
            <p>The prefrontal cortex is responsible for planning, decision-making, and motor control. Here's where my love for sports and physical activities lives!</p>
            
            <h4>My Sports Journey:</h4>
            <ul>
                <li><strong>Cycling:</strong> Passionate road cyclist who loves exploring new routes and challenging climbs</li>
                <li><strong>Running:</strong> Completed several marathons and enjoy trail running</li>
                <li><strong>Swimming:</strong> Triathlon enthusiast and open water swimmer</li>
                <li><strong>Rock Climbing:</strong> Both indoor and outdoor climbing adventures</li>
            </ul>
            
            <h4>Recent Achievements:</h4>
            <ul>
                <li>Completed 100km cycling challenge</li>
                <li>Personal best marathon time: 3:45</li>
                <li>Climbed 5.10a routes outdoors</li>
            </ul>
            
            <div class="gallery">
                <img src="https://images.unsplash.com/photo-1544191696-102dbdaeeaa5?w=300&h=200&fit=crop" alt="Cycling">
                <img src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=300&h=200&fit=crop" alt="Running">
                <img src="https://images.unsplash.com/photo-1530549387789-4c1017266635?w=300&h=200&fit=crop" alt="Climbing">
            </div>
        `
    },
    occipital: {
        title: "Occipital Lobe - Visual Arts & Photography",
        content: `
            <h3>📸 Photography & Visual Arts</h3>
            <p>The occipital lobe processes visual information. Here's where my creative vision and love for photography reside!</p>
            
            <h4>Photography Style:</h4>
            <ul>
                <li><strong>Landscape Photography:</strong> Capturing the beauty of nature and outdoor scenes</li>
                <li><strong>Street Photography:</strong> Documenting urban life and human moments</li>
                <li><strong>Portrait Photography:</strong> Creative portraits and candid shots</li>
                <li><strong>Macro Photography:</strong> Exploring the tiny details of the world</li>
            </ul>
            
            <h4>Equipment & Skills:</h4>
            <ul>
                <li>Canon EOS R5 with various lenses</li>
                <li>Adobe Lightroom & Photoshop expertise</li>
                <li>Composition and lighting techniques</li>
                <li>Post-processing and editing skills</li>
            </ul>
            
            <div class="gallery">
                <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop" alt="Landscape">
                <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop" alt="Street">
                <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=300&h=200&fit=crop" alt="Portrait">
            </div>
        `
    },
    temporal: {
        title: "Temporal Lobe - Music & Language",
        content: `
            <h3>🎵 Music & Language</h3>
            <p>The temporal lobe handles auditory processing, language, and memory. Here's where my musical interests and language skills live!</p>
            
            <h4>Musical Interests:</h4>
            <ul>
                <li><strong>Instruments:</strong> Guitar, piano, and ukulele</li>
                <li><strong>Genres:</strong> Jazz, classical, indie rock, and electronic</li>
                <li><strong>Composition:</strong> Writing original music and arrangements</li>
                <li><strong>Production:</strong> Home recording and music production</li>
            </ul>
            
            <h4>Language Skills:</h4>
            <ul>
                <li><strong>English:</strong> Native speaker</li>
                <li><strong>Spanish:</strong> Fluent conversational</li>
                <li><strong>French:</strong> Intermediate level</li>
                <li><strong>Programming Languages:</strong> JavaScript, Python, Java</li>
            </ul>
            
            <div class="gallery">
                <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop" alt="Guitar">
                <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=200&fit=crop" alt="Piano">
                <img src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop" alt="Studio">
            </div>
        `
    },
    parietal: {
        title: "Parietal Lobe - Technology & Problem Solving",
        content: `
            <h3>💻 Technology & Problem Solving</h3>
            <p>The parietal lobe integrates sensory information and handles spatial awareness. Here's where my technical skills and analytical thinking reside!</p>
            
            <h4>Technical Skills:</h4>
            <ul>
                <li><strong>Web Development:</strong> Full-stack development with modern frameworks</li>
                <li><strong>Data Science:</strong> Machine learning, data analysis, and visualization</li>
                <li><strong>Mobile Development:</strong> iOS and Android app development</li>
                <li><strong>Cloud Computing:</strong> AWS, Azure, and Google Cloud expertise</li>
            </ul>
            
            <h4>Projects & Achievements:</h4>
            <ul>
                <li>Built scalable web applications serving 10K+ users</li>
                <li>Developed machine learning models for predictive analytics</li>
                <li>Created mobile apps with 5-star ratings</li>
                <li>Open source contributions to major projects</li>
            </ul>
            
            <div class="skill-tags">
                <span class="skill-tag">JavaScript</span>
                <span class="skill-tag">Python</span>
                <span class="skill-tag">React</span>
                <span class="skill-tag">Node.js</span>
                <span class="skill-tag">TensorFlow</span>
                <span class="skill-tag">AWS</span>
            </div>
        `
    },
    cerebellum: {
        title: "Cerebellum - Coordination & Balance",
        content: `
            <h3>⚖️ Coordination & Balance</h3>
            <p>The cerebellum coordinates movement and maintains balance. Here's where my precision and coordination skills are developed!</p>
            
            <h4>Physical Coordination:</h4>
            <ul>
                <li><strong>Dance:</strong> Contemporary and hip-hop dance experience</li>
                <li><strong>Yoga:</strong> Advanced yoga practice and meditation</li>
                <li><strong>Martial Arts:</strong> Taekwondo and Brazilian Jiu-Jitsu</li>
                <li><strong>Balance Sports:</strong> Slacklining and skateboarding</li>
            </ul>
            
            <h4>Fine Motor Skills:</h4>
            <ul>
                <li><strong>Drawing:</strong> Sketching and digital art</li>
                <li><strong>Cooking:</strong> Culinary skills and food presentation</li>
                <li><strong>Crafting:</strong> Woodworking and DIY projects</li>
                <li><strong>Gaming:</strong> Strategic and precision-based games</li>
            </ul>
            
            <div class="gallery">
                <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop" alt="Yoga">
                <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop" alt="Cooking">
                <img src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop" alt="Art">
            </div>
        `
    },
    hippocampus: {
        title: "Hippocampus - Memory & Learning",
        content: `
            <h3>🧠 Memory & Learning</h3>
            <p>The hippocampus is crucial for memory formation and learning. Here's where my educational background and continuous learning journey lives!</p>
            
            <h4>Educational Background:</h4>
            <ul>
                <li><strong>Degree:</strong> Computer Science with focus on AI/ML</li>
                <li><strong>Certifications:</strong> AWS Solutions Architect, Google Cloud Professional</li>
                <li><strong>Online Learning:</strong> Coursera, Udemy, and edX courses</li>
                <li><strong>Research:</strong> Published papers in machine learning</li>
            </ul>
            
            <h4>Learning Philosophy:</h4>
            <ul>
                <li>Continuous learning and skill development</li>
                <li>Cross-disciplinary knowledge integration</li>
                <li>Teaching and mentoring others</li>
                <li>Staying updated with latest technologies</li>
            </ul>
            
            <h4>Current Learning Focus:</h4>
            <div class="skill-tags">
                <span class="skill-tag">Quantum Computing</span>
                <span class="skill-tag">Blockchain</span>
                <span class="skill-tag">AR/VR</span>
                <span class="skill-tag">Neuroscience</span>
            </div>
        `
    }
};

// DOM elements
const contentPanel = document.getElementById('contentPanel');
const contentTitle = document.getElementById('contentTitle');
const contentBody = document.getElementById('contentBody');
const closeBtn = document.getElementById('closeBtn');
const brainRegions = document.querySelectorAll('.brain-region');

// Frontal lobe click scrolls to info section
const prefrontalRegion = document.getElementById('prefrontal');
const frontalInfoSection = document.getElementById('frontalInfoSection');
if (prefrontalRegion && frontalInfoSection) {
    prefrontalRegion.addEventListener('click', (e) => {
        e.preventDefault();
        frontalInfoSection.scrollIntoView({ behavior: 'smooth' });
    });
}

// Temporal lobe click scroll
const temporalRegion = document.getElementById('temporal');
const aboutSection = document.getElementById('temporal-info');
if (temporalRegion && aboutSection) {
  temporalRegion.addEventListener('click', () => {
    aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

// Occipital lobe click scroll
const occipitalRegion = document.getElementById('occipital');
const photographySection = document.getElementById('occipital-info');
if (occipitalRegion && photographySection) {
  occipitalRegion.addEventListener('click', () => {
    photographySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

// Parietal lobe click scroll (ensure this is present and correct)
const parietalRegion = document.getElementById('parietal');
const simulationSection = document.getElementById('parietal-info');
if (parietalRegion && simulationSection) {
  parietalRegion.addEventListener('click', () => {
    simulationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

// Simulation logic for cognition output
const visionSlider = document.getElementById('vision-slider');
const hearingSlider = document.getElementById('hearing-slider');
const touchSlider = document.getElementById('touch-slider');
const proprioceptionSlider = document.getElementById('proprioception-slider');
const cognitionText = document.getElementById('cognition-text');

function updateCognitionOutput() {
  const vision = parseInt(visionSlider.value, 10);
  const hearing = parseInt(hearingSlider.value, 10);
  const touch = parseInt(touchSlider.value, 10);
  const proprio = parseInt(proprioceptionSlider.value, 10);
  const senses = [vision, hearing, touch, proprio];
  const avg = senses.reduce((a, b) => a + b, 0) / senses.length;

  if (senses.every(val => val > 85)) {
    cognitionText.textContent = "All senses are fully integrated. Cognition is optimal and perception is vivid.";
  } else if (avg > 65) {
    cognitionText.textContent = "Most senses are strong. Cognition is good, but some perceptual details may be missed.";
  } else if (avg > 35) {
    cognitionText.textContent = "Several senses are dampened. Cognition is effortful and perception is patchy.";
  } else if (avg > 10) {
    cognitionText.textContent = "Most senses are suppressed. Cognition is fragmented and perception is faint.";
  } else {
    cognitionText.textContent = "Sensory input is nearly absent. Cognition is minimal and the mind is adrift.";
  }
}

if (visionSlider && hearingSlider && touchSlider && proprioceptionSlider) {
  [visionSlider, hearingSlider, touchSlider, proprioceptionSlider].forEach(slider => {
    slider.addEventListener('input', updateCognitionOutput);
  });
}

// Animate About Me text bubble scaling on scroll
const aboutContent = document.querySelector('.temporal-info-content');
if (aboutSection && aboutContent) {
  window.addEventListener('scroll', () => {
    const rect = aboutSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    // When section is in view, scale up the bubble
    if (rect.top < windowHeight && rect.bottom > 0) {
      // Calculate progress (0 at top, 1 at bottom)
      const progress = Math.min(Math.max(1 - rect.top / windowHeight, 0), 1);
      const scale = 1 + progress * 0.08; // up to 8% larger
      aboutContent.style.transform = `scale(${scale})`;
    } else {
      aboutContent.style.transform = 'scale(1)';
    }
  });
}

// Digital Garden Animations
const gardenContent = document.querySelector('.garden-content');
const gardenSections = document.querySelectorAll('.garden-section');
const gardenSection = document.getElementById('frontalInfoSection');

if (gardenSection && gardenContent) {
  window.addEventListener('scroll', () => {
    const rect = gardenSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // When garden section is in view, animate content
    if (rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2) {
      const contentRect = gardenContent.getBoundingClientRect();
      const contentProgress = Math.min(Math.max(1 - contentRect.top / windowHeight, 0), 1);
      
      // Parallax effect for the main content block
      const translateY = contentProgress * 15;
      gardenContent.style.transform = `translateY(${translateY}px) scale(${1 + contentProgress * 0.01})`;
      
      // Add glow effect based on scroll position
      const glowOpacity = contentProgress * 0.2;
      gardenContent.style.boxShadow = `
        0 20px 40px rgba(0, 0, 0, 0.3),
        0 0 0 1px rgba(255, 255, 255, 0.1),
        0 0 30px rgba(102, 126, 234, ${glowOpacity})
      `;
    }
  });
  
  // Add interactive hover effects for sections
  gardenSections.forEach(section => {
    section.addEventListener('mouseenter', () => {
      section.style.transform = 'translateY(-2px)';
      section.style.background = 'rgba(255, 255, 255, 0.03)';
      section.style.borderRadius = '8px';
      section.style.paddingLeft = '10px';
      section.style.paddingRight = '10px';
    });
    
    section.addEventListener('mouseleave', () => {
      section.style.transform = 'translateY(0)';
      section.style.background = 'transparent';
      section.style.borderRadius = '0';
      section.style.paddingLeft = '0';
      section.style.paddingRight = '0';
    });
  });
}

// Event listeners
brainRegions.forEach(region => {
    region.addEventListener('click', () => {
        const regionType = region.dataset.region;
        
        // Skip temporal lobe as it has its own scroll handler
        if (regionType === 'temporal') return;
        
        showContent(regionType);
        
        // Add active class for animation
        brainRegions.forEach(r => r.classList.remove('active'));
        region.classList.add('active');
    });
});

closeBtn.addEventListener('click', () => {
    hideContent();
    brainRegions.forEach(r => r.classList.remove('active'));
});

// Functions
function showContent(regionType) {
    const data = brainData[regionType];
    if (!data) return;
    
    contentTitle.textContent = data.title;
    contentBody.innerHTML = data.content;
    contentPanel.classList.add('active');
    
    // Smooth scroll to content on mobile
    if (window.innerWidth <= 768) {
        contentPanel.scrollIntoView({ behavior: 'smooth' });
    }
}

function hideContent() {
    contentPanel.classList.remove('active');
    contentTitle.textContent = 'Select a brain region to explore';
    contentBody.innerHTML = '<p>Click on any colored region of the brain to learn more about that aspect of my personality and interests.</p>';
}

// Add hover effects for tooltips
brainRegions.forEach(region => {
    const tooltip = region.querySelector('.region-tooltip');
    
    region.addEventListener('mouseenter', () => {
        tooltip.style.opacity = '1';
        tooltip.style.transform = 'translateY(0)';
    });
    
    region.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
        tooltip.style.transform = 'translateY(10px)';
    });
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hideContent();
        brainRegions.forEach(r => r.classList.remove('active'));
    }
});

// Add touch support for mobile
brainRegions.forEach(region => {
    region.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const regionType = region.dataset.region;
        showContent(regionType);
        
        brainRegions.forEach(r => r.classList.remove('active'));
        region.classList.add('active');
    });
});

// Initialize with a welcome message
document.addEventListener('DOMContentLoaded', () => {
    // Add a subtle animation to the brain image
    const brainImage = document.getElementById('brainImage');
    brainImage.style.opacity = '0';
    brainImage.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        brainImage.style.transition = 'all 0.8s ease';
        brainImage.style.opacity = '1';
        brainImage.style.transform = 'translateY(0)';
    }, 300);
}); 

// Enhanced scroll animation for multi-section transition
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-section');
    const heroBg = document.querySelector('.hero-bg');
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const neuronsSection = document.querySelector('.neurons-section');
    const neuronsOverlayText = document.getElementById('neuronsOverlayText');
    const interactiveSection = document.querySelector('.interactive-section');

    const scrollY = window.scrollY;
    const heroHeight = hero.offsetHeight;
    const neuronsTop = neuronsSection.offsetTop;
    const neuronsHeight = neuronsSection.offsetHeight;
    const interactiveTop = interactiveSection.offsetTop;

    // Hero section progress (0 to 1)
    const heroProgress = Math.min(scrollY / heroHeight, 1);

    // Neurons section progress (0 to 1)
    const neuronsProgress = Math.max(0, Math.min((scrollY - neuronsTop + window.innerHeight) / neuronsHeight, 1));

    // Interactive section progress (0 to 1)
    const interactiveProgress = Math.max(0, Math.min((scrollY - interactiveTop + window.innerHeight) / window.innerHeight, 1));

    // --- Hero Section Animation ---
    heroBg.style.transform = `scale(${1 + heroProgress * 1.2})`;
    heroBg.style.filter = `grayscale(0.7) brightness(${0.5 + heroProgress * 0.2}) contrast(1.1)`;
    heroTitle.style.fontSize = `${4.5 - 2.5 * heroProgress}rem`;
    heroTitle.style.opacity = `${1 - heroProgress * 1.2}`;
    heroTitle.style.transform = `translateY(-${heroProgress * 60}px)`;
    heroSubtitle.style.fontSize = `${1.3 - 0.8 * heroProgress}rem`;
    heroSubtitle.style.opacity = `${1 - heroProgress * 2}`;
    heroSubtitle.style.transform = `translateY(-${heroProgress * 40}px)`;

    // --- Neurons Section Animation ---
    // Fade and scale overlay text as you scroll
    if (neuronsOverlayText) {
        const scale = 1 + neuronsProgress * 0.5; // scale from 1 to 1.5
        neuronsOverlayText.style.opacity = `${1 - neuronsProgress * 1.2}`;
        neuronsOverlayText.style.transform = `translate(-50%, -50%) scale(${scale})`;
    }

    // --- Interactive Section Animation ---
    // Animate brain scaling as you scroll into the interactive section
    const brainScaleWrapper = document.getElementById('brainScaleWrapper');
    if (interactiveProgress > 0.1) {
        interactiveSection.classList.add('visible');
    } else {
        interactiveSection.classList.remove('visible');
    }
    if (brainScaleWrapper) {
        // Scale from 0.7 (small) to 1.25 (large)
        const scale = 0.7 + Math.min(interactiveProgress, 1) * 0.55;
        brainScaleWrapper.style.transform = `scale(${scale})`;
    }
}); 

// --- Neuron Matrix Simulation ---
const canvas = document.getElementById('neuron-canvas');
const ctx = canvas ? canvas.getContext('2d') : null;

const smellSlider = document.getElementById('smell-slider');

const SENSES = [
  { key: 'vision', color: '#4a90e2', slider: visionSlider },
  { key: 'hearing', color: '#50e3c2', slider: hearingSlider },
  { key: 'touch', color: '#f5a623', slider: touchSlider },
  { key: 'proprio', color: '#b97aff', slider: proprioceptionSlider },
  { key: 'smell', color: '#ff6fae', slider: smellSlider }
];

const BALL_RADIUS = 10;
const MAX_BALLS_PER_SENSE = 10; // at slider 100
const WIDTH = 600;
const HEIGHT = 260;
let balls = [];

function addOrRemoveBalls() {
  // For each sense, adjust the number of balls to match the slider
  let newBalls = [];
  SENSES.forEach((sense, i) => {
    if (!sense.slider) return;
    const count = Math.round((sense.slider.value / 100) * MAX_BALLS_PER_SENSE);
    // Get existing balls for this sense
    let existing = balls.filter(b => b.sense === sense.key);
    // Add or remove balls as needed
    if (existing.length < count) {
      // Add new balls
      for (let j = 0; j < count - existing.length; j++) {
        newBalls.push({
          x: Math.random() * (WIDTH - 2 * BALL_RADIUS) + BALL_RADIUS,
          y: Math.random() * (HEIGHT - 2 * BALL_RADIUS) + BALL_RADIUS,
          vx: (Math.random() - 0.5) * 2.5,
          vy: (Math.random() - 0.5) * 2.5,
          color: sense.color,
          mass: 1,
          sense: sense.key
        });
      }
      newBalls = newBalls.concat(existing);
    } else {
      // Remove excess balls
      newBalls = newBalls.concat(existing.slice(0, count));
    }
  });
  balls = newBalls;
}

function drawBalls() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  balls.forEach(ball => {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, BALL_RADIUS, 0, 2 * Math.PI);
    ctx.fillStyle = ball.color;
    ctx.globalAlpha = 0.85;
    ctx.shadowColor = ball.color;
    ctx.shadowBlur = 12;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
  });
}

function resolveCollision(b1, b2) {
  // 2D elastic collision for equal-mass balls
  const dx = b2.x - b1.x;
  const dy = b2.y - b1.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  if (dist === 0) return;
  // Normal vector
  const nx = dx / dist;
  const ny = dy / dist;
  // Tangent vector
  const tx = -ny;
  const ty = nx;
  // Dot product tangent
  const dpTan1 = b1.vx * tx + b1.vy * ty;
  const dpTan2 = b2.vx * tx + b2.vy * ty;
  // Dot product normal
  const dpNorm1 = b1.vx * nx + b1.vy * ny;
  const dpNorm2 = b2.vx * nx + b2.vy * ny;
  // Swap normal velocities
  const m1 = dpNorm2;
  const m2 = dpNorm1;
  b1.vx = tx * dpTan1 + nx * m1;
  b1.vy = ty * dpTan1 + ny * m1;
  b2.vx = tx * dpTan2 + nx * m2;
  b2.vy = ty * dpTan2 + ny * m2;
  // Separate balls
  const overlap = 2 * BALL_RADIUS - dist;
  if (overlap > 0) {
    const sep = overlap / 2;
    b1.x -= nx * sep;
    b1.y -= ny * sep;
    b2.x += nx * sep;
    b2.y += ny * sep;
  }
}

function updateBalls() {
  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    b.x += b.vx;
    b.y += b.vy;
    // Wall collision
    if (b.x < BALL_RADIUS) { b.x = BALL_RADIUS; b.vx *= -1; }
    if (b.x > WIDTH - BALL_RADIUS) { b.x = WIDTH - BALL_RADIUS; b.vx *= -1; }
    if (b.y < BALL_RADIUS) { b.y = BALL_RADIUS; b.vy *= -1; }
    if (b.y > HEIGHT - BALL_RADIUS) { b.y = HEIGHT - BALL_RADIUS; b.vy *= -1; }
    // Ball-ball collision
    for (let j = i + 1; j < balls.length; j++) {
      let b2 = balls[j];
      let dx = b2.x - b.x;
      let dy = b2.y - b.y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 2 * BALL_RADIUS) {
        resolveCollision(b, b2);
      }
    }
  }
}

function animateBalls() {
  if (!ctx) return;
  addOrRemoveBalls();
  function loop() {
    addOrRemoveBalls();
    updateBalls();
    drawBalls();
    requestAnimationFrame(loop);
  }
  loop();
}

if (canvas && ctx) {
  animateBalls();
  // Update balls when sliders change
  SENSES.forEach(sense => {
    if (sense.slider) sense.slider.addEventListener('input', addOrRemoveBalls);
  });
} 

// --- Neuron Network Simulation (Hodgkin-Huxley Inspired) ---
const rasterCanvas = document.getElementById('raster-canvas');
const axonCanvas = document.getElementById('axon-canvas');
const neuronCountSlider = document.getElementById('neuron-count-slider');
const neuronCountLabel = document.getElementById('neuron-count-label');

function setCanvasSize() {
  // Set canvas size to match viewport width
  const width = window.innerWidth;
  rasterCanvas.width = width;
  rasterCanvas.height = Math.max(window.innerHeight * 0.38, 260);
  axonCanvas.width = width;
  axonCanvas.height = Math.max(window.innerHeight * 0.20, 120);
}

setCanvasSize();
window.addEventListener('resize', setCanvasSize);

function formatNeuronCount(n) {
  if (n >= 1000000) return (n/1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n/1000).toLocaleString() + 'k';
  return n.toString();
}

function drawRasterPlot(neuronCount) {
  const ctx = rasterCanvas.getContext('2d');
  ctx.clearRect(0, 0, rasterCanvas.width, rasterCanvas.height);
  // Remove the label at the top
  // ctx.fillStyle = '#fff';
  // ctx.font = '18px Helvetica Neue, Helvetica, Arial, sans-serif';
  // ctx.fillText('Raster Plot: Spikes from ' + formatNeuronCount(neuronCount) + ' neurons', 24, 32);
  // Simulate random spikes for each neuron
  const rows = neuronCount;
  const cols = Math.floor(rasterCanvas.width / 2);
  const rowHeight = (rasterCanvas.height - 40) / rows;
  ctx.save();
  ctx.globalAlpha = 0.7;
  for (let i = 0; i < rows; i++) {
    // Each neuron fires randomly 0-2 times in this frame
    const spikes = Math.floor(Math.random() * 3);
    for (let s = 0; s < spikes; s++) {
      const x = Math.random() * (rasterCanvas.width - 40) + 20;
      const y = 40 + i * rowHeight;
      ctx.fillStyle = '#4a90e2';
      ctx.fillRect(x, y, 2, Math.max(1, rowHeight * 0.7));
    }
  }
  ctx.restore();
}

// --- EEG Trace Simulation: Population Activity ---
const EEG_DURATION = 2.5; // seconds shown on screen
const EEG_SAMPLING_RATE = 500; // Hz
const EEG_POINTS = Math.floor(EEG_DURATION * EEG_SAMPLING_RATE);
let eegBuffer = new Array(EEG_POINTS).fill(0);
let eegBufferIdx = 0;

function simulateEEG(neuronCount) {
  // Each neuron has a small chance to fire per ms
  const firingProb = 0.002; // ~2Hz per neuron
  // Action potential shape: simple biphasic pulse (ms)
  const apShape = [0, 0.5, 1, 0.5, 0, -0.3, -0.5, -0.3, 0];
  const apLen = apShape.length;
  // For each ms, sum all spikes
  let eegSample = 0;
  for (let n = 0; n < neuronCount; n++) {
    if (Math.random() < firingProb) {
      // Add action potential shape to EEG buffer
      for (let k = 0; k < apLen; k++) {
        let idx = (eegBufferIdx + k) % EEG_POINTS;
        eegBuffer[idx] += apShape[k];
      }
    }
  }
  // The EEG sample is the sum at this time
  eegSample = eegBuffer[eegBufferIdx];
  // Decay old values for realism
  eegBuffer[eegBufferIdx] *= 0.92;
  eegBufferIdx = (eegBufferIdx + 1) % EEG_POINTS;
  return eegSample;
}

function drawEEGTrace() {
  const ctx = axonCanvas.getContext('2d');
  ctx.clearRect(0, 0, axonCanvas.width, axonCanvas.height);
  // Draw EEG baseline
  ctx.strokeStyle = '#b8c5d6';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, axonCanvas.height/2);
  ctx.lineTo(axonCanvas.width, axonCanvas.height/2);
  ctx.stroke();

  // --- Draw y-axis with μV labels ---
  ctx.save();
  ctx.strokeStyle = '#b8c5d6';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(40, 10);
  ctx.lineTo(40, axonCanvas.height - 10);
  ctx.stroke();
  // Tick marks and labels for -100, 0, +100 μV
  ctx.font = 'bold 1.1rem Helvetica Neue, Helvetica, Arial, sans-serif';
  ctx.fillStyle = '#fff';
  ctx.globalAlpha = 0.8;
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';
  // +100 μV
  ctx.beginPath();
  ctx.moveTo(35, 30);
  ctx.lineTo(45, 30);
  ctx.stroke();
  ctx.fillText('+100 μV', 35, 30);
  // 0 μV
  ctx.beginPath();
  ctx.moveTo(35, axonCanvas.height/2);
  ctx.lineTo(45, axonCanvas.height/2);
  ctx.stroke();
  ctx.fillText('0', 35, axonCanvas.height/2);
  // -100 μV
  ctx.beginPath();
  ctx.moveTo(35, axonCanvas.height-30);
  ctx.lineTo(45, axonCanvas.height-30);
  ctx.stroke();
  ctx.fillText('-100 μV', 35, axonCanvas.height-30);
  ctx.restore();

  // --- Draw EEG trace ---
  ctx.save();
  ctx.strokeStyle = '#4a90e2';
  ctx.lineWidth = 2.5;
  ctx.shadowColor = '#4a90e2';
  ctx.shadowBlur = 8;
  ctx.beginPath();
  let scaleX = (axonCanvas.width - 50) / EEG_POINTS; // leave space for y-axis
  // Fixed μV scale: ±100 μV always maps to ±(canvas.height/2 - margin)
  let maxMicrovolt = 100; // ±100 μV
  let margin = 30;
  let scaleY = (axonCanvas.height/2 - margin) / maxMicrovolt;
  // Skip the first 5% of the EEG buffer to avoid initial noise on the left
  let skip = Math.floor(EEG_POINTS * 0.05);
  for (let i = 0; i < EEG_POINTS; i++) {
    let idx = (eegBufferIdx + i) % EEG_POINTS;
    let v = eegBuffer[idx]; // summed activity, in arbitrary units
    // Assume 1 buffer unit = 1 μV (or adjust if needed for realism)
    let microvolt = v;
    let x = 50 + i * scaleX;
    let y;
    if (i < skip) {
      y = axonCanvas.height/2; // Flat at baseline for first 5%
    } else {
      y = axonCanvas.height/2 - microvolt * scaleY;
    }
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.restore();

  // Draw electrode label
  ctx.save();
  ctx.font = 'bold 1.1rem Helvetica Neue, Helvetica, Arial, sans-serif';
  ctx.fillStyle = '#fff';
  ctx.globalAlpha = 0.8;
  ctx.fillText('EEG Electrode (Cz) - 1cm²', 70, 24);
  ctx.restore();
}

function animateSimulation() {
  const neuronCount = parseInt(neuronCountSlider.value, 10);
  neuronCountLabel.textContent = formatNeuronCount(neuronCount);
  drawRasterPlot(neuronCount);
  // Simulate EEG
  simulateEEG(neuronCount);
  drawEEGTrace();
  requestAnimationFrame(animateSimulation);
}

// Remove EEG buffer reset on neuron count change
// neuronCountSlider.addEventListener('input', () => {
//   neuronCountLabel.textContent = formatNeuronCount(parseInt(neuronCountSlider.value, 10));
//   eegBuffer = new Array(EEG_POINTS).fill(0);
//   eegBufferIdx = 0;
// });

// Instead, just update the label on slider input
neuronCountSlider.addEventListener('input', () => {
  neuronCountLabel.textContent = formatNeuronCount(parseInt(neuronCountSlider.value, 10));
});

// Start animation
animateSimulation(); 