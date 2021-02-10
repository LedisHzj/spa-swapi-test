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
            @click="fetchData('films');"
            >
              Films
            </el-menu-item
          >
          <el-menu-item
            index="2"
            @click="fetchData('people');"
            >
              People
            </el-menu-item
          >
        </el-menu>
      </el-col>
    </el-row>
    <el-row>
      <el-col v-if="active === 'films'">
        <el-card shadow="never">
          <el-table
            :data="returnedData"
            v-loading="loading"
            element-loading-text="Loading..."
            element-loading-spinner="el-icon-loading"
            @cell-click="addSomething"
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
            @cell-click="addSomething"
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
    <el-row>
      <el-row v-if="selectedItem" class="selected-items">
        <el-col>{{itemDetails}}</el-col>
      </el-row>
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
      loading: false,
      active: 'films',
      selectedItem: null,
    };
  },
  created() {
    this.fetchData('films');
  },
  computed: {
    itemDetails: function () {
      return Object.keys(this.selectedItem || {}).filter((key) => {
        return Array.isArray(this.selectedItem[key]);
      }).map((key) => {
        return this.selectedItem[key].length + ' ' + key;
      }).join(', ');
    }
  },
  methods: {
    fetchData(arg) {
      this.loading = true;
      axios
        .get(this.endpoint + arg)
        .then((response) => {
          this.active = arg;
          this.selectedItem = null;
          this.returnedData = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    addSomething(item) {
      this.selectedItem = item;
    },
  }
};
</script>

<style scoped>
.menu-row {
  margin-bottom: 28px;
}

.selected-items {
  background-color: #d3dce6;
  text-align: center;
  padding: 20px;
  margin-top: 10px;
}
</style>