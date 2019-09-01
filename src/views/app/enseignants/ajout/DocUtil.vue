<template>
  <div>
    <b-row class="mb-3">
      <b-colxx xxs="1">CV</b-colxx>
      <b-colxx>
        <vue-dropzone ref="myVueDropzone" id="dropzon1" :options="dropzoneOptions" useCustomSlot>
          <div class="dropzone-custom-content">
            <i class="simple-icon-plus display-4 rounded bg-primary"/>
          </div>
        </vue-dropzone>
      </b-colxx>
    </b-row>
    <b-row class="mb-3">
      <b-colxx xxs="1">Documents Utiles</b-colxx>
      <b-colxx>
        <vue-dropzone ref="myVueDropzone" id="dropzone2" :options="dropzoneOptions" useCustomSlot>
          <div class="dropzone-custom-content">
            <i class="simple-icon-plus display-4 rounded bg-primary"/>
          </div>
        </vue-dropzone>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
import VueDropzone from 'vue2-dropzone'
export default {
  components: {
    VueDropzone
  },
  data () {
    return {
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailHeight: 160,
        maxFilesize: 2,
        previewTemplate: this.dropzoneTemplate(),
        headers: { 'My-Awesome-Header': 'header value' }
      }
    }
  },
  methods: {
    dropzoneTemplate () {
      return `<div class="dz-preview dz-file-preview mb-3">
                  <div class="d-flex flex-row "> <div class="p-0 w-30 position-relative">
                      <div class="dz-error-mark"><span><i></i>  </span></div>
                      <div class="dz-success-mark"><span><i></i></span></div>
                      <div class="preview-container">
                        <img data-dz-thumbnail class="img-thumbnail border-0" />
                        <i class="simple-icon-doc preview-icon"></i>
                      </div>
                  </div>
                  <div class="pl-3 pt-2 pr-2 pb-1 w-70 dz-details position-relative">
                    <div> <span data-dz-name /> </div>
                    <div class="text-primary text-extra-small" data-dz-size /> </div>
                    <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
                    <div class="dz-error-message"><span data-dz-errormessage></span></div>
                  </div>
                  <a href="#" class="remove" data-dz-remove> <i class="glyph-icon simple-icon-trash"></i> </a>
                </div>
        `
    }
  }
}
</script>

<style>

</style>
