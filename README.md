# Next JS Module Federation

The code in this repository is based on the
[Module Federation in NextJS](https://youtu.be/jOEfKdam2VM)
video and this
[repo code](https://github.com/jherr/wp5-nextjs-for-youtube/tree/working-remote).

This repository is broken because trying to externalize React and ReactDOM failed.
The reason for externalizing react is that the host and peer will run the same
externalized version of react. 
Hooks use in shared peer components require the same react version on the host.

- The
  `40aa5cc6b2311f763961df52d64fcaa71800618c`
  commit
  switched the shared peer to a class component in order to share state because
  sharing state with hook fails due to different react version running on the
  peer and host but does not fail with class components.
- The
  `2e5dca9b6196dd95b481edeeab4415df361a59f3`
  commit
  works with a reload and fails with a HOT reload. Make sure to do a reload.
- The
  `e2bc33273c463b5866b15398d0ebfa77cb100d51`
  commit
  has the nextjs host loading the peer `remoteEnter.js` but does not use it yet.
