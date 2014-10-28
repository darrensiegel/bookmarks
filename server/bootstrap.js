
Meteor.startup(function () {
  // create some sample data
  if (Chimera.Bookmarks.find().count() === 0
    && Chimera.Groups.find().count() === 0
    && Chimera.Users.find().count() === 0) {

    // add a couple of groups

    var helpdeskId = Chimera.Users.insert({
      name: "Helpdesk",
      icon: "user.png"
    });

    var allUsersId = Chimera.Groups.insert({
      name: "All Users",
      icon: "group.png"
    });
    var blueId = Chimera.Groups.insert({
      name: "BlueFeed",
      icon: "group.png"
    });

    // add bookmarks
    Chimera.Bookmarks.insert({
      label: "COP map",
      type: "map",
      bookmarkedFor: helpdeskId
    });
    Chimera.Bookmarks.insert({
      label: "drone",
      type: "unit",
      bookmarkedFor: helpdeskId
    });
    Chimera.Bookmarks.insert({
      label: "supply map",
      type: "map",
      bookmarkedFor: allUsersId
    });
    Chimera.Bookmarks.insert({
      label: "coa 1",
      type: "map",
      bookmarkedFor: allUsersId
    });
    Chimera.Bookmarks.insert({
      label: "coa 2",
      type: "map",
      bookmarkedFor: blueId
    });


  }
});
