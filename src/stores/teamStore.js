import { defineStore } from "pinia";

export const useTeamStore = defineStore("team", {
  state: () => ({
    name: "",
    spots: 0,
    members: [],
  }),

  actions: {
    async fill() {
      let data = await import("@/team.json");
      const { name, spots, members } = data.default;

      this.$patch({
        name,
        spots,
        members,
      });
    },

    grow(spots) {
      this.spots = spots;
    },
  },

  getters: {
    spotsRemaining() {
      return this.spots - this.members.length;
    },
  },
});
