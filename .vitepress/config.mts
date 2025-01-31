import {defineConfig} from 'vitepress'

export default defineConfig({
    lang: 'en-US',
    base: '/notes/',
    title: "Notes @ FutureMe",
    description: "Notes @ FutureMe",
    head: [['link', {rel: 'icon', href: '/NotesAtFutureMeSmall.webp'}]],
    themeConfig: {
        logo: '/NotesAtFutureMeSmall.webp',
        nav: [
            {text: 'Home', link: '/'},
            {
                text: 'Notes',
                items: [
                    {text: 'Changing crate owner', link: '/notes/changing-crate-owner'},
                    {text: 'Static site generators', link: '/notes/static-site-generators'},
                ]
            }
        ],
        sidebar: [
            {
                text: 'Notes',
                items: [
                    {text: 'Changing crate owner', link: '/notes/changing-crate-owner'},
                    {text: 'Static site generators', link: '/notes/static-site-generators'},
                ]
            }
        ],
        search: {
            provider: 'local'
        }
    },
    srcDir: "pages"
})
