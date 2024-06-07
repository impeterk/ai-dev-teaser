<script lang="ts">
	import { page } from "$app/stores";
	import RegisterForm from "$lib/components/forms/register.svelte";
	import SignInForm from "$lib/components/forms/sign-in.svelte";
    let activeTab = $page.url.searchParams.get('activeTab') || 'sign-in'
</script>

<section class="h-full flex items-center justify-center">
    <div class="card w-full max-w-sm bg-base-200 shadow">
        <div role="tablist" class="tabs tabs-lifted tabs-lg">
            <button role="tab" class="tab text-primary" class:bg-primary-content={activeTab == 'sign-in'}  on:click={() => activeTab = 'sign-in'}>Sign In</button>
            <button role="tab" class="tab text-primary" class:bg-primary-content={activeTab == 'register'} on:click={() => activeTab = 'register'}>Sign Up</button>
        </div>
        {#if activeTab == 'sign-in'}
           <SignInForm />
        {/if}
        {#if activeTab == 'register'}
           <RegisterForm />
        {/if}
        
        
    </div>
</section>