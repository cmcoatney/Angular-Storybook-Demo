# Published Storybook

https://www.chromatic.com/builds?appId=6244852e74f8b2003abb1d0b

# Up and running with Storybook Angular...

1. install angular

```zsh
ng new sb-angular-demo --routing=true --package-manager=yarn --prefix=sb --style=scss
```

2. add storybook

```zsh
npx sb init
```

3. configure sb to look in component dirs instead of single folder (replace current stories prop with this):

```zsh
stories: ["../src/app/**/*.stories.ts"],
```

4. add some angular components

```zsh
ng g c slide
ng g c play-button
ng g c slideshow
```

5. add a story in component folder (see examples)

6. If using a font from cdn in index.html like we are here, in this case from google, add preview-head.html in .storybook

7. Run Angular

```zsh
yarn start
```

8. Run Storybook

```zsh
yarn storybook
```

9. Deploy Storybook with Chromatic

https://storybook.js.org/tutorials/intro-to-storybook/react/en/deploy/

# Resources for Angular Storybook

| Description      | Link                                                                                |
| ---------------- | ----------------------------------------------------------------------------------- |
| Storybook.js.org | https://storybook.js.org/tutorials/intro-to-storybook/angular/en/get-started/       |
| Integrations     | https://www.youtube.com/watch?v=Ex52FHKyc7E                                         |
| Add-ons: Figma   | https://storybook.js.org/blog/figma-plugin-sneak-peek/                              |
| Add-ons: Zeplin  | https://www.youtube.com/watch?v=ZUHT0g3ZPYw                                         |
| SB + Zeplin      | https://blog.zeplin.io/inside-zeplin-powered-up-storybook-integration               |
| NG + SB Playlist | https://www.youtube.com/watch?v=EbCr0Y6ppbw&list=PLw5h0DiJ-9PBBCHIvsigzaFD2eqxvt3_y |
