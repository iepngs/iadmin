<template>
  <div class="menutree">
    <label v-for="menu in data" :key="menu.path">
      <el-submenu :index="menu.path" v-if="menu.children">
        <template slot="title">
          <i v-if="menu.icon" :class="menu.icon"></i>
          <span>{{menu.name}}</span>
        </template>
        <label>
          <menutree :data="menu.children"></menutree>
        </label>
      </el-submenu>
      <el-menu-item v-else :index="menu.path">
        <i v-if="menu.icon" :class="menu.icon"></i>
        <span slot="title">{{menu.name}}</span>
      </el-menu-item>
    </label>
  </div>
</template>

<script>
import menutree from "@/components/menutree";
export default {
  name: "menutree",
  data() {
    return {
      menu_data: {},
    };
  },
  components: {
    menutree: menutree,
  },
  props: ["data"],
};
</script>