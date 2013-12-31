/**
 * Created by Thurmond on 12/30/13.
 */

App.Router.map(function(){
    this.resource('users', function(){
        this.resource('user', { path:'/:user_id' }, function(){
            this.route('edit');
        });
        this.route('create');
    });
});
