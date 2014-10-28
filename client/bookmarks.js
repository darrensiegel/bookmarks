Template.user.helpers({
  currentUser: function() {
    return Chimera.Users.findOne();
  }
});

Template.groups.helpers({
  groups: function() {
    return Chimera.Groups.find();
  }
});

Template.profile.helpers({
  bookmarks: function () {
    return Chimera.Bookmarks.find(
      { type: "map", bookmarkedFor: this._id},
      { sort: { label: 1 } });
  }
});

Template.profile.events({
  'click button': function (event, template) {
    event.preventDefault();
    Chimera.Bookmarks.insert({
      label: template.$('[name=bookmarkLabel]').val(),
      type: "map",
      bookmarkedFor: this._id
    });
  }
});

Template.bookmark.events({
  'click button': function (event, template) {
    Chimera.Bookmarks.remove(this._id);
  }
});
