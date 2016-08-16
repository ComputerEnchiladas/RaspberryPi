# ```vi``` editor
Navigating through a linux environment has some commands one needs to remember. He they are so that we never forget.

## Basics
* To open the **vi** editor simple type the following command: `vi <file.name>`, 
where _file.name_ is any code file (Bash, JavaScript, etc.)
* Use _shift_ + `:` to initiate command-prompt
* Use _esc_ key to exit command-promt in addition to any commands in progress
* Exiting command-prompt puts cursor in motion

Now some basic commands:
* `:w` - write
* `:q` - quit
* `:wq!` - write and quit --forced
* `:i` - insert text
 
## Search
Exit command-prompt, then begin search forward by entering ```/<search>```
* where _<search>_ is reg-ex string
* search backwards first by entering ```?<search>```
Now to move forwards push letter ```n``` and backwards use ```N```

## Line Numbers
Set Line Numbers: ```:set number```
Line Numbers Off: ```:set nonumber```

## Motion
`w` - to jump forward through words in any line
`b` - to jump backwards through words in a line
