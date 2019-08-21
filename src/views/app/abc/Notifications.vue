<template>
  <b-card class="h-100 rounded_sm">
    <b-row>
      <b-colxx>
        <h6>Notifications</h6>
      </b-colxx>
    </b-row>
    <vue-perfect-scrollbar
        id="notif"
        class="scroll"
        :settings="{ suppressScrollX: true, wheelPropagation: false }">
      <b-row style="height:150px;">
        <p class="mx-3"><span><i class="simple-icon-microphone text-primary mr-2"/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat aspernatur, quisquam dolore autem laudantium consectetur mollitia architecto, facere repudiandae, deserunt optio delectus omnis. Optio laboriosam reprehenderit, iure quibusdam explicabo molestiae.</span></p>
        <p class="mx-3"><span><i class="simple-icon-microphone text-primary mr-2"/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat aspernatur, quisquam dolore autem laudantium consectetur mollitia architecto, facere repudiandae, deserunt optio delectus omnis. Optio laboriosam reprehenderit, iure quibusdam explicabo molestiae.</span></p>
        <p class="mx-3"><span><i class="simple-icon-microphone text-primary mr-2"/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat aspernatur, quisquam dolore autem laudantium consectetur mollitia architecto, facere repudiandae, deserunt optio delectus omnis. Optio laboriosam reprehenderit, iure quibusdam explicabo molestiae.</span></p>
      </b-row>
    </vue-perfect-scrollbar>
  </b-card>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      selectedValueSingle: new Date()
    }
  }
}
</script>

<style>
#notif .ps__scrollbar-y{
  background-color: #145388 !important
}
</style>
