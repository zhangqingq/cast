<template>
    <!-- 面包屑导航 -->
    <!-- 导航中的两个导航文字应该从外面传入 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{firstnav}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{lastnav}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
    name: 'MyBread',
    props: ['firstnav', 'lastnav']
}
</script>

<style>

</style>
