<template>
  <div>
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
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const upload = ref();
import { Plus, ZoomIn, Download, Delete } from '@element-plus/icons-vue';
// @ts-ignore
import type { UploadFile } from 'element-plus';

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
</script>

<style lang="sass">
.el-dialog__body img
  width: 100% !important

.el-upload--picture-card, .el-upload-list--picture-card .el-upload-list__item

  @media (min-width: 605px)
    width: 20rem
</style>
