<script lang="ts">
	import { page } from "$app/stores";
	import { Globe } from "lucide-svelte";

</script>

<section class="h-full w-full flex flex-col items-center justify-start gap-12">

	<header class="prose dark:prose-invert text-pretty w-full max-w-md">
		<h2>Add New Domain to your organization</h2>
		<h3>Some additional text</h3>
	</header>
<main class="card w-full max-w-md shadow-2xl bg-base-100 shrink-0">
	<form class="card-body">
			<div class="card-title">New Domain</div>
		  <div class="form-control">
			<label class="input input-bordered flex items-center gap-4">
				<Globe class="size-5" />
				<input name="newDomain" type="text" placeholder="https://example.com" class="flex-grow" required />
			</label>
		  </div>
		  
		  <div class="form-control mt-6">
			<button class="btn btn-primary">Add Domain</button>
		</div>
		</form>
</main>
</section>