window.simpleMarked = function (content) {
    // Handle headers
    content = content.replace(/^# (.*)$/gm, '<h1>$1</h1>');
    content = content.replace(/^## (.*)$/gm, '<h2>$1</h2>');
    content = content.replace(/^### (.*)$/gm, '<h3>$1</h3>');

    // Handle bold text
    content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    content = content.replace(/__(.*?)__/g, '<strong>$1</strong>');

    // Handle italic text
    content = content.replace(/\*(.*?)\*/g, '<em>$1</em>');
    content = content.replace(/_(.*?)_/g, '<em>$1</em>');

    // Handle images (Markdown Image Syntax: ![alt text](image_url))
    content = content.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, function (match, alt, src) {
        // Ensure the src is correctly processed to an image path
        return `<img class="responsive-img" src="${src}" alt="${alt}" />`;
    });

    // Handle links
    content = content.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');

    // Handle video embeds (YouTube or other video URLs)
    content = content.replace(/\[video\]\((https:\/\/(www\.)?(youtube|youtu|vimeo)\.[a-z]+\/[^\s]+)\)/g, function (match, url) {
        // Extract video ID from YouTube URL
        let videoId = url.match(/(?:youtube\.com\/(?:[^/]+\/\S+|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);

        if (videoId) {
            return `<div class="video-container"><iframe class="responsive-video" src="https://www.youtube.com/embed/${videoId[1]}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
        }

        return match; // If not a YouTube video, return the original match (non-YouTube videos).
    });

    // Handle file links (Markdown File Syntax: [file](file_url))
    content = content.replace(/\[file\]\(([^)]+)\)/g, '<a href="$1" download>Download File</a>');

    // Handle paragraphs (wrap lines not already in a tag)
    content = content.replace(/^(?!<.*>)(.*)$/gm, '<p>$1</p>');

    return content;
};
