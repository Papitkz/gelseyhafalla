<template>
  <div class="max-w-4xl mx-auto py-16">
    <!-- 
      v-motion directive applies the animation.
      The :initial and :visibleOnce props define the animation states.
    -->
    <h1
      v-motion
      :initial="{ opacity: 0, y: -50 }"
      :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
      class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 mb-6"
    >
      About Me
    </h1>

    <p
      v-motion
      :initial="{ opacity: 0 }"
      :visibleOnce="{ opacity: 1, transition: { duration: 1000, delay: 200 } }"
      class="text-lg text-gray-300 leading-relaxed mb-8"
    >
      I'm a passionate web developer with a focus on creating beautiful, functional, and user-centered digital experiences. I am always looking to learn and take on new challenges.
    </p>

    <h2
      v-motion
      :initial="{ opacity: 0, x: -50 }"
      :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 800, delay: 400 } }"
      class="text-3xl font-bold mb-4"
    >
      My Skills
    </h2>

    <div
      v-motion
      :initial="{ opacity: 0, scale: 0.8 }"
      :visibleOnce="{ opacity: 1, scale: 1, transition: { duration: 600, delay: 600 } }"
      class="grid grid-cols-2 md:grid-cols-3 gap-4"
    >
      <div class="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors">Vue.js</div>
      <div class="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors">Tailwind CSS</div>
      <div class="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors">JavaScript</div>
      <div class="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors">Node.js</div>
      <div class="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors">Vite</div>
      <div class="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors">Git</div>
    </div>
  </div>
</template>

<script setup>
// No script needed, the v-motion directive is all we need!
</script>