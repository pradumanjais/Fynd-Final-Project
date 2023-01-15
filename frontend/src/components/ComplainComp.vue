<template>
    <div id="ComplainCont">
         <div id="complain"></div>
        <div id="heading"> Complain</div>
        <center>
        <hr  style="color:red; width:50%; height:5px;">
        </center>

        <div id="formCont">
                   <div class="vh-70 d-flex justify-content-center align-items-center  ">
            <div class="col-md-4 p-5 shadow-sm border rounded-5 border-primary bg-white ">
                <h2 class="text-center mb-4 text-primary">Complain</h2>
                <form @submit.prevent="complainpost()">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control border border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="complainData.email">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputDistrict" class="form-label">Name</label>
                        <input type="text" class="form-control border border-primary" id="exampleInputDistrict" v-model="complainData.name">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputDistrict" class="form-label">Mobile</label>
                        <input type="text" class="form-control border border-primary" id="exampleInputDistrict" v-model="complainData.mobile">
                    </div>
                    <div class="mb-4 input-group">
                        <input type="number" class="form-control border border-primary " id="exampleInputPincode" placeholder="Pincode" v-model="complainData.pincode">
                        <input type="textarea" class="form-control border border-primary" id="exampleInputDistrict" placeholder="District" v-model="complainData.district">
                    </div>
                    <div class="form-floating">
                        <textarea class="form-control border border-primary mb-3" placeholder="Leave a comment here" id="floatingTextarea" v-model="complainData.complain"></textarea>
                        <label for="floatingTextarea">Complain</label>
                    </div>
                
                    <div class="d-grid">
                        <button class="btn btn-primary" type="submit">Send</button>
                    </div>
                </form>
            </div>
                   </div>
        </div>
        
    </div>
</template>

<script>
import axios from "axios";
export default {
    name:'ComplainComp',
    data(){
        return {
            complainData:{},
        }
    },
    methods:{
        async complainpost(){
               const UserRegisterData = await JSON.stringify(this.complainData);
               console.log(`json data ${UserRegisterData}`);
                let customConfig = {
                    headers: {
                    "Content-Type": "application/json",
                    },
                };
                        await axios.post(`api/admin/complainReg`,
          {
            name: this.complainData.name,
            email:this.complainData.email,
            mobile:this.complainData.mobile,
            pincode:this.complainData.pincode,
            district:this.complainData.district,
            complain:this.complainData.complain
          },
          customConfig
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(`nhi hua bhai ye rha errr ${err}`);
        });

        }
    }
}
</script>

<style scoped>
#heading{
    text-align: center;
    font-size: 30px;    
}
#exampleInputPincode{
    margin-right: 10px;
}

</style>