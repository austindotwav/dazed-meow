fetch('/navbar.html')
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
                .catch(() => {
                    console.error(`Error checking link: ${url}`);
                    link.style.pointerEvents = 'none';
                    link.style.opacity = '0.5';
                    link.title = 'Page not available';
                    link.innerText += ' (Unavailable)';
                });

        });

    })
    .catch(err => {
        console.error('Failed to load navbar:', err);
        document.getElementById('navbar').innerHTML = '<h2>Navigation not available</h2>';
    });