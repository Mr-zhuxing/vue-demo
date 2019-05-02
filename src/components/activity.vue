<template lang="html">
    <div>
        <mt-swipe :auto="2000" id="swipe" :showIndicators='true'>
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
            <a class="active"><span class="mui-icon mui-icon-arrowright" @click="swipeMove('right')"></span></a>
            <a class="active"><span class="mui-icon mui-icon-arrowleft" @click="swipeMove('left')"></span></a>
        </mt-swipe>


        <!-- 九(六)宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <div class="img-icon img1"></div>
		                    <div class="mui-media-body">活动1</div>
                        </a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <div class="img-icon img2"></div>
		                    <div class="mui-media-body">活动2</div>
                        </a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <div class="img-icon img3"></div>
		                    <div class="mui-media-body">活动3</div>
                        </a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <div class="img-icon img4"></div>
		                    <div class="mui-media-body">活动4</div>
                        </a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <div class="img-icon img5"></div>
		                    <div class="mui-media-body">活动5</div>
                        </a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <div class="img-icon img6"></div>
		                    <div class="mui-media-body">活动6</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <div class="img-icon img7"></div>
		                    <div class="mui-media-body">活动7</div>
                        </a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <div class="img-icon img8"></div>
		                    <div class="mui-media-body">活动8</div>
                        </a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <div class="img-icon img9"></div>
		                    <div class="mui-media-body">活动9</div>
                        </a>
                    </li>
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
      background: url(../imgs/5.png);
      background-size: 100% 100%;
    }
    &:nth-child(2) {
      background: url(../imgs/6.png);
      background-size: 100% 100%;
    }
    &:nth-child(3) {
      background: url(../imgs/7.png);
      background-size: 100% 100%;
    }
  }
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


// img
.img-icon{
  margin: auto;
  background: url(../imgs/education-icon1.png);
  background-size: 500%;  
  width: 40px;
  height: 40px;
  &.img1{
  background-position: 20% 4%;
  }
  &.img2{
  background-position: 51% 4%;
  }
  &.img3{
  background-position: 84% 4%;
  }
  &.img4{
  background-position: 20% 50%;
  }
  &.img5{
  background-position: 51% 50%;
  }
  &.img6{
  background-position: 84% 50%;
  }
  &.img7{
  background-position: 20% 98%;
  }
  &.img8{
  background-position: 51% 98%;
  }
  &.img9{
  background-position: 84% 98%;
  }
}
#swipe{
 height: 170px;
}
</style>