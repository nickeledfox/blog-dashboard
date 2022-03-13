<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    :size="formSize"
  >
    <el-form-item label="Post title" prop="title">
      <el-input v-model="ruleForm.title"></el-input>
    </el-form-item>
    <el-form-item label="Activity zone" prop="category">
      <el-select v-model="ruleForm.category" placeholder="Select category">
        <el-option
          label="Elliptical flower arrangement"
          value="elliptical"
        ></el-option>
        <el-option
          label="Vertical flower arrangement"
          value="vertical"
        ></el-option>
        <el-option label="Triangular flowers" value="triangular"></el-option>
        <el-option
          label="The crescent flower arrangement"
          value="crescent"
        ></el-option>
        <el-option
          label="The 'S' shaped flower arrangement"
          value="s-shaped"
        ></el-option>
        <el-option
          label="The oval shaped flower arrangement"
          value="oval"
        ></el-option>
        <el-option
          label="The cascade flower arrangement"
          value="cascade"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Activity time" required>
      <el-col :span="11">
        <el-form-item prop="date1">
          <el-date-picker
            v-model="ruleForm.date1"
            type="date"
            placeholder="Pick a date"
            style="width: 100%"
          ></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col class="text-center" :span="2">
        <span class="text-gray-500">-</span>
      </el-col>
      <el-col :span="11">
        <el-form-item prop="date2">
          <el-time-picker
            v-model="ruleForm.date2"
            placeholder="Pick a time"
            style="width: 100%"
          ></el-time-picker>
        </el-form-item>
      </el-col>
    </el-form-item>

    <el-form-item label="Content" prop="content">
      <el-input
        v-model="ruleForm.content"
        type="textarea"
        :autosize="{ minRows: 10, maxRows: 25 }"
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
        >Create</el-button
      >
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
// @ts-ignore
import type { FormInstance } from 'element-plus';

const formSize = ref('default');
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  title: '',
  category: '',
  date1: '',
  date2: '',
  content: '',
});

const rules = reactive({
  title: [
    { required: true, message: 'Please input Post title', trigger: 'blur' },
    {
      min: 10,
      max: 300,
      message: 'Length should be 10 to 300',
      trigger: 'blur',
    },
  ],
  category: [
    {
      required: true,
      message: 'Please select category',
      trigger: 'change',
    },
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change',
    },
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a time',
      trigger: 'change',
    },
  ],
  content: [
    { required: true, message: 'Please input activity form', trigger: 'blur' },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!');
    } else {
      console.log('error submit!', fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
