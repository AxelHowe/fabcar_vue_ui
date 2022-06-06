<template>
    <Home>
        <el-form ref="form" size="mini" :model="form" label-width="60px" style="">
            <el-form-item label="帳號" style="">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密碼" style="">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item class="send">
                <el-button type="primary" size="medium" @click="submit()">送出</el-button>
            </el-form-item>
            <el-form-item class="regi">
                <router-link to="/register">
                    <el-button type="text" style="color:rgb(26, 54, 90);">還沒有帳號嗎？點選這裡</el-button>
                </router-link>
            </el-form-item>
            <el-form-item>
                <p id="hide">帳號或密碼錯誤！</p>
            </el-form-item>
        </el-form>
    </Home>
</template>

<script>
import Home from '../views/Home.vue';
export default {
    components: {
        Home,
    },
    data(){
        return{
            form:{
                username:"",
                password:""
            }
        };
    },
    methods:{
        async submit(){           
            const url = "login";
            const params=this.form;
            let res = await this.$POST(url, params);//驗證登入帳密

            if(res.status===true){//如果有該使用者
                localStorage.setItem('username',this.form.username);
                localStorage.setItem('token',res.token);
                localStorage.setItem('role',res.role);
                this.$router.push({path:'/placeorder'});
            }else{
                document.getElementById("hide").style="display: block;"
            }
        },
    }
};
</script>

<style scoped>
.send{
    position: absolute;
    left:20%;
    top: 63%;
}

#hide{
    display: none;
    margin:0px;
    position: absolute;
    left:19%;
    top: 50%;
    color: rgb(204, 75, 75);
}

.regi{
    position: absolute;
    left:10%;
    top: 80%;
}

.el-form{
    box-shadow: 0 2px 12px 0 rgba(70, 90, 133, 0.418);
    z-index:100;
    background-color: rgb(255, 255, 255);
    padding-top: 20px;
    padding-right: 20px;
    width:20%;
    height: 30%;
    position: absolute;
    top: 12%;
    left:58%;
}
</style>