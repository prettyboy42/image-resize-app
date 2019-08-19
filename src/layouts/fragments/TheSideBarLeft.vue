<template>
  <q-drawer v-model="drawerState" bordered content-class="bg-grey-2">
    <q-list>
      <q-item-label header>Danh mục</q-item-label>
      <q-item clickable tag="a" to="/">
        <q-item-section avatar>
          <q-icon name="school" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Home</q-item-label>
          <q-item-label caption>quasar.dev</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable tag="a" to="/login">
        <q-item-section avatar>
          <q-icon name="mdi-login" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Login</q-item-label>
          <q-item-label caption>Login to system</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable tag="a" to="/register">
        <q-item-section avatar>
          <q-icon name="mdi-account-plus-outline" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Register</q-item-label>
          <q-item-label caption>Register a new account</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script lang='ts'>
import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'TheSideBarLeft',
  computed: {
    drawerState: {
      get: function() {
        return this.$store.state.drawerState;
      },
      set: function(newVal) {
        newVal;
        // this.toggleSideBar(newVal);
      }
    }
  },
  methods: {
    ...mapActions({
      toggleSideBar: 'updDrawerState'
    })
  }
});
</script>
