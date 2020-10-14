$(function(){
    var form = layui.form;
    var layer = layui.layer
    form.verify({
        nickname:function(){
            if(verify.length>6){
                return '昵称长度必须在1-6之间'
            }
        }
    })
    //初始化用户信息
    function userinfor(){
        $.ajax({
            method:'GET',
            url:"/api/"
        })
    }

})