/**
 * Created by Thurmond on 1/1/14.
 */

App.UserEditRoute = Ember.Route.extend({
    model: function(){
        return this.modelFor('user');
    }
});
