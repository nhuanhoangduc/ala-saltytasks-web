<script>
    export let email
    export let password
    export let onSubmit = () => {}
</script>

<form>
    <!-- Email -->
    <div class="form-group">
        <label for="inputEmail">Email address</label>
        <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" bind:value={email} />
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>

    <!-- Password -->
    <div class="form-group">
        <label for="inputPassword">Password</label>
        <input type="password" class="form-control" id="inputPassword" bind:value={password} />
    </div>

    <!-- Submit button -->
    <button type="button" class="block btn btn-primary" on:click={onSubmit}>Submit</button>
</form>

<!-- Forgot password -->
<div class="mt-3 d-flex justify-content-center">
    <button type="button" class="btn btn-link ">Forgot password</button>
    <button type="button" class="btn btn-link ">Create new account</button>
</div>
