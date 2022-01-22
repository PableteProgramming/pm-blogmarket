window.onload = onLoad


function AddSmallNavbarButtonListener() {
    $("body").on('click', ".nav .small-navbar .icon", () => {
        $(".nav .navbar").toggleClass('visible')
    })
}


function onLoad() {
    AddSmallNavbarButtonListener()
}