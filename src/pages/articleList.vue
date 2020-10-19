<template>
    <div class="article-list list-page">
        <div class="search-content">
            <div class="title">文章管理</div>
            <div class="operation-content">
                <el-input style="width:200px;margin-right:10px;" v-model="name" placeholder="文章标题"></el-input>
                <el-select style="margin-right:10px;width:120px;" v-model="value" placeholder="请选择">
                    <el-option label="已发布" value="1"></el-option>
                    <el-option label="私密文章" value="1"></el-option>
                    <el-option label="草稿箱" value="1"></el-option>
                    <el-option label="已删除" value="1"></el-option>
                </el-select>
                <el-select style="margin-right:10px;width:120px;" v-model="value" placeholder="请选择">
                    <el-option label="分类1" value="1"></el-option>
                    <el-option label="分类2" value="1"></el-option>
                    <el-option label="分类3" value="1"></el-option>
                    <el-option label="分类4" value="1"></el-option>
                </el-select>
                <el-button round @click="goto('/write')">写文章</el-button>
            </div>
        </div>
        <div class="wrapper">
            <el-scrollbar style="height:100%;position:absolute;width:100%;">
                  <div v-for="i in 10" class="article-item" :key="i">
                      <div class="article">
                          <p class="article-title">element-ui的table在flex布局下宽度一直增大的问题，解决了！！解决了！！</p>
                          <div class="info">
                              <el-tag>原创</el-tag>
                              <el-tag style="margin-left:10px;">分类类型</el-tag>
                              <span class="create-time">2020年10月18日 23:35:31</span>
                              <span class="read">
                                  <i class="el-icon-view"></i>3
                              </span>
                              <span class="message">
                                  <i class="el-icon-chat-line-square"></i>1
                              </span>
                              <span class="star">
                                  <i class="el-icon-star-on"></i>100
                              </span>
                          </div>
                      </div>
                      <div class="ctrl">
                          <el-tooltip content="查看" placement="bottom" effect="light">
                            <el-button circle icon="el-icon-document"></el-button>
                          </el-tooltip>
                          <el-tooltip content="编辑" placement="bottom" effect="light">
                            <el-button circle icon="el-icon-edit-outline"></el-button>
                          </el-tooltip>
                          <el-select style="margin:0 10px;width:120px;" v-model="value" placeholder="请选择">
                            <el-option label="评论公开" value="1"></el-option>
                            <el-option label="审核后公开" value="1"></el-option>
                           </el-select>
                           <el-tooltip content="设为私密" placement="bottom" effect="light">
                            <el-button circle icon="el-icon-lock"></el-button>
                          </el-tooltip>
                          <el-tooltip content="设为公开" placement="bottom" effect="light">
                            <el-button circle icon="el-icon-unlock"></el-button>
                          </el-tooltip>
                           <el-tooltip content="置顶" placement="bottom" effect="light">
                            <el-button circle icon="el-icon-upload2"></el-button>
                          </el-tooltip>
                          <el-tooltip content="取消置顶" placement="bottom" effect="light">
                            <el-button circle type="primary" icon="el-icon-download"></el-button>
                          </el-tooltip>
                          <el-tooltip content="恢复" placement="bottom" effect="light">
                            <el-button circle icon="el-icon-refresh-left"></el-button>
                          </el-tooltip>
                          <el-tooltip content="删除" placement="bottom" effect="light">
                            <el-button type="warning" circle icon="el-icon-delete"></el-button>
                          </el-tooltip>
                      </div>
                  </div>  
            </el-scrollbar>
        </div>
        <div class="pagination-wrapper">
             <el-pagination
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            value:'',
            name:''
        }
    },
    methods:{
        goto(path){
            this.$router.push(path)
        }
    }
}
</script>

<style lang="scss" scoped>
    .article-list{
       .article-item{
           display: flex;
           align-items:center;
           padding:0 20px;
           border-bottom:1px solid $border-normal-color;
           .article{
               flex:1;
               padding:10px; 
               .article-title{
                   color:$font-normal-color;
                   font-size:$font-big-size;
               }
               .info{
                   color:$font-dark-color;
                   .create-time,.read,.message,.star{
                       margin-left:10px;
                   }
               }
           }
       }
    }
</style>