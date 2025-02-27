# What's Next? 

*Published on Feb 10, 2025*

"Build, Ship, Sell." - Anon

I saw this catchy quote on Twitter sometime in 2023. It conveniently leaves out marketing, the hard part, but that's the focus of this blog. I recently sold some of SyntextAI to secure runway funding. With funds in hand, the next critical step is gathering user feedback, which I believe is essential for success. As users share their experiences, highlighting what works well and where improvements are needed, this feedback loop helps identify pain points and prioritize feature development.

## Last Week's Enhancements

Last week, we implemented enhancements based on user feedback:

Free Trial: Offering a free trial gives users a sneak peek into SyntextAI's awesomeness. Potential users can explore the product without financial commitment, experiencing its value and benefits firsthand. Free trials also attract leads, drawing in potential customers who might become paying subscribers. Feedback from trial users is invaluable for refining the product. With excellent support and a low entry barrier, it's easy for new users to take the first step, which is crucial for new or lesser-known products. Ultimately, a free trial is a powerful tool to attract new users, build trust, and drive sales.

So, last week, we reduced onboarding friction by letting users sample what they're buying. A 30-day free trial can be the nudge they need to make a decision.

## Mobile Strategy for SyntextAI: Expanding Across Devices


Globally, smartphones now significantly outnumber PCs, with estimates suggesting there are roughly three smartphones for every PC in use. This shift has been a driving factor in our decision to extend SyntextAI beyond its initial PC-based minimal viable product (MVP) to a mobile-compatible version. Our goal was simple: to ensure SyntextAI works seamlessly on mobile devices without incurring additional development costs, time, or complexity.

Having previously worked on a product that leveraged Microsoft Teams as its mobile strategy, I learned firsthand the importance of being cautious about the tech debt that can arise from adopting opinionated frameworks. Our mission, however, remains focused: to get SyntextAI into the hands of as many users as possible, across as many devices as possible. With this in mind, we developed SyntextAI as a Progressive Web App (PWA). This approach allows users to pin the app to their mobile devices, creating an experience that's nearly indistinguishable from a native app while avoiding the complexities of building separate apps for different platforms. Since large language models (LLMs) are cloud-native, a PWA fits perfectly with our technology stack. Looking ahead, we plan to use Electron to create a desktop version of the app, which will allow SyntextAI to run as a native application on Windows, macOS, and Linux.

### Journey So Far
![App on HomePage](./images/mobile_screen.jpg)

To make SyntextAI work effectively on mobile devices, we adopted a redirect-based strategy instead of relying on pop-ups. Pop-ups are problematic on mobile browsers due to strict security policies that often block them, regardless of whether they are triggered by a programmatic action or a user click. On mobile devices, pop-ups are intrusive, take up precious screen space, and disrupt the user flow. This can create friction, especially with mobile screens' limited space. As a result, pop-ups negatively impact the user experience and lead to higher abandonment rates. To address this, we switched to redirects, which offer a smoother, less intrusive way for users to navigate the app.

To ensure smooth redirects, we also transitioned from Browser routing to Hash routing. Browser routing relies on the history API to update the URL, which can cause issues on mobile, especially when deep linking or navigating between views without a full page reload. Mobile browsers, in particular, often struggle with these history changes. By switching to Hash routing, we eliminated these challenges. Hash routing uses the URL’s hash fragment to manage navigation, bypassing the need for complex server-side configurations or reliance on browser history. This made it easier to manage mobile navigation, improving compatibility and ensuring a more seamless user experience.

Ultimately, these two adjustments, adopting redirects and switching to Hash routing, ensured that SyntextAI performs reliably across mobile devices. Redirects provide a predictable, uninterrupted user flow, while Hash routing ensures that mobile browsers can handle navigation smoothly. Together, they create a robust foundation for mobile users, ensuring they can interact with the app without friction, whether they're on their phone or laptop.

### Mobile CSS and Responsive Design
![Mobile App View](./images/mobile_chat.jpg)

A significant aspect of making SyntextAI mobile-friendly lies in responsive design. PWAs leverage CSS to create responsive layouts that adapt to various screen sizes and orientations. We used media queries and flexible grid layouts to ensure that SyntextAI renders appropriately on desktops, tablets, and smartphones. This flexibility is crucial for a cloud-based AI app, where users may access the service from various devices. With responsive design, users get a consistent and optimized experience, whether on a desktop at work or a mobile phone on the go.

