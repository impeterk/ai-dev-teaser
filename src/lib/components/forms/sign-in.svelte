<script>

	import { KeyRound, Mail } from "lucide-svelte";

</script>
<form class="card-body">
    <div class="header prose dark:prose-invert text-center">

        <h2>Log in</h2>
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
    <label class="input input-bordered flex items-center gap-2" >
        <KeyRound />
      <input type="password" name="password" placeholder="password" class="w-full" required  />
      </label>
    <label class="label">
      <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
    </label>
  </div>
  <div class="form-control mt-6">
    <button class="btn btn-primary">Login</button>
  </div>
</form>