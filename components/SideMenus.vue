<template>
  <el-menu
    :default-active="$route.path"
    :unique-opened="true"
    :router="true"
    :collapse="isCollapse"
    class="el-menu-sideBar"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <menutree :data="menu_data"></menutree>
  </el-menu>
</template>

<script>
import menutree from "@/components/menutree";
import { left } from "@/config/init.json";
export default {
  name: "SideMenus",
  props: {
    isCollapse: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    menutree: menutree,
  },
  data() {
    return {
      menu_data: {},
    };
  },
  mounted() {
    this.menu_data = left.menu_data;
  },
};
</script>