const Back = {
  async render() {
    return '<p>back</p>';
  },

  async afterRender() {
    var lastFilledPage = 1;

    for (var i = 10; i >= 1; i--) {
      var score = localStorage.getItem('soal' + i);
      if (score) {
        lastFilledPage = i;
        break;
      }
    }

    // Redirect to the last filled page or soal1.html if none are filled
    window.location.href = lastFilledPage > 1 ? '#/soal' + lastFilledPage : '#/soal1';
  },
};

export default Back;