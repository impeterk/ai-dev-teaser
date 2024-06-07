<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';
	import Header from './header.svelte';
	import SidePanel from './side-panel.svelte';
	import {drawer} from '$lib/stores'
	
</script>

<div class="app">
	<div class="drawer h-full" class:lg:drawer-open={String($page.url).includes('dashboard')}>
		<input id="main-layout-drawer" bind:this={$drawer} type="checkbox" class="drawer-toggle" />
		<div class="drawer-content">
			<Header />
			<slot />
		</div>
		<SidePanel />
	</div>
</div>

<style>
	.drawer-content {
		display: grid;
		grid-template-rows: auto 1fr;
	}
</style>
