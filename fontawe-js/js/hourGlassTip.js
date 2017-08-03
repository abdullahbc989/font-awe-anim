function hourGlassTip() {
    let $hourGlass = document.getElementById('hour-glass');
    $hourGlass.innerHTML = "&#xf254;";

    setTimeout(function() {
        $hourGlass.innerHTML = "&#xf252;";
    }, 1000);
     setTimeout(function() {
        $hourGlass.innerHTML = "&#xf253;";
    }, 2000);
     setTimeout(function() {
        $hourGlass.innerHTML = "&#xf254;";
    }, 3000);

    setInterval(hourGlassTip, 4000);
}

hourGlassTip();