<script>
	export let status
</script>

<p
	class="w-1/2 shrink-0 rounded-lg px-2 py-1 text-center"
	class:bg-warning={status == 'added'}
	class:bg-success={status == 'finished'}
	class:bg-error={status == 'aborted'}
	class:bg-secondary={status == 'scanning'}
	class:bg-yellow-300={status == 'evaluating'}
	class:bg-purple-200={status == 'ai magic'}
>
	{status}
	<slot />
</p>
