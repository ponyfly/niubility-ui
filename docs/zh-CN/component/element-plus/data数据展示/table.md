# Table 表格

## 自定义列表格

展示vue组件

{{ 1 + 1 }}

<span v-for="i in 3">{{ i }}</span>

<VcTable :data="tableData" :default-columns="defaultColumns">
    <el-table-column prop="date" label="Date" width="160" />
    <el-table-column prop="name" label="Name" width="90" />
    <el-table-column prop="age" label="Age" width="90" />
    <el-table-column prop="address" label="Address" />
</VcTable>
<script setup>
const defaultColumns = ['Date', 'Name', 'Address']
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    age: '20',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    age: '20',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    age: '20',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    age: '20',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<pre>{{ page }}</pre>

::: v-pre
`{{ This will be displayed as-is }}`
:::

<NbButton/>
