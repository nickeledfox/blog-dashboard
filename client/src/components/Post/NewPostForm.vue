<template>
  <el-form
    ref="ruleFormRef"
    :model="post"
    :rules="rules"
    label-width="120px"
    :size="formSize"
  >
    <!-- Category -->
    <el-form-item label="Category" prop="category">
      <el-select
        style="width: 20rem"
        v-model="post.category"
        placeholder="Select category"
      >
        <el-option
          label="Elliptical flower arrangement"
          value="Elliptical flower arrangement"
        ></el-option>
        <el-option
          label="Vertical flower arrangement"
          value="Vertical flower arrangement"
        ></el-option>
        <el-option
          label="Triangular flowers"
          value="Triangular flowers"
        ></el-option>
        <el-option
          label="The crescent flower arrangement"
          value="The crescent flower arrangement"
        ></el-option>
        <el-option
          label="The 'S' shaped flower arrangement"
          value="The 'S' shaped flower arrangement"
        ></el-option>
        <el-option
          label="The oval shaped flower arrangement"
          value="The oval shaped flower arrangement"
        ></el-option>
        <el-option
          label="The cascade flower arrangement"
          value="The cascade flower arrangement"
        ></el-option>
      </el-select>
    </el-form-item>
    <!-- Title -->
    <el-form-item label="Post title" prop="title">
      <el-input class="title" v-model="post.title"></el-input>
    </el-form-item>
    <!-- Upload Image -->
    <el-form-item label="Upload File" prop="image">
      <input ref="upload" @change="selectFile" type="file" name="filename" />
    </el-form-item>

    <!-- Content field -->
    <el-form-item label="Content" prop="content">
      <el-input
        v-model="post.content"
        type="textarea"
        :autosize="{ minRows: 10, maxRows: 25 }"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <!-- Submit button -->
      <el-button type="primary" @click="submitForm(ruleFormRef)"
        >Create</el-button
      >
      <!-- Reset button -->
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import rules from '../../validation/rules';
import API from '../../api/api';
import { reactive, ref } from 'vue';
const upload = ref();
// @ts-ignore
import type { UploadFile } from 'element-plus';
// @ts-ignore
import type { FormInstance } from 'element-plus';
import { useRouter } from 'vue-router';

const router = useRouter();

const formSize = ref('default');
const ruleFormRef = ref<FormInstance>();
const post = reactive({
  title: '',
  category: '',
  content: '',
  image: '',
});

const selectFile = (file) => {
  post.image = upload.value = file[0];
};

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    const formData = new FormData();
    formData.append('title', post.title);
    formData.append('category', post.category);
    formData.append('content', post.content);
    formData.append('image', upload.value);
    if (valid) {
      const res = await API.addPost(formData);
      router.push({ name: 'Home' });
    } else {
      console.log('error submit!', fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
  upload.value.clearFiles();
};
</script>

<style lang="sass">
.el-dialog__body img
  width: 100% !important

.el-upload--picture-card, .el-upload-list--picture-card .el-upload-list__item

  @media (min-width: 605px)
    width: 20rem
</style>
