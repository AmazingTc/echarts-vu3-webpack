<template>
    <div class="card">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        props:{
            title:String,
        }
    }
</script>
<style scoped lang="less">
    .card{
        height: 4.5rem;
        width: 6rem;
        background-color: red;
        border:1px solid rgba(58, 46, 167, 0.17);
        background-color: rgba(28, 16, 139,0.4);
        border-bottom: 2px solid rgb(33, 139, 188);
        border-radius: .0625rem;
        padding:.1rem;
        position: relative;
        margin:.1rem;
    }
    .card::before{
        position: absolute;
        top:0;
        left: 0;
        content: '';
        width: .25rem;
        height: .25rem;
        border-top:2px solid rgb(33, 139, 188);
        border-left:2px solid rgb(33, 139, 188);

    }
    .card::after{
        position: absolute;
        top:0;
        right:0;
        content: '';
        width: .25rem;
        height: .25rem;
        border-right:2px solid rgb(33, 139, 188);
        border-top:2px solid rgb(33, 139, 188);
    }
</style>