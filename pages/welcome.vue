<template>
  <el-container>
    <el-aside width="200px">
      <SideMenus :menus="menus" :isCollapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <MenuHeader :isCollapse="isCollapse" v-on:set-collapse="setCollapse" />
      </el-header>
      <el-main>
        <NuxtChild />
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
<script>
// https://blog.csdn.net/qq_39410421/article/details/86736764
import SideMenus from "@/components/SideMenus.vue";
import MenuHeader from "@/components/MenuHeader.vue";

export default {
  async asyncData({ $axios }) {
    const url =
      "/api/search/item_search_ext.html?activeIndex=4&biz_channel=&brandId=&discountOrder=-1&firstCate=0&keyword=&limit=16&maxPrice=1000&minPrice=800&page=1&priceOrder=-1&secondCate=70016&sex=0&shopId=&typeName=";
    const response = await $axios.get(url);
    console.log(response.data);
  },
  name: "Welcome",
  components: { SideMenus, MenuHeader },
  data: function () {
    return {
      isCollapse: false,
      menus: [
        {
          name: "welcome",
          path: "/welcome",
          icon: "sugar",
          userType: ["0"],
        },
        {
          name: "用户管理",
          path: "",
          icon: "user",
          userType: ["0", "1"],
          children: [
            {
              name: "用户列表",
              path: "/welcome/users",
              // icon: "minus",
              userType: ["0", "1"],
            },
            {
              name: "新增用户",
              path: "/users/add",
              // icon: "minus",
              userType: ["1"],
            },
          ],
        },
        {
          name: "Topic管理",
          path: "/user/topic",
          icon: "topic",
          userType: ["1"],
        },
        {
          name: "数据统计",
          path: "/user/topic",
          icon: "data-analysis",
          userType: ["0"],
        },
      ],
    };
  },
  mounted() {
    this.loadDatum();
  },
  methods: {
    async loadDatum() {
      const response = await this.$axios.get(`/api/index.html`);
      console.log(response);
    },
    setCollapse: function () {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>