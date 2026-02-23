<template>
  <div class="bg-black text-white selection:bg-pink-500 selection:text-white overflow-x-hidden">
    
    <!-- Global Glossy Lighting Effect -->
    <div class="fixed inset-0 pointer-events-none z-0">
      <div class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/[0.03] to-transparent"></div>
      <div class="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-pink-500/5 rounded-full blur-[120px] mix-blend-screen"></div>
    </div>

    <!-- Navigation (Glossy Glass) -->
    <nav class="fixed top-0 w-full z-50 transition-all duration-500" 
         :class="scrolled ? 'bg-black/50 backdrop-blur-xl border-b border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-6'">
      <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        <!-- Logo (Preserved Original Colors) -->
        <a href="#home" @click.prevent="lenisScrollTo('home')" class="text-xl font-bold tracking-tight hover:text-pink-500 transition-colors relative z-50">
          GELSEY<span class="text-pink-500">.</span>
        </a>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-10">
          <a v-for="item in navItems" :key="item.id" 
             @click.prevent="lenisScrollTo(item.id)"
             class="relative text-xs uppercase tracking-widest cursor-pointer transition-colors group font-medium"
             :class="activeSection === item.id ? 'text-pink-500' : 'text-gray-400 hover:text-white'">
            {{ item.name }}
            <span class="absolute -bottom-2 left-0 h-px bg-pink-500 transition-all duration-300"
                  :class="activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'"></span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="mobileMenu = !mobileMenu" class="md:hidden text-white focus:outline-none z-50">
          <v-icon size="24" class="transition-transform duration-300" :class="mobileMenu ? 'rotate-90' : ''">
            {{ mobileMenu ? 'mdi-close' : 'mdi-menu' }}
          </v-icon>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu Overlay (Glossy) -->
    <transition name="fade">
      <div v-if="mobileMenu" class="fixed inset-0 bg-black/90 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-8 md:hidden">
        <a v-for="item in navItems" :key="item.id" 
           @click="lenisScrollTo(item.id); mobileMenu = false"
           class="text-4xl font-bold transition-colors cursor-pointer"
           :class="activeSection === item.id ? 'text-pink-500' : 'text-white hover:text-pink-500'">
          {{ item.name }}
        </a>
      </div>
    </transition>

    <!-- Hero Section -->
    <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Grid Background -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      <!-- Main Hero Content -->
      <div class="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div class="overflow-hidden mb-4">
          <p class="text-pink-500 text-xs md:text-sm tracking-[0.4em] uppercase animate-fade-up font-medium" style="animation-delay: 0.2s">
            Full Stack Developer & Team Leader
          </p>
        </div>
        
        <!-- Glossy Text Effect -->
       <div class="overflow-hidden mb-6">
          <h1 class="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-none animate-fade-up" style="animation-delay: 0.3s">
            GELSEY<br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">HAFALLA</span>
          </h1>
        </div>

        <div class="overflow-hidden flex flex-wrap justify-center gap-3 mb-12 animate-fade-up" style="animation-delay: 0.6s">
          <span v-for="role in roles" :key="role" 
                class="px-4 py-2 bg-white/5 text-xs tracking-wider uppercase border border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 backdrop-blur-sm transition-all duration-300 cursor-default rounded-sm">
            {{ role }}
          </span>
        </div>

        <div class="animate-fade-up" style="animation-delay: 0.9s">
          <v-btn size="large" variant="outlined" color="white" class="text-none font-bold tracking-wider px-8 rounded-sm border-white/20 hover:bg-white/10 hover:border-white transition-all" 
                 append-icon="mdi-arrow-down" @click.prevent="lenisScrollTo('about')">
            Scroll Down
          </v-btn>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
         <div class="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>
    </section>

      <!-- About Section -->
    <section id="about" class="relative py-32 z-10">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        <!-- Glossy Image Card (No fixed size, fits image) -->
        <div class="relative anim-item group flex justify-center">
           <div class="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)] bg-black max-w-md w-full">
             
             <!-- Image Layer (Natural height, no cover/contain distortion) -->
             <div class="relative z-0">
                <!-- Removed 'contain' and 'cover', using w-full h-auto to fit natural image size -->
                <v-img src="/Gelsey.png" class="w-full h-auto opacity-70 group-hover:scale-105 transition-transform duration-700" />
             </div>
             
             <!-- Glass Reflection Layer -->
             <div class="absolute inset-0 bg-gradient-to-b from-white/[0.2] via-transparent to-black/60 z-10 transition-opacity duration-700 pointer-events-none"></div>
             
             <!-- Decorative reflection line -->
             <!-- <div class="absolute top-0 left-0 w-1/3 h-px bg-white/50 z-20 transform rotate-45 origin-left translate-x-10 group-hover:translate-x-20 transition-transform duration-700"></div> -->
           </div>
        </div>

        <!-- Text Content -->
        <div class="anim-item">
          <p class="text-pink-500 text-xs tracking-[0.3em] uppercase mb-4 font-mono">01. Introduction</p>
          <h2 class="text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
            About Me
          </h2>
          <div class="space-y-6 text-gray-400 leading-relaxed">
            <p class="text-lg text-white/80">
              Versatile and results-oriented <span class="text-pink-400 font-medium">Full Stack Web Developer</span> with a proven track record in team leadership, technical support, and customer service.
            </p>
            <p>
              My strong background in technical support allows me to troubleshoot and resolve complex issues effectively. I am passionate about leveraging my diverse skill set to contribute to innovative projects and drive team success.
            </p>
          </div>
          
          <!-- Stats Row -->
          <div class="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
             <div class="group cursor-default">
               <div class="text-4xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">17+</div>
               <div class="text-xs text-gray-500 uppercase tracking-wider mt-1">Years Exp.</div>
             </div>
             <div class="group cursor-default">
               <div class="text-4xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">5+</div>
               <div class="text-xs text-gray-500 uppercase tracking-wider mt-1">Roles</div>
             </div>
             <div class="group cursor-default">
               <div class="text-4xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">100%</div>
               <div class="text-xs text-gray-500 uppercase tracking-wider mt-1">Commitment</div>
             </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Experience Section -->
    <section id="experience" class="relative py-32 z-10">
      <div class="max-w-7xl mx-auto px-6">
        
        <div class="text-center mb-20 anim-item">
          <p class="text-pink-500 text-xs tracking-[0.3em] uppercase mb-4 font-mono">02. Career Path</p>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Work Experience</h2>
        </div>

        <div class="relative border-l border-white/10 ml-4 md:ml-8 space-y-20">
          
          <div v-for="(exp, i) in experiences" :key="i" class="relative pl-8 md:pl-16 anim-item">
            
            <!-- Timeline Dot -->
            <div class="absolute left-0 top-0 transform -translate-x-1/2 w-3 h-3 bg-black border-2 border-pink-500 group-hover:bg-pink-500 transition-colors rotate-45"></div>

            <!-- Glossy Card -->
            <div class="group relative bg-gradient-to-br from-white/[0.07] to-black border border-white/5 p-8 hover:border-pink-500/20 transition-all duration-500 rounded-2xl overflow-hidden shadow-xl">
               <!-- Glossy Highlight Sweep -->
               <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-y-full group-hover:translate-y-0"></div>
               
              <div class="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 class="text-2xl font-bold text-white transition-colors tracking-tight">
                  {{ exp.title }}
                </h3>
                <span class="text-xs font-mono text-pink-500 bg-pink-500/10 px-3 py-1 mt-2 md:mt-0 inline-block rounded-sm backdrop-blur-sm">
                  {{ exp.date }}
                </span>
              </div>
              <p class="text-gray-500 font-medium mb-6 text-sm uppercase tracking-wider flex items-center gap-2 relative z-10">
                <v-icon size="14" color="pink">mdi-domain</v-icon>
                {{ exp.company }}
              </p>
              <ul class="relative z-10 space-y-3 text-gray-400 text-sm">
                <li v-for="(task, j) in exp.tasks" :key="j" class="flex items-start gap-3">
                  <v-icon size="14" color="pink" class="mt-1 flex-shrink-0">mdi-chevron-right</v-icon>
                  <span>{{ task }}</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Skills Bento Grid Section -->
    <section id="skills" class="relative py-32 z-10">
      <div class="max-w-7xl mx-auto px-6">
        
        <div class="text-center mb-20 anim-item">
          <p class="text-pink-500 text-xs tracking-[0.3em] uppercase mb-4 font-mono">03. Expertise</p>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Skills & Technologies</h2>
        </div>

        <!-- Bento Grid Layout -->
        <div class="grid grid-cols-1 md:grid-cols-6 gap-6 anim-item">
          
          <!-- Main Programming Card -->
          <div class="md:col-span-4 bg-gradient-to-br from-white/[0.08] to-black border border-white/5 p-8 flex flex-col justify-between hover:border-pink-500/20 transition-all duration-500 group min-h-[350px] rounded-2xl relative overflow-hidden">
             <!-- Half Glossy Effect -->
             <div class="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>
             <div class="relative z-10">
               <v-icon size="32" color="pink" class="mb-6">mdi-code-braces</v-icon>
               <h4 class="text-2xl font-bold mb-6 tracking-tight">Programming</h4>
             </div>
             <div class="relative z-10 flex flex-wrap gap-2">
               <span v-for="skill in skillGroups[0].skills" :key="skill" 
                     class="text-sm text-white/70 bg-white/5 px-3 py-1 hover:bg-pink-500/20 hover:text-white transition-all cursor-default border border-transparent hover:border-pink-500/30 rounded-sm">
                 {{ skill }}
               </span>
             </div>
          </div>

          <!-- Sidebar Cards -->
          <div class="md:col-span-2 flex flex-col gap-6">
             <!-- Design -->
            <div class="bg-gradient-to-br from-white/[0.08] to-black border border-white/5 p-6 flex flex-col justify-between hover:border-pink-500/20 transition-all duration-500 group flex-1 rounded-2xl relative overflow-hidden">
               <div class="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>
              <v-icon size="24" color="purple" class="mb-4 relative z-10">mdi-palette</v-icon>
              <h4 class="text-lg font-bold mb-3 tracking-tight relative z-10">Design</h4>
              <div class="flex flex-wrap gap-2 relative z-10">
                <span v-for="skill in skillGroups[1].skills" :key="skill" class="text-xs text-gray-400 hover:text-pink-400 transition-colors cursor-default">{{ skill }}</span>
              </div>
            </div>
             <!-- Virtual Assistant -->
            <div class="bg-gradient-to-br from-white/[0.08] to-black border border-white/5 p-6 flex flex-col justify-between hover:border-pink-500/20 transition-all duration-500 group flex-1 rounded-2xl relative overflow-hidden">
               <div class="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>
              <v-icon size="24" color="cyan" class="mb-4 relative z-10">mdi-account-cog</v-icon>
              <h4 class="text-lg font-bold mb-3 tracking-tight relative z-10">VA Skills</h4>
              <div class="flex flex-wrap gap-2 relative z-10">
                <span v-for="skill in skillGroups[2].skills" :key="skill" class="text-xs text-gray-400 hover:text-pink-400 transition-colors cursor-default">{{ skill }}</span>
              </div>
            </div>
          </div>

          <!-- Full Width Software Tools -->
          <div class="md:col-span-6 bg-gradient-to-br from-white/[0.08] to-black border border-white/5 p-6 hover:border-pink-500/20 transition-all duration-500 group rounded-2xl flex flex-col md:flex-row md:items-center gap-6 relative overflow-hidden">
             <div class="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>
             <div class="md:w-1/4 relative z-10">
                <v-icon size="24" color="pink" class="mb-2 md:mb-0">mdi-tools</v-icon>
                <h4 class="text-lg font-bold tracking-tight">Other Tools</h4>
             </div>
             <div class="md:w-3/4 flex flex-wrap gap-3 relative z-10">
                <span v-for="skill in skillGroups[3].skills" :key="skill" 
                      class="text-xs text-gray-400 bg-white/5 px-3 py-1 hover:text-white hover:bg-pink-500/10 transition-all cursor-default border border-white/5 rounded-sm">
                  {{ skill }}
                </span>
             </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Education Section (Compact) -->
    <section id="education" class="relative py-20 z-10">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-12 anim-item">
          <div class="p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.08] to-black relative overflow-hidden">
            <div class="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>
            <p class="text-pink-500 text-xs tracking-[0.3em] uppercase mb-4 font-mono relative z-10">04. Education</p>
            <h3 class="text-xl font-bold text-white mb-2 relative z-10">Degree of Science in Computer Science</h3>
            <p class="text-gray-500 relative z-10">Montessori Professional College • 2004-2006</p>
          </div>
          <div class="p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.08] to-black relative overflow-hidden">
            <div class="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>
            <p class="text-pink-500 text-xs tracking-[0.3em] uppercase mb-4 font-mono relative z-10">05. Certifications</p>
            <ul class="space-y-2 text-gray-400 relative z-10">
              <li class="flex items-center gap-2">
                <v-icon size="12" color="pink">mdi-circle</v-icon>
                Virtual Assistant Courses
              </li>
              <li class="flex items-center gap-2">
                <v-icon size="12" color="pink">mdi-circle</v-icon>
                Bookkeeping Seminar
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Footer -->
    <footer id="contact" class="relative py-32 z-10 border-t border-white/5">
      <div class="max-w-7xl mx-auto px-6 text-center anim-item">
        
        <p class="text-pink-500 text-xs tracking-[0.3em] uppercase mb-4 font-mono">06. Get In Touch</p>
        <h2 class="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-r from-white via-white to-gray-500 bg-clip-text text-transparent">Let's Work Together</h2>
        
        <div class="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mb-16 text-gray-400">
            <a href="tel:0919-225-3040" class="group flex items-center gap-3 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/5">
                <v-icon color="pink">mdi-phone-outline</v-icon>
                <span>0919-225-3040</span>
            </a>
            <a href="https://beshybakes.netlify.app" target="_blank" class="group flex items-center gap-3 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/5">
                <v-icon color="pink">mdi-web</v-icon>
                <span>beshybakes.netlify.app</span>
            </a>
        </div>

        <v-btn size="x-large" color="pink" class="text-none font-bold tracking-wider px-12 rounded-sm shadow-[0_0_30px_rgba(236,72,153,0.3)] hover:shadow-[0_0_40px_rgba(236,72,153,0.5)] transition-shadow" href="mailto:email@example.com">
          Say Hello
        </v-btn>
        
        <div class="mt-24 pt-8 border-t border-white/5 text-xs text-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <span>© {{ new Date().getFullYear() }} Gelsey Hafalla.</span>
          <span class="flex items-center gap-2"><span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Available for Work</span>
        </div>
      </div>
    </footer>

    <!-- Scroll to Top Button -->
    <transition name="slide-y">
      <button v-if="scrolled" @click="lenisScrollTo('home')" 
              class="fixed bottom-8 right-8 z-50 w-12 h-12 bg-white text-black flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all hover:-translate-y-1 rounded-full shadow-lg shadow-white/20">
        <v-icon>mdi-arrow-up</v-icon>
      </button>
    </transition>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'

