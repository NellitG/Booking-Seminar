<template>
  <div
    class="flex min-h-screen w-screen items-center justify-center text-gray-600 bg-gray-50"
  >
    <div class="relative">
      <div
        class="hidden sm:block h-56 w-56 text-orange-300 absolute a-z-10 -left-20 -top-20"
      > 
      </div>
      <div
        class="hidden sm:block h-28 w-28 text-orange-300 absolute a-z-10 -right-20 -bottom-20"
      >
      </div>
      <!-- Register -->
      <div
        class="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-green-100 shadow-lg px-4"
      >
        <div class="flex-auto p-6">
          <!-- Logo -->
          <div
            class="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden"
          >
            <a
              href="#"
              class="flex cursor-pointer items-center gap-2 text-orange-500 no-underline hover:text-orange-500"
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
            Login To Tusafiri
          </h4>
          <p class="mb-6 text-gray-500">Please Login to access your account</p>

          <form id="" class="mb-4" action="#" method="POST">
            <div class="mb-4">
              <label
                for="email"
                class="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                >Email</label
              >
              <input
                type="text"
                class="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-orange-500 focus:bg-white focus:text-gray-600 focus:shadow"
                id="email"
                name="email-username"
                placeholder="Enter your email"
              />
            </div>
            <div class="mb-4">
              <div class="flex justify-between">
                <label
                  class="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                  for="password"
                  >Password</label
                >
                <a
                  href="auth-forgot-password-basic.html"
                  class="cursor-pointer text-orange-500 no-underline hover:text-orange-500"
                >
                  <small class=" ">Forgot Password?</small>
                </a>
              </div>
              <div class="relative flex w-full flex-wrap items-stretch">
                <input
                  type="password"
                  id="password"
                  class="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-orange-500 focus:text-gray-600 focus:shadow"
                  name="password"
                  placeholder="············"
                />
              </div>
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
                class="grid w-full cursor-pointer select-none rounded-md border border-orange-500 bg-orange-500 py-2 px-5 text-center align-middle text-sm text-black shadow hover:border-orange-600 hover:bg-orange-600 hover:text-white focus:border-orange-600 focus:bg-orange-600 focus:text-white focus:shadow-none"
                type="submit"
              >
                Sign in
              </button>
            </div>
          </form>
          <br />

          <p class="mb-4 text-center">
            New on Tusafiri
            <a
              href="/SignUp"
              class="cursor-pointer text-orange-500 no-underline hover:text-orange-500"
            >
              Create an account
            </a>
          </p>
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
      email: '',
      password: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/login', {
          email: this.email,
          password: this.password,
        });
        console.log("Login successful:", response.data);
        this.$router.push('/landing');
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
  },
};
</script>
