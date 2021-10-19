<template>
  <div>
    <h1>Choose Your Pokemon</h1>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <!--      <form @submit.prevent="onSubmit">-->
      <div @click="fetchData">
        <!--        v-on:fetch-data="fetchData"  -->
        <pokemon-form-select-box
          :items="pokemonList"
          v-model="pokemonUrl"
          :label="'Select'"
          :rules="'required'"
          @fetch-more-data="fetchMoreData"
        />
      </div>
      <v-btn
        class="mr-4"
        :disabled="invalid"
        :to="{name: 'Pokemon', params: {id: pokemonID}}"
      >
        Check Pokemon Stats
      </v-btn>
      <!--      </form>-->
    </validation-observer>
<!--    <v-btn-->
<!--      class="mr-0"-->
<!--      @click="fetchMoreData">-->
<!--      Add More Items-->
<!--    </v-btn>-->
  </div>
</template>

<script>
import PokemonFormSelectBox from "@/components/pokemon-form-select-box";
import axios from "axios";

export default {
  components: { PokemonFormSelectBox },
  data: () => ({
    pokemonUrl: "",
    pokemonList: [],
    pokemonNumber: 10,
    pokemonOffset: 50
  }),
  computed:
    {
      pokemonID: function() {
        return this.pokemonUrl.length === 0 ? "" : this.pokemonUrl.split("/")[this.pokemonUrl.split("/").length - 2];
      },
      pokemonAPI: function() {
        return this.$pokemonListApi + "offset=" + this.pokemonOffset.toString() + "&limit=" + this.pokemonNumber.toString();
      }
    },
  methods: {
    // onSubmit() {
    //   window.open(this.pokemonUrl, "_blank");
    // },
    fetchData() {
      if (this.pokemonList.length === 0) {
        axios.get(this.pokemonAPI).then(response => {
            this.pokemonList = response.data.results.map(item => {
              return {
                text: item.name,
                value: item.url
              };
            });
          }
        );
      }
    },
    fetchMoreData() {
      this.pokemonOffset += this.pokemonNumber;
      axios.get(this.pokemonAPI).then(response => {
          this.pokemonList = this.pokemonList.concat(response.data.results.map(item => {
            return {
              text: item.name,
              value: item.url
            };
          }));
        }
      );
    }
  }
};
</script>