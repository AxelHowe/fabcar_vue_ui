<template>
<div class="placeorder">
    <div class="banner">
        <el-button class="new_butt" type="primary" @click="newOrder()" plain>清空資料</el-button>
        <div class="progress">
            <el-button type="text" @click="changeStatus(1)" id="1">新建訂單</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-button type="text" @click="changeStatus(2)" id="2">供應商簽署</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-button type="text" @click="changeStatus(3)" id="3">供應商交貨</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-button type="text" @click="changeStatus(4)" id="4">中心廠驗貨</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-button type="text" @click="changeStatus(5)" id="5">中心廠確認交貨</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-button type="text" @click="changeStatus(6)" id="6">供應商發票開立</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-button type="text" @click="changeStatus(7)" id="7">中心廠確認發票開立</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-button type="text" @click="changeStatus(8)" id="8">中心廠確認訂單完成</el-button>
        </div>
        <h4 class="greeting">Hello, {{ user_name }}</h4>
        <div class="account">
            <el-dropdown>
                <el-button type="primary">
                    我的帳號<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>所有訂單</el-dropdown-item>
                    <el-dropdown-item>帳號管理</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
    <div class="input">
        <el-form ref="form" :model="form" :rules="rule" label-width="110px" size="mini" style="height: 690px; overflow: auto; scroll:auto;">
            <div class="info">
                <h2>訂單資訊</h2>
                <div class="list">
                    <el-form-item label="訂單編號">
                        <el-input v-model="form.key" id="a1"></el-input>
                    </el-form-item>
                    <el-form-item label="流程狀態">
                        <el-input v-model="form.process" id="a2"></el-input>
                    </el-form-item>
                    <el-form-item label="交貨急迫性">
                        <el-input v-model="form.urgent" id="a3"></el-input>
                    </el-form-item>
                    <el-form-item label="訂單日期">
                        <el-date-picker type="date" v-model="form.odate" id="a4" style="width: 100%;" :clearable=false></el-date-picker>
                    </el-form-item>
                    <el-form-item label="預交日期">
                        <el-date-picker type="date" v-model="form.odate" id="a5" style="width: 100%;" :clearable=false></el-date-picker>
                    </el-form-item>
                    <el-form-item label="採購人員">
                        <el-input v-model="form.purchase" id="a6"></el-input>
                    </el-form-item>
                    <el-form-item label="供應商代號">
                        <el-input v-model="form.sname" id="a7"></el-input>
                    </el-form-item>
                    <el-form-item label="供應商名稱">
                        <el-input v-model="form.supplier" id="a8"></el-input>
                    </el-form-item>
                    <el-form-item label="供應商簽署人員">
                        <el-input v-model="form.signer" id="a9"></el-input>
                    </el-form-item>
                </div>
                <div class="book">
                    <el-form-item label="品名">
                        <el-input v-model="form.pname" id="a10"></el-input>
                    </el-form-item>
                    <el-form-item label="單價">
                        <el-input v-model="form.price" id="a11"></el-input>
                    </el-form-item>
                    <el-form-item label="數量">
                        <el-input v-model="form.pquantity" id="a12"></el-input>
                    </el-form-item>
                    <el-form-item label="總金額">
                        <span>{{this.form.price * this.form.pquantity}}</span>
                    </el-form-item>
                    <el-form-item label="備註">
                        <el-input type='textarea' rows=11 show-word-limit v-model="form.note" id="a13"></el-input>
                    </el-form-item>
                </div>
            </div>  
            <div class="deliverOrder">
                <h2>交貨單</h2>
                <el-form-item label="交貨日期">
                    <el-date-picker type="date" v-model="form.sdate" style="width:100%;" id="b1" :clearable=false></el-date-picker>
                </el-form-item>
                <el-form-item label="交貨數量">
                    <el-input v-model="form.pname" id="b2"></el-input>
                </el-form-item>
                <el-form-item label="交貨備註">
                    <el-input v-model="form.amount" id="b3"></el-input>
                </el-form-item>
            </div>
            <div class="inspect">
                <h2>驗貨單</h2>
                <el-form-item label="驗貨日期">
                    <el-date-picker type="date" v-model="form.sdate" style="width:100%;" id="c1" :clearable=false></el-date-picker>
                </el-form-item>
                <el-form-item label="驗貨數量">
                    <el-input v-model="form.bad" id="c2"></el-input>
                </el-form-item>
                <el-form-item label="不良品數量">
                    <el-input v-model="form.bad" id="c3"></el-input>
                </el-form-item>
                <el-form-item label="不良品備註">
                    <el-input v-model="form.badnote" id="c4"></el-input>
                </el-form-item>
            </div>
            <div class="deliverInfo">
                <h2>交貨資訊</h2>
                <el-form-item label="已交貨總數">
                    <el-input v-model="form.volume" id="d1"></el-input>
                </el-form-item>
                <el-form-item label="已驗貨總數">
                    <el-input v-model="form.volume" id="d2"></el-input>
                </el-form-item>
                <el-form-item label="不良品總數">
                    <el-input v-model="form.sbad" id="d3"></el-input>
                </el-form-item>
                <el-form-item label="未交貨總數">
                    <span>{{this.form.volume - this.form.sbad}}</span>
                </el-form-item>
            </div>
            <div class="invoice">
                <h2>發票資訊</h2>
                <el-form-item label="發票日期">
                    <el-date-picker type="date" v-model="form.sdate" style="width:100%;" id="f1" :clearable=false></el-date-picker>
                </el-form-item>
                <el-form-item label="發票號碼">
                    <el-input v-model="form.volume" id="f2"></el-input>
                </el-form-item>
                <el-form-item label="備註">
                    <el-input v-model="form.sbad" id="f3"></el-input>
                </el-form-item>
            </div>
            <el-form-item class="send" >
                <el-button type="primary" @click="onSubmit()" :disabled="checkDisable.check7">儲存訂單</el-button><!--TODO:顯示歷史狀態時要隱藏-->
                <el-button @click="cancel()" :disabled="checkDisable.check8">取消更改</el-button>
            </el-form-item>
            <div class="checkbox">
                <h2>訂單流程</h2>
                <el-checkbox v-model="form.oestablished" id="e1" :disabled="checkDisable.check1">訂單接受</el-checkbox>
                <el-checkbox v-model="form.ocargo" id="e2" :disabled="checkDisable.check2">交貨完成</el-checkbox>
                <el-checkbox v-model="form.ccargo" id="e3" :disabled="checkDisable.check3">確認交貨完成</el-checkbox><br>
                <el-checkbox v-model="form.bill" id="e4" :disabled="checkDisable.check4">發票開立</el-checkbox>
                <el-checkbox v-model="form.cbill" id="e5" :disabled="checkDisable.check5">確認發票開立</el-checkbox>
                <el-checkbox v-model="form.finish" id="e6" :disabled="checkDisable.check6">訂單完成</el-checkbox>
            </div>
        </el-form>
    </div>
    <div class="menu">
		<el-menu
        default-active="1"
        class="el-menu-vertical-demo undone"
        style="height: 41%; overflow: auto; scroll:auto;">
            <el-submenu index="100">
                <template slot="title">未完成訂單</template>
                <!--顯示每一筆訂單 -->
                <el-submenu :index=String(index) v-for="(item, index) in undone" :key="index">
                    <template slot="title"><el-button type="text" @click="showCurrentHistory(item)">訂單{{item.key}}</el-button></template>
                    <!--顯示歷史狀態 -->
                    <el-timeline style="height: 150px; overflow: auto; scroll:auto;">
                        <el-timeline-item
                        v-for="(history, index) in item.Historys" :key="index" :timestamp="showWhichOne(history.Report.process)">
                            <el-button type="text" @click="showUndoneHistory(history.Report)">{{history.Report.process}}</el-button>
                        </el-timeline-item>
                    </el-timeline>
                </el-submenu>
            </el-submenu>
        </el-menu>
        <el-input placeholder="搜尋..." prefix-icon="el-icon-search" clearable class="find" ></el-input>
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo done"
        style="height: 45%;">
			<el-submenu index="200">
                <template slot="title">已完成訂單</template>
                <!--顯示每一筆訂單 -->
                <el-submenu :index=index v-for="(item, index) in done" :key="index">
                    <template slot="title">訂單{{item.key}}</template>
                    <!--顯示歷史狀態 -->
                    <el-timeline style="height: 150px; overflow: auto; scroll:auto;">
                        <el-timeline-item
                        v-for="(history, index) in item.Historys" :key="index" :timestamp="showWhichOne(history.Report.process)">
                            <el-button type="text" @click="showDoneHistory(history.Report)">{{history.Report.process}}</el-button>
                        </el-timeline-item>
                    </el-timeline>
                </el-submenu>
			</el-submenu>
		</el-menu>
    </div>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: "placeorder",
    data() {
        return {
            checkDisable:{//判斷checkbox禁用
                check1:false,
                check2:false,
                check3:false,
                check4:false,
                check5:false,
                check6:false,
                check7:false,//儲存
                check8:false,//取消修改
            },
            url:"/createReports",
            proStatus: 0,
            isRouterAlive: true,
            process:"",
            role: this.GLOBAL.role,
            user_name: this.GLOBAL.account,
            rule:{//表單驗證規則
                a3:[{}],
                a4:[],
                a5:[],
                a6:[],
                a7:[],
                a8:[],
                a9:[],
                a10:[],

                title: [{required: true, message:"欄位不可為空"},
                        {min: 0, max: 10, message:"不可超過10個字"}],
                date: [{required: true, message:"欄位不可為空"}]
            },
            form: {//顯示在欄位上的資料
				key:"",
                process:"",
                urgent:"",
                odate:"",
                ddate:"",
                purchase:"",
                sname: "",
                supplier:"",
                signer: "",
                invoice:"",
                pname:"",
                pquantity: "",
                price: "",
                sdate: "",
                amount: "",
                sbad: "",
                volume: "",
                ntraded: "",
                oestablished: "false",
                ocargo: "false",
                ccargo: "false",
                bill: "false",
                cbill: "false",
                finish: "false",
                note: ""
            },
            done:[//已完成訂單
            ],
            undone:[//未完成訂單
                {
                    "key": "A66",
                    "process": "發包中",
                    "urgent": "1s",
                    "odate": "",
                    "ddate": "",
                    "purchase": "1e",
                    "sname": "1",
                    "supplier": "1",
                    "signer": "mamaya",
                    "invoice": "1",
                    "pname": "1",
                    "pquantity": "1",
                    "price": "1",
                    "sdate": "",
                    "amount": "1",
                    "sbad": "12323",
                    "volume": "",
                    "ntraded": "",
                    "oestablished": "1",
                    "ocargo": "1cccqqwwe",
                    "ccargo": "12",
                    "bill": "1",
                    "cbill": "111112",
                    "finish": "1",
                    "note": "1",
                    "Historys": [
                        {
                            "TxId": "15bf8b6cefd266c24348a4dc7db2e6682cc7783be9f5467cff03961c111fa6a4",
                            "Report": {
                                "key": "",
                                "process": "簽署成功",
                                "urgent": "1s",
                                "odate": "1d",
                                "ddate": "1b",
                                "purchase": "1e",
                                "sname": "1",
                                "supplier": "1",
                                "signer": "",
                                "invoice": "",
                                "pname": "1",
                                "pquantity": "1",
                                "price": "1",
                                "sdate": "",
                                "amount": "",
                                "sbad": "",
                                "volume": "",
                                "ntraded": "",
                                "oestablished": "",
                                "ocargo": "",
                                "ccargo": "",
                                "bill": "",
                                "cbill": "",
                                "finish": "",
                                "note": "1",
                                "Historys": null
                            }
                        },
                        {
                            "TxId": "3a646c606fb9def06af9cca7196eecf72f3543b69030424c0fc2c486e8dae94b",
                            "Report": {
                                "key": "",
                                "process": "發包中",
                                "urgent": "1s",
                                "odate": "1d",
                                "ddate": "1b",
                                "purchase": "1e",
                                "sname": "1",
                                "supplier": "1",
                                "signer": "mamaya",
                                "invoice": "",
                                "pname": "1",
                                "pquantity": "1",
                                "price": "1",
                                "sdate": "",
                                "amount": "",
                                "sbad": "",
                                "volume": "",
                                "ntraded": "",
                                "oestablished": "1",
                                "ocargo": "",
                                "ccargo": "",
                                "bill": "",
                                "cbill": "",
                                "finish": "",
                                "note": "1",
                                "Historys": null
                            }
                        },
                        {
                            "TxId": "ff4df9ed1f0b3a48127a7d73fb070464567c139bc7620c5780ef0687957fcb30",
                            "Report": {
                                "key": "",
                                "process": "驗貨中",
                                "urgent": "1s",
                                "odate": "1d",
                                "ddate": "1b",
                                "purchase": "1e",
                                "sname": "1",
                                "supplier": "1",
                                "signer": "mamaya",
                                "invoice": "",
                                "pname": "1",
                                "pquantity": "1",
                                "price": "1",
                                "sdate": "",
                                "amount": "",
                                "sbad": "",
                                "volume": "",
                                "ntraded": "",
                                "oestablished": "1",
                                "ocargo": "",
                                "ccargo": "",
                                "bill": "",
                                "cbill": "",
                                "finish": "",
                                "note": "1",
                                "Historys": null
                            }
                        },
                        {
                            "TxId": "4c9f14c9b5fed950cc5028799b715b6eb9487a398346c7a376397bb72f2811a9",
                            "Report": {
                                "key": "",
                                "process": "交貨中",
                                "urgent": "1s",
                                "odate": "1d",
                                "ddate": "1b",
                                "purchase": "1e",
                                "sname": "1",
                                "supplier": "1",
                                "signer": "mamaya",
                                "invoice": "",
                                "pname": "1",
                                "pquantity": "1",
                                "price": "1",
                                "sdate": "100023",
                                "amount": "1",
                                "sbad": "",
                                "volume": "",
                                "ntraded": "",
                                "oestablished": "1",
                                "ocargo": "",
                                "ccargo": "",
                                "bill": "",
                                "cbill": "",
                                "finish": "",
                                "note": "1",
                                "Historys": null
                            }
                        },
                        {
                            "TxId": "616f73a911ead8ab803f2c25c2e844c6aea38e9a27efb7299150308e62b6c1ee",
                            "Report": {
                                "key": "",
                                "process": "交貨完成",
                                "urgent": "1s",
                                "odate": "1d",
                                "ddate": "1b",
                                "purchase": "1e",
                                "sname": "1",
                                "supplier": "1",
                                "signer": "mamaya",
                                "invoice": "",
                                "pname": "1",
                                "pquantity": "1",
                                "price": "1",
                                "sdate": "100023",
                                "amount": "1",
                                "sbad": "12323",
                                "volume": "",
                                "ntraded": "",
                                "oestablished": "1",
                                "ocargo": "",
                                "ccargo": "",
                                "bill": "",
                                "cbill": "",
                                "finish": "",
                                "note": "1",
                                "Historys": null
                            }
                        },
                    ],
                },
                {
                    "key": "A66",
                    "process": "ooo",
                    "urgent": "1s",
                    "odate": "",
                    "ddate": "",
                    "purchase": "1e",
                    "sname": "1",
                    "supplier": "1",
                    "signer": "mamaya",
                    "invoice": "1",
                    "pname": "1",
                    "pquantity": "1",
                    "price": "1",
                    "sdate": "",
                    "amount": "1",
                    "sbad": "12323",
                    "volume": "",
                    "ntraded": "",
                    "oestablished": "1",
                    "ocargo": "1cccqqwwe",
                    "ccargo": "12",
                    "bill": "1",
                    "cbill": "111112",
                    "finish": "1",
                    "note": "1",
                    "Historys":null
                },
                {
                    "key": "A66",
                    "process": "ooo",
                    "urgent": "1s",
                    "odate": "",
                    "ddate": "",
                    "purchase": "1e",
                    "sname": "1",
                    "supplier": "1",
                    "signer": "mamaya",
                    "invoice": "1",
                    "pname": "1",
                    "pquantity": "1",
                    "price": "1",
                    "sdate": "",
                    "amount": "1",
                    "sbad": "12323",
                    "volume": "",
                    "ntraded": "",
                    "oestablished": "1",
                    "ocargo": "1cccqqwwe",
                    "ccargo": "12",
                    "bill": "1",
                    "cbill": "111112",
                    "finish": "1",
                    "note": "1",
                    "Historys":null
                },
                {
                    "key": "A66",
                    "process": "ooo",
                    "urgent": "1s",
                    "odate": "",
                    "ddate": "",
                    "purchase": "1e",
                    "sname": "1",
                    "supplier": "1",
                    "signer": "mamaya",
                    "invoice": "1",
                    "pname": "1",
                    "pquantity": "1",
                    "price": "1",
                    "sdate": "",
                    "amount": "1",
                    "sbad": "12323",
                    "volume": "",
                    "ntraded": "",
                    "oestablished": "1",
                    "ocargo": "1cccqqwwe",
                    "ccargo": "12",
                    "bill": "1",
                    "cbill": "111112",
                    "finish": "1",
                    "note": "1",
                    "Historys":null
                },
                {
                    "key": "A66",
                    "process": "ooo",
                    "urgent": "1s",
                    "odate": "",
                    "ddate": "",
                    "purchase": "1e",
                    "sname": "1",
                    "supplier": "1",
                    "signer": "mamaya",
                    "invoice": "1",
                    "pname": "1",
                    "pquantity": "1",
                    "price": "1",
                    "sdate": "",
                    "amount": "1",
                    "sbad": "12323",
                    "volume": "",
                    "ntraded": "",
                    "oestablished": "1",
                    "ocargo": "1cccqqwwe",
                    "ccargo": "12",
                    "bill": "1",
                    "cbill": "111112",
                    "finish": "1",
                    "note": "1",
                    "Historys":null
                },
                {
                    "key": "A66",
                    "process": "ooo",
                    "urgent": "1s",
                    "odate": "",
                    "ddate": "",
                    "purchase": "1e",
                    "sname": "1",
                    "supplier": "1",
                    "signer": "mamaya",
                    "invoice": "1",
                    "pname": "1",
                    "pquantity": "1",
                    "price": "1",
                    "sdate": "",
                    "amount": "1",
                    "sbad": "12323",
                    "volume": "",
                    "ntraded": "",
                    "oestablished": "1",
                    "ocargo": "1cccqqwwe",
                    "ccargo": "12",
                    "bill": "1",
                    "cbill": "111112",
                    "finish": "1",
                    "note": "1",
                    "Historys":null
                }
            ],
        };
    },
    methods: {
        showWhichOne(data){//判斷顯示在歷史狀態下的使用者
            var str="";
            if(!data){
                console.log(data);
                str="中心廠";
            }else if(data==="發包中" || data==="簽署成功" || data==="驗貨中" || data==="確認交貨完成"){
                str="供應商";
            }else if(data==="交貨中" || data==="交貨完成" || data==="發票開立"){
                str="中心廠";
            }
            return str;
        },
        showCurrentHistory(data){//判斷目前的訂單進度，決定要禁用哪些button
            // this.changeStatus(0);
            this.form=data;
            // console.log(this.form.process);
            var state=0;
            if(data.process=="發包中"){
                state=1;
            }if(data.process=="簽署成功"){
                state=2;
            }if(data.process=="交貨中"){
                state=4;
            }if(data.process=="驗貨中"){
                state=5;
            }if(data.process=="交貨完成"){
                state=6;
            }if(data.process=="確認交貨完成"){
                state=7;
            }if(data.process=="發票開立"){
                state=8;
            }
            this.changeStatus(state);//改變最後訂單的進度
        },
        showUndoneHistory(data){//顯示未完成訂單（index代表哪筆訂單，id代表哪個歷史狀態）
            this.form=data;
            var arr=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","b1","b2","b3","b4","c1","c2","c3","d1","d2","e1","e2","e3","e4","e5","e6"];
            arr.forEach(function(value){
                document.getElementById(value).disabled = true;
                document.getElementById(value).style ="background-color: #e6ecf5";
            });
            this.buttonDisabled(10);
            this.checkDisable.check1=false;
            this.checkDisable.check2=false;
            this.checkDisable.check3=false;
            this.checkDisable.check4=false;
            this.checkDisable.check5=false;
            this.checkDisable.check6=false;
            this.checkDisable.check7=true;
            this.checkDisable.check8=true;
        },
        showDoneHistory(data){//顯示已完成訂單
            this.form=data;
            var arr=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","b1","b2","b3","b4","c1","c2","c3","d1","d2","d3","e1","e2","e3","e4","e5","e6"];
            arr.forEach(function(value){
                document.getElementById(value).disabled = true;
                document.getElementById(value).style ="background-color: #e6ecf5";
            });
            this.buttonDisabled(10);
            this.checkDisable.check1=false;
            this.checkDisable.check2=false;
            this.checkDisable.check3=false;
            this.checkDisable.check4=false;
            this.checkDisable.check5=false;
            this.checkDisable.check6=false;
            this.checkDisable.check7=true;
            this.checkDisable.check8=true;
        },
        boolToStr(){//checkbox的布林轉字串
            this.form.oestablished = String(this.form.oestablished);
            this.form.ocargo = String(this.form.ocargo);
            this.form.ccargo = String(this.form.ccargo);
            this.form.bill = String(this.form.bill);
            this.form.cbill = String(this.form.cbill);
            this.form.finish = String(this.form.finish);
        },
        strToBool(data){//checkbox的字串轉布林
            if(data.oestablished==="true"){
                data.oestablished=true;
            }else{
                data.oestablished=false;
            }

            if(data.ocargo==="true"){
                data.ocargo=true;
            }else{
                data.ocargo=false;
            }

            if(data.ccargo==="true"){
                data.ccargo=true;
            }else{
                data.ccargo=false;
            }

            if(data.bill==="true"){
                data.bill=true;
            }else{
                data.bill=false;
            }

            if(data.cbill==="true"){
                data.cbill=true;
            }else{
                data.cbill=false;
            }

            if(data.finish==="true"){
                data.finish=true;
            }else{
                data.finish=false;
            }
        },
        newOrder(){//清空欄位資料＆禁用
            this.form= {//先清空上個狀態的欄位資料
                key:"",
                process:"",
                urgent:"",
                odate:"",
                ddate:"",
                purchase:"",
                sname: "",
                supplier:"",
                signer: "",
                invoice:"",
                pname:"",
                pquantity: "",
                price: "",
                sdate: "",
                amount: "",
                sbad: "",
                volume: "",
                ntraded: "",
                oestablished: "false",
                ocargo: "false",
                ccargo: "false",
                bill: "false",
                cbill: "false",
                finish: "false",
                note: ""
            };
            this.changeStatus(0);//先清空欄位禁用
            this.url = "createReports";
        },
        selectRole(){//因應使用者身份改變按鈕的禁用狀態
            var arr=[];
            if(this.role==="order"){
                arr=["2","3","5","7"];
            }else if(this.role==="supplier"){
                arr=["1","4","6","8","9"];
            }
            arr.forEach(function(value){
                document.getElementById(value).disabled = true;
                document.getElementById(value).style ="color: rgb(172, 196, 227); cursor:not-allowed;";
            });
        },
        changeStatus(state) {//點選上面流程狀態時改變禁用欄位

            //改變狀態/新增訂單前先清空所有欄位禁用
            var arr_init=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","a11","a12","a13","b1","b2","b3","c1","c2","c3","c4","d1","d2","d3","e1","e2","e3","e4","e5","e6","f1","f2","f3"];
            this.checkDisable.check1=false;
            this.checkDisable.check2=false;
            this.checkDisable.check3=false;
            this.checkDisable.check4=false;
            this.checkDisable.check5=false;
            this.checkDisable.check6=false;
            this.checkDisable.check7=false;//取消
            this.checkDisable.check8=false;//儲存

            arr_init.forEach(function(value){
                document.getElementById(value).disabled = false;
                document.getElementById(value).style ="background-color:transparent";
            });
            var but_init=["1","2","3","4","5","6","7","8"];
            but_init.forEach(function(value){
                document.getElementById(value).disabled = false;
                document.getElementById(value).style ="color:rgb(61, 119, 173); cursor:pointer;";
            })

            this.buttonDisabled(state);//處理被禁用的狀態按鈕
            this.chageAPI(state);//改變每個流程所對應的API路徑
            this.initStatus(state);//更新欄位禁用狀態
        },
        initStatus(state) {//點某個狀態按鈕就會到這裡變成禁用
            var arr=[];
            this.selectRole();
            //getElementByClassName沒辦法改變disabled值，只有getElementById可以
            if (state == 1) {//新增訂單
                arr=["a1","a2","a9","b1","b2","b3","c1","c2","c3","c4","d1","d2","d3","e1","e2","e3","e4","e5","e6","f1","f2","f3"];
                this.checkDisable.check1=true;
                this.checkDisable.check2=true;
                this.checkDisable.check3=true;
                this.checkDisable.check4=true;
                this.checkDisable.check5=true;
                this.checkDisable.check6=true;
            } else if (state == 2) {//供應商簽署
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a10","a11","a12","b1","b2","b3","c1","c2","c3","c4","d1","d2","d3","e2","e3","e4","e5","e6","f1","f2","f3"];    
                this.checkDisable.check2=true;
                this.checkDisable.check3=true;
                this.checkDisable.check4=true;
                this.checkDisable.check5=true;
                this.checkDisable.check6=true;
            } else if (state == 3) {//供應商交貨
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","a11","a12","c1","c2","c3","c4","d1","d2","d3","e1","e2","e3","e4","e5","e6","f1","f2","f3"];    
                this.checkDisable.check1=true;
                this.checkDisable.check2=true;
                this.checkDisable.check3=true;
                this.checkDisable.check4=true;
                this.checkDisable.check5=true;
                this.checkDisable.check6=true;            
            } else if (state == 4) {//中心廠驗貨
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","a11","a12","b1","b2","b3","d1","d2","d3","e1","e2","e4","e5","e6","f1","f2","f3"]; 
                this.checkDisable.check1=true;
                this.checkDisable.check2=true;
                this.checkDisable.check4=true;
                this.checkDisable.check5=true;
                this.checkDisable.check6=true;               
            } else if (state == 5) {//中心廠確認交貨
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","a11","a12","b1","b2","b3","c1","c2","c3","c4","d1","d2","d3","e1","e3","e4","e5","e6","f1","f2","f3"];   
                this.checkDisable.check1=true;
                this.checkDisable.check3=true;
                this.checkDisable.check4=true;
                this.checkDisable.check5=true;
                this.checkDisable.check6=true;             
            } else if (state == 6) {//供應商發票開立
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","a11","a12","b1","b2","b3","c1","c2","c3","c4","d1","d2","d3","e1","e2","e3","e5","e6"];
                this.checkDisable.check1=true;
                this.checkDisable.check2=true;
                this.checkDisable.check3=true;   
                this.checkDisable.check5=true;
                this.checkDisable.check6=true;                
            } else if (state == 7) {//中心廠確認發票開立
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","a11","a12","b1","b2","b3","c1","c2","c3","c4","d1","d2","d3","e1","e2","e3","e4","e6","f1","f2","f3"];   
                this.checkDisable.check1=true;
                this.checkDisable.check2=true;
                this.checkDisable.check3=true;
                this.checkDisable.check4=true;
                this.checkDisable.check6=true;             
            }else if (state == 8) {//中心廠確認訂單完成
                arr=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","a11","a12","b1","b2","b3","c1","c2","c3","c4","d1","d2","d3","e1","e2","e3","e4","e5","f1","f2","f3"];   
                this.checkDisable.check1=true;
                this.checkDisable.check2=true;
                this.checkDisable.check3=true;
                this.checkDisable.check4=true;   
                this.checkDisable.check5=true;   
            }
            arr.forEach(function(value){
                document.getElementById(value).disabled = true;
                document.getElementById(value).style ="background-color:#e6ecf5; border-radius: 5px; cursor:not-allowed;";
            });
        },
        buttonDisabled(state){//處理被禁用的狀態按鈕
            var but_init=[];
            if(state==1){
                but_init=["1"];
            }else if(state==2){
                but_init=["1","2"];
            }else if(state==3){
                but_init=["1","2","3"];
            }else if(state==4){
                but_init=["1","2","3","4"];
            }else if(state==5){
                but_init=["1","2","3","4","5"];
            }else if(state==6){
                but_init=["1","2","3","4","5","6"];
            }else if(state==7){
                but_init=["1","2","3","4","5","6","7"];
            }else if(state==8){
                but_init=["1","2","3","4","5","6","7","8"];
            }
            but_init.forEach(function(value){//改變被禁用的欄位的樣式
                document.getElementById(value).disabled = true;
                document.getElementById(value).style ="color:gray; cursor:not-allowed;";
            });
        },
        chageAPI(state){//改變每個流程所對應的API路徑
            if(state==1){
                this.url="createReports";
            }else if(state==2){
                this.url="reports/changeSigner";
            }else if(state==4){
                this.url="reports/changeSdate";
            }else if(state==5){
                this.url="reports/changeSbad";
            }else if(state==6){
                this.url="reports/changeOcargo";
            }else if(state==7){
                this.url="reports/changeCcargo";
            }else if(state==8){
                this.url="reports/changeInvoice";
            }else if(state==9){
                this.url="reports/changeCbill";
            }else if(state==10){
                this.url="reports/Finish";
            }
        },
        cancel() {//「取消更改」按鈕
            var yes = confirm("確定要取消更改嗎？");
            if (yes) {//直接重新匯入原本訂單資料，沒有要管驗證
                // location.reload();//TODO:重新匯入資料
                alert("修改已取消");
            }
        },
		onSubmit() {//「儲存訂單」按鈕
			this.packagePostData();
		},
        async packageGetData() {//導入訂單畫面的時候，會傳入所有訂單資料跟狀態 
            this.done=[];
            this.undone=[];
            
            const url = "reports";
            const params= {
                username: this.user_name
            }

            //透過使用者帳號傳入該使用者的所有訂單
            let res = await this.$POST(url, params);
            console.log(res);

            //區分出已完成/未完成訂單
            for(let i in res.report){
                console.log(i);
                this.strToBool(res.report[i]);//checkbox的string改boolean
                if(res.report[i].finish===true){
                    this.done.push(res.report[i]);//已完成訂單
                }else{
                    this.undone.push(res.report[i]);//未完成訂單
                }
            }
        },
		async packagePostData() {//送出訂單
            let params= {
                username: this.user_name,
                report: this.form
            }
            this.boolToStr();//checkbox的boolean改string
            const res = await this.$POST(this.url, params);
			console.log("res: "+res);
            if(res.status==true){
                alert("訂單儲存成功！");
            }

            //刷新頁面
            this.$router.push({
                name: 'PlaceOrder',
                params: {
                    role: this.GLOBAL.role,
                    user_name: this.GLOBAL.account,
                    token: this.GLOBAL.token
                }
            });

            //重新把變數設定回來
            this.GLOBAL.setAccount(this.$route.params.user_name);
            this.GLOBAL.setToken(this.$route.params.token);
            this.GLOBAL.setRole(this.$route.params.role);

            this.role=this.$route.params.role
            this.user_name=this.$route.params.user_name

            this.packageGetData();
        },
        reload () {
            // console.log('reload occure')
            this.isRouterAlive = false;
            this.$nextTick( ()=> { this.isRouterAlive=true } ) ;
        },
    },
    created() {
        this.packageGetData();
    },
    mounted(){
        this.selectRole();
    }
};
</script>

