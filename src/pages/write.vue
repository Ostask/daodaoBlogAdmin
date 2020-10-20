<template>
    <div class="write-article">
        <div class="title">
            <div>
                <el-button style="margin:0 10px;" circle icon="el-icon-back" @click="goto('/article')"></el-button>
            </div>
            <el-input class="title-input" v-model="title"></el-input>
            <div style="margin:0 10px;">
                <el-button>保存草稿</el-button>
                <el-button type="warning" @click="save">发表文章</el-button>
            </div>
        </div>
        <div class="editor">
            <div id ="editorSection"></div> 
        </div>
    </div>
</template>

<script>
import Editor from '@toast-ui/editor'
import 'codemirror/lib/codemirror.css'; // Editor's Dependency Style
import '@toast-ui/editor/dist/toastui-editor.css'; // Editor's Style
import '@toast-ui/editor/dist/i18n/zh-cn.js';
import 'tui-color-picker/dist/tui-color-picker.css'

import chart from '@toast-ui/editor-plugin-chart';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';
import uml from '@toast-ui/editor-plugin-uml';

import mixin from "@/mixins/public"

export default {
    mixins: [mixin],
    data(){
        return {
            editor:null,
            title:''
        }
    },
    mounted(){
        this.editor = new Editor({
            el: document.querySelector('#editorSection'),
            initialEditType: 'markdown',
            previewStyle: 'vertical',
            language:'zh-CN',
            height: '100%',
            plugins: [chart,codeSyntaxHighlight, colorSyntax, tableMergedCell, uml]
        });
    },
    methods:{
        save(){
            console.log(this.editor.getMarkdown())
            console.log(this.editor.getHtml())
        }
    }
}
</script>

<style lang="scss" scoped>
    .write-article{
        width:100%;
        height:100%;
        @include vertical-flex();
        .title{
            height:50px;
            line-height: 50px;
            display: flex;
            .title-input{
                flex:1;
            }
        }
        .editor{
            flex:1;
            width:100%;
        }
    }
</style>