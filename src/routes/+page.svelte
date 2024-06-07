<script>

	import SignInForm from "$lib/components/forms/sign-in.svelte";

</script>
<div class="hero h-full bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="ml-20 text-pretty  prose dark:prose-invert">
        <h1 class="">SEO kit</h1>
        <h3 >Some lovely text regarding how amazing our app is</h3>
      </div>
      <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        
          <SignInForm />
        <div class="card-body pt-0">
            <div class="divider mt-0">or</div>
            <a href="/register" class="btn text-primary">Sign Up</a>
        </div>
      </div>
    </div>
  </div>