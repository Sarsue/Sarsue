// markdown-loader.js

// This function will be used globally to convert markdown to HTML
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

    // Handle links
    content = content.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');

    // Handle paragraphs (wrap lines not already in a tag)
    content = content.replace(/^(?!<.*>)(.*)$/gm, '<p>$1</p>');

    return content;
};

