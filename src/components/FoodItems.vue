<template>
  <div class="food-items">
    <div>
      <form @submit.prevent="searchFood">
        <input
          v-model="foodItem"
          class="form-control"
          type="text"
          placeholder="You ate what??"
          required
        />
        <button class="btn">Search <i class="fas fa-utensils"></i></button>
      </form>
    </div>
    <div>
      <!-- <div :key="foodItems._id" class="card" style="width: 18rem;">
        <img :src="foodItems.photo[highres]" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ foodItems.food_name }}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div> -->
      <div v-if="foodItems.length">
        {{ foodItems[0].food_name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FoodItems",
  data() {
    return {
      foodItem: ""
    };
  },
  methods: {
    searchFood() {
      let food = {
        query: this.foodItem,
        log: this.$route.params.id
      };
      this.$store.dispatch("searchFood", food);
      this.foodItem = "";
    }
  },
  computed: {
    foodItems() {
      return this.$store.state.foodItems;
    }
  }
};
</script>

<style></style>
