<template>
  <div class="home">
    <el-row class="menu-row">
      <el-col>
        <el-menu
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          default-active="1"
        >
          <el-menu-item>
            <img style="width: 40px; height: 40px;" src="../assets/logo.png" />
          </el-menu-item>
          <el-menu-item
            index="1"
            @click="
              handleClick(films);
              togleFilms();
            "
            >Films</el-menu-item
          >
          <el-menu-item
            index="2"
            @click="
              handleClick(people);
              toglePeople();
            "
            >People</el-menu-item
          >
        </el-menu>
      </el-col>
    </el-row>
    <el-row>
      <el-col v-if="isToggled">
        <el-card shadow="never">
          <el-table
            :data="returnedData"
            v-loading="loading"
            element-loading-text="Loading..."
            element-loading-spinner="el-icon-loading"
          >
            <el-table-column label="Title" prop="title"></el-table-column>
            <el-table-column label="Episode id" prop="episode_id"></el-table-column>
            <el-table-column label="Director" prop="director"></el-table-column>
            <el-table-column label="Producer" prop="producer"></el-table-column>
            <el-table-column
              label="Release date"
              prop="release_date"
            ></el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col v-else>
        <el-card shadow="never">
          <el-table
            :data="returnedData"
            v-loading="loading"
            element-loading-text="Loading..."
            element-loading-spinner="el-icon-loading"
          >
            <el-table-column label="Name" prop="name" width="140"></el-table-column>
            <el-table-column label="Height" prop="height"></el-table-column>
            <el-table-column label="Mass" prop="mass"></el-table-column>
            <el-table-column label="Hair Color" prop="hair_color"></el-table-column>
            <el-table-column label="Skin Color" prop="skin_color"></el-table-column>
            <el-table-column label="Eye Color" prop="eye_color"></el-table-column>
            <el-table-column label="Birth Year" prop="birth_year"></el-table-column>
            <el-table-column label="Gender" prop="gender"></el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      returnedData: null,
      endpoint: "https://swapi.dev/api/",
      films: "films",
      people: "people",
      isToggled: true,
      loading: false,
    };
  },
  created() {
    this.handleClick(this.films);
  },
  methods: {
    handleClick(arg) {
      this.loading = true;
      axios
        .get(this.endpoint + arg)
        .then((response) => {
          this.returnedData = response.data.results;
          return this.returnedData;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        }, 2000);
    },
    togleFilms() {
      this.isToggled = true;
    },
    toglePeople() {
      this.isToggled = false;
    },
  },
};
</script>

<style scoped>
.menu-row {
  margin-bottom: 28px;
}
</style>
