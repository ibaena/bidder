
Meteor.methods({
  addBudget(query) {
    if(!Meteor.userId()){
      throw new Meteor.Error("Not authorized");
    }
    Budget.insert({
      project: query.name,
      hours: query.hours,
      rate: query.rate,
      complete: false,
      createdAt: new Date(),
      user: Meteor.userId()
    });
    //console.log(query);
  },
  toggleBudget(name) {
    if(Meteor.userId() !== name.user){
      throw new Meteor.Error("Not authorized");
    }
    Resolutions.update(name._id, {
      $set: {
        complete: !name.complete
      }
    });
  },
  deleteResolution(name) {
    if(Meteor.userId() !== name.user){
      throw new Meteor.Error("Not authorized");
    }
    Resolutions.remove(name._id);
  },
});
