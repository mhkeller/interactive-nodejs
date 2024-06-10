Interactive Node.js 
===

> An example using VS Code for interactive coding and plotting

### Install

```sh
npm install
# You may also need to do this for the plots...
npx playwright install 
```

## Demo overview

https://github.com/mhkeller/interactive-nodejs/assets/498744/da8d7eda-6eb7-4d71-b876-7194a2490495

## Demo showing the REPL to do interactive programming

https://github.com/mhkeller/interactive-nodejs/assets/498744/ffefac18-a116-49b9-a431-9f79b944d2cf

### Running

1. Open the `index.js` file
2. Press <kbd>F5</kbd> to launch in debug mode
3. Go to `View > Debug Console` to view the output
4. Step through the debugger to the various steps
5. Adjust the arquero query in the REPL and see the result
6. View the plot

### What's going on here?

The [`.vscode/launch.json`](.vscode/launch.json) config file will run whatever file is currently in view in debug mode, which means it stops whenever it encounters a `debugger` line.

When your script is in a final state, you can **simply execute it with `node index.js`** and it will skip over the `debugger` statements.

In this example, we analyze data of Olympic gold medalists, launch a bar chart of the top 10 countries and also write that chart to a PNG.

> [!TIP]
> If you haven't set up your `launch.json` file to use <kbd>F5</kbd>, you can also launch a script in debugger mode using the `--inspect` flag, e.g. `node --inspect index.js`. 

### Limitations

The UX of the VS Code REPL is not ideal and does not match the Google Chrome behavior. The issue is [tracked here](https://github.com/microsoft/vscode/issues/169798) but is in the backlog.

It would also be nice if you could drag the REPL input area to be taller.
