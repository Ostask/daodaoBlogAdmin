<template>
    <div class="nav-bar">
        <div class="user-info">
            <div class="user-img">
            </div>
        </div>
        <ul class="pages-nav">
            <li class="page">文章管理</li>
            <li class="page active">分类管理</li>
            <li class="page">留言管理</li>
            <li class="page">在线简历</li>
            <li class="page">个人作品</li>
            <li class="page">看板</li>
        </ul>
        <div class="logout">
            退出登录
        </div>
    </div>
</template>

<script>
import mixin from "@/mixins/public"

export default {
    mixins: [mixin],
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss">
    .nav-bar{
        background: $nav-bar-background;
        width:200px;
        height:100%;
        padding:20px 0;
        position: relative;
        .user-img{
            width:50px;
            height:50px;
            margin:0 auto;
            border-radius: 50%;
            overflow: hidden;
            background-color: $background;
            background-image:url("/user.jpg");
            background-size:cover;
            background-position: center center;
            transition: all .5s;
            &:hover{
                width:100px;
                height:100px;
            }
        }
        .logout{
            position: absolute;
            bottom:10px;
            width:100%;
            text-align: center;
            cursor: pointer;
            color:$nav-text-color;
        }
        .pages-nav{
            margin-top:10px;
            color:$nav-text-color;
            .page{
                height:50px;
                line-height: 50px;
                padding-left:20px;
                cursor: pointer;
                border-left:4px solid transparent;
                &.active{
                    background: $nav-active-color;
                    border-left:4px solid $nav-border-color;
                }
            }
        }
    }
</style>