<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <!--  -->
      <li><NuxtLink to="/master/villages/list">村マスタ</NuxtLink></li>
    </v-navigation-drawer>

    <v-app-bar color="appBar" density="compact">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
      <v-switch
        v-model="isLight"
        :prepend-icon="isLight ? mdiWeatherSunny : mdiWeatherNight"
        @change="toggleTheme"
      ></v-switch>
    </v-app-bar>

    <v-main color="background">
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
import { mdiWeatherNight, mdiWeatherSunny } from "@mdi/js";
const theme = useTheme();
const drawer = ref(false);
const isLight = ref(false);
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark
    ? "mainTheme"
    : "mainDarkTheme";
};
</script>
