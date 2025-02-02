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
        // Return the <img> tag
        return `<img src="${src}" alt="${alt}" />`;
    });


    // Handle links
    content = content.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');

    // Handle videos (Markdown Video Syntax: [video](video_url))
    content = content.replace(/\[video\]\(([^)]+)\)/g, '<video controls><source src="$1" type="video/mp4">Your browser does not support the video tag.</video>');


    // Handle file links (Markdown File Syntax: [file](file_url))
    content = content.replace(/\[file\]\(([^)]+)\)/g, '<a href="$1" download>Download File</a>');

    // Handle paragraphs (wrap lines not already in a tag)
    content = content.replace(/^(?!<.*>)(.*)$/gm, '<p>$1</p>');

    return content;
};
