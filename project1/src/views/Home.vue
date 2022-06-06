<template>
<div class="home">
    <router-view></router-view>
    <div class="banner">
        <img class="logo" :src='logo' style="width:300px;"/>
        <router-link to="/login">
			<el-button>登入/註冊</el-button>
		</router-link>
    </div>
    <el-carousel height="250px">
        <el-carousel-item v-for="(item,index) in title" :key="index">
            <img :src="item.svg" style="height: 200px;"/>
            <h1>{{item.text}}</h1>
        </el-carousel-item>
    </el-carousel>
    <div class="login">
        <slot></slot>
    </div>
</div>    
</template>

<script>
import fabric from '/src/assets/fabric.png'
import svg1 from '/src/assets/1.svg'
import svg2 from '/src/assets/2.svg'
import svg3 from '/src/assets/3.svg'

export default{
    name:'Home',
    data(){
        return{
            title: [
                {
                    svg:svg1,
                    text:"oooooooooooooooo"
                },{
                    svg:svg2,
                    text:"oooooooooooooooo"
                },{
                    svg:svg3,
                    text:"oooooooooooooooo"
                },
            ],
            logo: fabric,
        };
    }
}
</script>

<style scoped>  
.banner{
    box-shadow: 0 2px 12px 0 rgba(21, 39, 77, 0.418);
}

.logo{
    position: fixed;
    top: 0%;
    left:17%;
}

.el-button{
    position: fixed;
    top: 4%;
    left:72%;
}

.el-carousel{
    position: fixed;
    left:20%;
    top: 20%;
    width: 60%;
    border-style:solid;
    border-width: 1px;
    border-color: #FAFAFA;
}

.el-carousel img{
    position: fixed;
    left:10%;
    top: 7%;
}

.el-carousel h1{
    /* text-align: right; */
    position: fixed;
    left:48%;
    top: 30%;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
  
</style>