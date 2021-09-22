<template>
  <div class="address">
    <span> 输入收货地址 </span>
    <el-form ref="form" :model="form" label-width="80px">
      <!-- <el-form-item label="所在地区">
        <el-col :span="11">
          <el-select>
            <el-option label="区域一" value="shanghai"></el-option>
          </el-select>
        </el-col>
        <el-col :span="11">
          <el-select>
            <el-option label="区域一" value="shanghai"></el-option>
          </el-select>
        </el-col>
        <el-col :span="11">
          <el-select>
            <el-option label="区域一" value="shanghai"></el-option>
          </el-select>
        </el-col>
      </el-form-item> -->
      <el-form-item label="详细地址">
        <el-input type="textarea" v-model="form.detail_address"></el-input>
      </el-form-item>
      <el-form-item label="邮政编码">
        <el-input v-model="form.address_code"></el-input>
      </el-form-item>
      <el-form-item label="收货人姓名">
        <el-input v-model="form.receiver"></el-input>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
    </el-form>
    <div class="info">确认订单信息</div>
  </div>
</template>

<script>
export default {
  name: "Address",
  props: ["form"],
};
</script>

<style lang="scss" scoped>
.address {
  width: 61.803%;
}
</style>