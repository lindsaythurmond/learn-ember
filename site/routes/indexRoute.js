/**
 * Created by Thurmond on 1/1/14.
 */

App.IndexRoute = Em.Route.extend({
    redirect: function(){
        this.transitionTo('users');
    }
});