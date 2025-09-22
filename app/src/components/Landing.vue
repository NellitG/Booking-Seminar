<template>
<section id="relume" class="relative flex h-[150vh] flex-col items-center">
    <div
      class="sticky top-[5vh] z-10 mb-[-5vh] mt-[5vh] flex h-[90vh] w-[90%] flex-col items-start justify-center overflow-hidden"
      style="width: 90%; height: 90vh; transform: none"
    >
      <div class="px-[5%] py-16 md:py-24 lg:py-28">
        <div class="container relative z-10 max-w-md">
          <h1 class="mb-5 text-6xl text-green-800 font-semibold text-text-alternative md:mb-6 md:text-9xl lg:text-5xl">
            Book Your Trip
          </h1>
          <p class="text-text-alternative md:text-md">
            Make Your Travel Easier and More Enjoyable with Our Comprehensive Booking Services.
          </p>
          <div class="mt-6 flex flex-wrap gap-4 md:mt-8">
            <button
              class="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-alternative px-6 py-3"
              title="Button"
            >
              Book</button
            ><button
              class="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-alternative text-text-alternative px-6 py-3"
              title="Button"
            >
              Button
            </button>
          </div>
        </div>
      </div>
      <div class="absolute inset-0 z-0" style="transform: none">
        <img
          src="https://img.freepik.com/premium-photo/image-white-cargo-van-isolated-white-background_373676-3398.jpg?w=1060"
          alt="Relume placeholder image"
          class="size-full object-cover"
        />
        
      </div>
      <button
        class="md:flex absolute bottom-[5%] right-[5%] flex w-full items-center justify-center md:max-w-[14rem] lg:max-w-xxs"
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="radix-:R1p:"
        data-state="closed"
        style="transform: none"
      >
      </button>
    </div>
    <div class="absolute inset-0 -z-10 mt-[100vh]"></div>
  </section>
</template>