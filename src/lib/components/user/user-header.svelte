<script>

	import { Bell, ChevronDown} from "lucide-svelte";
	import UserButton from "./user-button.svelte";

</script>
<ul class="inline-flex items-center justify-center gap-2">
    <li class="mx-4 inline-flex items-center">
        <div class="indicator">
            <button class="indicator-item badge badge-warning badge-xs" />
            <Bell />
          </div>
    </li>
    <li >
        <UserButton />
    </li>
    <li>/</li>
    <li class="btn btn-ghost">
        User Organization 
        <ChevronDown />
    </li>
</ul>