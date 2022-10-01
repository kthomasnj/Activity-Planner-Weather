$.ajax({
    async: false,
    type: 'GET',
    url: '/api/users',
    success: function(res) {
      console.log(res);
    }
})
