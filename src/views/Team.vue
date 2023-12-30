<script setup>
// import team from "@/team.json";
import TeamHeader from "@/components/Team/TeamHeader.vue";
import TeamMembers from "@/components/Team/TeamMembers.vue";
import TeamFooter from "@/components/Team/TeamFooter.vue";
import { useTeamStore } from "@/stores/teamStore.js";

const team = useTeamStore();

team.fill();
</script>

<template>
  <TeamHeader />

  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <TeamMembers />
  </div>

  <TeamFooter />
</template>