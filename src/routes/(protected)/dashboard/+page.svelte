<script lang="ts">
	import { page } from "$app/stores";
	import { Check, ChevronDown, Search } from "lucide-svelte";

</script>


<section class="py-8 max-h-full bg-primary-content/60 rounded-xl">
  <header class=" px-4">
    <nav class="navbar bg-primary rounded-xl shadow-lg grid grid-cols-6 px-4">
      <button class="btn btn-ghost no-animate text-neutral-content text-xl min-h-0">Name</button>
      <button class="btn btn-ghost no-animate text-neutral-content  text-xl min-h-0 col-start-3">Last Scan</button>
      <button class="btn btn-ghost no-animate text-neutral-content  text-xl min-h-0 ">Status</button>
      <label class="input input-bordered flex items-center gap-2 pl-2 input-md col-start-6 input-sm">
        <Search class="size-5"/>
        <input type="text" placeholder="Search" class="grow" />
      </label>
    </nav>
  </header>
  <main class="px-8 pt-8">
    <ul class="flex flex-col w-full gap-8">
      <li class="card card-bordered bg-base-100 shadow-lg">
        <div class="card-body grid grid-cols-6 py-2 place-items-center">
          <!-- col-1-&-2 -->
          <div class="card-title col-span-2 w-full text-primary font-semibold">https://peterk.dev</div>
          <!-- col-3 -->
          <div class="stat-title col-start-3">13.6.2024</div>
          <!-- col-4 -->
          <div class="badge badge-success badge-lg self-center place-self-center size-6 p-0.5 shadow-md shadow-success"><Check class="text-success-content size-6" /></div>
          <!-- col-5 -->
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn m-1 btn-ghost text-lg">See more <ChevronDown /></div>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
          <!-- col-6 -->
           <a href="/dashboard/domainId" class="btn btn-primary btn-lg min-h-fit h-fit py-3">Inspect</a>
        </div>
      </li>
      <li class="card card-bordered bg-base-100 shadow-lg">
        <div class="card-body grid grid-cols-6 py-2 place-items-center">
          <!-- col-1-&-2 -->
          <div class="card-title col-span-2 w-full text-primary font-semibold">https://peterk.dev</div>
          <!-- col-3 -->
          <div class="stat-title col-start-3">13.6.2024</div>
          <!-- col-4 -->
          <div class="badge badge-success badge-lg self-center place-self-center size-6 p-0.5 shadow-md shadow-success"><Check class="text-success-content size-6" /></div>
          <!-- col-5 -->
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn m-1 btn-ghost text-lg">See more <ChevronDown /></div>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
          <!-- col-6 -->
           <a href="/dashboard/domainId" class="btn btn-primary btn-lg min-h-fit h-fit py-3">Inspect</a>
        </div>
      </li>
      <li class="card card-bordered bg-base-100 shadow-lg">
        <div class="card-body grid grid-cols-6 py-2 place-items-center">
          <!-- col-1-&-2 -->
          <div class="card-title col-span-2 w-full text-primary font-semibold">https://peterk.dev</div>
          <!-- col-3 -->
          <div class="stat-title col-start-3">13.6.2024</div>
          <!-- col-4 -->
          <div class="badge badge-success badge-lg self-center place-self-center size-6 p-0.5 shadow-md shadow-success"><Check class="text-success-content size-6" /></div>
          <!-- col-5 -->
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn m-1 btn-ghost text-lg">See more <ChevronDown /></div>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
          <!-- col-6 -->
           <a href="/dashboard/domainId" class="btn btn-primary btn-lg min-h-fit h-fit py-3">Inspect</a>
        </div>
      </li>
      <li class="card card-bordered bg-base-100 shadow-lg">
        <div class="card-body grid grid-cols-6 py-2 place-items-center">
          <!-- col-1-&-2 -->
          <div class="card-title col-span-2 w-full text-primary font-semibold">https://peterk.dev</div>
          <!-- col-3 -->
          <div class="stat-title col-start-3">13.6.2024</div>
          <!-- col-4 -->
          <div class="badge badge-success badge-lg self-center place-self-center size-6 p-0.5 shadow-md shadow-success"><Check class="text-success-content size-6" /></div>
          <!-- col-5 -->
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn m-1 btn-ghost text-lg">See more <ChevronDown /></div>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
          <!-- col-6 -->
           <a href="/dashboard/domainId" class="btn btn-primary btn-lg min-h-fit h-fit py-3">Inspect</a>
        </div>
      </li>
      <li class="card card-bordered bg-base-100 shadow-lg">
        <div class="card-body grid grid-cols-6 py-2 place-items-center">
          <!-- col-1-&-2 -->
          <div class="card-title col-span-2 w-full text-primary font-semibold">https://peterk.dev</div>
          <!-- col-3 -->
          <div class="stat-title col-start-3">13.6.2024</div>
          <!-- col-4 -->
          <div class="badge badge-success badge-lg self-center place-self-center size-6 p-0.5 shadow-md shadow-success"><Check class="text-success-content size-6" /></div>
          <!-- col-5 -->
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn m-1 btn-ghost text-lg">See more <ChevronDown /></div>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
          <!-- col-6 -->
           <a href="/dashboard/domainId" class="btn btn-primary btn-lg min-h-fit h-fit py-3">Inspect</a>
        </div>
      </li>
      <li class="card card-bordered bg-base-100 shadow-lg">
        <div class="card-body grid grid-cols-6 py-2 place-items-center">
          <!-- col-1-&-2 -->
          <div class="card-title col-span-2 w-full text-primary font-semibold">https://peterk.dev</div>
          <!-- col-3 -->
          <div class="stat-title col-start-3">13.6.2024</div>
          <!-- col-4 -->
          <div class="badge badge-success badge-lg self-center place-self-center size-6 p-0.5 shadow-md shadow-success"><Check class="text-success-content size-6" /></div>
          <!-- col-5 -->
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn m-1 btn-ghost text-lg">See more <ChevronDown /></div>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
          <!-- col-6 -->
           <a href="/dashboard/domainId" class="btn btn-primary btn-lg min-h-fit h-fit py-3">Inspect</a>
        </div>
      </li>
      <li class="card card-bordered bg-base-100 shadow-lg">
        <div class="card-body grid grid-cols-6 py-2 place-items-center">
          <!-- col-1-&-2 -->
          <div class="card-title col-span-2 w-full text-primary font-semibold">https://peterk.dev</div>
          <!-- col-3 -->
          <div class="stat-title col-start-3">13.6.2024</div>
          <!-- col-4 -->
          <div class="badge badge-success badge-lg self-center place-self-center size-6 p-0.5 shadow-md shadow-success"><Check class="text-success-content size-6" /></div>
          <!-- col-5 -->
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn m-1 btn-ghost text-lg">See more <ChevronDown /></div>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
          <!-- col-6 -->
           <a href="/dashboard/domainId" class="btn btn-primary btn-lg min-h-fit h-fit py-3">Inspect</a>
        </div>
      </li>
    </ul>
  </main>
</section>
<footer class="flex justify-center">
  <div class="join py-8">
    <button class="join-item btn">1</button>
  <button class="join-item btn btn-active">2</button>
  <button class="join-item btn">3</button>
  <button class="join-item btn">4</button>
  </div>
  </footer>