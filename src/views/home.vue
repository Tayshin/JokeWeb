//index.vue
<template>
    <div class='home'>
        <div class='title'>每日一笑</div>
        <div class='logo'>
            <img class='logo-img' src = "./../assets/logo.png" />
        </div>
    </div>
</template>
<style lang='less'>
    .title{
        color: #000;
        font-size: 40px;
        text-align: center;
        line-height: 200px;
        font-family: cursive;
    }
    .home{
        position: absolute;
        width:100%;
        height:100%;
    }
    .logo{
        position: absolute;
        width:100px;
        left:50%;
        margin-left:-50px;
    }
    .logo-img{
        width:100%;
    }
</style>