import {defineConfig} from 'vitepress'

export default defineConfig({
    lang: 'en-US',
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
                    {text: 'Changing crate owner', link: '/notes/changing-crate-owner'}
                ]
            }
        ],
        sidebar: [
            {
                text: 'Notes',
                items: [
                    {text: 'Changing crate owner', link: '/notes/changing-crate-owner'}
                ]
            }
        ],
        search: {
            provider: 'local'
        }
    },
    srcDir: "pages"
})
