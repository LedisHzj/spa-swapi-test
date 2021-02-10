<template>
  <div class="home">
    <el-row>
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
          <el-menu-item index="1" @click="handleClick('films')">Films</el-menu-item>
          <el-menu-item index="2" @click="handleClick('people')">People</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <el-row v-for="(item, index) in returnedData" :key="index">
      <el-col v-if="item.title">
        <ul>
          <li >{{item.title}}</li>
        </ul>
      </el-col>
      <el-col v-if="item.name">
        <ul>
          <li>{{item.name}}</li>
        </ul>
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
    };
  },
  created(){
    this.handleClick('films');
  },
  methods: {
    handleClick(arg) {
      axios
        .get(this.endpoint + arg)
        .then((response) => {
          this.returnedData = response.data.results;
          return this.returnedData;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
