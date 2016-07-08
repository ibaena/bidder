
Meteor.methods({
  addBudget(query) {
    console.log(query);
    if(!Meteor.userId()){
      throw new Meteor.Error("Not authorized");
    }
    Budget.insert({
      client: query.client,
      job: query.job,
      rate: query.rate,
      hours: query.hours,
      dueDate: query.dueDate,
      complete: false,
      createdAt: new Date(),
      user: Meteor.userId()
    });
    //console.log(query);
  },
  toggleBudget(budget) {
    if(Meteor.userId() !== budget.user){
      throw new Meteor.Error("Not authorized");
    }
    Budget.update(budget._id, {
      $set: {
        complete: !budget.complete
      }
    });
  },
  deleteBudget(budget) {
    if(Meteor.userId() !== budget.user){
      throw new Meteor.Error("Not authorized");
    }
    Budget.remove(budget._id);
  },
});
