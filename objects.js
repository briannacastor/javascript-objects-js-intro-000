var playlist= {
  theBreeders: "cannonball",
  alGreen: "callMe",
  samCooke: "cupid"
}
function updatePlaylist(playlist, madonna, likeAPrayer){
  return Object.assign({},
    playlist,{[madonna]:likeAPrayer});
}
