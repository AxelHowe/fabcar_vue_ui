<template>
    <el-table :data="tableData" border style="width: 35%; height: 35%;">
        <el-table-column prop="name" label="帳號" width="180">
        </el-table-column>
        <el-table-column prop="permission" label="權限" width="180">
        </el-table-column>
        <el-table-column fixed="right" label="動作" width="100">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">選取</el-button>
                <el-button type="text" size="small">刪除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
<script>
export default {
    data(){
        return {
            tableData: [
            {
                name:"Bernice",
                permission: "wwww"
            },{
                name:"AxelHowe",
                permission: "wwww"
            },{
                name:"Bernice",
                permission: "wwww"
            },{
                name:"AxelHowe",
                permission: "wwww"
            },{
                name:"Bernice",
                permission: "wwww"
            },{
                name:"AxelHowe",
                permission: "wwww"
            },{
                name:"Bernice",
                permission: "wwww"
            },{
                name:"AxelHowe",
                permission: "wwww"
            }
            ]
        }
        
    }
}
</script>
<style scoped>

</style>