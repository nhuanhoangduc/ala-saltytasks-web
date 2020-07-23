<script>
    import LoginForm from '@web/forms/LoginForm.svelte'

    let email
    let password

    function onSubmit() {
        console.log('submitted')
        console.log(email)
        console.log(password)
    }
</script>

<section class="container pt-5">
    <!-- Title -->
    <h1 class="mt-5 text-center">Salty tasks</h1>

    <!-- Login form -->
    <div class="row mt-5">
        <div class="col-lg-6 offset-lg-3">
            <!-- Login form -->
            <LoginForm bind:email bind:password {onSubmit} />
        </div>
    </div>
</section>
