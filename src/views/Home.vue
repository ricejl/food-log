<template>
  <div class="home container-fluid">
    <header class="row">
      <div class="col pt-4">
        <h1>
          <img id="logo" alt="Vue logo" src="../assets/logo.png" />eganish
        </h1>
      </div>
    </header>
    <main class="row">
      <div class="col-12 pt-3 pb-3">
        <form @submit.prevent="createLog">
          <input
            id="date-field"
            class="form-control"
            type="date"
            v-model="newLog.date"
            required
          />
          <button class="btn btn-outline-success">Start Log</button>
        </form>
      </div>
      <div class="col-12">
        <ul>
          <li v-for="log in logs" :key="log._id" id="log-list">
            <router-link :to="{ name: 'log', params: { id: log._id } }"
              >{{ log.date }} <i class="fas fa-arrow-right"></i
            ></router-link>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getAllLogs");
  },
  data() {
    return {
      newLog: {
        date: ""
      }
    };
  },
  methods: {
    createLog() {
      let log = { ...this.newLog };
      this.$store.dispatch("createLog", log);
      this.newLog = { date: "" };
    }
  },
  computed: {
    logs() {
      return this.$store.state.logs;
    }
  },
  components: {}
};
</script>
<style>
#logo {
  height: 1.5em;
}
#date-field {
  max-width: 30vw;
  display: inline-block;
}
#log-list {
  list-style-type: none;
}
</style>
