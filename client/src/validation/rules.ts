import { reactive } from 'vue';

const rules = reactive({
  title: [
    { required: true, message: 'Please input Post title', trigger: 'blur' },
    {
      min: 4,
      max: 300,
      message: 'Length should be 4 to 300',
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
  content: [
    { required: true, message: 'Please input activity form', trigger: 'blur' },
  ],
  image: [{ required: false }],
});

export default rules;
