<template>
  <div class="landing">
    <NavbarLite></NavbarLite>
    <div class="landingtext">
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
    </div>
  </div>

  <div class="container">
    <card></card>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Tapestry&display=swap");
:root {
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
  margin-inline: 17vw;
  align-items: center;
  align-content: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(240, 248, 255, 0);
  position: relative;
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
  text-shadow: 1px 2px rebeccapurple;
}

.landing {
  background-image: url(bg1.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  min-width: 100vw;
  padding-bottom: 40vh;
  position: relative;
  overflow-x: hidden;
}

@media screen and (max-width: 600px) {
  .container {
    margin-inline: 10vw;
  }

  .landing {
    min-height: 50vh;
  }

  .Heading {
    line-height: 2ch;
  }
}

.landingtext {
  margin: auto;
}

body::-webkit-scrollbar {
  width: 0px; /* width of the entire scrollbar */
}
body::-webkit-scrollbar-track {
  background: rgba(252, 216, 216, 0.685); /* color of the tracking area */
}
body::-webkit-scrollbar-thumb {
  background-color: burlywood; /* color of the scroll thumb */
  border-radius: 20px; /* roundness of the scroll thumb */
}
</style>
