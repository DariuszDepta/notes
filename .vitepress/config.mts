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
                    {text: 'Bash useful scripts', link: '/notes/bash-useful-scripts'},
                    {text: 'Changing crate owner', link: '/notes/changing-crate-owner'},
                    {text: 'Configuring VPS on Centos 8', link: '/notes/configuring-vps-on-centos-8'},
                    {text: 'Deleting multiple GitHub workflows', link: '/notes/deleting-multiple-github-workflows'},
                    {text: 'Git useful commands', link: '/notes/git-commands'},
                    {text: 'Git server', link: '/notes/git-server'},
                    {text: 'Installing Docker and Docker Compose', link: '/notes/installing-docker-and-docker-compose'},
                    {text: 'Installing Bison on Linux', link: '/notes/installing-bison-on-linux'},
                    {text: 'Installing Go', link: '/notes/installing-go'},
                    {text: 'Installing Node/NPM/NVM', link: '/notes/installing-node-npm-nvm'},
                    {text: 'Renaming Rust tests', link: '/notes/renaming-rust-tests/renaming-rust-tests'},
                    {text: 'Rust formatter configuration', link: '/notes/rust-formatter-configuration'},
                    {text: 'Static site generators', link: '/notes/static-site-generators'},
                    {text: 'Taskfile template for Rust projects', link: '/notes/taskfile-template-for-rust-projects'},
                    {text: 'Tweaking blockchains', link: '/notes/tweaking-blockchains'},
                    {text: 'Tweaking GitLab', link: '/notes/tweaking-gitlab'},
                    {text: 'Updating NPM dependencies', link: '/notes/updating-npm-dependencies'},
                ]
            }
        ],
        sidebar: [
            {
                text: 'Notes',
                items: [
                    {text: 'Bash useful scripts', link: '/notes/bash-useful-scripts'},
                    {text: 'Changing crate owner', link: '/notes/changing-crate-owner'},
                    {text: 'Configuring VPS on Centos 8', link: '/notes/configuring-vps-on-centos-8'},
                    {text: 'Deleting multiple GitHub workflows', link: '/notes/deleting-multiple-github-workflows'},
                    {text: 'Git useful commands', link: '/notes/git-commands'},
                    {text: 'Git server', link: '/notes/git-server'},
                    {text: 'Installing Docker and Docker Compose', link: '/notes/installing-docker-and-docker-compose'},
                    {text: 'Installing Bison on Linux', link: '/notes/installing-bison-on-linux'},
                    {text: 'Installing Go', link: '/notes/installing-go'},
                    {text: 'Installing Node/NPM/NVM', link: '/notes/installing-node-npm-nvm'},
                    {text: 'Renaming Rust tests', link: '/notes/renaming-rust-tests/renaming-rust-tests'},
                    {text: 'Rust formatter configuration', link: '/notes/rust-formatter-configuration'},
                    {text: 'Static site generators', link: '/notes/static-site-generators'},
                    {text: 'Taskfile template for Rust projects', link: '/notes/taskfile-template-for-rust-projects'},
                    {text: 'Tweaking blockchains', link: '/notes/tweaking-blockchains'},
                    {text: 'Tweaking GitLab', link: '/notes/tweaking-gitlab'},
                    {text: 'Updating NPM dependencies', link: '/notes/updating-npm-dependencies'},
                ]
            }
        ],
        search: {
            provider: 'local'
        }
    },
    srcDir: "pages"
})
