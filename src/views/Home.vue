<template>
  <div class="home">
    <BoxCards />
  </div>
</template>

<script>
// @ is an alias to /src
import BoxCards from "@/components/BoxCards";

export default {
  name: "Home",
  components: {
    BoxCards,
  },
};
</script>
