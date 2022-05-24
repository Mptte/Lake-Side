<template>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <div class="card-wrapper">
    <div class="card">
      <div class="text">
        <h1 class="header-text">{{ title }}</h1>
        <p class="paragraph">
          {{ paragraph }}
        </p>
      </div>
      <img class="image" :src="imageUrl" alt="image" />
    </div>
  </div>
</template>

<script>
export default defineComponent({
  props: {
    paragraph: String,
    title: String,
    imageUrl: String,
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400&family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400&family=Ubuntu:wght@300&display=swap");
.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
}

.card {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2ch;
  box-shadow: 4px 4px rgba(0, 0, 0, 0.103);
  border: 1px solid rgb(214, 212, 212);
  background-color: rgb(240, 248, 255);
}

.card:hover {
  transform: translateX(3px) translateY(3px);
  transition: all 0.2s;
}

.text {
  display: flex;
  flex-direction: column;
}

.header-text {
  text-align: center;
  font-family: "Ubuntu", sans-serif;
  margin: 01ch;
}

.paragraph {
  font-family: "Roboto Flex", sans-serif;
  font-weight: 700;
  text-align: center;
  margin: 3ch;
  border: 3px azure solid;
  border: 1px solid rgb(214, 212, 212);
  padding: 1ch;
}

.image {
  aspect-ratio: 16/9;
  max-width: 60vw;
  max-height: 25vh;
  margin-left: 1ch;
  margin: 2ch;
}

@media screen and (max-width: 600px) {
  .card {
    flex-direction: column;
  }
}
</style>
