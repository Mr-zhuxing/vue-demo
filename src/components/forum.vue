<template lang="html">
    <div>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">数学</mt-tab-item>
            <mt-tab-item id="2">文学</mt-tab-item>
            <mt-tab-item id="3">自然科学</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <mt-cell v-for="n in 20" :title="'数学 ' + n"><span class="mint-cell-text">time</span></mt-cell>
                
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell v-for="n in 20" :title="'文学 ' + n"><span class="mint-cell-text">time</span></mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell v-for="n in 20" :title="'自然科学 ' + n"><span class="mint-cell-text">time</span></mt-cell>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "1"
    };
  }
};
</script>

<style scoped>
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 5px solid #26a2ff;
}
</style>