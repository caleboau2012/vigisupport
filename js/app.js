$(document).ready(function(){
    Index.init()
});

var Index = {
    CONSTANTS : {
        SCHOOLS : [
            {
                name: "Obafemi Awolowo University",
                url: "../crm",
                logo: "img/OAU-logo.jpg"
            },
            {
                name: "Ahmadu Bello University",
                url: "../abusupport",
                logo: "img/abu_logo.png"
            }
            //{
            //    name: "Babcock University",
            //    url: "../edutech",
            //    logo: "img/babcock-logo.jpg"
            //}
        ]
    },
    init: function(){
        Index.populateSelect();
        Index.populateSchools();
        Index.populateFrames();

        $('.title').on('click', function(){
            Index.home()
        });

        $('#school').on('change', function(){
            console.log(this.value);
            if((this.value != -1)){
                Index.go(this.value);
            }
        })

        $('.schools .column').on('click', function(){
            console.log($(this).attr('data-index'));
            Index.go($(this).attr('data-index'));
        })
    },
    populateSelect: function(){
        var index, HTML = "";
        for(index = 0; index < Index.CONSTANTS.SCHOOLS.length; index++){
            HTML += '<option value="' + index + '">' +
                Index.CONSTANTS.SCHOOLS[index].name + '</option>'
        }
        $('#school').append(HTML);
    },
    populateSchools: function(){
        var index, HTML = "";
        for(index = 0; index < Index.CONSTANTS.SCHOOLS.length; index++){
            HTML += '<div data-index="' + index + '" class="column">' +
                '<img src="' + Index.CONSTANTS.SCHOOLS[index].logo + '" class="thumbnail" alt="">' +
                '</div>'
        }
        $('.schools').html(HTML);
    },
    populateFrames: function(){
        var index, HTML = "";
        for(index = 0; index < Index.CONSTANTS.SCHOOLS.length; index++){
            HTML += '<iframe class="support-views support-view' + index + '" src="' +
                Index.CONSTANTS.SCHOOLS[index].url + '"></iframe>';
        }
        $('.school-support-view').html(HTML);
    },
    go: function(index){
        $('.schools').hide('slow');
        $('.support-views').addClass('hide');
        $('.support-view' + index).removeClass('hide');
        $('.school-support-view').show('slow');
    },
    home: function(){
        console.log('home');
        $('.school-support-view').hide('slow');
        $('.schools').show('slow');
    }
};
