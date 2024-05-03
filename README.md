Interactive Node.js 
===

> An example using VS Code for interactive coding and plotting

### Install

```sh
npm install
# You may also need to do...
npx playwright install 
```

## Demo overview

https://github.com/mhkeller/interactive-nodejs/assets/498744/1b2cb970-583b-40ee-bd96-a211792a016d

## Demo showing the REPL to do interactive programming

![Demo 2](assets/demo-2.mov)

### Running

1. Open the `index.js` file
2. Press <kbd>F5</kbd> to launch in debug mode
3. Go to `View > Debug Console` to view the output
4. Step through the debugger to the various steps
5. Adjust the arquero query in the REPL and see the result
6. View the plot

### What's going on here?

The [`.vscode/launch.json`](.vscode/launch.json) config file will run whatever file is currently in view in debug mode, which means it stops whenever it encounters a `debugger` line.

When your script is in a final state, you can simply execute it with `node index.js` and it will skip over the `debugger` statements.

In this example, we analyze data of Olympic gold medalists, launch a bar chart of the top 10 countries and also write that chart to a PNG.

### Limitations

The UX of the VS Code REPL is not ideal and does not match the Google Chrome behavior. The issue is [tracked here](https://github.com/microsoft/vscode/issues/169798) but is in the backlog.

