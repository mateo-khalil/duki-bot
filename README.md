# duki-bot

## Steps
### Github:
1. Fork this and add this line to `.github/workflows/checkElements.yml`:
```
  schedule:
    - cron: "*/5 * * * *" # Runs every 5 minutes
```
### Local:
1. Run `npm i`
2. Run `npx tsx duki-bot.ts`
