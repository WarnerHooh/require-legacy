require(['vue', 'hello', 'todo', 'src/foo'], function (Vue, hello, todo, foo) {
    Vue.component('Hello', hello.default);
    Vue.component('Todo', todo.default);

    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello require vue legacy!',
            foo: ''
        }
    });

    app.$data.foo = foo.name;
})

