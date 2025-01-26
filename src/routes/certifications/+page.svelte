<script lang="ts">
	import { onMount } from 'svelte';

	interface Certification {
		name: string;
		icon: string;
		image: string;
		organization: string;
		date: string;
		categories: string[];
	}

	const certifications: Certification[] = [
		{
			name: 'Programming for Everybody (Specialization)',
			icon: '/svg/python.svg',
			image: '/certificate/python/Python.png',
			organization: 'University of Michigan',
			date: 'Completed October 2020',
			categories: [
				'Programming for Everybody (Getting Started with Python)',
				'Python Data Structures',
				'Using Python to Access Web Data',
				'Using Databases with Python',
				'Capstone: Retrieving, Processing, and Visualizing Data with Python'
			]
		},
		{
			name: 'Programming for Everybody (Getting Started with Python)',
			icon: '/svg/python.svg',
			image: '/certificate/python/1.jpg',
			organization: 'University of Michigan',
			date: 'Completed June 2020',
			categories: ['Computer Programming', 'Python Programming', 'Algorithms', 'Problem Solving']
		},
		{
			name: 'Using Databases with Python',
			icon: '/svg/python.svg',
			image: '/certificate/python/2.jpg',
			organization: 'University of Michigan',
			date: 'Completed July 2020',
			categories: [
				'Computer Programming',
				'Python Programming',
				'Web Development',
				'HTML and CSS',
				'Data Analysis Software'
			]
		},
		{
			name: 'Using Python to Access Web Data',
			icon: '/svg/python.svg',
			image: '/certificate/python/3.jpg',
			organization: 'University of Michigan',
			date: 'Completed August 2020',
			categories: [
				'Computer Programming',
				'Python Programming',
				'Web Development',
				'HTML and CSS',
				'Data Analysis Software'
			]
		},
		{
			name: 'Using Databases with Python',
			icon: '/svg/python.svg',
			image: '/certificate/python/4.jpg',
			organization: 'University of Michigan',
			date: 'Completed October 2020',
			categories: [
				'Computer Programming',
				'Data Structures',
				'Python Programming',
				'Database Theory',
				'Database Administration'
			]
		},
		{
			name: 'Capstone: Retrieving, Processing, and Visualizing Data',
			icon: '/svg/python.svg',
			image: '/certificate/python/5.jpg',
			organization: 'University of Michigan',
			date: 'Completed August 2020',
			categories: ['Computer Programming', 'Python Programming', 'Data Visualization', 'Databases']
		},
		{
			name: 'Programming Fundamentals',
			icon: '/svg/duke.png',
			image: '/certificate/Duke.jpg',
			organization: 'University of Michigan',
			date: 'Completed August 2020',
			categories: ['Computer Programming', 'Python Programming', 'Algorithms', 'Problem Solving']
		},
		{
			name: 'Build Your First Android App',
			icon: '/svg/android.svg',
			image: '/certificate/android.jpg',
			organization: 'CentraleSupélec',
			date: 'Completed November 2020',
			categories: ['Application Development', 'Software Engineering', 'Android Development']
		},
		{
			name: 'Industrial IoT on Google Cloud',
			icon: '/svg/google.svg',
			image: '/certificate/IOT.jpg',
			organization: 'Google Cloud',
			date: 'Completed July 2020',
			categories: ['Google Cloud Platform', 'Cloud Computing', 'Internet Of Things']
		},
		{
			name: 'Building Conversational Experiences with Dialogflow',
			icon: '/svg/google.svg',
			image: '/certificate/Dialogflow.jpg',
			organization: 'Google Cloud',
			date: 'Completed July 2020',
			categories: ['Natural Language Processing', 'Machine Learning', 'Cloud Applications']
		},
		{
			name: 'Learn Mandarin Chinese (Specialization)',
			icon: '/svg/chUni.png',
			image: '/certificate/chinese/Mandarin.jpg',
			organization: 'Shanghai Jiao Tong University',
			date: 'Completed April 2020',
			categories: [
				'Mandarin Chinese 1: Chinese for Beginners',
				'Mandarin Chinese 2: Chinese for Beginners',
				'Mandarin Chinese 3: Chinese for Beginners',
				'Learn Mandarin Chinese: Capstone Project'
			]
		},
		{
			name: 'Mandarin Chinese 1: Chinese for Beginners',
			icon: '/svg/chUni.png',
			image: '/certificate/chinese/1.jpg',
			organization: 'Shanghai Jiao Tong University',
			date: 'Completed July 2020',
			categories: ['Communication', 'Culture']
		}
		,
		{
			name: 'Mandarin Chinese 2: Chinese for Beginners',
			icon: '/svg/chUni.png',
			image: '/certificate/chinese/2.jpg',
			organization: 'Shanghai Jiao Tong University',
			date: 'Completed July 2020',
			categories: ['Communication', 'Culture']
		}
		,
		{
			name: 'Mandarin Chinese 3: Chinese for Beginners',
			icon: '/svg/chUni.png',
			image: '/certificate/chinese/3.jpg',
			organization: 'Shanghai Jiao Tong University',
			date: 'Completed July 2020',
			categories: ['Communication', 'Culture']
		},
		{
			name: 'Learn Mandarin Chinese: Capstone Project',
			icon: '/svg/chUni.png',
			image: '/certificate/chinese/4.jpg',
			organization: 'Shanghai Jiao Tong University',
			date: 'Completed July 2020',
			categories: ['Communication', 'Culture']
		},
		{
			name: 'Spanish Vocabulary: Meeting People',
			icon: '/svg/UC2.png',
			image: '/certificate/Spanish.jpg',
			organization: 'Shanghai Jiao Tong University',
			date: 'Completed July 2020',
			categories: ['Communication', 'Culture']
		}
	];

	let selectedCertification: Certification | null = null;

	onMount(() => {
		if (certifications.length > 0) {
			selectedCertification = certifications[0];
		}
	});

	function displayCertificate(index: number) {
		selectedCertification = certifications[index];
	}

	let isSidebarOpen = true;

	function toggleSidebar() {
		isSidebarOpen = !isSidebarOpen;
	}