<style scoped>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

@media (max-width: 719px){/*最大719*/
	.el-collapse {
		width: 15%;
		position: fixed;
	}
}

@media (min-width: 720px){/*最小720*/
	.el-collapse {
		width: 15%;
		position: fixed;
	}
}

.el-button:hover{
    cursor:pointer;
}
.done{
	min-height: 0px;
    width: 12%;
    position: fixed;
    top: 55%;
}

.undone{
	min-height: 0px;
    width: 12%;
    position: fixed;
    top: 9%;
}

.find{
	min-height: 0px;
    width: 12%;
    position: fixed;
    top: 50%;
}

.hide{
    display:none;
}

h2{
    text-align: center;
    margin: 0px;
}

h4{
    position: fixed;
	left: 80%;
}

.new_butt{
    position: absolute;
    top: 15%;
    left: 1%;
    cursor:pointer;
}

.banner{
    position: fixed;
    top: 0%;
    width: 100%;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.1);
    height: 60px;
}

.el-dropdown{
    position: fixed;
    top: 1%;
}

.progress {
	padding: 5px;
	text-align: center;
    position: absolute;
    top: 13%;
	left: 3%;
    width: 80%;
}

.info {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    padding: 5px;
	position: fixed;
	left: 17%;
	top: 9%;
    width: 50%;
}

