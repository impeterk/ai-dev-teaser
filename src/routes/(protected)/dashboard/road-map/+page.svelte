<script lang="ts">
	import { Check, CircleCheck } from "lucide-svelte";

   const goals = [{name: 'Scaffolding', done: true}, {name: 'Responsive Layout', done: true}, {name: 'Main Dashboard', done: true}, {name: 'Authentification', done: false}, {name: 'Crawling', done: false}, {name: 'Evaluation', done: false}, {name: 'Database connection', done: false}, {name: 'Scan Dashboard', done: false}, {name: 'URL Dashboard', done: false}, {name: 'LLM integration', done: false}, {name: 'Deployment', done: false}]
</script>

<section class="flex justify-center">

    <ul class="timeline timeline-vertical">
        {#each goals as goal, idx}
           
        
        <li>
            {#if idx !== 0}
               <hr class:bg-success={goals[idx - 1].done}/>
            {/if}
            
            <div class="timeline-box {(idx % 2) ? 'timeline-end' : 'timeline-start'} {goal.done ? 'bg-success text-success-content' : ''}">{goal.name}</div>
            <div class="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5" class:fill-success={goal.done}><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
            </div>
            
            {#if idx !== goals.length - 1}
               <hr class:bg-success={goal.done}/>
            {/if}
        </li>
        {/each}
        
  </ul>
</section>