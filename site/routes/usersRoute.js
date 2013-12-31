/**
 * Created by Thurmond on 12/30/13.
 */

App.UsersRoute = Ember.Route.extend({
    model: function(){
        return this.store.find('user');
    }
});