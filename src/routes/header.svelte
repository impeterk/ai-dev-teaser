<script>

	import { page } from "$app/stores";
	import UserButton from "$lib/components/user/user-header.svelte";
import { EllipsisVertical } from "lucide-svelte";
</script>
    <header class="navbar bg-base-100 shadow">
        <div class="navbar-start">
          <a href="/" class="btn btn-ghost text-xl {`${String($page.url).includes('/dashboard') ? 'lg:hidden' : ''}`}" >SEO Kit</a>
        </div>
        <div class="navbar-end w-full">
            <div class="hidden lg:block">
                <UserButton />
            </div>
          <label for="main-layout-drawer" class="btn btn-square btn-ghost lg:hidden">
            <EllipsisVertical />
        </label>
            
        </div>
    </header >