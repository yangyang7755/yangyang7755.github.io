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