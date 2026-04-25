<template>
    <div class="nav">
        <div class="routing">
            <RouterLink class="nav-element" to="/" exact>Home</RouterLink>
            <RouterLink class="nav-element" to="/about">About</RouterLink>
            <RouterLink class="nav-element" to="/nnn">Not found</RouterLink>
        </div>
        <div class="register-header">
            <RouterLink class="nav-element" to="/register">Register</RouterLink>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
    .nav{
        display: flex;
        justify-content: space-between;
        height: 50px;
        width: 100%;
        display: flex;
        align-items: center;
        background-color: black;
    }
    .routing{
        display: flex;
    }
    .nav-element:hover{
        background-color: #333;
        color: rgb(255, 8, 8);
    }
    .nav-element{
        padding: 5px 30px;
    }
    a{
        text-decoration: none;
        color: #f6ff00;
    }
    
</style>