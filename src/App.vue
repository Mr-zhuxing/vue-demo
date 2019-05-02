<template lang="html">
  <div id="box">
    <!-- 头部 -->
    <mt-header fixed title="college sharing">
      <a href="./html/login/index.html" slot="left">
        <mt-button icon="back">返回</mt-button>
      </a>
      <mt-button slot="right">
        <span class="mui-icon mui-icon-gear"></span>
      </mt-button>
    </mt-header>

    <!-- 中间代码 -->
    <transition>
      <router-view id="content"></router-view>
    </transition>
    
    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/sharing">
				<span class="mui-icon mui-icon-extra mui-icon-extra-university"></span>
				<span class="mui-tab-label">sharing</span>
			</router-link>
			<router-link class="mui-tab-item" to="/forum">
				<span class="mui-icon mui-icon-extra mui-icon-extra-gold">
          <!--右上角123小图标 <span class="mui-badge"></span> -->
        </span>
				<span class="mui-tab-label">论坛</span>
			</router-link>
			<router-link class="mui-tab-item" to="/activity">
				<span class="mui-icon mui-icon-extra mui-icon-extra-holiday"></span>
				<span class="mui-tab-label">活动</span>
			</router-link>
			<router-link class="mui-tab-item" to="/mine">
				<span class="mui-icon mui-icon-contact mui-icon-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
    
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      
    };
  }
};
</script>
 
<style lang="css" scoped>
#box {
  padding-top: 40px;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
#content{
  width: 100%;
  height: 100%;
  word-wrap: break-word;
}
/* router移动时动画 */
.v-enter{
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active{
  transition: all 0.2s ease;
}
</style>
