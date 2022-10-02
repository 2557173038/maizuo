<template>

    <el-container style="height: 100%; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1']">
      <el-submenu :index="data.id+''" v-for="data in sideList" :key="data.id">
        <template slot="title"><i class="el-icon-message"></i>{{data.title}}</template>

          <el-menu-item :index="item.id+''" v-for="item in data.children" :key="item.id">{{item.title}}</el-menu-item>

        </el-submenu>

        <el-submenu index="3">
        <template slot="title"><i class="el-icon-message"></i>导航二</template>

          <el-menu-item index="1-4-1">选项1</el-menu-item>

        </el-submenu>

    </el-menu>
  </el-aside>

  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>

    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="title" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</el-container>

</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

export default {

  data () {
    return {
      tableData: [
        {
          title: 'kerwin',
          address: '大连',
          date: '2020-01-01'
        },
        {
          title: 'tiechui',
          address: '北京',
          date: '2020-02-01'
        },
        {
          title: 'xiaomin',
          address: '杭州',
          date: '2020-03-01'
        }
      ],
      sideList: [
        {
          id: 1,
          title: '用户管理',
          children: [
            {
              id: 2,
              title: '用户列表'
            },
            {
              id: 3,
              title: '用户权限'
            }
          ]
        },
        {
          id: 4,
          title: '权限管理',
          children: [
            {
              id: 5,
              title: '权限列表'
            },
            {
              id: 6,
              title: '角色权限'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>
    .el-header {
      background-color: #B3C0D1;
      color: #333;
      line-height: 60px;
    }

    .el-aside {
      color: #333;
    }
    html,body{
        height: 100%;
    }
    *{
        margin: 0;
        padding: 0;
    }
  </style>
