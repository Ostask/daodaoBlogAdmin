export default [
    {
        path:'/',
        component: () => import("@/components/layout/layout"),
        redirect: '/article',
        children:[
            {
                path:'/article',
                component: () => import("@/pages/articleList"),
                meta: {
                    title:'文章管理',
                    icon:'article',
                    show:true
                }
            },
            {
                path:'/classification',
                component: () => import("@/pages/classification"),
                meta: {
                    title:'分类管理',
                    icon:'type',
                    show:true
                }
            },
            {
                path:'/messageList',
                component: () => import("@/pages/messageList"),
                meta: {
                    title:'留言管理',
                    icon:'message',
                    show:true
                }
            },
            {
                path:'/resumeList',
                component: () => import("@/pages/resumeList"),
                meta: {
                    title:'在线简历',
                    icon:'id',
                    show:true
                }
            },
            {
                path:'/personalWorks',
                component: () => import("@/pages/personalWorks"),
                meta: {
                    title:'个人作品',
                    icon:'product',
                    show:true
                }
            },
            {
                path:'/dataCenter',
                component: () => import("@/pages/dataCenter"),
                meta: {
                    title:'数据中心',
                    icon:'chart',
                    show:true
                }
            }
        ]
    },
    {
        path:'/write',
        component: () => import("@/pages/write"),
        meta: {
            title:'写文章',
            icon:'article',
            show:false
        }
    }
  ]