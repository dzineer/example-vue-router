<template>
  <div id="app" style="display:flex;flex-direction:column;width:100%;justify-content:center;justify-items:center">
    <nav style="display:flex;width:100%;justify-content:center;justify-items:center;padding-top:20px;padding-bottom:20px;background-color:blue;">
      <router-link to="/" style="padding: 10px 20px;color:white;text-decoration:none;text-transform:uppercase;">Home</router-link>
      <router-link to="/register" style="padding: 10px 20px;color:white;text-decoration:none;text-transform:uppercase;">Register</router-link>
      <router-link to="/login" style="padding: 10px 20px;color:white;text-decoration:none;text-transform:uppercase;">Login</router-link>
      <router-link to="/our-coffee" style="padding: 10px 20px;color:white;text-decoration:none;text-transform:uppercase;">Our Coffee</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
}
</script>