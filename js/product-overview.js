$(document).ready(function(){
    // product overview
    $('.tabs li').click(function(){
        $('.tabs li').removeClass('active');
        $(this).addClass('active');
        getResource($(this).index())
    })

    // get data from mocky api server
    function getResource(tab = 0) {
        let url = 'https://run.mocky.io/v3/7d6e341d-8231-4cfc-b57e-f0a071d84308';
        var tableData = $('.product-des--table table');
        tableData.empty();
        tableData.append(`
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Amount</th>
                        <th>%RI</th>
                    </tr>
                </thead>
            <tbody>
            </tbody>
        `).hide().fadeIn(500);
        
        $.getJSON(url, function(res){
            var tabs = res[0].data[tab];
            
            for(var i = 0; i < tabs.length; i++){
                for(var j = 0; j < tabs[i].length; j++){
                    $('.product-des--table tbody').append(`            
                        <tr>
                            <td>${tabs[i][j].name}</td>
                            <td>${tabs[i][j].amount}</td>
                            <td>${tabs[i][j].ri}</td>
                        </tr>
                    `).hide().fadeIn(500);
                }                
            }
        }).fail(function(){
            console.log("An error has occurred.");
        });
    }
    getResource();
});