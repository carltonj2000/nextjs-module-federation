# Next JS Module Federation

The code in this repository is based on the
[Module Federation in NextJS](https://youtu.be/jOEfKdam2VM)
video and this
[repo code](https://github.com/jherr/wp5-nextjs-for-youtube/tree/working-remote).

- The
  `2e5dca9b6196dd95b481edeeab4415df361a59f3`
  commit
  works with a reload and fails with a HOT reload. Make sure to do a reload.
- The
  `e2bc33273c463b5866b15398d0ebfa77cb100d51`
  commit
  has the nextjs host loading the peer `remoteEnter.js` but does not use it yet.
