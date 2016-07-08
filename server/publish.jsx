Budget = new Mongo.Collection('budget');

Meteor.publish("allBudgets", function() {
  return Budget.find();
});
Meteor.publish("userBudgets", function() {
  return Budget.find({user: this.userId});
});
