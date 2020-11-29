<template>
  <div class="content">
    <div class="main"><router-view /></div>
    <div class="bottom-nav">
      <div class="footer-lists fn-textcenter">
        <div class="footer-bottom">
          <ul>
            <li v-for="(v,i) in navMessages" :key="i">
              <router-link :to="v.to">
                <i class="iconfont" :class="v.icon"></i>
                <span>{{v.name}}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navMessages: [
        {
          name: '金渡小镇',
          icon: 'iconhuaban',
          to: '/app1/jinduTower'
        },
        {
          name: '金渡生活',
          icon: 'iconhi',
          to: '/app1/jinduLiving'
        },
        {
          name: '订单',
          icon: 'iconicon-',
          to: '111'
        },
        {
          name: '我的',
          icon: 'icongeren',
          to: '111'
        },
      ]
    };
  },
};
</script>

<style scoped>
@import url('../assets/font/iconfont.css');
@import url('../assets/css/index.css');
</style>>

