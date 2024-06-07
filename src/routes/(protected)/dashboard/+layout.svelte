<script lang="ts">
	import { page } from "$app/stores";

   $: title = $page.data.title || 'Domain Overview'
</script>


<section class="container">
<header  >
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
        padding-block: 2rem;
        display: grid;
        grid-template-rows: auto 1fr;
        row-gap: 2rem;
    }
    </style>