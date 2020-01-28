<template>
  <div>
    <div class="file">
      <label class="file-label">
        <input class="file-input" type="file" name="resume"  @change="onFileChange" />
        <span class="file-cta">
          <span class="file-icon btnStyle">
            <i class="fas fa-upload"></i>
          </span>
        </span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "VFilePlus",
  props: {},

  methods: {
    onFileChange(e) {
      console.log("ONCHANGEEEEEEEEEEE");
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }
      this.createImage(files[0]);
    },
    createImage(file) {
      var reader = new FileReader();
      reader.onload = e => {
        this.$emit("input", e.target.result);
      };
      reader.readAsDataURL(file);
      console.log(file);
      console.log(reader, "LALALAL");
    }
  }
};
</script>
<style >
    .btnStyle{
        width: 50px;
    }
</style>

