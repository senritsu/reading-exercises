<template>
  <div class="h-full w-full flex flex-col">
    <NavHeader />
    <main
      flex-1 px-4 py-4
      text="center gray-700 dark:gray-200"
    >
      <RouterView />
    <!-- <TheFooter />
    <div mx-auto mt-5 text-center text-sm opacity-50>
      [Default Layout]
    </div> -->
    </main>
    <TheFooter />
  </div>
</template>
