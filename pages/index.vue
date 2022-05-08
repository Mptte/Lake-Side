<template>
  <NavbarLite />
  <h1 class="Heading">Lakeside</h1>
  <h1
    class="Heading"
    style="font-family: 'Amatic SC', cursive; font-weight: 700"
  >
    Watersports
  </h1>

  <div>
    <h1 class="heading-cards">Beanbag river</h1>
    <p class="text-cards">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A laudantium
      fugit numquam repudiandae, officiis accusamus ducimus veritatis porro.
      Maxime magni tempora accusantium, nobis consequatur alias, voluptatum
      illum numquam culpa facilis placeat ab, impedit molestiae est doloribus
      sed sint omnis temporibus veritatis? Dolore iste voluptas nesciunt dolor
      at est nostrum, vel fuga hic minima tempora, aut quam. Fugiat eius
      laudantium maxime blanditiis ab voluptates deleniti. Amet aliquid,
      quisquam neque quam fugit nulla impedit sequi vero dolor perferendis cum
      obcaecati, officia non.
    </p>
  </div>
  <img src="chaliyar.jpg" class="images-cards" />
  <div class="cards">hello</div>
  <div class="cards">hello</div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Tapestry&display=swap");
:root() {
  --primary-font: "Ubuntu", sans-serif;
  --primary-weight: 400;
}

html,
body,
h1,
h2,
h3,
div {
  margin: 0;
  padding: 0;
}

#logoText {
  text-align: center;
  font-family: "Amatic SC", cursive;
  font-size: 9vh;
  background-image: url("logo_bg.jpg");
  padding: 2%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom left;
  margin: 0;
  z-index: -1;
}

.container {
  margin-inline: 15vw;
  align-items: center;
  align-content: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(240, 248, 255, 0.877);
}

.Heading {
  align-self: center;
  text-align: center;
  font-family: "Amatic SC", cursive;
  color: rgb(0, 0, 0);
  line-height: 3vh;
  font-weight: 400;
  font-size: 5em;
  margin: 5vh;
}

html {
  background-image: url(bg.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.cards {
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex: 70%;
}

.cards > * {
  flex: 30;
  align-self: center;
}

.cards img {
  max-width: 00px;
  aspect-ratio: 16/9;
  margin-right: 4ch;
}

.cards p {
  float: left;
}

.html,
body {
  min-height: 100vh;
}

.text-cards {
  text-align: justify;
  margin: 4ch;
}

@media screen and (max-width: 600px) {
  .cards {
    flex-direction: column;
  }

  .container {
    margin-inline: 5vw;
  }
}
</style>
