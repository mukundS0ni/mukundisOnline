
<body class="bg-gray-100">
    <div class="flex">
        <!-- Sidebar -->
        <aside id="default-sidebar" class="w-128 h-screen bg-blue-200 p-4">
            <h2 class="text-xl font-bold mb-4 p-2">Licenses & Certifications</h2>
            <ul class="space-y-2">
                <li>
                    <a href="#python" class="block p-2 hover:bg-gray-200 rounded" data-cert="python">
                        Python for Everybody Specialization
                    </a>
                </li>
                <li>
                    <a href="#dialogflow" class="block p-2 hover:bg-gray-200 rounded" data-cert="dialogflow">
                        Building Conversational Experiences with Dialogflow
                    </a>
                </li>
                <li>
                    <a href="#iiot" class="block p-2 hover:bg-gray-200 rounded" data-cert="iiot">
                        Industrial IoT on Google Cloud Platform
                    </a>
                </li>
                <li>
                    <a href="#mandarin" class="block p-2 hover:bg-gray-200 rounded" data-cert="mandarin">
                        Learn Mandarin Chinese Specialization
                    </a>
                </li>
                <li>
                    <a href="#datascience" class="block p-2 hover:bg-gray-200 rounded" data-cert="datascience">
                        Fundamentals of Scalable Data Science
                    </a>
                </li>
                <li>
                    <a href="#programming" class="block p-2 hover:bg-gray-200 rounded" data-cert="programming">
                        Programming Fundamentals
                    </a>
                </li>
                <li>
                    <a href="#spanish" class="block p-2 hover:bg-gray-200 rounded" data-cert="spanish">
                        Spanish Vocabulary: Meeting People
                    </a>
                </li>
            </ul>
        </aside>

        <!-- Main Content Area -->
        <main class="flex-1 p-8" id="certification-details">
            <div id="python" class="certification-detail hidden">
                <h1 class="text-2xl font-bold mb-4">Python for Everybody Specialization</h1>
                <p class="mb-2"><strong>Issued by:</strong> University of Michigan</p>
                <p class="mb-2"><strong>Date:</strong> Oct 2020</p>
                <p class="mb-2"><strong>Credential ID:</strong> 6GKABKTH4ZCJ</p>
                <p class="mb-2"><strong>Skills:</strong> Python (Programming Language) · Pandas</p>
                <a href="https://www.coursera.org/account/accomplishments/verify/6GKABKTH4ZCJ" 
                   target="_blank" 
                   class="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Show Credential
                </a>
            </div>

            <div id="dialogflow" class="certification-detail hidden">
                <h1 class="text-2xl font-bold mb-4">Building Conversational Experiences with Dialogflow</h1>
                <p class="mb-2"><strong>Issued by:</strong> Google Cloud Training Online</p>
                <p class="mb-2"><strong>Date:</strong> Jul 2020</p>
                <p class="mb-2"><strong>Credential ID:</strong> MKFNGC75Y848</p>
                <a href="#" 
                   target="_blank" 
                   class="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Show Credential
                </a>
            </div>

            <div id="iiot" class="certification-detail hidden">
                <h1 class="text-2xl font-bold mb-4">Industrial IoT on Google Cloud Platform</h1>
                <p class="mb-2"><strong>Issued by:</strong> Google Cloud Training Online</p>
                <p class="mb-2"><strong>Date:</strong> Jul 2020</p>
                <p class="mb-2"><strong>Credential ID:</strong> YENYCJQUJ6BJ</p>
                <a href="#" 
                   target="_blank" 
                   class="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Show Credential
                </a>
            </div>

            <div id="mandarin" class="certification-detail hidden">
                <h1 class="text-2xl font-bold mb-4">Learn Mandarin Chinese Specialization</h1>
                <p class="mb-2"><strong>Issued by:</strong> Shanghai Jiao Tong University</p>
                <p class="mb-2"><strong>Date:</strong> Jul 2020</p>
                <p class="mb-2"><strong>Credential ID:</strong> BH7BRWCB53LJ</p>
                <a href="#" 
                   target="_blank" 
                   class="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Show Credential
                </a>
            </div>

            <div id="datascience" class="certification-detail hidden">
                <h1 class="text-2xl font-bold mb-4">Fundamentals of Scalable Data Science</h1>
                <p class="mb-2"><strong>Issued by:</strong> IBM</p>
                <p class="mb-2"><strong>Date:</strong> Jun 2020</p>
                <p class="mb-2"><strong>Credential ID:</strong> GUG7XDFZMUL9</p>
                <a href="#" 
                   target="_blank" 
                   class="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Show Credential
                </a>
            </div>

            <div id="programming" class="certification-detail hidden">
                <h1 class="text-2xl font-bold mb-4">Programming Fundamentals</h1>
                <p class="mb-2"><strong>Issued by:</strong> Coursera</p>
                <p class="mb-2"><strong>Date:</strong> Jun 2020</p>
                <p class="mb-2"><strong>Credential ID:</strong> SDSEN4TS8WFS</p>
                <a href="https://www.coursera.org/account/accomplishments/verify/SDSEN4TS8WFS" 
                   target="_blank" 
                   class="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Show Credential
                </a>
            </div>

            <div id="spanish" class="certification-detail hidden">
                <h1 class="text-2xl font-bold mb-4">Spanish Vocabulary: Meeting People</h1>
                <p class="mb-2"><strong>Issued by:</strong> University of California, Davis</p>
                <p class="mb-2"><strong>Date:</strong> Jun 2020</p>
                <p class="mb-2"><strong>Credential ID:</strong> T6EHBPYN5ZGA</p>
                <a href="#" 
                   target="_blank" 
                   class="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Show Credential
                </a>
            </div>

            <script>
                // JavaScript to handle sidebar navigation
                document.querySelectorAll('[data-cert]').forEach(link => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        // Hide all certification details
                        document.querySelectorAll('.certification-detail').forEach(detail => {
                            detail.classList.add('hidden');
                        });
                        // Show selected certification detail
                        const certId = link.getAttribute('data-cert');
                        document.getElementById(certId).classList.remove('hidden');
                    });
                });

                // Show first certification by default
                document.getElementById('python').classList.remove('hidden');
            </script>
        </main>
    </div>
</body>