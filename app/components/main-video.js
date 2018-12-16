import Component from '@ember/component';
import COLORS from 'vemos/lib/colors';
import shuffle from 'vemos/lib/shuffle';
import { computed } from '@ember/object';

export default Component.extend({
  colors: computed(function() {
    let colors = shuffle(COLORS);
    return {
      background: colors.pop(),
      squares: colors
    }
  }),

  fullsize: 600,

  actions: {
    setVideo(event) {
      let file = event.currentTarget.files[0];
      let videoNode = this.$('video')[0];
      videoNode.src = URL.createObjectURL(file);
    }
  }
});
