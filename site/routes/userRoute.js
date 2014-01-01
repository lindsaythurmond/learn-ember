/**
 * Created by Thurmond on 1/1/14.
 */

App.UserRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('user', params.user_id);
    }
});