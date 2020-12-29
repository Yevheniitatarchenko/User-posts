/* eslint-disable no-unused-vars */
import _ from 'lodash';

export default {
  data() {
    return {
      editModeEnabled: [],
    };
  },
  mounted() {},
  methods: {
    toggleEditMode(key, item) {
      if (this.isEditModeEnabled(key)) {
        this.saveEditableItem();
        this.editModeEnabled = this.$lodash.filter(
          this.editModeEnabled,
          (k) => k !== key,
        );
      } else {
        this.editModeEnabled.push(key);
        this.addEditableItem(item);
      }
    },
    isEditModeEnabled(key) {
      return this.$lodash.includes(this.editModeEnabled, key);
    },
  },
};
