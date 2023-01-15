<template>
    <div id="signinCont">
        <router-link to='/'>Home</router-link>
    
             <div class="vh-100 d-flex justify-content-center align-items-center ">
            <div class="col-md-4 p-5 shadow-sm border rounded-5 border-primary bg-white">
                <h2 class="text-center mb-4 text-primary">Login Form</h2>
                <form  @submit.prevent="getlogin()">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control border border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="logindetails.email">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control border border-primary" id="exampleInputPassword1" v-model="logindetails.password">
                    </div>
                    <!-- <p class="small"><a class="text-primary" href="forget-password.html">Forgot password?</a></p> -->
                    <div class="d-grid">
                        <button class="btn btn-primary" type="submit">Login</button>
                    </div>
                </form>
                <div class="mt-3">
                    <p class="mb-0  text-center">Don't have an account? <router-link to='admin/signup'
                            class="text-primary fw-bold">Sign
                            Up</router-link></p>
                </div>
            </div>
       
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'SignIn',
    data(){
       return{
        logindetails:{},
       }
    },
    methods:{
        async getlogin(){

        let customConfig = {
            headers: {
            "Content-Type": "application/json",
            },
        };

        await axios.post(`api/admin/login/`,
        {
            email:this.logindetails.email,
            pass:this.logindetails.password
        },
          customConfig
        )
        .then((res) => {
            console.log(res.data['token']);
          if (res.data['token']) {
            console.log("login successufully");
            this.$router.push("/dashboard");
          } 
        }).catch((err)=>{
          console.log(err);
           alert("Email does not exit");
        })


        }
    }

}
</script>