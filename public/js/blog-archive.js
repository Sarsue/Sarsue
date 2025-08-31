document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = [
        {
            title: 'Getting Started with AI',
            filename: 'getting-started.html',
            excerpt: 'Learn the fundamentals of building AI-powered products.'
        },
        {
            title: 'Delivering AI: Why AI Alone Won\'t Lead the Future',
            filename: 'delivering-ai.html',
            excerpt: 'Exploring the limitations and future of AI implementation.'
        },
        {
            title: 'The Extreme Playbook for AI',
            filename: 'extreme-playbook-ai.html',
            excerpt: 'Pushing the boundaries of what\'s possible with artificial intelligence.'
        },
        {
            title: 'LLMs and Consciousness',
            filename: 'llm-and-consciousness.html',
            excerpt: 'Exploring the relationship between language models and consciousness.'
        },
        {
            title: 'Sentient Silicon: A Biological Lens',
            filename: 'sentient-silicon.html',
            excerpt: 'Examining AI through the lens of biological intelligence.'
        }
    ];

    function renderBlogPosts(posts, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const postsGrid = document.createElement('div');
        postsGrid.className = 'archive-grid';

        posts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.className = 'archive-post';
            
            postElement.innerHTML = `
                <div class="post-content">
                    <h2><a href="blogs/${post.filename}">${post.title}</a></h2>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <a href="blogs/${post.filename}" class="read-more">Read More →</a>
                </div>
            `;
            
            postsGrid.appendChild(postElement);
        });

        // Clear existing content and append new grid
        container.innerHTML = '';
        container.appendChild(postsGrid);
    }

    // Render blog posts on the archive page
    if (document.getElementById('blog-archive-container')) {
        renderBlogPosts(blogPosts, 'blog-archive-container');
    }

    // Update the blog preview on the homepage
    if (document.querySelector('.blog-grid')) {
        const previewPosts = [...blogPosts].slice(0, 2); // Show only first 2 posts on homepage
        renderBlogPosts(previewPosts, 'blog-preview-container');
    }
});
