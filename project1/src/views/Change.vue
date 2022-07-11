<template>
    <el-form ref="form" size="medium" :model="form" label-width="120px" style="">
        <h2>更改密碼</h2>
        <el-form-item label="輸入新密碼" style="">
            <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="再次輸入新密碼" style="">
            <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item class="send">
            <el-button type="primary" size="medium" @click="submit()">送出</el-button>
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
            console.log(res.reports);

            this.GLOBAL.setAccount(this.form.username);
            this.GLOBAL.setToken(res.token);
            this.GLOBAL.setRole(res.role);
            this.$router.push({path:'/placeOrder'});
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
    left:14%;
    top: 70%;
}
.el-form{
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgba(70, 90, 133, 0.418);
    background-color: transparent;
    width: 400px;
    height: 300px;
    position: fixed;
    left: 35%;
    top: 13%;
    padding-top: 20px;
    padding-right: 20px;
}
h2{
    text-align: center;
}
</style>

