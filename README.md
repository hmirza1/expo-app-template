# Working repo

Run the following commands

```bash
rm -rf node_modules ios/ android/ package-lock.json
pnpm install && pnpm prebuild
```

and then to run the app on the simulator, run:

```bash
npx expo run ios -d
```

and select the simulator from the terminal.
