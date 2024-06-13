<script lang="ts">
	import { page } from "$app/stores";
	import Breadcrumbs from "./breadcrumbs.svelte";

   $: title = $page.data.title || 'Domain Overview'
</script>


<section class="container">
<header class="py-6"  >
    {#if String($page.route.id) !== '/(protected)/dashboard'}
    <Breadcrumbs />
    {/if}
<h1 class="text-primary text-6xl font-extrabold capitalize">
    {title}
</h1>
</header>
    <main >
        <slot />
    </main>
</section>
<style>
    .container {
        display: grid;
        grid-template-rows: auto 1fr;
        row-gap: 2rem;
    }
    </style>