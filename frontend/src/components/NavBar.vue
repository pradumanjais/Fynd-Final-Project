<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to='/'>Home</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#cut">Electricity Cut info</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#complain">Complain</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to='/admin'>Admin</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link class="nav-link " to='/signup'>Sign-up</router-link>
        </li> -->
      </ul>
    </div>
  </div>
</nav>
    </div>
</template>

<script>
export default {
    name:'NavBar',
}
</script>