const mobileMenu = ref(false)
const scrolled = ref(false)
const activeSection = ref('home')
let lenis = null

const navItems = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'experience', name: 'Experience' },
  { id: 'skills', name: 'Skills' },
  { id: 'contact', name: 'Contact' }
]

const roles = [
  "Team Leader", 
  "Full Stack Developer", 
  "Chat Moderator", 
  "Technical Support", 
  "Virtual Assistant"
]

const skillGroups = [
  { 
    title: 'Programming', 
    skills: ['PHP', 'Laravel', 'Node.js', 'Vue.js', 'Javascript', 'HTML', 'CSS', 'MySQL', 'CouchDB', 'REST API', 'NPM', 'GitLab'] 
  },
  { 
    title: 'Design', 
    skills: ['Photoshop', 'Canva', 'Capcut', 'AutoCAD', 'Vectorworks'] 
  },
  { 
    title: 'VA Skills', 
    skills: ['Lead Gen', 'Email Marketing', 'Social Media', 'Bookkeeping'] 
  },
  { 
    title: 'Other', 
    skills: ['BMOS', 'Walk-in Home', 'Architrend', 'MS Office', 'Japanese (Basic)'] 
  }
]

const experiences = [
  {
    title: 'Team Leader',
    date: '2023 - Present',
    company: 'HRD Singapore PTE LTD',
    tasks: [
      'Handle a team of Full Stack web developers.',
      'Monitor system development status to ensure on-time project completion.',
      'Handle administration-related issues and programmer concerns.'
    ]
  },
  {
    title: 'Full Stack Web Developer',
    date: '2015 - 2023',
    company: 'HRD Singapore PTE LTD',
    tasks: [
      'Develop web-based applications using PHP, Nodejs, Vuejs and Laravel.',
      'Handle system maintenance and modification requests.',
      'Select programming languages, tools, database, and platforms.'
    ]
  },
  {
    title: 'Technical Support',
    date: '2012 - 2015',
    company: 'HRD Singapore PTE LTD',
    tasks: [
      'Manage communication with KSK Japan side for confirmations.',
      'Handle detection of system errors and implement modifications.',
      'Completed training for BMOS, Walk-in Home, Architrend software.'
    ]
  },
  {
    title: 'Customer Service',
    date: '2007 - 2012',
    company: 'HRD Singapore PTE LTD',
    tasks: [
      'Manage sending and receiving of confirmations via email.',
      'Oversee confirmation verification and provide timely feedback.',
      'Monitor confirmation status and conduct follow-ups.'
    ]
  }
]

