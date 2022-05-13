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
export default defineComponent({
  props: {},
});
</script>

<style>
.bar {
  overflow: hidden;
  margin: 0;
  position: absolute;
  bottom: 0px;
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
  margin-inline: 2vw;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.item:hover {
  transform: translateX(2px) translateY(2px);
  transition: all 0.1s;
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
