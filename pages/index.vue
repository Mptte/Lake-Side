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
    <div class="custom-shape-divider-top-1652099664">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
      </svg>
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
}

@media screen and (max-width: 600px) {
  .container {
    margin-inline: 10vw;
  }

  .landing {
    min-height: 50vh;
  }
}

.landingtext {
  margin: auto;
}

.custom-shape-divider-top-1652099664 {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  background-color: transparent;
}

.custom-shape-divider-top-1652099664 svg {
  fill: white;
}

.shape-fill {
  stroke: transparent;
  stroke-width: 0px;
}
</style>