// --- Lenis Smooth Scroll Setup ---

onMounted(() => {
  // Initialize Lenis
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  lenis.on('scroll', handleScroll)
  handleScroll()

  // Intersection Observer
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' })

  document.querySelectorAll('.anim-item').forEach(el => observer.observe(el))
})

onUnmounted(() => {
  if (lenis) lenis.destroy()
  if (observer) observer.disconnect()
})

const lenisScrollTo = (id) => {
  const element = document.getElementById(id)
  if (lenis && element) {
    lenis.scrollTo(element, { offset: -80 })
  }
  if (mobileMenu.value) mobileMenu.value = false
}

const handleScroll = (e) => {
  const scrollY = lenis ? lenis.scroll : window.scrollY
  scrolled.value = scrollY > 50

  const sections = navItems.map(item => document.getElementById(item.id))
  const scrollPos = scrollY + 150 

  sections.forEach((section) => {
    if (section) {
      const top = section.offsetTop
      const height = section.offsetHeight
      if (scrollPos >= top && scrollPos < top + height) {
        activeSection.value = section.id
      }
    }
  })
}

let observer
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

html.lenis, html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  background-color: #000000;
}

/* Glossy Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #000;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #ec4899, #8b5cf6);
  border-radius: 3px;
}

/* Animations */
.anim-item {
  opacity: 0;
  transform: translateY(60px);
  transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.anim-item.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.animate-fade-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeUp {
  to { opacity: 1; transform: translateY(0); }
}

.animate-bounce-slow {
  animation: bounce 3s infinite;
}

/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slide-y-enter-active, .slide-y-leave-active {
  transition: all 0.3s ease;
}
.slide-y-enter-from, .slide-y-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Vuetify Overrides for Rounded Design */
.v-btn {
  border-radius: 8px !important;
  letter-spacing: 0.05em;
}
</style>