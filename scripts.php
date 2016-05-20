<script src="js/jquery/jquery.2.min.js"></script>    
<script src="js/bootstrap-3/js/bootstrap.min.js"></script> 
<script src="js/underscore-min.js"></script>
<script src="js/backbone-min.js"></script>
<script src="js/backbone-validation.min.js"></script>

<script src="js/project/misc.js"></script> 
<script src="js/project/models/models.js"></script> 
<script src="js/project/views/formView.js"></script> 

<script>
  $(function () {
    var view = new SignUpForm({
      el: 'form',
      model: new SignUpModel()
    });
  });
</script>

