
<template>
    <div id="EcutCont">
        <div id="cut"></div>
        <div id="heading"> Electricity Cut info</div>
        <center>
        <hr  style="color:red; width:50%; height:5px;">
        </center>
        <!-- info container -->
        <div id="infoCont">
            <!-- search box -->
            <div id="searchbox">
                <form class="row g-3">
                     <div class="col-auto"></div>
                     <div class="col-auto">
                        <label for="inputPassword2" class="visually-hidden">District</label>
                        <input type="password" class="form-control" id="inputPassword2" placeholder="District">
                     </div>
                     <div class="col-auto">
                        <button type="submit" class="btn btn-primary mb-3">Search</button>
                     </div>
                </form>
            </div>

            <!-- Card Container -->
        <div id="CardCont">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <!-- card1 -->
            <div class="col">
                <div class="card h-100">
                <div class="card-body " >
                    <h5 class="card-title">District</h5>
                    <div class="card-text ">Name:-</div>
                    <div class="card-text ">Phone:-</div>
                    <div class="card-text">Area Pincode :- 221208,221105</div>
                    <div class="card-text">Time from:- Date ,time</div>
                    <div class="card-text">Time To:- Date,time</div>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
                </div>
            </div>
            <!-- card2 -->
            <div class="col">
                <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
                </div>
            </div>
             <!-- card3 -->
            <div class="col">
                <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
                </div>
            </div>
            <!-- card4 -->
            <div class="col">
                <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
                </div>
            </div>

</div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    name:'ElectricityCut'
}
</script>

<style scoped>
#EcutCont{
    margin-top: 20px;
}
#heading{
    text-align: center;
    font-size: 30px;    
}
#searchbox{
    margin-top: 50px;
    display: flex;
    justify-content: center;
}
#CardCont{
    padding: 30px 80px 30px 80px;
}
</style>