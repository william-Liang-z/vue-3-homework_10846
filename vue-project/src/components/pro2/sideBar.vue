<template>
  <div class="sidebar">
    <div class="title">金渡教育后台管理</div>
    <ul>
      <li
        v-for="(v, i) in navItems"
        :key="i"
        :class="{ 'sidebar-list': selected == i }"
      >
        <router-link to="app2">
          <i class="iconfont" :class="v.icon"></i>
          <span>{{ v.title }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  props: {
    navItems: {
      type: Array,
      default: []
    },
    selected: {
      Number,
      default: 0
    }
  },
};
</script>

<style scoped>

</style>