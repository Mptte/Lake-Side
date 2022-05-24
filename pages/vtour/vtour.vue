<!-- TODO:https://www.figma.com/file/Ww6wivYFNDJugxkd2RedZP/Diagram---Untitled?node-id=2%3A2 -->
<template>
  <div class="wrapper">
    <div class="item"><ThreeVR1></ThreeVR1></div>
    <div class="item"><ThreeVR1></ThreeVR1></div>
    <div class="item"><ThreeVR1></ThreeVR1></div>
    <div class="item"><ThreeVR1></ThreeVR1></div>
    <div class="item"><ThreeVR1></ThreeVR1></div>
  </div>
</template>

<script>
import ThreeVR1 from "../../components/ThreeVR.vue";
export default { components: { ThreeVR1 } };
</script>

<style>
.wrapper {
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(3, 1fr);
  background-color: burlywood;
}

.item {
  margin: auto;
  background-color: brown;
}
</style>
