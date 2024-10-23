import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import * as bootstrap from 'bootstrap'; // Import all of Bootstrap

export default defineNuxtPlugin((nuxtApp) => {
  // Use the `provide` method to make bootstrap available throughout the app
  nuxtApp.provide('bootstrap', bootstrap);
});