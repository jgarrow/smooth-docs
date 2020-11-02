module.exports = {
    plugins: [
        {
            resolve: 'smooth-doc',
            options: {
                name: 'Quack Academy',
                description: 'Use your own description...',
                siteUrl: 'https://example.com',
                navItems: [
                    { title: 'Home', url: '/' },
                    { title: 'Learn', url: '/learn' },
                    { title: 'About', url: '/about-us' },
                    { title: 'Login', url: '/login' },
                ],
                sections: ['Learn'],
            },
        },
    ],
};
