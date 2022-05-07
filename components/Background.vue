<template>
  <video id="videoBg" src="background.mp4" loop muted autoplay />

</template>

<script>
export default{}

</script>


<style>
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  #videoBg {
    position: fixed;
    z-index: -1;
  }

  html,body{
    margin: 0;
  }


</style>