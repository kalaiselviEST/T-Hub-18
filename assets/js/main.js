$(document).ready(function() {
    $("body").niceScroll({
        cursorcolor: "#292929",
        cursorwidth: "10px",

        cursorborderradius: "10px",
        horizrailenabled: false,
        smoothscroll: true,

    });
});

$("[data-toggle=popover]").popover({
    html: true,
    trigger: 'hover',
    content: function() {
        var content = $(this).attr("data-popover-content");
        return $(content).children(".popover-body").html();
    }
});











const fullName = document.getElementById('fullName').textContent;
const intials = fullName.split(' ').map(name => name[0]).join('').toUpperCase();
document.getElementById('profileIcon').innerHTML = intials;

$(document).ready(function() {
    $('table').DataTable({
        "lengthMenu": [
            [25, 50, -1],
            [25, 50, "All"]
        ],
        aoColumnDefs: [{
            bSortable: false,
            'aTargets': ['nosort']
        }],
        "bInfo": false,
        "ordering": false
    });
});

$('.header .navbar-nav a').on('click', function() {
    $('.header .navbar-nav').find('li.active').removeClass('active');
    $(this).parent('li').addClass('active');
});





var success = false;
var message;


function connect() {
    $('.status__card .btn').addClass('loadConStatus');
    $('.status__card .btn').off('click', connect);
    setTimeout(showStatus, 2000);
}

function showStatus() {

    $('.status__card .message-success').hide();
    $('.status__card .message-error').addClass('active');
    setTimeout(function() {
        $('.status__card .btn').removeClass('loadConStatus');
        $('.status__card span.status-text').html("Disconnected").addClass("danger");
        $('.status__card .action-btn').html("Disconnected From Quickbooks")

        window.open(index.html)
    }, 500);
    success = !success;
}
$('.status__card .btn').on('click', connect);

$('.waitBeforeNavigate').on("click", function(ev) {
    ev.preventDefault();
    const goTo = $(this).attr("href");
    setTimeout(function() {
        window.location = goTo;
    }, 3000);
});

$('.qbo-sync-control .btn-click-sync-all, .qbo-sync-control .eachSync').on('click', (event) => {
    console.log('event', event)
    let elName = event.target.dataset['name']
    console.log('elName:', elName)
    if (Object.values(event.target.classList).includes('eachSync')) {
        $($(event.target).parent()).addClass('hideText')
        $($($(event.target).parent()).next()).addClass('showText')
        $(event.target).addClass('syncing');
        setTimeout(() => { endEachSync(event.target) }, 1000);

    } else {

        $(' .btn-click-sync-all .fa-refresh').addClass('syncing');
        $('.showValue').addClass('hideText');
        $('.loading').addClass('showText');
        setTimeout(endSync, 1000);
    }
})


function endEachSync(el) {
    $(el).removeClass('syncing')
    $($(el).parent()).removeClass('hideText')
    $($($(el).parent()).next()).removeClass('showText')
}

function sync() {
    $(' .btn-click-sync-all .fa-refresh').addClass('syncing');
    $('.showValue').addClass('hideText');
    $('.loading').addClass('showText');
    setTimeout(endSync, 1000);
}

function endSync() {
    setTimeout(function() {
        $('.showValue').removeClass('hideText');
        $('.loading').removeClass('showText');
        $('.btn-click-sync-all .fa-refresh').removeClass('syncing');
    }, 500);
}