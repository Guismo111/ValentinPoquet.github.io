/*document.addEventListener("DOMContentLoaded", () => {
    const bannerHTML = `
        <div class="section_banner">
            <div class="logo-container">
                <a href="mailto:poquet.valentin91@gmail.com">
                    <img class="Mail-Logo" src="../../Logos/Mail_Logo.png" alt="Mail" />
                </a>
                <a href="https://www.linkedin.com/in/valentin-poquet-319005265/" target="_blank">
                    <img class="logo" src="../../Logos/LinkedIn_Logo.png" alt="LinkedIn" />
                </a>
                <a href="https://github.com/Guismo111" target="_blank">
                    <img class="Github-Logo" src="Logos/Github_Logo.png" alt="Github" />
                </a>
            </div>
        </div>
    `;

    // Find a place to insert the banner (like the top of the body)
    document.body.insertAdjacentHTML("afterbegin", bannerHTML);
});*/

document.querySelectorAll('.square').forEach(square => {
    const video = square.querySelector('.square-video');
    if (!video) return;

    square.addEventListener('mouseenter', () => {
        video.currentTime = 0;
        video.play();
    });

    square.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
    });
});
