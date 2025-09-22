<template>
  <div
    class="flex min-h-screen w-screen items-center justify-center text-gray-600"
  >
    <div class="relative">
      <div
        class="hidden sm:block h-56 w-56 text-green-600 absolute a-z-10 -left-20 -top-20"
      >
      </div>
      <div
        class="hidden sm:block h-28 w-28 text-green-600 absolute a-z-10 -right-20 -bottom-20"
      >
      </div>
      <!-- Register -->
      <div
        class="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-orange-100 shadow-lg px-4"
      >
        <div class="flex-auto p-6">
          <!-- Logo -->
          <div
            class="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden"
          >
            <a
              href="#"
              class="flex cursor-pointer items-center gap-2 text-green-500 no-underline hover:text-green-500"
            >
              <img
                class="h-8 mr-4"
                src="https://airhex.com/images/airline-logos/tailwind-airlines.png"
                alt="Your Logo"
                width="100"
              />
            </a>
          </div>
          <!-- /Logo -->
          <h4 class="mb-2 font-medium text-gray-700 xl:text-xl">
            Welcome to Tusafiri!
          </h4>
          <p class="mb-6 text-gray-500">
            Please sign-up to access your account
          </p>

          <form @submit.prevent="submitForm" class="mb-4">

            <div class="mb-4">
  <label for="name" class="mb-2 inline-block text-xs font-medium uppercase text-gray-700">
    Name
  </label>
  <input
    id="name"
    type="text"
    v-model="name"
    class="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-green-500 focus:bg-white focus:text-gray-600 focus:shadow"
    placeholder="Enter your name"
  />
</div>

<div class="mb-4">
  <label for="email" class="mb-2 inline-block text-xs font-medium uppercase text-gray-700">
    Email
  </label>
  <input
    id="email"
    type="email"
    v-model="email"
    class="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-green-500 focus:bg-white focus:text-gray-600 focus:shadow"
    placeholder="Enter your email"
  />
</div>

<div class="mb-4">
  <label for="phone" class="mb-2 inline-block text-xs font-medium uppercase text-gray-700">
    Phone
  </label>
  <input
    id="phone"
    type="tel"
    v-model="phone"
    class="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-green-500 focus:bg-white focus:text-gray-600 focus:shadow"
    placeholder="Enter your phone"
  />
</div>

<div class="mb-4">
  <label for="password" class="mb-2 inline-block text-xs font-medium uppercase text-gray-700">
    Password
  </label>
  <input
    id="password"
    type="password"
    v-model="password"
    class="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-green-500 focus:bg-white focus:text-gray-600 focus:shadow"
    placeholder="············"
  />
</div>

            <div class="mb-4">
              <div class="block">
                <label class="inline-block" for="remember-me">
                  Remember Me
                </label>
              </div>
            </div>
            <div class="mb-4">
              <button
                class="grid w-full cursor-pointer select-none rounded-md border border-green-500 bg-green-500 py-2 px-5 text-center align-middle text-sm text-black shadow hover:border-green-600 hover:bg-green-600 hover:text-white focus:border-green-600 focus:bg-green-600 focus:text-white focus:shadow-none"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p class="mb-4 text-center">
            Have an account?
            <a
              href="/Login"
              class="cursor-pointer text-green-500 no-underline hover:text-green-500"
            >
              Sign In
            </a>
          </p>
          <!-- Social Login -->
          <div class="mb-4 flex items-center justify-center">
            <span class="text-xs text-gray-500">Or sign up with</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      password: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/register', {
          name: this.name,
          email: this.email,
          phone: this.phone,
          password: this.password,
        });
        console.log("Registration successful:", response.data);
        this.$router.push('/landing');
      } catch (error) {
        console.error("Registration failed:", error);
      }
    },
  },
};
</script>
