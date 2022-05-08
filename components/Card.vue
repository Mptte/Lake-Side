<template>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <div class="card-wrapper">
    <div class="card">
      <div class="text">
        <h1 class="header-text">Bringing life to Chaliyar</h1>
        <p class="paragraph">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
          eligendi earum aut natus atque et eius doloremque corrupti aliquam
          neque expedita debitis a repudiandae laudantium quos porro nihil in,
          beatae inventore! Dolore, fugit. Velit ratione a fuga deserunt vitae
          quod? Fugit ipsa qui eius mollitia quia dolores sapiente deserunt
          amet, autem modi. Amet quod saepe temporibus, repudiandae voluptates
          minus animi ad eaque dolore nemo. Ducimus vel est ipsa quisquam
          accusantium adipisci iste mollitia maiores, corrupti quibusdam,
          aspernatur asperiores voluptate? Officiis.
        </p>
      </div>
      <img class="image" src="chaliyar.jpg" alt="chaliyar" />
    </div>
    <div class="card">
      <div class="text">
        <h1 class="header-text">Hello</h1>
        <p class="paragraph">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
          eligendi earum aut natus atque et eius doloremque corrupti aliquam
          neque expedita debitis a repudiandae laudantium quos porro nihil in,
          beatae inventore! Dolore, fugit. Velit ratione a fuga deserunt vitae
          quod? Fugit ipsa qui eius mollitia quia dolores sapiente deserunt
          amet, autem modi. Amet quod saepe temporibus, repudiandae voluptates
          minus animi ad eaque dolore nemo. Ducimus vel est ipsa quisquam
          accusantium adipisci iste mollitia maiores, corrupti quibusdam,
          aspernatur asperiores voluptate? Officiis.
        </p>
      </div>
      <img class="image" src="chaliyar.jpg" alt="chaliyar" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
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
  background-color: aliceblue;
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
}

.paragraph {
  text-align: center;
  margin: 3ch;
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
