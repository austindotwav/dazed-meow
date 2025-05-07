fetch('navbar.html')
    .then(res => {
        if (!res.ok) throw new Error('Navbar not found');
        return res.text();
    })
    .then(html => {
        document.getElementById('navbar').innerHTML = html;

        // check nav links
        const links = document.querySelectorAll('#navbar a');

        links.forEach(link => {
            const url = link.getAttribute('href');

            // skip link check for hash links
            if (!url || url.startsWith('#')) return;

            // if broken links are detected, they are made unavailable so that the user cannot click them
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        console.warn(`Broken link detected: ${url}`);
                        link.style.pointerEvents = 'none'; // disable click
                        link.style.opacity = '0.5';        // grey  out
                        link.title = 'Page not available';
                        link.innerText += ' (Unavailable)';
                    }
                })
                // if links bypass detection, throw an error message to prevent crashes
                .catch(() => {
                    console.error(`Error checking link: ${url}`);
                    link.style.pointerEvents = 'none';
                    link.style.opacity = '0.5';
                    link.title = 'Page not available';
                    link.innerText += ' (Unavailable)';
                });

        });

    })
    // if navbar cannot be identified, display error message in its place instead of blank space
    .catch(err => {
        console.error('Failed to load navbar:', err);
        document.getElementById('navbar').innerHTML = '<h2>Navigation not available</h2>';
    });