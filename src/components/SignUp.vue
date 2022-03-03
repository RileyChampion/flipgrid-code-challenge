<template>
    <div id="sign-up__container" class="card">
        <div class="sign-up__title-container">
            <h3>Let's</h3>
            <h2><strong>Sign Up</strong></h2>
            <p>Use the form below to sign up for this super awesome service. You're only a few steps away!</p>
        </div>
        <form 
            v-on:submit.prevent="signUpButtonPressed"
        >
            <div class="form-field">
                <label class="form-label" for="first-name">First Name</label>
                <input 
                    class="form-input" 
                    :class="{'invalid-input' : validation_indicators[0]}"
                    v-on:click="resetValidationIndicator(0)"
                    v-model="first_name" 
                    type="text" name="first-name" 
                    required
                >
            </div>
            <div class="form-field">
                <label class="form-label" for="email-address">Email Address</label>
                <input 
                    class="form-input" 
                    :class="{'invalid-input' : validation_indicators[1]}"
                    v-on:click="resetValidationIndicator(1)"
                    v-model="email_address" 
                    type="email" name="email-address" 
                    required
                > 
            </div>
            <div class="form-field">
                <label class="form-label" for="password">Password</label>
                <input 
                    class="form-input" 
                    :class="{'invalid-input' : validation_indicators[2]}" 
                    v-on:click="resetValidationIndicator(2)"
                    v-model="password" 
                    type="password" 
                    name="password" 
                    required
                > 
            </div>
            <div class="form-submit">
                <button class="form-submit-button">Sign Up</button>
            </div>
        </form>
    </div>
</template>
<script>
import SignInVue from './SignIn.vue';
export default {
    name: 'SignUp',
    data: function() {
        return {
            first_name: "",
            email_address: "",
            password: "",
            validation_indicators: [false, false, false]
        }
    },
    methods: {
        validateFirstName: function(input) {
            return /^[a-z,.'-]+$/.test(input);
        },
        validateEmail: function(input) {
            // according to https://www.w3resource.com/javascript/form/email-validation.php
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
        },
        validatePassword: function(input) {
            console.log(input, input != "");
            return input != ""
        },
        signUpButtonPressed: function(e) {
            this.validation_indicators[0] = !this.validateFirstName(this.first_name);
            this.validation_indicators[1] = !this.validateEmail(this.email_address);
            this.validation_indicators[2] = !this.validatePassword(this.password);
            
            if (this.validation_indicators.every((bool) => !bool)) {
                this.$router.push({name: 'signin', params: {first_name : this.first_name, email_address : this.email_address}});
            }
        },
        resetValidationIndicator: function(ind) {
            this.validation_indicators[ind] = false;
        }

    },
}
</script>
<style lang="css">
    /* Global */

    /* Elements */

    /* Classes */

    .form-field {
        display: flex;
        flex-direction: column;
    }
    
    .form-label {
        font-weight: bold;
        font-size: 0.85em;
        margin-bottom: 10px;
    }

    .form-input {
        border: none;
        outline: 2px #ededed solid;
        padding: 6px 4px;
        border-radius: 5px;
        margin-bottom: 10px;
        transition: all 200ms ease-in-out;
    }
    .invalid-input {
        outline: 2px #ff3535 solid !important;
        background-color: #ffbfc6 !important;
        transition: all 200ms ease-in-out;
    }
    .form-input:focus-visible {
        outline: 2px #b4b4b4 solid ;
        transition: all 200ms ease-in-out;
    }
    .form-submit {
        text-align: right;
        margin: 3px 0 0;
    }
    
    .form-submit-button {
        background: #ff1b33;
        border: none;
        border-radius: 5px;
        color: white;
        font-weight: 500;
        font-family: 'Arimo', sans-serif;
        padding: 7px 17px;
        font-size: 0.85em;
        cursor: pointer;
        border: 2px solid transparent;
    }
    .form-submit-button:hover {
        background: #e20118;
    }
    .form-submit-button:active {
        background: #ac0011;
        border-color: rgb(255, 63, 82);
    }
    
    /* Ids */
    #sign-up__container h2 {
        font-size: 1.75em;
    }
    #sign-up__container h3 {
        font-size: 1.6em;
        font-weight: unset;
    }
    #sign-up__container p {
        font-size: 0.9em;
    }

    /* Media Queries */
    @media only screen and (max-width: 450px) {
        .form-submit button{
            width: 100%;
            padding: 15px;
        }
    }

</style>