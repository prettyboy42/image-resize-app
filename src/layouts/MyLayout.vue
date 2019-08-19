<template>
  <q-layout view="lHh Lpr fFf">
    <the-header :headline="headline" />

    <!-- <the-side-bar-left /> -->

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- <the-footer :headline="footerline" /> -->
  </q-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import TheHeader from './fragments/TheHeader.vue';
// import TheSideBarLeft from './fragments/TheSideBarLeft.vue';
// import TheFooter from './fragments/TheFooter.vue';
import { openURL, Platform } from 'quasar';

export default Vue.extend({
  name: 'MyLayout',
  components: {
    TheHeader
  },
  preFetch({ store }) {
    // initialize something in store here
    store.dispatch('updDrawerState', Platform.is.desktop);
  },
  data() {
    return {
      headline: 'Simple Image Compression',
      footerline: 'Pacific Ocean, copyright © 2019. All rights reserved.'
    };
  },
  methods: {
    openURL
  }
});
</script>

<style></style>
