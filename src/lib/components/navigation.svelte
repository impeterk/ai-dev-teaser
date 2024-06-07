<script>
	import { page } from '$app/stores';

	import { FilePlus, LayoutDashboard } from 'lucide-svelte';
    import {drawer} from '$lib/stores'
    
</script>

<li>
	<a href="/dashboard" class:active={$page.route.id === '/(protected)/dashboard'} class="px-8"
    on:click={() => {
        $drawer.click()
    }}
		><LayoutDashboard /> Dashboard</a
	>
</li>
<li>
	<a
		href="/dashboard/new-domain"
		class:active={$page.route.id === '/(protected)/dashboard/new-domain'}
		class="px-8"
        on:click={() => {
            $drawer.click()
        }}
	>
		<FilePlus /> Add Domain
	</a>
</li>
