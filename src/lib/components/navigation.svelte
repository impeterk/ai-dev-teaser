<script>
	import { page } from '$app/stores';

	import { Building2, FilePlus, FileText, LayoutDashboard, Route, Settings2 } from 'lucide-svelte';
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
	<ul class="before:opacity-100 before:bg-primary">
		<li  ><a href=/dashboard/{$page.params.domainId} class="px-8 text-neutral">
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
<li>
	<a
		href="/dashboard/organization"
		class:active={$page.route.id === '/(protected)/dashboard/organization'}
		class="px-8"
        on:click={() => {
		$drawer.checked && $drawer.click()
        }}
	>
	<Building2 /> Organization
	</a>
</li>
<li>
	<a
		href="/dashboard/settings"
		class:active={$page.route.id === '/(protected)/dashboard/settings'}
		class="px-8"
        on:click={() => {
		$drawer.checked && $drawer.click()
        }}
	>
	<Settings2 /> Settings
	</a>
</li>
<li>
	<a href="/dashboard/road-map"
	class:active={$page.route.id === '/(protected)/dashboard/road-map'}
	class="px-8"
	on:click={() => {
		$drawer.checked && $drawer.click()
        }}
	>
		<Route /> Road Map
	</a>
</li>