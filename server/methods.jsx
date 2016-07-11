let bitbucketUrl = 'https://api.bitbucket.org/2.0/repositories/visioncreativegroup?access_token=';
let bbOAuthUrl = 'https://bitbucket.org/site/oauth2/authorize?client_id=XUz9D2BhTEKACjj3A6&response_type=token';


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

  getRepos: function(){
    let user = Meteor.user();
    let bitToken = user.services.bitbucket.accessToken;

    this.unblock();

    return HTTP.get(bitbucketUrl + bitToken , {});
  }
});
