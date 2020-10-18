<template>
    <div class="classification list-page">
        <div class="search-content">
            <div class="title">分类管理</div>
            <div class="operation-content">
                <el-input v-model="newTypeName" style="width:200px;margin-right:20px;" placeholder="新增分类名称"></el-input>
                <el-button round>新增分类</el-button>
            </div>
        </div>
        <div class="wrapper">
            <el-scrollbar style="height:100%;position:absolute;width:100%;">
                    <el-table
                        :data="tableData">
                        <el-table-column
                            prop="date"
                            label="分类"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="状态"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            width="180"
                            prop="date"
                            label="创建时间">
                        </el-table-column>
                        <el-table-column
                            prop="date"
                            label="创建人">
                        </el-table-column>
                        <el-table-column
                            width="180"
                            label="操作">
                            <template>
                                <el-button icon="el-icon-edit-outline" circle></el-button>
                                <el-button type="warning" icon="el-icon-delete" circle></el-button>
                            </template>
                        </el-table-column>
                    </el-table>
            </el-scrollbar>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            newTypeName:'',
            tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
           {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>