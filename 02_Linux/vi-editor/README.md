# ```vi``` editor
Navigating through a linux environment has some commands one needs to remember. He they are so that we never forget.

Vi has two modes insertion mode and command mode. The editor begins in command mode, where the cursor movement and text deletion and pasting occur. Insertion mode begins upon entering an insertion or change command. [ESC] returns the editor to command mode (where you can quit, for example by typing :q!). Most commands execute as soon as you type them except for "colon" commands which execute when you press the ruturn key.

## Basics
* To open the **vi** editor simple type the following command: `vi <file.name>`, 
where _file.name_ is any code file (Bash, JavaScript, etc.)
* Use _shift_ + `:` to initiate command-prompt
* Use _esc_ key to exit command-promt in addition to any commands in progress
* Exiting command-prompt puts cursor in motion (see section below)

Now some basic commands:
* `:w` - write
* `:q` - quit
* `:wq!` - write and quit --forced
* `:i` - insert text (turns on insertion mode)
* `:d` - delete the current line (or use `dd` while in motion)

## Line Numbers
Set Line Numbers: ```:set number```
Line Numbers Off: ```:set nonumber```

## Motion
Use the standard **_up_**, **_down_**, **_left_**, **_right_** to navigate the cursor. Helpful commands help move faster such as:
`w` - jump forward through words in any line
`b` - jump backwards through words in a line
`W` - jump forward to blank delimeted word
`B` - jump backwards to blank delimeted word
`$` - jump to end of a line
`0` - jump to beginning of line
`1G` - jump to first line of file
`G` - jump to last line of file
`nG` - jump to line _n_

### Search
Exit command-prompt, then begin search forward by entering ```/<search>```
* where _<search>_ is reg-ex string
* search backwards first by entering ```?<search>```
Now to move forwards push letter ```n``` and backwards use ```N```

### Removing Line Text
`x` - delete text on right side
`X` - delete text on left side
`D` - remove everything on right side
`dd` - remove entire line (press & hold `d` is also option)

### Reverting Changes
`u` - revert (undo) one change at a time (press & hold an option)

## Insert Mode
`cmd + v` or `ctrl + v` - paste text

## Reference
[vi editor](http://www.lagmonster.org/docs/vi.html)
