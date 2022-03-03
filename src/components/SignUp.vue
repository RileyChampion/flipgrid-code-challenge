<template>
    <div id="sign-up__container" class="card">
        <div class="sign-up__title-container">
            <h3>Let's</h3>
            <h2><strong>Sign Up</strong></h2>
            <p>Use the form below to sign up for this super awesome service. You;re only a few steps away!</p>
        </div>
        <form 
            v-on:submit="handle"
            method="post"
        >
            <div class="form-field">
                <label class="form-label" for="first-name">First Name</label>
                <input class="form-input" v-model="first_name" type="text" name="first-name" required>
            </div>
            <div class="form-field">
                <label class="form-label"  for="email-address">Email Address</label>
                <input class="form-input" v-model="email_address" type="email" name="email-address" required> 
            </div>
            <div class="form-field">
                <label class="form-label" for="password">Password</label>
                <input class="form-input" v-model="password" type="password" name="password" required> 
            </div>
            <div class="form-submit">
                <button class="form-submit-button">Sign Up</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: 'SignUp',
    data: function() {
        return {
            first_name: "",
            email_adderss: "",
            password: "",
        }
    },
    methods: {
        
    },
}
</script>
<style lang="css">
    
    #sign-up__container h2 {
        font-size: 1.75em;
    }
    #sign-up__container h3 {
        font-size: 1.6em;
        font-weight: unset;
    }

</style>