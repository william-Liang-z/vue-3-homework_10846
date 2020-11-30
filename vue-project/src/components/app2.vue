<template>
  <div class="container">
    <side-bar selected="0" :navItems="navItems" />

    <div class="main">
      <my-header />
      <div class="main-content">
        <router-view />
        <my-footer />
      </div>
    </div>
  </div>
</template>

<script>
import sideBar from "@/components/pro2/sideBar";
import myHeader from "@/components/pro2/header";
import myFooter from "@/components/pro2/footer";
export default {
  data() {
    return {
      selected: 0,
      navItems: [
        {
          icon: "iconshouye1",
          title: "首页",
        },
        {
          icon: "iconqiye",
          title: "企业管理",
        },
        {
          icon: "iconcaiwu",
          title: "财务管理",
        },
        {
          icon: "iconchanpin",
          title: "产品管理",
        },
        {
          icon: "iconorder-copy",
          title: "订单管理",
        },
        {
          icon: "iconhuiyuan",
          title: "管理会员",
        },
        {
          icon: "iconshuju",
          title: "数据概括",
        },
      ],
    };
  },
  components: { sideBar, myHeader, myFooter },
};
</script>

<style>
@import url("../assets/font2/iconfont.css");
@import url("../assets/css/index2.css");
.sidebar {
  height: 100vh;
  text-align: left;
}
.main {
  min-height: 100vh;
}
.content-count {
  text-align: left;
}
</style>>

