<template>
  <div>
    <h1>
      Missing Pokemon Id on Route
    </h1>
    <v-btn
      class="mr-4 mt-6"
      :to="{name: 'default'}"
    >
      Back to Home
    </v-btn>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home"
  // components: {
  //   HelloWorld,
  // },
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
