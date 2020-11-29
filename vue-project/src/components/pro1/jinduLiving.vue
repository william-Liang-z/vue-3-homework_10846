<template>
  <div class="nav fn-textcenter">
    <ul>
      <Li  v-for="(v,i) in items" :key="i" class="nav-lists">
        <i class="icon-lists iconfont" :class="v.icon"></i>
        <span>{{v.title}}</span>
      </Li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: 'iconfenzu',
          title: '美食'
        },
        {
          icon: 'icondianying',
          title: '电影'
        },
        {
          icon: 'iconzhusu',
          title: '住宿'
        },
        {
          icon: 'iconQQkandian',
          title: '娱乐'
        },
        {
          icon: 'iconkuaidi1',
          title: '外卖'
        },
        {
          icon: 'icondache',
          title: '打车'
        },
        {
          icon: 'iconmeijing',
          title: '景点'
        },
        {
          icon: 'iconlvyou',
          title: '旅游'
        }
      ]
    }
  }
};
</script>

<style>
@import url("../../assets/font/iconfont.css");
@import url("../../assets/css/index.css");
</style>