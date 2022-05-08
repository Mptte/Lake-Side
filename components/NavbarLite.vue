<template>
  <div class="bar">
    <nav>
      <ul class="nav-bar">
        <li class="item"><a class="task-item" href="#">Home</a></li>
        <li class="item">
          <a class="task-item" href="/activities/activities">Activities</a>
        </li>
        <li class="item"><a class="task-item" href="/blog/blog">Blog</a></li>
        <li class="item">
          <a class="task-item" href="/others/pricing">Pricing</a>
        </li>
        <li class="item">
          <a class="task-item" href="/others/contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
.bar {
  padding-top: 1vh;
  padding-bottom: 1vh;
}

.nav-bar {
  display: flex;
  align-items: center;
  justify-content: center;
}

.item {
  list-style: none;
  margin-inline: 1ch;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  text-align: justify;
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
</style>
