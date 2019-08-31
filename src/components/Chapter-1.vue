<template>
  <div>
    <h2>Translucent boders</h2>

    <b-alert show variant="secondary">
      <vue-markdown>* default background would include the border</vue-markdown>
    </b-alert>

    <div class="box-1"></div>
    <br>
    <div class="box-2"></div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  components: {
    VueMarkdown
  }
};
</script>

<style>
.box-1 {
  background-color: red;
  height: 100px;
  width: 100px;
  border: green dashed 5px;
}

.box-2 {
  background-color: red;
  height: 100px;
  width: 100px;
  border: green dashed 5px;
}
</style>