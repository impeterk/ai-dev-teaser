<script lang="ts">
	import { KeyRound, Mail } from "lucide-svelte";

   let password = '', confirmPassword = ''
   $: passwordMatch = password === confirmPassword
</script>


<form class="card-body">
    <div class="header prose dark:prose-invert text-center">

        <h2>Sign Up</h2>
    </div>
  <div class="form-control">
    <label class="label" for="email">
      <span class="label-text">Email</span>
    </label>
    <label class="input input-bordered flex items-center gap-2" >
        <Mail />
      <input type="text" name="email" placeholder="email" class="w-full" required  />
      </label>
  </div>
  <div class="form-control">
    <label class="label" for="password">
      <span class="label-text">Password</span>
    </label>
    <label class="input input-bordered flex items-center gap-2"  class:input-error={!passwordMatch}>
        <KeyRound />
      <input type="password" name="password" placeholder="password" class="w-full" required bind:value={password} />
</label>
  </div>
  <div class="form-control">
    <div class="label">
        <span class="label-text-alt">Confirm Password</span>
      </div>
    <label class="input input-bordered flex items-center gap-2" class:input-error={!passwordMatch} for="confirm-password">
        <KeyRound />
      <input type="password" name="confirm-password" placeholder="confirm password" class="w-full" required bind:value={confirmPassword}/>
    </label>
    
    {#if !passwordMatch}
    <div class="label">  
        <span class="label-text-alt  text-error">Passwords do not match</span>
      </div>
      {/if}
    </div>
    <div class="form-control mt-6">
        <button class="btn btn-primary">Sign Up</button>
    </div>
</form>