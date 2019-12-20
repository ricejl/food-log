<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col pt-4">
        {{ log.date }}
        <FoodItems />
        <!-- add food items here -->
      </div>
    </div>
  </div>
</template>

<script>
import FoodItems from "@/components/FoodItems";

export default {
  name: "log",
  mounted() {
    this.$store.dispatch("getActiveLog", this.$route.params.id);
  },
  computed: {
    log() {
      return this.$store.state.activeLog;
    }
  },
  components: {
    FoodItems
  }
};
</script>

<style></style>