### Mobile Strategy: Progressive Web Apps (PWAs)

PWAs offer a compelling solution for building cloud-based AI applications like SyntextAI. They provide a seamless experience across devices, while maintaining a unified codebase. The key benefits of PWAs for SyntextAI include:

- Unified Codebase: PWAs allow us to maintain a single codebase that works across both desktop and mobile platforms. This eliminates the need for multiple codebases as required by solutions like React Native, where separate codebases for iOS and Android are needed. This approach significantly reduces complexity and ensures consistency across platforms.

- Offline Capabilities: PWAs use service workers to cache essential resources, allowing users to access the app even when offline. For mobile users, this feature ensures reliability, especially in areas with intermittent connectivity. Offline functionality is crucial for an AI application like SyntextAI, where users need access to core features even in low-connectivity environments.

- Performance and User Experience: PWAs are designed to be fast and reliable. They minimize data transfer and leverage caching to ensure quick load times, which is vital for maintaining high user engagement. Additionally, PWAs can offer a native app-like experience through features such as push notifications, full-screen mode, and home screen installation. This enhances the user experience, making the app feel integrated with the device.

- Cloud Integration: SyntextAI benefits from seamless cloud access via PWAs. By leveraging cloud infrastructure, we can ensure real-time data processing, storage, and retrieval. This integration allows us to scale efficiently, ensuring users always have access to the latest features and data, regardless of their device.

- Security: PWAs require HTTPS for secure communication between the client and server, ensuring data security and user trust. This is essential for protecting user data, particularly in AI applications that may handle sensitive information.

By embracing PWAs, redirects, and Hash routing, we've crafted a strategy that allows SyntextAI to thrive on both mobile and desktop devices. The PWA approach ensures a consistent, responsive experience across devices, while mobile-specific adjustments like redirect-based navigation and Hash routing improve performance and compatibility. With these strategies in place, SyntextAI can reach a wider audience, providing a smooth and engaging user experience on any device. Whether on a mobile phone or a laptop, users can expect a seamless, reliable, and intuitive interaction with our AI-powered document synthesis platform.

## The Path Forward ~ Expanding SyntextAI’s Capabilities

Since the initial launch, efforts have been ongoing into evolving SyntextAI into a more robust AI application capable of handling various document formats and additional functionality. Initially, we focused on PDF processing to gauge user interest and gather feedback. As expected, user insights pointed toward the need for further expansion, prompting us to explore additional features beyond PDFs. Today, SyntextAI is moving beyond its core functionality to offer web search capabilities, a critical addition to enhance its usability and overall value.
Exploring Web Search Integration for SyntextAI
SyntextAI is evolving beyond PDF processing to incorporate web search, expanding its ability to provide real-time, relevant information. We are evaluating multiple solutions across commercial, open-source, and AI-optimized search tools.

Web Search 

SearXNG is a self-hosted, privacy-focused metasearch engine that aggregates results from multiple sources. While it requires more maintenance, it provides full control over the search experience. We are currently running a SearXNG instance and experimenting with web data extraction. However, effective web scraping requires deep expertise, prompting us to explore specialized API providers.

AI-Powered Search APIs:

- Tavily AI: Designed for LLMs, Tavily optimizes search for AI applications, handling search, scraping, filtering, and extraction in a single API call. It addresses challenges in conventional search APIs, which often return loosely related results.

- FireCrawl API: Turns websites into LLM-ready markdown.

Key Considerations for Integration

- Cost: Commercial APIs can become expensive, while open-source solutions require development effort.

- Privacy: DuckDuckGo, SearXNG, and custom website extraction will offer better privacy, whereas commercial APIs may involve data tracking.

- Customization: Open-source options like SearXNG and custom website extraction provide flexibility but demand technical expertise.

- Scalability: Commercial APIs scale easily, while self-hosted solutions need additional infrastructure.

### Conclusion

Integrating web search will significantly enhance SyntextAI’s capabilities. A hybrid approach, combining commercial APIs, open-source search engines, and AI-optimized tools, might help ensure a balance between cost, privacy, and efficiency. As we refine these integrations, we’re also working on improving text extraction, expanding file format support, and incorporating additional AI-driven features. We’re excited about SyntextAI’s future and welcome collaboration with those passionate about advancing AI-driven search and document understanding.