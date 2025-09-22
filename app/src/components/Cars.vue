<template>
    <body class="bg-gray-50 mt-14 p-6">
  <div class="max-w-7xl mx-auto">
    <!-- Header -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
      <div>
        <h2 class="text-2xl font-bold">Book a Car</h2>
        <p class="text-sm text-gray-600">
          Choose from a variety of cars to suit your travel needs to your destination.
        </p>
      </div>
    </div>

    <!-- Product Cards Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Product Card #1 -->
      <div class="border rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow">
        <div class="bg-gray-200 h-64 flex items-center justify-center relative">
          <img src="https://img.freepik.com/free-psd/view-crossroad-car_23-2151780809.jpg?uid=R194069721&ga=GA1.1.1133974844.1758530897&w=740&q=80" alt="Product Image" class="w-full h-full object-cover"/>
        </div>
        <div class="p-4">
          <div class="flex justify-between items-start">
            <h3 class="font-semibold">Isuzu</h3>
            <button class="text-gray-400 hover:text-red-500">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </button>
          </div>
          <div class="flex items-center mt-1">
            <div class="flex text-yellow-400 text-sm">
              ★★★★★ <span class="text-gray-600 ml-2">(128)</span>
            </div>
          </div>
          <p class="text-sm text-gray-600 mt-2">A compact car that is perfect for city driving and off-road exploration</p>
          <div class="flex items-center text-xs text-gray-500 mt-3 space-x-4">
            <span class="flex items-center">📦 <span class="ml-1">6 Seater</span></span>
            <span class="flex items-center">🛒 <span class="ml-1">Availabe</span></span>
          </div>
          <div class="flex justify-between items-center mt-4">
            <div>
              <span class="text-lg font-semibold">$199</span>
              <span class="text-sm text-gray-500 line-through ml-2">$249</span>
            </div>
            <button class="bg-green-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded-md transition-colors">
             Book
            </button>
          </div>
        </div>
      </div>

      <!-- Product Card #2 -->
      <div class="border rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow">
        <div class="bg-gray-200 h-64 flex items-center justify-center">
          <img src="https://img.freepik.com/premium-vector/realistic-white-sport-two-tone-luxury-car-set-grey-metallic-background-vector_33869-3709.jpg?w=1060" alt="Product Image" class="w-full h-full object-cover"/>
        </div>
        <div class="p-4">
          <div class="flex justify-between items-start">
            <h3 class="font-semibold">SUV</h3>
            <button class="text-gray-400 hover:text-red-500">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </button>
          </div>
          <div class="flex items-center mt-1">
            <div class="flex text-yellow-400 text-sm">
              ★★★★☆ <span class="text-gray-600 ml-2">(89)</span>
            </div>
          </div>
          <p class="text-sm text-gray-600 mt-2">SUV with a spacious interior and a powerful engine... Convenient for city driving and off-road exploration</p>
          <div class="flex items-center text-xs text-gray-500 mt-3 space-x-4">
            <span class="flex items-center">📦 <span class="ml-1">Free Shipping</span></span>
            <span class="flex items-center">⏳ <span class="ml-1">Low Stock</span></span>
          </div>
          <div class="flex justify-between items-center mt-4">
            <span class="text-lg font-semibold">$159</span>
            <button class="bg-green-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded-md transition-colors">
             Book
            </button>
          </div>
        </div>
      </div>

      <!-- Product Card #3 -->
      <div class="border rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow">
        <div class="bg-gray-200 h-64 flex items-center justify-center">
          <img src="https://img.freepik.com/free-psd/white-isolated-car_23-2151852916.jpg?t=st=1758543584~exp=1758547184~hmac=98e02b3f8c2ff9e476854caa2f59e2ab776df99ef90b4ab4a2ed58ce92d4340d&w=1060" alt="Product Image" class="w-full h-full object-cover"/>  
        </div>
        <div class="p-4">
          <div class="flex justify-between items-start">
            <h3 class="font-semibold">Toyota</h3>
            <button class="text-gray-400 hover:text-red-500">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </button>
          </div>
          <div class="flex items-center mt-1">
            <div class="flex text-yellow-400 text-sm">
              ★★★★★ <span class="text-gray-600 ml-2">(256)</span>
            </div>
          </div>
          <p class="text-sm text-gray-600 mt-2">360° surround sound with 20W output and IPX7 waterproof rating</p>
          <div class="flex items-center text-xs text-gray-500 mt-3 space-x-4">
            <span class="flex items-center">📦 <span class="ml-1">Free Shipping</span></span>
            <span class="flex items-center">🔥 <span class="ml-1">Bestseller</span></span>
          </div>
          <div class="flex justify-between items-center mt-4">
            <span class="text-lg font-semibold">$129</span>
            <button class="bg-green-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded-md transition-colors">
             Book
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
</body>
</template>