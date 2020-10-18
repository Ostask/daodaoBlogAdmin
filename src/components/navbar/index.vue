<template>
    <div class="nav-bar" :class="{'close':!navOpen}">
        <div class="explan-btn" @click="toggleNav">
            <div class="row"></div>
            <div class="row"></div>
            <div class="row"></div>
        </div>
        <div class="user-info">
            <div class="user-img">
            </div>
        </div>
        <ul class="pages-nav">
            <router-link tag="li" :class="{'active':item.path == $route.path}" :to="item.path" class="page" v-for="item in routeList" :key="item.meta.icon">
                <icon class="icon" :name="item.meta.icon" :scale="2"></icon><span class="text">{{item.meta.title}}</span>
            </router-link>
        </ul>
        <div class="logout">
            <icon v-show="!navOpen" class="icon" name="logout" :scale="2"></icon>
            <span v-show="navOpen" class="text">退出</span>
        </div>
    </div>
</template>

<script>
import mixin from "@/mixins/public"
import routeList from "@/router/router.js"
import {mapMutations,mapGetters} from 'vuex'

export default {
    mixins: [mixin],
    data() {
        return {
            routeList:routeList
        }
    },
    computed:{
        ...mapGetters([
            'navOpen'
        ])
    },
    methods:{
        toggleNav(){
            this.changeNavOpen(!this.navOpen)
        },
        ...mapMutations([
            'changeNavOpen'
        ])
    }
}
</script>

<style lang="scss">
    .nav-bar{
        background: $nav-bar-background;
        width:200px;
        height:100%;
        padding:30px 0;
        position: relative;
        transition:all .5s;
        color:$nav-text-color;
        .explan-btn{
            cursor: pointer;
            width:20px;
            height:20px;
            position:absolute;
            top:5px;
            left:15px;
            transition:all .5s;
            .row{
                width:100%;
                height:4px;
                background: $nav-text-color;
                margin-bottom:4px;
            }
        }
        .user-img{
            width:50px;
            height:50px;
            margin:0 auto;
            border-radius: 50%;
            overflow: hidden;
            background-color: $background;
            background-image:url("~img/user.jpg");
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
            .icon{
                transform: scale(1.5);
            }
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
                transition: all .5s;
                .icon{
                    vertical-align: middle;
                    margin-right:10px;
                    margin-top:-3px;
                    color:$nav-text-color;
                    transition: all .5s;
                }
                .text{
                    opacity:1;
                    transition: all .2s linear .5s;
                }
                &.active{
                    background: $nav-active-color;
                    border-left:4px solid $nav-border-color;
                }
            }
        }
        &.close{
             width:50px;
            .explan-btn{
                transform: rotate(-90deg);
            }
            .user-img{
                width:40px;
                height:40px;
                margin:0 auto;
                &:hover{
                    width:40px;
                    height:40px;
                }
            }
            .pages-nav{
                .page{
                    padding-left:10px;
                    border-left:4px solid transparent;
                    .icon{
                        transform: scale(1.5);
                    }
                    .text{
                        opacity:0;
                        transition: all .1s;
                    }
                    &.active{
                        border-left:4px solid transparent;
                    }
                }
            }
        }
    }
</style>