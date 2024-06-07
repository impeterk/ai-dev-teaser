<script>
	import Navigation from "$lib/components/navigation.svelte";


	import UserButton from "$lib/components/user/user-button.svelte";
import { LogOut } from "lucide-svelte";

</script>
<aside class="drawer-side">
    <label for="main-layout-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
    <nav class="min-h-full w-full max-w-64 bg-primary-content text-primary flex flex-col pb-8">
        <a href="/" class="btn btn-ghost no-animation hover:bg-base-100 bg-base-100 text-base-content btn-block text-xl min-h-16 rounded-none shadow-none border-none">SEO Kit</a>
        <ul class="menu p-0 [&_li>*]:rounded-none space-y-2 pt-4 menu-lg">
            <!-- Sidebar content here -->
            <Navigation />
        </ul>

            <button class="btn btn-ghost mt-auto hidden lg:flex">
                <LogOut />
                Sign Out
            </button>
            <div class="mt-auto flex lg:hidden mx-auto">
                <UserButton />
            </div>
    </nav>
</aside>