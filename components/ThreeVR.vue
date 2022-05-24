<template>
  <div class="scene"></div>
</template>

<script>
export default {
  mounted() {
    const scenes = Array.from(document.getElementsByClassName("scene"));
    scenes.forEach((v, i) => {
      v.innerHTML = "Hello";
    });
  },
};
</script>

<style></style>
