<template>
    <div class="hole">
        <div class="head">
          <ul class="box1">
            <li> 
              <router-link to="/account"> 
                <i class="fa fa-angle-left " ></i>
              </router-link>
            </li>
            <li>我的信息</li>
            <li></li>
          </ul>
        </div>
        <div class="box2">
            <ul class="box4">
                <li>
                    <label class="label">账号</label>
                        <input type="text"v-show="showl" />
                        <i>{{data.username}}</i>
                </li>
                <li> 
                    <label class="label">昵称</label>
                        <input type="text"v-model="data.nickname" /> 
                </li>
                <li> 
                    <label class="label">性别</label>
                        <input type="text" v-model="data.gender"/>
                </li>
                <li> 
                    <label class="label">生日</label>
                        <input type="text"  v-model="data.birthday"/>
                </li>
            </ul>
            <div class="t1">
                <p>已保存</p>
            </div>
            <div class="t2">
                <p>请填写信息</p>
            </div>
        </div>
        <div class="bao">
            <input type="button"  value="保存"  class="cun" @click="baocun"/>
        </div>
    </div>
</template>
    <script>
        import $ from 'jquery'
        import './xinxi.scss'
        import http from '../../../../utils/httpclient.js'
        import router from '../../../../router/router.js'
        export default{
            data(){
                return {
                    data:{
                        username:'',
                        nickname:'',
                        gender:'',
                        type:'birthday'
                    },
                    // show:true,
                     showl:false
                }
            },
            mounted(){
                let username = window.localStorage.getItem('username');
                this.data.username = username;
                http.post('getbirthday',{username}).then((res) =>{
                    let list = res.data;
                  // console.log(list)
                  for(var i=0;i<list.length;i++){
                        // console.log(list[i])
                    this.data.nickname = list[i].nickname;
                    this.data. gender = list[i].gender;
                    this.data.birthday = list[i].birthday;
                  }
                })
          },
            methods:{ 
                baocun(){
                    http.post('update',this.data).then((res) =>{ 
                        console.log(res)
                        if(res.status){
                                $(".t1").show().delay(2000).hide(0);
                                setTimeout(function(){

                                router.push({name:'users'})

                                },1000)
                              
                        }
                  
                    }) 
                }
            }
        }
    </script>