</script>

<button
	on:click={toggleSidebar}
	aria-controls="default-sidebar"
	type="button"
	class="ms-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 sm:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
>
	<span class="sr-only">Open sidebar</span>
	<svg
		class="h-6 w-6"
		aria-hidden="true"
		fill="currentColor"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			clip-rule="evenodd"
			fill-rule="evenodd"
			d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
		></path>
	</svg>
	Certfications
</button>

<!-- Sidebar -->
<aside
	id="default-sidebar"
	class="fixed left-0 top-0 z-40 h-screen w-[350px] transform bg-blue-200 font-serif transition-transform"
	style="transform: translateX({isSidebarOpen
		? '0'
		: '-100%'}); background-image: url('/assets/img12.jpg');"
	aria-label="Sidebar"
>
	<div class="h-full overflow-y-auto px-3 py-4">
		<h1 class="mb-4 flex justify-between text-4xl font-bold items-center">
			Certifications
			<button class="flex md:hidden" on:click={toggleSidebar}><img src="/svg/close.svg" alt="" class="w-5 h-5"/></button>
		</h1>
		<ul class="space-y-2 font-medium">
			{#each certifications as cert, index}
				<li>
					<a
						href=""
						class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
						aria-selected={selectedCertification === cert}
						on:click={() => displayCertificate(index)}
					>
						<img src={cert.icon} alt={cert.name} class="h-8 w-8" />
						<span class="ms-3 text-left">{cert.name}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</aside>

<div
	class="h-screen bg-cover bg-center p-4 sm:ml-[350px]"
	style="background-image: url('/assets/img1.jpg');"
>
	{#if selectedCertification}
		<div class="flex flex-col items-start space-y-2">
			<h2 class="text-3xl font-bold text-gray-800">{selectedCertification.name}</h2>
			<p class="text-xl font-bold md:text-gray-100">{selectedCertification.organization}</p>
			<p class="text-sm font-semibold italic text-gray-100">{selectedCertification.date}</p>
			<ul class="mt-2 flex flex-wrap gap-2">
				{#each selectedCertification.categories as category}
					<li class="rounded-full bg-blue-500 px-3 py-1 text-sm font-bold text-gray-100">
						{category}
					</li>
				{/each}
			</ul>
			<img
				src={selectedCertification.image}
				alt={selectedCertification.name}
				class="md:w-7/12 rounded-lg shadow-md"
			/>
		</div>
	{/if}
</div>

<style>
	/* Custom animations */
	@keyframes slideIn {
		from {
			transform: translateX(-100%);
		}
		to {
			transform: translateX(0);
		}
	}
	aside {
		animation: slideIn 0.3s ease-out;
	}
</style>
