$.ajax({
    async: false,
    type: 'GET',
    url: '/api/history',
    success: function(res) {
      console.log(res);
    }
})
