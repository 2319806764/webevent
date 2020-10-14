// $(function () {
//     getUserinfo()
//     //点击了登录的按钮弹出提示框是否删除
//     // var layer = layui.layer
//     // $('#btnLogout').on('click',function(){
//     //     //提示用户是否点击确定
//     //     layer.confirm('确定退出',{ icon： 3,title: '提示'})
//     // })

// })
// //获取用户基本信息
// function getUserInfo() {
//     //发起ajax请求
//     $.ajax({
//         method: 'GET',
//         url: "/my/userinfo",
//         //haeders请求头配置对象
//         headers: {
//             //从localStorage里取值的方法 
//             Authorization: localStorage.getItem('token') || ''

//         },
//         success: function (res) {
//              console.log(res);//判断
//             if (res.status !== 0) {

//                 return layui.layer.msg('获取用户信息失败')
//             }
//             //调用一个渲染用户头像的函数
//             renderAvatar(res.data)//解释  
//         },//不论成功失败都会调用complete函数
//         complete: function (res) {
//             if (res.responseJSON.status === 1 && res.responseJSON.message === "身份认证失败")
//                 //强制清空
//                 localStorage.removeItem('token');
//             //强制跳转到loin页面
//             location.href = './login.html'

//         }



//     })

// }
// //渲染用户头像的函数
// function renderAvatar(user) {
//     //获取用户的名称
//     var name = user.nickname || user.username
//     //设置欢迎文本
//     $("#welcom").html('欢迎&nbsp;&nbsp;' + name)
//     //渲染用户tuxiang 
//     if (user.user_pic!==null) {
//         $('.layui-nav-img')
//             .attr('src', user.user_pic).show()
//         $('.text.avatar').hide()

//     } else {
//         $('.layui-nav-img').hide()
//         var firstname = name[0].toUpperCase();
//         $('.text.avatar').html(firstname).show()
//     }
// }




//入口函数

$(function(){
    getUserInfo()
    var layer = layui.layer
    var layer = layui.layer
    $('#btnLogout').on('click', function () {
        // console.log(11);
        layer.confirm('确定退出登录?', { icon: 3, title: '提示' }, function(index) {
            //do something
            // 1. 清空本地存储中的 token
            localStorage.removeItem('token')
            // 2. 重新跳转到登录页面
            location.href = '/login.html'
      
            // 关闭 confirm 询问框
            layer.close(index)
          })
        

    })

})
        




    //如果把下列函数写到入口函数中的话必须加windo.
    function getUserInfo() {
        $.ajax({
            method: 'GET',
            url: '/my/userinfo',
            //请求头的获取方法
            //vue能实现吗？
            // headers:{
            //     Authorization:localStorage.getItem('token') || ''

            // },
            success: function (res) {
                console.log(res);
                //判断
                if (res.status !== 0) {
                    return layui.layer.msg('获取用户信息失败')

                }
                renderAvatar(res.data)

            },
            //不论成功失败都会调用compl函数
            complete:function(res){
                console.log(res);
                if(res.responseJSON.status==1&&res.responseJSON.message===  "身份认证失败！"){
                    localStorage.removeItem('token')
                    location.href='/login.html'

                }
            }
        })

    }
    //渲染用户图像
    function renderAvatar(user) {
        //获取用户名称
        var name = user.nickname || user.username
        $('#welcom').html('欢迎&nbsp;&nbsp;' + name)
        //按需渲染用户图像
        if (user.user_pic !== null) {
            $('.layui-nav-img').attr(str, user.user_pic).show()//.attr设置或返回被选元素的属性值
            $('.text-avatar').hide()
        } else {
            $('.layui-nav-img').hide()
            var first = name[0].toUpperCase()
            $('.text-avatar').html(first).show()

        }
    }

