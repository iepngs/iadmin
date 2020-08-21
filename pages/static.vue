<template>
  <div id="nav-wrapper">
      <p>show something on parent page</p>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1" @click="$router.push({name: 'index'})">首页</el-menu-item>
      <el-menu-item index="3" @click="$router.push({name: 'users'})">用户页面</el-menu-item>
      <el-menu-item index="4" @click="$router.push({name: 'active'})">活动页面</el-menu-item>
    </el-menu>
  </div>
</template>