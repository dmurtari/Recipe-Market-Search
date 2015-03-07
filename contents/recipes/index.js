var recipes = {

    searchByIngredient: function(ingredient) {

        $.get("http://food2fork-api.herokuapp.com/recipe/search/" + ingredient, function(data) {
            
            data = JSON.parse(data);
            console.log(data)

            $.get("/recipesearch/recipes/list.jade", function(template) {
                var html = jade.render(template, {
                    data: data
                })
                $("#list").html(html)
            })

        })

    },    

    viewRecipe: function(id) {

        $.get("http://food2fork-api.herokuapp.com/recipe/get/" + id, function(data) {

            data = JSON.parse(data);
            console.log(data)

            if (data){

                $.get("/recipesearch/recipes/view.jade", function(template) {
                    var html = jade.render(template, {
                        data: data
                    })
                    console.log(html)
                    $("#list").html(html)
                })
            }
        })
    },

    load: function() {

        $.get("/recipesearch/recipes/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

        // default search results
        recipes.searchByIngredient('Chicken')

    }

}