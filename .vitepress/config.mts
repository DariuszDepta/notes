import {defineConfig} from 'vitepress'

export default defineConfig({
    lang: 'en-US',
    base: '/notes/',
    title: "Notes @FutureMe",
    description: "Notes @FutureMe",
    head: [['link', {rel: 'icon', href: '/NotesAtFutureMeSmall.webp'}]],
    themeConfig: {
        logo: '/NotesAtFutureMeSmall.webp',
        nav: [
            {
                text: 'Notes',
                items: [
                    {text: 'Changing crate owner', link: '/notes/changing-crate-owner'},
                    {text: 'Installing Docker and Docker Compose', link: '/notes/installing-docker-and-docker-compose'},
                    {text: 'Installing Go', link: '/notes/installing-go'},
                    {text: 'Renaming Rust tests', link: '/notes/renaming-rust-tests/renaming-rust-tests'},
                    {text: 'Rust formatter configuration', link: '/notes/rust-formatter-configuration.md'},
                    {text: 'Static site generators', link: '/notes/static-site-generators'},
                    {text: 'Tweaking blockchains', link: '/notes/tweaking-blockchains'},
                ]
            }
        ],
        sidebar: [
            {
                text: 'Notes',
                items: [
                    {text: 'Changing crate owner', link: '/notes/changing-crate-owner'},
                    {text: 'Installing Docker and Docker Compose', link: '/notes/installing-docker-and-docker-compose'},
                    {text: 'Installing Go', link: '/notes/installing-go'},
                    {text: 'Renaming Rust tests', link: '/notes/renaming-rust-tests/renaming-rust-tests'},
                    {text: 'Rust formatter configuration', link: '/notes/rust-formatter-configuration.md'},
                    {text: 'Static site generators', link: '/notes/static-site-generators'},
                    {text: 'Tweaking blockchains', link: '/notes/tweaking-blockchains'},
                ]
            }
        ],
        search: {
            provider: 'local'
        }
    },
    srcDir: "pages"
})
