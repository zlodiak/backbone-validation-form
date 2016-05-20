var SignUpModel = Backbone.Model.extend({
    defaults: {
        terms: false,
        gender: ''
    },
    validation: {
        username: {
            required: true,
            minLength: 3
        },
        email: {
            required: true,
            pattern: 'email'
        },
        password: {
            minLength: 4
        },
        repeatPassword: {
            equalTo: 'password',
            msg: 'The passwords does not match'
        }
    }
});