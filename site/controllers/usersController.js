/**
 * Created by Thurmond on 1/1/14.
 */

App.UsersController = Ember.ArrayController.extend({
    sortProperties: ['name'],
    sortAscending: true, // false = descending

    usersCount: function(){
        return this.get('model.length');
    }.property('@each')
});
