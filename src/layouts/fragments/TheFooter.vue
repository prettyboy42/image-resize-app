<template>
  <q-footer elevated>
    <q-toolbar>
      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
        </q-avatar>
        {{ headline }}
      </q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>

<script>
export default {
  name: 'TheFooter',
  props: {
    headline: {
      type: String,
      default: 'No footer\\\'s headline'
    }
  }
};
</script>
