<script lang="ts">
	import { page } from "$app/stores";
import { FileText, LayoutDashboard, Radar } from "lucide-svelte";

   
</script>

<div class="text-sm breadcrumbs">
    <ul>
      <li>
        <a href="/dashboard">
            <LayoutDashboard class="mr-1 size-4" />
          Dashboard
        </a>
      </li> 
      {#if $page.params.domainId}
      <li>
          <a href="/dashboard/{$page.params.domainId}" class:text-primary={$page.route.id === '/(protected)/dashboard/[domainId]'}>
            <FileText class="mr-1 size-4" />
            {$page.params.domainId}
            </a>
            </li> 
        {/if}
        {#if $page.params.scanId}
           
        
        <li>
            <span class="inline-flex gap-2 items-center" class:text-primary={$page.route.id === '/(protected)/dashboard/[domainId]/[scanId]'}>
                <Radar />
                {$page.params.scanId}
                </span>
                </li>
            {/if}
    </ul>
  </div>