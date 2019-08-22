# Cyprus JS Limassol Meetup #2

## Environment Variables and runtime

`NODE_ENV: 'production' | 'development'(default)`
affects build type, enables build optimizations etc

`RUNTIME_ENV: 'local_dev'(default) | 'dev' | 'uat' | 'prod'`
gives runtime a hint about where is current code running

helpers/runtime.ts exports all kinds of flags based on these variables.

## Styles

Mobile-first!
Create styles and markup for mobile and adopt for tablet/desktop with media queries.

For example:

```
  ${LG`
    font-size: 1.3rem;
  `}
```

Breakpoints at: xs: 30rem, sm: 48rem, md: 64rem, lg: 90rem, xl: 120rem

- use theme.ts for dark/light theme styling
- use `polished` package for css utilities
