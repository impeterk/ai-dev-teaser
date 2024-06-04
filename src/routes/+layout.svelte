<script lang="ts">
	import '../app.css';
</script>


	<div class="drawer lg:drawer-open">
		<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content flex flex-col items-center justify-center">
			<slot />
			<label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
		</div>
		<div class="drawer-side">
			<label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
			<ul class="menu min-h-full w-full max-w-64 bg-base-200 p-4 text-base-content">
				<!-- Sidebar content here -->
			<li><a href="#item-1"> Sidebar Item 1 </a></li>
			<li><a href="#item-2">Sidebar Item 2</a></li>
		</ul>
	</div>
</div>

<style></style>
