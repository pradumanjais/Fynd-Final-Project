<template>
    <div id="signupCont">
        <router-link to='/'>Home</router-link>
        <div>
      <div
        class="
          vh-70
          d-flex
          justify-content-center
          align-items-center
          outerContainer
        "
      >
        <div
          class="
            col-md-4
            p-5
            shadow-sm
            border
            rounded-5
            border-primary
            bg-white
          "
        >
          <h2 class="text-center mb-4 text-primary">SignUp Form </h2>
                    <!-- error msg -->
          <!-- <div class="errmsg">
            <div style="color:red">{{this.errmsg}}</div>
          </div>
          <div class="errmsg">
            <div style="color:red">{{this.alreadyexist}}</div>
          </div> -->

       <!-- name input -->
          <form class="form" @submit.prevent="datapost()" >
            <div class="mb-2">
              <label for="exampleInputName" class="form-label">Name</label>
              <input
                type="text"
                class="form-control border"
                id="exampleInputName"
                v-model="RegData.name"
              />
            </div>

            <!-- emailinput -->

            <div class="mb-2">
              <label for="exampleInputEmail1" class="form-label"
                >Email address</label
              >
              <input
                type="email"
                class="form-control border"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"  
                v-model="RegData.email"  
              />
            </div>

            <!-- phone number -->
                   <div class="mb-2">
              <label for="exampleInputName" class="form-label">Mobile No.</label>
              <input
                type="number"
                class="form-control border"
                id="exampleInputName"
               v-model="RegData.mobile"
              />
            </div>

            <!-- district input -->
                 <div class="mb-2">
              <label for="exampleInputName" class="form-label">District</label>
              <input
                type="text"
                class="form-control border"
                id="exampleInputName"
               v-model="RegData.district"
              />
            </div>

            <!-- pincode input -->
                 <div class="mb-2">
              <label for="exampleInputName" class="form-label">Pincode</label>
              <input
                type="number"
                class="form-control border"
                id="exampleInputName"
               v-model="RegData.pincode"
              />
            </div>

            <!-- password input -->
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Password</label
              >
              <input
                type="password"
                class="form-control border"
                id="exampleInputPassword1"
                v-model="RegData.password"
              />
              <small style="color:red;">Note:- Only number of lenght 8 is allowed</small>
            </div>
              
              <!-- confirm password input -->
            <div class="mb-3">
              <label for="exampleInputPassword2" class="form-label"
                >Confirm Password</label
              >
              <input
                type="password"
                class="form-control border"
                id="exampleInputPassword2"
               v-model="RegData.cpassword"
              />
            </div>



            <div class="d-grid">
              <button class="btn btn-primary" type="submit">SignUp</button>
            </div>
          </form>
          <div class="mt-3">
            <p class="mb-0 text-center">
              Already have account!
              <router-link to="/admin" class="text-primary fw-bold">Login</router-link>
            </p>
          </div>


        </div>
      </div>
    </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name:'SignUp',
    data(){
      return{
              RegData:{},
      }
    },
    methods:{
      async datapost(){
          const passlen =this.RegData.password.length;
          const pass1=this.RegData.password;
          const pass2=this.RegData.cpassword;
          console.log(pass1+" "+pass2);
          if(pass1==pass2 && passlen>8){
                const UserRegisterData = await JSON.stringify(this.RegData);
                console.log(`json data ${UserRegisterData}`);
                let customConfig = {
                  headers: {
                    "Content-Type": "application/json",
                  },
                };
            await axios.post(`api/admin/reg`,
                  {
                    name: this.RegData.name,
                    mobile: this.RegData.mobile,
                    email:this.RegData.email,
                    password:this.RegData.password,
                    pincode:this.RegData.pincode,
                    district:this.RegData.district,

                  },
                  customConfig
                )
                .then((response) => {
                  console.log(response.data);
                })
                .catch((err) => {
                  console.log(`Error occured ${err}`);
                });

                  }
          else{
            console.log("Password not matched or password lenght less then 8");
          }
      }

      
    }
}
</script>

<style scoped>
#signupCont{
    margin-top: 10px;
}
</style>