<template>
  <div class="bar">
    <nav>
      <ul class="nav-bar">
        <li class="item"><a class="task-item" href="/">Home</a></li>
        <li class="item">
          <a class="task-item" href="/activities/activities">Activities</a>
        </li>
        <li class="item">
          <a class="task-item" href="/vtour/vtour">Virtual Tour</a>
        </li>
        <li class="item"><a class="task-item" href="/blog/blog">Blog</a></li>
        <li class="item">
          <a class="task-item" href="/others/pricing">Pricing</a>
        </li>
        <li class="item">
          <a class="task-item" href="https://github.com/TheChineseMuppet/Lake-Side">CodeBase</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bar {
  overflow: hidden;
  margin: 0;
  position: relative;
}

.nav-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.item {
  text-shadow: 2px 2px rgba(0, 0, 0, 0.116);
  text-align: center;
  list-style: none;
  margin-inline: 1em;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  padding: 0.5ch;
}

.item:hover {
  transform: translateX(2px) translateY(2px);
  transition: all 0.1s;
  text-decoration: underline;
}

.task-item {
  color: black;
}

.task-item:link {
  color: black;
  background-color: transparent;
  text-decoration: none;
}

.task-item:hover {
  color: black;
  background-color: transparent;
  text-decoration: none;
}

.task-item:active {
  color: black;
  background-color: transparent;
  text-decoration: none;
}

@media screen and (max-width: 600px) {
  .item {
    margin-inline: auto;
  }
}
</style>
