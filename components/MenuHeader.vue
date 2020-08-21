<template>
  <div>
    <el-button
      type="primary"
      class="nav-menu-control"
      icon="el-icon-s-fold"
      @click.native="$emit('set-collapse')"
    ></el-button>
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span>王小虎</span>
  </div>
</template>

<style>
.nav-menu-control {
  float: left;
}
</style>
