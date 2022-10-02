$.ajax({
    async: false,
    type: 'POST',
    url: '/api/users',
    success: function(res) {
      console.log(res);
    }
})
