var markets = {

    searchByZipcode: function(zipcode) {

        var zipcode = zipcode || '80303'

        $.get("http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + zipcode, function(data) {

            console.log('got' + data)
            if (data.results){

                $.get("/Recipe-Market-Search/markets/list.jade", function(template) {
                    var html = jade.render(template, {
                        data: data
                    })
                    console.log(html)
                    $("#list").html(html)
                    markets.viewMarket(data.results[0].id)
                })
            }
        })
    },

    viewMarket: function(id) {

        $.get("http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + id, function(data) {

            console.log(data)
            if (data.marketdetails){

                $.get("/Recipe-Market-Search/markets/view.jade", function(template) {
                    var html = jade.render(template, {
                        data: data.marketdetails
                    })
                    console.log(html)
                    $("#view").html(html)
                })
            }
        })
    },

    load: function() {

        $.get("/Recipe-Market-Search/markets/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

        // default search results
        markets.searchByZipcode()

    }

}