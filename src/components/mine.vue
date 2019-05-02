<template lang="html">
	<div>
		<div class="mui-content">
				
				<div class="mui-card">
					<!-- 无法展开 -->
					<ul class="mui-table-view">
							<li class="mui-table-view-cell">
								<a id="head" class="mui-navigate-right">头像
								<span class="mui-pull-right head">
									<img class="head-img mui-action-preview" id="head-img1" src="../imgs/1.jpg"/>
								</span>
							</a>
							</li>
							<li class="mui-table-view-cell">
								<a>姓名<span class="mui-pull-right">Hbuilder</span></a>
							</li>
							<li class="mui-table-view-cell">
								<a>座右铭<span class="mui-pull-right">苦逼啊</span></a>
							</li>
							<li class="mui-table-view-cell">
								<a>QQ号<span class="mui-pull-right">888888</span></a>
							</li>
							<li class="mui-table-view-cell">
								<a>手机号<span class="mui-pull-right">88888</span></a>
							</li>
					</ul>
				</div>
						
						
						<!-- 可展开 -->
				<div class="mui-card">
					<ul class="mui-table-view" @click="toggle">
						<li class="mui-table-view-cell mui-collapse" >
							<div style="pointer-events: none;">
							<a class="mui-navigate-right" href="#">好友</a>
							<div class="mui-collapse-content">
								<form class="mui-input-group">
									<div class="mui-input-row">
										<label>Input</label>
										<input type="text" placeholder="普通输入框">
									</div>
									<div class="mui-input-row">
										<label>Input</label>
										<input type="text" class="mui-input-clear" placeholder="带清除按钮的输入框">
									</div>
			
									<div class="mui-input-row mui-plus-visible">
										<label>Input</label>
										<input type="text" class="mui-input-speech mui-input-clear" placeholder="语音输入">
									</div>
									<div class="mui-button-row">
										<button class="mui-btn mui-btn-primary" type="button" onclick="return false;">确认</button>&nbsp;&nbsp;
										<button class="mui-btn mui-btn-primary" type="button" onclick="return false;">取消</button>
									</div>
								</form>
							</div>
							</div>
						</li>
						
						<li class="mui-table-view-cell mui-collapse">
							<div style="pointer-events: none;">
							<a class="mui-navigate-right" href="#">我创建的群聊</a>
							<div class="mui-collapse-content">
								<h1>h1. Heading</h1>
								<h2>h2. Heading</h2>
								<h3>h3. Heading</h3>
								<h4>h4. Heading</h4>
								<h5>h5. Heading</h5>
								<h6>h6. Heading</h6>
								<p>
									p. 目前最接近原生App效果的框架。
								</p>
							</div>
							</div>
						</li>
						<li class="mui-table-view-cell mui-collapse">
							<div style="pointer-events: none;">
							<a class="mui-navigate-right" href="#">我加入的群聊</a>
							<div class="mui-collapse-content">
								<h1>h1. Heading</h1>
								<h2>h2. Heading</h2>
								<h3>h3. Heading</h3>
								<h4>h4. Heading</h4>
								<h5>h5. Heading</h5>
								<h6>h6. Heading</h6>
								<p>
									p. 目前最接近原生App效果的框架。
								</p>
							</div>
							</div>
						</li>
						<li class="mui-table-view-cell mui-collapse">
							<div style="pointer-events: none;">
							<a class="mui-navigate-right" href="#">我的活动</a>
							<div class="mui-collapse-content">
								<h1>h1. Heading</h1>
								<h2>h2. Heading</h2>
								<h3>h3. Heading</h3>
								<h4>h4. Heading</h4>
								<h5>h5. Heading</h5>
								<h6>h6. Heading</h6>
								<p>
									p. 目前最接近原生App效果的框架。
								</p>
							</div>
							</div>
						</li>
						<li class="mui-table-view-cell mui-collapse">
							<div style="pointer-events: none;">
							<a class="mui-navigate-right" href="#">我的积分</a>
							<div class="mui-collapse-content">
								<h1>h1. Heading</h1>
								<h2>h2. Heading</h2>
								<h3>h3. Heading</h3>
								<h4>h4. Heading</h4>
								<h5>h5. Heading</h5>
								<h6>h6. Heading</h6>
								<p>
									p. 目前最接近原生App效果的框架。
								</p>
							</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggle: function() {
      //   console.log(event.target);
      event.stopPropagation();
      //   console.log(event.target.classList)
      //   console.log(event.target.parentNode.children)
      for (var el of event.target.parentNode.children) {
        if (el == event.target) {
          el.classList.toggle("mui-active");
          // console.log(el.querySelector('a'))
        } else {
          el.classList.remove("mui-active");
        }
      }
    }
  },
  created() {}
};
</script>

<style scoped>
img{
	width: 40px;
	height: 40px;
}
</style>