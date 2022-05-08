<template>
  <NavbarLite></NavbarLite>
  <h1 class="Heading">Lakeside</h1>
  <h1
    class="Heading"
    style="
      font-family: 'Amatic SC', cursive;
      font-weight: 700;
      margin-bottom: 3ch;
    "
  >
    Watersports
  </h1>

  <div class="container"><card></card></div>
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
main,
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
  padding: 2%;
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
  background-color: rgba(240, 248, 255, 0);
}

.Heading {
  align-self: center;
  text-align: center;
  font-family: "Amatic SC", cursive;
  color: rgb(0, 0, 0);
  font-weight: 400;
  font-size: 5em;
  margin: 5vh;
  line-height: 3vh;
}

html {
  background-image: url(bg.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}

@media screen and (max-width: 600px) {
  .container {
    margin-inline: 10vw;
  }
}
</style>
