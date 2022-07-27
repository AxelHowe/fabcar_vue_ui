<template>
    <el-form ref="form" size="medium" :model="form" label-width="100px" style="">
        <h2>註冊</h2>
        <el-form-item label="請輸入帳號" style="">
            <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="請輸入密碼" style="">
            <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="身份" style="">
            <el-radio v-model="form.role" label="supplier">供應商</el-radio>
            <el-radio v-model="form.role" label="order">中心廠</el-radio>
        </el-form-item>
        <el-form-item class="send">
            <el-button type="primary" size="medium" @click="submit()">送出</el-button>
        </el-form-item>
        <el-form-item class="regi">
            <router-link to="/login">
                <el-button type="text" style="color:rgb(26, 54, 90);">已經有帳號？點選這裡</el-button>
            </router-link>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    data(){
        return{
            form:{
                username:"",
                password:"",
                role:""
            },
        };
    },
    methods:{
        submit(){
            const url = "register";
            const params = this.form;
            let res = this.$POST(url, params);
            
            console.log(res);

            localStorage.setItem('username',this.form.username);
            // localStorage.setItem('token',res.token);
            localStorage.setItem('role',role);
            this.$router.push({path:'/'});
        },
    }
};
</script>
<style scoped>
body{
    background-color: rgb(110, 147, 189);
}
.send{
    position: absolute;
    left:18.5%;
    top: 70%;
}
.el-form{
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgba(70, 90, 133, 0.418);
    background-color: transparent;
    width: 400px;
    height: 400px;
    position: fixed;
    left: 35%;
    top: 13%;
    padding-top: 20px;
    padding-right: 20px;
}
h2{
    text-align: center;
}
.regi{
    position: absolute;
    left:10%;
    top: 83%;
}
</style>

