<template>
    <div id="sign-in__container" class="card">
        <div class="sign-in__title-container">
            <h3>Welcome</h3>
            <h2><strong>{First Name}!</strong></h2>
            <p>You have been registered for this awesome service. Please check your email listed below for instructions.</p>
            <div class="sign-in__email-container">
                <p><strong>{email}</strong></p>
            </div>
        </div>
        <div class="form-submit">
            <button class="form-submit-button">Sign In</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SignUp',
    data: function() {
        return {
            first_name: "",
            email_address: "",
        }
    },
    methods: {},
}
</script>
<style lang="css">
    /* Global */

    /* Elements */

    /* Classes */
    
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
    #sign-in__container h2 {
        font-size: 1.75em;
    }
    #sign-in__container h3 {
        font-size: 1.6em;
        font-weight: unset;
    }
    #sign-in__container p {
        margin: 20px 0;
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