.list {
	position: relative;
    width: 45%;
	left: 0%;
	top: 0%;
}

.book {
	width: 40%;
	position: absolute;
    width: 50%;
	left: 45%;
	top: 8.5%;
}

.deliverOrder {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    padding: 5px;
	width: 20%;
	position: fixed;
	left: 70%;
	top: 9%;
}

.inspect{
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    padding: 5px;
	width: 20%;
	position: fixed;
	left: 70%;
	top: 35%;
}

.deliverInfo {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    padding: 5px;
	width: 20%;
	position: fixed;
	left: 70%;
	top: 67%;
}

.invoice{
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    padding: 5px;
	width: 20%;
	position: fixed;
	left: 17%;
	top: 70%;
}

.hint {
	position: fixed;
	width: 220px;
	top: 32%;
	left: 25%;
}

.input {
	position: fixed;
	top: 6%;
	left: 80%;
}

.account {
	position: fixed;
	top: 6%;
	left: 91%;
}

.el-checkbox{
	margin: 5px;
	padding:3px;
}

.checkbox {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
	position: fixed;
	top: 70%;
	left: 45.5%;
}

.el-breadcrumb {
	position: fixed;
	top: 15%;
	left: 5%;
}

.el-form {

	position: fixed;
	top: 35%;
	left: 25%;
}

.send {
	position: fixed;
	top: 90%;
	left: 44%;
}

.el-checkbox >>> .el-checkbox__inner{
    background-color: transparent;
}

.el-input >>> .el-input__inner {
	background-color: transparent;
}
</style>