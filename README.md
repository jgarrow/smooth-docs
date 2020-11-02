# How to use

For Smooth Doc specific implementations, see their [documentation](https://smooth-doc.com).

To create a new page, make an `.mdx` file in the `/pages` directory at the root of the project. An `.mdx` file in `/pages/docs` will use Smooth Doc's "doc" layout (with the sidebar navigations). An `.mdx` file located in `/pages`, but not in the `/docs` subdirectory will just have Smooth Doc's "page" layout. To take advantage for the built-in sizing, you can import and use the `ScreenContainer` component in any non-doc pages.

To create a non-mdx page, create a `pages` folder inside of `src`. All you have to do is create a `.js` file of the component that you want to be rendered on that page. The route of the page is the name of the file. For example, if I created a file called `my-page.js` and my site name was called `my-site.com`, the url for `my-page.js` would be `my-site.com/my-page`. Other than that, you can create any "normal" React component you want and implement it in an mdx file to add it to a page.

## smooth-doc-starter

### [Docs](https://smooth-doc.com)

**See the documentation at [smooth-doc.com](https://smooth-doc.com)** for more information about using Smooth DOC!

### License

Licensed under the MIT License, Copyright © 2020-present Greg Bergé.

See [LICENSE](./LICENSE) for more information.
