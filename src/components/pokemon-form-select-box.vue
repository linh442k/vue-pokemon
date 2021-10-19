<template>
  <validation-provider
    v-slot="{ errors }"
    name="select"
    :rules="rules"
  >
    <!--    @click="$emit('fetch-data')"-->
    <v-select
      :value="value"
      @change="$emit('input', choice)"
      v-model="choice"
      :items="items"
      :error-messages="errors"
      :label="label"
      data-vv-name="select"
      outlined
    >
      <template #append-item>
        <v-list-item
          disabled>
          <!--          <v-list-item-icon-->
          <!--          >-->
          <!--            <v-icon>mdi-refresh</v-icon>-->
          <!--          </v-list-item-icon>-->
          <v-list-item-content
          >
            <v-list-item-title
              v-text="'Loading...'"
              v-intersect="onBottomDetect"
            >
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-select>
  </validation-provider>
</template>

<script>
export default {
  // props: ["items", "value", "label", 'rules'],
  props: {
    items: {
      type: [Array, String, Object]
    },
    value: {},
    label: {
      type: String
    },
    rules: {
      type: [String, Object]
    }
  },
  data: () => {
    return {
      choice: "",
      firstFetch: false
    };
  },
  methods: {
    onBottomDetect(entries) {
      if (!this.firstFetch) {
        setTimeout(() => {
          this.firstFetch = true;
          return;
        }, 100);
      }
      if (this.firstFetch)
        if (entries[0].isIntersecting) {
          // if(entries[0].intersectionRatio >= 0.5)
          console.log("reach bottom");
          this.$emit("fetch-more-data");
        }
    }
  }
};
</script>