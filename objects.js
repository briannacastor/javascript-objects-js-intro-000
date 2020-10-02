var playlist= {
  artist1: "song1",
  artist2: "song2",
  artist3: "song3"
};
function updatePlaylist(thePlaylist, artistName, songTitle){
  return Object.assign({},
    thePlaylist, { philOchs: "myBloodyValentine"});
}
updatePlaylist(playlist, "philOchs", "myBloodyValentine");

function removeFromPlaylist(thePlaylist, artistName){
  delete thePlaylist[artist2];
  return thePlaylist;
}
removeFromPlaylist(playlist, "artist2");
