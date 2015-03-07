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

    load: function() {

        $.get("/recipesearch/recipes/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

        // default search results
        recipes.searchByIngredient('Chicken')

    }

}