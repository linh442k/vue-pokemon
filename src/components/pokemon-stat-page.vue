<template>
  <div class="pokemon-info">
    <div v-if="loading">
      Loading...
    </div>

    <!--    <div v-if="error" class="error">-->
    <!--      {{ error }}-->
    <!--    </div>-->
    <div v-else>
      <div v-if="pokemonInfo" class="mt-6">
        <h1>{{ pokemonInfo.name }}</h1>
        <v-img
          lazy-src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          max-height="120"
          max-width="120"
          :src="{src: pokemonInfo.sprites.front_default}"
        >
          <template #placeholder>
              Loading...
          </template>
        </v-img>
        <div class="stats d-flex flex-wrap text-center">
          <div v-for="(stat, index) in pokemonInfo.stats"
               :key="`stat-${index}`"
               class="pa-6 ma-3">
            <v-responsive width="12rem">
              <h2>{{ stat.stat.name }}</h2>
              <v-progress-circular
                :rotate="rotate[Math.floor(Math.random()*rotate.length)]"
                :size="100"
                :width="15"
                :value="statPercent(stat.base_stat)"
                :color="color[index]"
              >
                {{ stat.base_stat }}
              </v-progress-circular>
            </v-responsive>
          </div>
        </div>
      </div>

      <div v-else>
        Invalid Pokemon
      </div>
    </div>
    <v-btn
      class="mr-4 mt-6"
      :to="{name: 'default'}"
    >
      Back to Home
    </v-btn>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      color: ["teal", "red", "blue", "orange", "cyan", "purple"],
      rotate: [-90, 90, 180, 360 ],
      loading: false,
      pokemonInfo: null
      // error: null,
    };
  },
  computed: {
    pokemonApi: function() {
      return this.$pokemonApi + this.$route.params.id;
    }
  },
  watch: {
    "$route": "fetchData"
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      // this.error =
      this.pokemonInfo = null;
      this.loading = true;
      // const fetchedId = this.$route.params.id
      axios.get(this.pokemonApi).then(response => {
        this.pokemonInfo = response.data;
        this.loading = false;
      });
      //   .then(response=>{
      //   this.pokemonInfo = response.data
      // }).then(
      // if (this.$route.params.id !== fetchedId) return
      // .then(this.loading = false)
      //
      // if (err) {
      //   this.error = err.toString()
      // } else {
      //   this.post = post
      // }
      // )
    },
    statPercent(stat){
      return stat/this.$pokemonMaxStat*100;
    }
  }
};

</script>