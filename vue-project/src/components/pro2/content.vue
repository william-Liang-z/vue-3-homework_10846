<template>
  <div class="main-content">
    <div class="content-count">
      <ul>
        <li class="count-list" v-for="(v, i) in mainItems" :key="i">
          <i class="list-icon iconfont" :class="v.icon"></i>
          <span>{{ v.title }}</span>
          <p>{{ v.introduction }}</p>
          <a :href="v.link">【更多】</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainItems: [
        {
          icon: 'iconqiye',
          title: '企业管理',
          introduction: '金渡教育企业管理说明',
          link: '#'
        },
        {
          icon: 'iconcaiwu',
          title: '财务管理',
          introduction: '金渡教育财务管理说明',
          link: '#'
        },
        {
          icon: 'iconchanpin',
          title: '产品管理',
          introduction: '金渡教育产品管理说明',
          link: '#'
        },
        {
          icon: 'iconorder-copy',
          title: '订单管理',
          introduction: '金渡教育订单管理说明',
          link: '#'
        },
      ]
    }
  }
};
</script>

<style>
</style>