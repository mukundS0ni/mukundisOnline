<script lang="ts">
	import { browser } from '$app/environment';
	import { fade, fly, slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	let theme = 'light';

	function toggleTheme() {
		theme = theme === 'light' ? 'dark' : 'light';
		if (browser) {
			document.documentElement.classList.toggle('dark', theme === 'dark');
		}
	}

	onMount(() => {
		if (browser) {
			const savedTheme = localStorage.getItem('theme');
			if (savedTheme) {
				theme = savedTheme;
				document.documentElement.classList.toggle('dark', theme === 'dark');
			}
		}
	});

	$: if (browser) {
		localStorage.setItem('theme', theme);
	}
</script>

<div
	class="flex h-full w-full flex-row items-start justify-start bg-[#ececec] px-2 py-6 text-black md:px-12 {theme ===
	'dark'
		? 'invert'
		: ''}"
>
	<div class="relative hidden h-screen w-1/4 md:block">
		<h1 class="font-mono text-6xl font-bold" in:fade={{ delay: 200, duration: 1000 }}>Hi,</h1>
		<h1 class="font-mono text-2xl font-bold" in:slide={{ delay: 400, duration: 1000 }}>
			Nice to meet you
		</h1>

		<img
			src="/svg/ab.gif"
			alt="Hero"
			class="animate-slide-right absolute h-auto w-full"
			in:fly={{ x: -200, delay: 600, duration: 1000 }}
		/>
	</div>

	<div class="z-50 h-full w-full md:ml-[-20px] md:p-6" in:fade={{ duration: 1500 }}>
		<div
			class="h-full w-full rounded-[20px] bg-[#dcebf2] shadow-2xl shadow-white {theme === 'dark'
				? 'invert'
				: 'shadow-black'}"
		>
			<div
				class="flex h-[470px] w-full flex-col items-center justify-start gap-5 rounded-t-[20px] bg-contain bg-center p-4"
				style="background-image: url('/assets/img15.jpg');"
				in:fade={{ delay: 300, duration: 2000 }}
			>
				<div
					class="flex w-full flex-col gap-2 py-5 font-mono text-[16px] font-bold md:flex-row md:gap-20 md:px-10"
					in:fly={{ y: 100, delay: 500, duration: 800 }}
				>
					<div class="flex flex-row items-center justify-between gap-5 text-white md:w-1/2">
						<a
							download="Resume_Mukund.pdf"
							target="_blank"
							href="/resume/Resume_Mukund.pdf"
							class="transform rounded-[20px] bg-black p-2 px-3 font-mono font-bold transition duration-500 ease-in-out hover:scale-105 hover:invert"
						>
							Download CV
						</a>
						<div class="hidden flex-row gap-10 md:flex">
							{#each [['GitHub', 'https://github.com/mukundS0ni'], ['LinkedIn', 'https://www.linkedin.com/in/mukund-soni-150b28190/'], ['X', 'https://x.com/MukundSoni19615'], ['Email', 'mailto:mukundsoni08@gmail.com']] as [name, link], i}
								<a
									href={link}
									target="_blank"
									class="text-shadow-black font-mono font-bold underline-offset-4 transition duration-300 hover:text-cyan-400 hover:underline"
									in:fly={{ y: -50, delay: 200 * i, duration: 600 }}
								>
									{name}
								</a>
							{/each}
						</div>
					</div>
					<div class="flex flex-row items-center justify-between gap-5 text-white md:w-1/2">
						<div class="hidden flex-row gap-10 md:flex">
							{#each ['Work', 'Skills', 'Blog'] as link, i}
								<h1
									class="text-shadow-black font-mono font-bold underline-offset-4 transition duration-300 hover:text-cyan-400 hover:underline"
									in:fly={{ y: -50, delay: 200 * i, duration: 600 }}
								>
									{link}
								</h1>
							{/each}
						</div>
						<div class="flex flex-row gap-3">
							<a
								href="/certifications"
								class="transform rounded-[20px] bg-white p-2 px-3 font-mono font-bold text-black transition duration-500 ease-in-out hover:scale-110 hover:invert"
								in:slide={{ delay: 600, duration: 800 }}
							>
								Certifications
							</a>
							<button
								class="transform rounded-full {theme !== 'dark'
									? 'bg-yellow-200'
									: 'bg-blue-200'} p-2 px-3 font-mono font-bold text-white transition duration-500 ease-in-out hover:scale-110 hover:bg-gray-200"
								on:click={toggleTheme}
								in:slide={{ delay: 800, duration: 800 }}
							>
								{#if theme === 'light'}
									<img src="/svg/sun.svg" alt="Light Mode" class="h-6 w-6" />
								{:else}
									<img src="/svg/moon.svg" alt="Dark Mode" class="h-6 w-6" />
								{/if}
							</button>
						</div>
					</div>
				</div>

				<div class="flex w-full flex-col items-center justify-center gap-20 text-black md:flex-row">
					<h1
						class="text-shadow-white w-full text-[30px] font-semibold underline-offset-4 transition duration-300 hover:text-cyan-100 hover:underline md:text-right"
						in:fade={{ delay: 700, duration: 1000 }}
					>
						About Me
					</h1>
					<img
						src="/assets/avatar.jpg"
						alt=""
						class="h-[14rem] w-[14rem] transform rounded-full border-8 border-black transition-transform hover:scale-110"
						in:fly={{ y: -100, delay: 900, duration: 1200 }}
					/>
					<h1
						class="text-shadow-white w-full text-left font-mono text-[30px] font-semibold underline-offset-4 transition duration-300 hover:text-cyan-100 hover:underline"
						in:fade={{ delay: 700, duration: 1000 }}
					>
						Product Testimonies
					</h1>
				</div>

				<div class="mb-10 flex w-full flex-col items-center justify-center text-white">
					<h1
						class="text-shadow font-mono text-6xl font-bold"
						in:fade={{ delay: 1000, duration: 1000 }}
					>
						Hi, I'm Mukund
					</h1>
					<h1
						class="text-shadow font-mono text-3xl font-bold"
						in:slide={{ delay: 1200, duration: 1000 }}
					>
						A Passionate Freelance Developer
					</h1>
				</div>
			</div>

			<div
				class="mt-[-10px] hidden w-full flex-col items-center justify-center text-black md:flex"
				in:fly={{ y: -50, delay: 1500, duration: 1000 }}
			>
				<h1 class="font-mono text-2xl font-semibold italic">Crafting elegant solutions</h1>
				<h1 class="font-mono text-2xl font-semibold italic">for complex problems</h1>
			</div>

			<div
				class="flex h-auto w-full flex-col gap-5 p-4 px-10"
				in:fly={{ y: 50, delay: 1700, duration: 1200 }}
			>
				<h1
					class="text-shadow-white w-full text-start text-[30px] font-bold text-black md:mt-[-40px]"
				>
					PORTFOLIO
				</h1>
				<div class="flex h-full w-full flex-col gap-5 md:flex-row mb-[-16px]">
					<div
						class="h-full w-full rounded-[20px] bg-[#f6f6f4] shadow-2xl shadow-white"
						in:fade={{ delay: 200, duration: 1000 }}
					>
						<div
							class="h-[20rem] w-full transform rounded-t-[20px] bg-cover bg-center object-cover transition-transform hover:scale-105"
							style="background-image: url('/svg/custom.png');"
						></div>
					</div>

					<div
						class="h-full w-full rounded-t-[20px] bg-[#2a3543] shadow-2xl shadow-white"
						in:fade={{ delay: 200, duration: 1000 }}
					>
						<div
							class="flex h-[20rem] w-full transform flex-col items-center justify-between rounded-t-[20px] object-cover p-5 font-mono text-white transition-transform hover:scale-105"
						>
							<h1 class="font-mono text-[30px] font-bold">About Me</h1>

							<span class="text-justify text-[11px] font-semibold"
								>Temperature is how hot or cold something is. The human body can feel the difference
								between something which is hot and something which is cold.<br /><br /> To measure temperature
								more accurately, a thermometer is used</span
							>

							<button
								class="rounded-[50px] bg-white p-3 px-5 text-[18px] font-bold text-black shadow-2xl"
								>Learn More</button
							>
						</div>
					</div>

					<div
						class="h-full w-full rounded-t-[20px] bg-gradient-to-b from-[#606f80] from-50% to-[#c9c9cb] to-50% shadow-2xl shadow-white"
						in:fade={{ delay: 200, duration: 1000 }}
					>
						<div
							class="flex h-[20rem] w-full transform flex-col items-center justify-start rounded-[20px] object-cover p-2 text-white transition-transform hover:scale-105"
						>
							<h1 class="text-center font-sans text-[40px] font-bold">SKILLS</h1>
							<h1 class="mt-[-20px] text-center font-sans text-[40px] font-bold">& TOOLS</h1>

							<img
								src="/svg/skills2.png"
								alt="Skills"
								class="my-2 h-[5rem] w-[13rem] rounded-2xl"
							/>

							<span class="px-5 text-justify text-[11px] font-semibold"
								>Temperature is how hot or cold something is. The human body can feel the difference
								between something which is hot and something which is cold.</span
							>
						</div>
					</div>

					<div
						class="h-full w-full rounded-t-[20px] bg-gradient-to-b from-[#495463] from-10% to-[#e9e9e7] to-10% shadow-2xl shadow-white"
						in:fade={{ delay: 200, duration: 1000 }}
					>
						<div
							class="flex h-[20rem] w-full transform flex-col items-center justify-center rounded-[20px] object-cover p-2 text-black transition-transform hover:scale-105"
						>
							<h1 class="text-center font-sans text-[40px] font-bold">Contact Me 🤙🏻</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	@keyframes slide-right {
		0% {
			transform: translateX(-300px);
		}
		50% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(300px);
		}
	}

	.animate-slide-right {
		animation: slide-right 10s infinite;
	}
</style>
