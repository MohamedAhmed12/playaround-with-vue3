<script setup>
import TeamHeader from "@/components/Team/TeamHeader.vue";
import TeamMembers from "@/components/Team/TeamMembers.vue";
import TeamFooter from "@/components/Team/TeamFooter.vue";
import Modal from "@/components/Modal.vue";
import { useTeamStore } from "@/stores/teamStore.js";
import { ref } from "vue";

const team = useTeamStore();
team.fill();

const showModal = ref(false);
</script>

<template>
  <TeamHeader @add="showModal = true" />

  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <TeamMembers />
  </div>

  <TeamFooter />

  <Modal :show="showModal" @close="showModal = false">
    <template #header>
      <div class="mb-5">override header</div>
    </template>

    <template #default>
      <P>Need to add new member to your team?</P>

      <form class="mt-6">
        <div class="flex">
          <input type="email" placeholder="Email Address..."  class="flex-1"/>
          <button>Add</button>
        </div>
      </form>
    </template>
  </Modal>
</template>