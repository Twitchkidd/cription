// ? Cription: Transcription Tool

/*
 * Okay MINIMUM (because I know you can imagine a web app for this, mais ...)
 * Quicktime has controls from applescript, which can be run from the CL ...
 * `brew install youtube-dl` ... Okay, well, now we know, if you run:
 * `youtube-dl [RSS FEED]` it will download them all starting from the most
 * recent, to present working directory. Okay, `youtube-dl -j --flat-playlist`
 * returns like object, newline, object, ai., so it just needs to be wrapped
 * in something and commas added, then you get data including url, title,
 * episode_number, all sorts of good stuff. I imagine you could either pass
 * no arguments and it would give you a list starting with the most recent, or
 * pass an episode number to hit the ground running.
 *
 * Sweet, node has libs for all this. rss-parser, audio-to-text ... what if
 * you got the minimum to work at a more barebones level and then you can
 * craft a bespoke experience! rss-parser is small, htmlparser works in
 * both Node and the browser ...
 *
 * Aside: Browser version: Was looking at howler.js and I thought I wonder what
 * it would look like to do this in the browser or as a node project with
 * a simple server ... but then I was like, what if we didn't though, because
 * the user is going to be in the writing app primarily, right?
 *
 * Requirements time: user story IS: user runs `cript --save 300`,
 * Design Details episode 300 downloads, starts playing, and keybindings
 * are registered for pause/play, skip back 6 seconds, and copy "\n\nBrian: "
 * or "\n\nMarshall: " to clipboard, as well as exit, and with the --save flag
 * called, the program keeps the ... oh, shit, it should check if it's already
 * in the directory ... I guess we can test the audio part seperately from the
 * download part, too, those are pretty different. And honestly, if the audio
 * is controlled from javascript, the audio and the keybindings are seperate,
 * too. And the UI, but that's not so complicated, hmm? Until we have lists,
 * search, etc.
 *
 * I think I'll need ... well, having youtube-dl installed needs to be in the
 * README, lol, so there's that part, then I'll probably pull in whatever lib
 * I used last time for UI, I need to brush up on options for node cli tools,
 * library for audio ... pseudocode time? Oh no, it's time to go time. Oh boy!
 */
