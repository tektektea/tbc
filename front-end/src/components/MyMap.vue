<template>
  <GoogleMap api-key="AIzaSyCYjOcq9F1v_VGx2k2WtlRgbyOGNvk-qYY" style="width: 100%; height: 500px" :center="center" :zoom="15">
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat:23.739222194099643, lng: 92.71682968828705 };

    return { center };
  },
});
</script>
