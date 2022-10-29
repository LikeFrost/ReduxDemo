import Mock from 'mockjs';

Mock.setup({
    timeout:500
})

Mock.mock("/api/v1/menu", ()=>{
    return Mock.mock({
        'code':0,
        'msg':'获取菜单项成功',
        'data':{
            'data|15':[{
                'label':"@csentence(4)",
                'key|+1':1,
            }]
        }
    })
})