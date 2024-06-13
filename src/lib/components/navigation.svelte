<script>
	import { page } from '$app/stores';

	import { FilePlus, FileText, LayoutDashboard } from 'lucide-svelte';
    import {drawer} from '$lib/stores'
    
</script>

<li>
	<a href="/dashboard" class:active={$page.route.id === '/(protected)/dashboard'} class="px-8"
    on:click={() => {
		$drawer.checked && $drawer.click()
    }}
		><LayoutDashboard /> Dashboard</a
	>
	{#if $page.params.domainId}
	   
	
	<ul>
		<li><a href=/dashboard/{$page.params.domainId} class="px-8 active">
			<FileText />
			{$page.params.domainId}</a></li>
		</ul>
	{/if}
</li>
<li>
	<a
		href="/dashboard/new-domain"
		class:active={$page.route.id === '/(protected)/dashboard/new-domain'}
		class="px-8"
        on:click={() => {
		$drawer.checked && $drawer.click()
        }}
	>
		<FilePlus /> Add Domain
	</a>
</li>
