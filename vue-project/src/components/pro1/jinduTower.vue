<template>
  <div class="index-content">
    <div class="banner">
      <img
        v-for="(img, i) in images" :key="i"
        v-show="i == selected"
        :src="img"
      />
      <div class="banner-circle fn-textcenter">
        <ul>
          <li
            v-for="(v, i) in images.length"
            :key="i"
            :class="{ selected: selected == i }"
            @click="selected = i"
          ></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        require("@/assets/images/1.jpg"),
        require("@/assets/images/2.jpg"),
      ],
      bannerCircle: [],
      selected: 0,
      timer: 0,
    };
  },
  methods: {
    changeImage() {
      this.selected++;
      this.selected >= this.images.length && (this.selected = 0);
    },
  },
  mounted() {
    this.timer = setInterval(this.changeImage, 2000);
  },
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>

<style>
@import url("../../assets/font/iconfont.css");
@import url("../../assets/css/index.css");
/* .li{
  margin-left: 5px;
} */
</style>