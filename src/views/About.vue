<template>
  <div class="about">
    <AboutCard />
  </div>
</template>

<script>
// @ is an alias to /src
import AboutCard from "@/components/AboutCard";

export default {
  name: "about",
  components: {
    AboutCard,
  },
};
</script>