<template>
  <el-form
    ref="ruleFormRef"
    :model="post"
    :rules="rules"
    label-width="120px"
    :size="formSize"
  >
    <!-- TODO: handle reset with other fields -->
    <el-form-item prop="upload">
      <Upload @change="upload" />
    </el-form-item>
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

    <!-- Upload picture -->
    <el-upload
      ref="upload"
      :auto-upload="false"
      list-type="picture-card"
      action="#"
      :limit="1"
      :on-exceed="handleExceed"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
    >
      <template #default>
        <el-icon><Plus /></el-icon>
      </template>
      <template #file="{ file }">
        <div>
          <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
          <span class="el-upload-list__item-actions">
            <span
              class="el-upload-list__item-preview"
              @click="handlePictureCardPreview(file)"
            >
              <el-icon><zoom-in /></el-icon>
            </span>

            <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleRemove(file)"
            >
              <el-icon><Delete /></el-icon>
            </span>
          </span>
        </div>
      </template>
    </el-upload>
    <el-dialog v-model="dialogVisible">
      <img :src="dialogImageUrl" alt="" />
    </el-dialog>

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

const handleExceed = (files) => {
  upload.value.clearFiles();
  upload.value.handleStart(files[0]);
};
const submitUpload = () => {
  upload.value.submit();
};

const dialogImageUrl = ref('');
const dialogVisible = ref(false);
const disabled = ref(false);

const handleRemove = (file: UploadFile) => {
  upload.value.clearFiles();
};
const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!;
  dialogVisible.value = true;
};

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    const formData = new FormData();
    formData.append('title', post.title);
    formData.append('category', post.category);
    formData.append('content', post.content);
    formData.append('image', post.image);
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
};
</script>

<style lang="sass">
.el-upload-list--picture-card
  margin-left: 120px

.el-dialog__body img
  width: 100% !important

.el-upload--picture-card, .el-upload-list--picture-card .el-upload-list__item

  @media (min-width: 605px)
    width: 20rem
</style>
