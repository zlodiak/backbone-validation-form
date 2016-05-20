var SignUpForm = Backbone.View.extend({
    events: {
        'click #signUpButton': function (e) {
            e.preventDefault();
            this.signUp();
        }
    },

    initialize: function () {
        // This hooks up the validation
        // See: http://thedersen.com/projects/backbone-validation/#using-form-model-validation/validation-binding
        Backbone.Validation.bind(this);
    },

    signUp: function () {
        var data = this.$el.serializeObject();

        this.model.set(data);

        var modelValid = this.model.isValid(true);
        if(modelValid) { alert('model is valid'); };
        

        var modelValidUsername = this.model.isValid('username');
        if(modelValidUsername) { alert('username field is valid'); };
      

        var modelValidEmail = this.model.isValid('email');
        if(modelValidEmail) { alert('email field is valid'); };  

        var modelValidPassword = this.model.isValid('password'),
            modelValidRepeatPassword = this.model.isValid('repeatPassword');

        if(modelValidPassword && modelValidRepeatPassword) { alert('password fields is valid'); };          
        
        
        // Check if the model is valid before saving
        // See: http://thedersen.com/projects/backbone-validation/#methods/isvalid
/*        if(this.model.isValid(true)){
            // this.model.save();
            alert('Great Success!');
        }*/
    },
    
    remove: function() {
        // Remove the validation binding
        // See: http://thedersen.com/projects/backbone-validation/#using-form-model-validation/unbinding
        Backbone.Validation.unbind(this);
        return Backbone.View.prototype.remove.apply(this, arguments);
    }
});