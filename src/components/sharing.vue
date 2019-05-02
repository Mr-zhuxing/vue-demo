<template lang="html">
    <div>
        <mt-swipe :auto="2000" id="swipe" :showIndicators='true'>
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
            <a class="active"><span class="mui-icon mui-icon-arrowright" @click="swipeMove('right')"></span></a>
            <a class="active"><span class="mui-icon mui-icon-arrowleft" @click="swipeMove('left')"></span></a>
        </mt-swipe>

      <!-- 内容 -->
      <div class="mui-card">
          <div class="mui-card-content">
            <div class="mui-card-content-inner">
              <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp世界那么大</p>
              <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp那么校园近吗？</p>
            </div>
          </div>
    
        </div>

        <!-- 九(六)宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="./html/tab-vertical-scroll.html">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">学术交流</div>
                        </a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="./html/innovation/index.html">
		                    <span class="mui-icon mui-icon-extra mui-icon-extra-prech"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">创新创业</div>
                        </a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="./html/server/index.html">
		                    <span class="mui-icon mui-icon-flag"></span>
		                    <div class="mui-media-body">自愿服务</div>
                        </a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="./html/share/index.html">
		                    <span class="mui-icon mui-icon-extra mui-icon-extra-share"></span>
		                    <div class="mui-media-body">资源共享</div>
                        </a>
                    </li>
		            <!-- <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div>
                        </a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div>
                        </a>
                    </li> -->
		</ul>
     
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    swipeMove: function(direction) {
      console.log(direction);
    }
  }
};
</script>

<style lang="scss" scoped>
.mui-card-content-inner {
  font-size: 20px;
  color: green;
  // text-align: center;
  line-height: 25px;
  p{
    font-size: 20px;
  }
}

#swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background: url(../imgs/2.png);
      background-size: 100% 100%;
    }
    &:nth-child(2) {
      background: url(../imgs/3.png);
      background-size: 100% 100%;
    }
    &:nth-child(3) {
      background: url(../imgs/4.png);
      background-size: 100% 100%;
    }
  }
}
.mui-table-view-cell {
  width: 50%;
}
.mui-icon-arrowright {
  top: 50%;
  left: 90%;
  transform: translateY(-50%);
  z-index: 999;
  position: absolute;
}
.mui-icon-arrowleft {
  top: 50%;
  right: 90%;
  transform: translateY(-50%);
  z-index: 999;
  position: absolute;
}
.mui-grid-9{
  background-color: #fff;
}
#swipe{
 height: 150px;
}
</style>