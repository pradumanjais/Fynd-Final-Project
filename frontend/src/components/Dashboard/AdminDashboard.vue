<template>
    <div id="DashboardCont">
          <div id="name">Name</div>

          <div id="BtnCont">
            <button class="btn btn-primary" @click="action='PostInfo'">Post</button>
            <button class="btn btn-primary" @click="action='UpdatePost'">Delete Post</button>
            <button class="btn btn-primary" @click="action='DeletePost'">Fetch Complain</button>
          </div>
          <keep-alive>
            <component :is='action'/>
          </keep-alive>
    </div>
</template>

<script>
import PostInfo from './PostInfo.vue'
import DeletePost from './DeletePost.vue'
import UpdatePost from './UpdatePost.vue'
export default {
    name:'AdminDashBoard',
    components:{
        PostInfo,
        DeletePost,
        UpdatePost,
    },
    data(){
        return{
            action:'PostInfo'
        }
    }
}
</script>

<style scoped>
#name{
    font-size: 30px;
    text-align: center;
}
#BtnCont{
    display: flex;
    justify-content: center;
}
.btn{
    margin: 20px;
}
</style>