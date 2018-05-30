function kateRotator(){
    var rotator, img_list = [], src_list =[], alt_list = [], width, height, i, j, k, p,
        inner, descript, array, array_col = [], arr_horiz, arr_vert, current, opacity ,func, alt_list_bg = [];
    width = 400;
    height = 300;
    arr_horiz = 10;
    arr_vert = 5;
    rotator = document.getElementById('rotator');
    rotator.style.width = width+'px';
    rotator.style.height = height+'px';
    rotator.style.position = 'relative';
    rotator.style.overflow = 'hidden';
    inner = document.createElement('div');
    inner.className = 'rotator-inner';
    inner.style.position = 'absolute';
    rotator.appendChild(inner);
    inner.style.width = width*rotator.getElementsByTagName('img').length + 'px';
    inner.style.height = height+'px';
    descript = document.createElement('div');
    descript.className = 'rotator-description';
    rotator.appendChild(descript);
    array = document.createElement('div');
    array.className = 'rotator-array';
    array.style.position = 'absolute';
    array.style.top = '0px';
    array.style.left = '0px';
    array.style.width = width+'px';
    array.style.height = height+'px';
    rotator.appendChild(array);
    current = 0;
    opacity = 1;
    p = 0;
    for (i = 0; i < rotator.getElementsByTagName('img').length; i++) {
        img_list[i] = document.createElement('div');
        img_list[i].className = 'rotator-img';
        inner.appendChild(img_list[i]);
        src_list[i] = rotator.getElementsByTagName('img')[i].getAttribute('src');
        img_list[i].style.background = 'url('+src_list[i]+')';
        alt_list[i] = document.createElement('div');
        alt_list[i].className = 'rotator-description-item';
        descript.appendChild(alt_list[i]);
        if (rotator.getElementsByTagName('img')[i].getAttribute('alt')) {
            alt_list[i].innerHTML = '<div>'+rotator.getElementsByTagName('img')[i].getAttribute('alt')+'</div>';
        }
        alt_list[i].style.zIndex = 5;
        img_list[i].style.width = width+'px';
        img_list[i].style.height = height+'px';
        alt_list_bg[i] = document.createElement('div');
        alt_list[i].appendChild(alt_list_bg[i]);
        alt_list[i].style.position = img_list[i].style.position = alt_list_bg[i].style.position = 'absolute';
        img_list[i].style.backgroundPosition = 'center center';
        img_list[i].style.backgroundRepeat = 'no-repeat';
        img_list[i].style.backgroundSize = '100% 100%';
        img_list[i].style.opacity = '0';
        img_list[i].style.zIndex = 2;
        alt_list[i].style.zIndex = alt_list_bg[i].style.zIndex = 5;
        alt_list[i].childNodes[0].style.zIndex = 99;
        alt_list[i].childNodes[0].style.position = 'relative';
        alt_list[i].style.width = '70%';
        alt_list[i].style.padding = '0 5%';
        alt_list[i].style.height = alt_list[i].style.lineHeight = '30px';
        alt_list_bg[i].style.top = 0+'px';
        alt_list[i].style.right = alt_list[i].style.bottom = 0+'px';
        alt_list_bg[i].style.right = -40+'px';
        alt_list_bg[i].style.width = alt_list_bg[i].style.height = '100%';
        alt_list_bg[i].style.background = '#335';
        alt_list_bg[i].style.opacity = '0.5';
        alt_list[i].style.color = '#fff';
        alt_list[i].style.fontFamily = 'Arial';
        alt_list[i].style.textAlign = 'right';
        alt_list[i].style.opacity = 0;
        alt_list_bg[i].style.webkitTransform = 'skew(-45deg)';
    }
    img_list[1].style.opacity = 1;
    alt_list[0].style.opacity = 1;
    //document.getElementById('rez').innerHTML = rotator.getElementsByTagName('img')[0].getAttribute('src');
    for (i = 0; i < 30*rotator.getElementsByTagName('img').length; i++) {
        document.getElementById('rez').innerHTML = rotator.getElementsByTagName('img')[0].getAttribute('src');
        rotator.removeChild(rotator.getElementsByTagName('img')[0]);
    }
    for (k = 0; k < arr_horiz; k++) {
        array_col[k] = document.createElement('div');
    }
    for (i = 0; i < arr_horiz; i++) {
        for (j = 0; j < arr_vert; j++) {
            array_col[j][i] = document.createElement('div');
            array.appendChild(array_col[j][i]);
            array_col[j][i].style.width = width/arr_horiz+'px';
            array_col[j][i] = document.createElement('div');
            array_col[j][i].className = "rotator-array-list";
            array.appendChild(array_col[j][i]);
            array_col[j][i].style.width = width/arr_horiz+'px';
            array_col[j][i].style.height = height/arr_vert+'px';
            array_col[j][i].style.position = 'absolute';
            array_col[j][i].style.top = array_col[j][i].offsetHeight*j+'px';
            array_col[j][i].style.left = array_col[j][i].offsetWidth*i+'px';
            array_col[j][i].style.backgroundPosition = (-array_col[j][i].offsetLeft)+'px '+(-array_col[j][i].offsetTop)+'px';
            array_col[j][i].style.backgroundImage = 'url('+src_list[current]+')';
            array_col[j][i].style.backgroundSize = (100*arr_horiz)+'% '+(100*arr_vert)+'%';
            array_col[j][i].style.zIndex = 4;
        }
    }
    var a = [], b = [], f;
    for (i = 0; i < arr_horiz; i++) {
        for (j = 0; j < arr_vert; j++) {
            a[i] = array_col[j][i].offsetLeft;
            b[j] = array_col[j][i].offsetTop;
        }
    }
    //document.getElementById('rez').innerHTML = b;
    func = 4;
    f = rotateOpacity;
    setTimeout(function(){
        setInterval(function () {
            for (i = 0; i < arr_horiz; i++) {
                for (j = 0; j < arr_vert; j++) {
                    array_col[j][i].style.left = a[i]+'px';
                    array_col[j][i].style.top = b[j]+'px';
                    array_col[j][i].style.opacity = 1;
                    array_col[j][i].style.width = width/arr_horiz+'px';
                    array_col[j][i].style.height = height/arr_vert+'px';
                    array_col[j][i].style.backgroundSize = (100*arr_horiz)+'% '+(100*arr_vert)+'%';
                }
            }
            f();
            p = p+1;
            if (p == 100) {
                func = Math.floor(Math.random()*7);
                if (func == 0) {
                    f = rotateHorizLines;
                } else if (func == 1) {
                    f = rotateVertLines;
                } else if (func == 2){
                    f = rotateOpacity;
                } else if (func == 3){
                    f = rotateDiagLines;
                } else if (func == 4){
                    f = rotateSize;
                } else if (func == 5){
                    f = rotateNoSameBottomSize;
                } else if (func == 6){
                    f = rotateNoSameTopSize;
                }
                p = 0;
                if (current < inner.childNodes.length-1) {
                    current = current+1;
                }
                else {
                    current = 0;
                }
                for (i = 0; i < arr_horiz; i++) {
                    for (j = 0; j < arr_vert; j++) {
                        array_col[j][i].style.backgroundImage = 'url('+src_list[current]+')';
                        array_col[j][i].style.opacity = 1;
                    }
                }
                setTimeout(function(){
                    for (i = 0; i < inner.childNodes.length; i++) {
                        img_list[i].style.opacity = 0;
                        alt_list[i].style.opacity = 0;
                    }
                    if (current < inner.childNodes.length-1) {
                        img_list[current+1].style.opacity = 1;
                        alt_list[current+1].style.opacity = 1;
                    }
                    else {
                        img_list[0].style.opacity = 1;
                        alt_list[0].style.opacity = 1;
                    }
                },100);
                opacity = 1;
            }
        }, 50);
    },5000);
    function rotateOpacity() {
        if (opacity > 0) {
            opacity = opacity-p*0.01;
        }
        else {
            opacity = 0;
        }
        for (i = 0; i < arr_horiz; i++) {
            for (j = 0; j < arr_vert; j++) {
                if (j == 3 || j == 1) {
                    array_col[j][i].style.opacity = opacity-0.3;
                }
                else if (i == 2 || i == 4 || i == 6 || i == 8) {
                    array_col[j][i].style.opacity = opacity-0.3;
                } else {
                    array_col[j][i].style.opacity = opacity;
                }
            }
        }
    }
    function rotateHorizLines() {
        for (i = 0; i < arr_horiz; i++) {
            for (j = 0; j < arr_vert; j++) {
                if(array_col[j][i].offsetLeft > -array_col[j][i].offsetWidth){
                    if (j == 3 || j == 1) {
                        array_col[j][i].style.left = (array_col[j][i].offsetLeft-p*20)+'px';
                    }
                    else {
                        array_col[j][i].style.left = (array_col[j][i].offsetLeft-p*15)+'px';
                    }
                    if (i == 9 || i == 7 || i == 5) {
                        array_col[j][i].style.left = (array_col[j][i].offsetLeft+10)+'px';
                    } else {
                        array_col[j][i].style.left = (array_col[j][i].offsetLeft-10)+'px';
                    }
                }
            }

        }
    }
    function rotateVertLines() {
        for (i = 0; i < arr_horiz; i++) {
            for (j = 0; j < arr_vert; j++) {
                if(array_col[j][i].offsetTop > -array_col[j][i].offsetHeight){
                    if (i == 0 ||i == 2 || i == 4 || i == 6 || i == 8) {
                        array_col[j][i].style.top = (array_col[j][i].offsetTop-p*15)+'px';
                    }
                    else {
                        array_col[j][i].style.top = (array_col[j][i].offsetTop-p*20)+'px';
                    }
                }
                if (j == 0 || j == 2 || j == 4) {
                    array_col[j][i].style.top = (array_col[j][i].offsetTop+10)+'px';
                }
                else {
                    array_col[j][i].style.top = (array_col[j][i].offsetTop-10)+'px';
                }
            }

        }

    }
    function rotateDiagLines() {
        for (i = 0; i < arr_horiz; i++) {
            for (j = 0; j < arr_vert; j++) {
                if(array_col[j][i].offsetTop > -array_col[j][i].offsetHeight){
                    if (j == 4 && i == 2 || j == 4 && i == 6 || j == 2 && i == 0) {
                        array_col[j][i].style.top = (array_col[j][i].offsetTop+p*10)+'px';
                        array_col[j][i].style.left = (array_col[j][i].offsetLeft+p*10)+'px';
                    } else if (j == 2 && i == 0 || j == 5 && i == 4 || j == 5 && i == 3) {
                        array_col[j][i].style.top = (array_col[j][i].offsetTop+p*12)+'px';
                        array_col[j][i].style.left = (array_col[j][i].offsetLeft+p*12)+'px';
                    } else if (j == 1 && i == 3 || j == 1 && i == 1 || j == 0 && i == 5) {
                        array_col[j][i].style.top = (array_col[j][i].offsetTop+p*15)+'px';
                        array_col[j][i].style.left = (array_col[j][i].offsetLeft+p*15)+'px';
                    } else if (j == 0 && i == 2 || j == 3 && i == 2 || j == 0 && i == 6) {
                        array_col[j][i].style.top = (array_col[j][i].offsetTop+p*17)+'px';
                        array_col[j][i].style.left = (array_col[j][i].offsetLeft+p*17)+'px';
                    } else if (j == 0 && i == 0 || j == 4 && i == 3 || j == 2 && i == 3) {
                        array_col[j][i].style.top = (array_col[j][i].offsetTop+p*18)+'px';
                        array_col[j][i].style.left = (array_col[j][i].offsetLeft+p*18)+'px';
                    }
                    else {
                        array_col[j][i].style.top = (array_col[j][i].offsetTop+p*19)+'px';
                        array_col[j][i].style.left = (array_col[j][i].offsetLeft+p*19)+'px';
                    }
                }
            }

        }

    }
    function rotateSize() {
        for (i = 0; i < arr_horiz; i++) {
            for (j = 0; j < arr_vert; j++) {
                if (p < 60) {
                    array_col[j][i].style.width = (array_col[j][i].offsetWidth-p*((width*arr_vert)/(height*arr_horiz)))+'px';
                    array_col[j][i].style.height = (array_col[j][i].offsetHeight-p)+'px';
                    array_col[j][i].style.backgroundSize = ((100*width)/array_col[j][i].offsetWidth)+'% '+((100*height)/array_col[j][i].offsetHeight)+'%';
                }
                else {
                    array_col[j][i].style.left = (-width)+'px';
                    array_col[j][i].style.top = (-height)+'px';
                }

            }
        }
    }
    function rotateNoSameBottomSize() {
        for (i = 0; i < arr_horiz; i++) {
            for (j = 0; j < arr_vert; j++) {
                if (p < 60 && i <= (arr_horiz-p) && j <= (arr_vert-p)) {
                    array_col[j][i].style.width = (array_col[j][i].offsetWidth-p*((width*arr_vert)/(height*arr_horiz)))+'px';
                    array_col[j][i].style.height = (array_col[j][i].offsetHeight-p)+'px';
                    array_col[j][i].style.backgroundSize = ((100*width)/array_col[j][i].offsetWidth)+'% '+((100*height)/array_col[j][i].offsetHeight)+'%';
                }
                else {
                    array_col[j][i].style.left = (-width)+'px';
                    array_col[j][i].style.top = (-height)+'px';
                }

            }
        }
    }
    function rotateNoSameTopSize() {
        for (i = 0; i < arr_horiz; i++) {
            for (j = 0; j < arr_vert; j++) {
                if (p < 60 && i <= p+2 && j <= p) {
                    array_col[j][i].style.width = (array_col[j][i].offsetWidth-p*((width*arr_vert)/(height*arr_horiz)))+'px';
                    array_col[j][i].style.height = (array_col[j][i].offsetHeight-p)+'px';
                    array_col[j][i].style.backgroundSize = ((100*width)/array_col[j][i].offsetWidth)+'% '+((100*height)/array_col[j][i].offsetHeight)+'%';
                    //document.getElementById('rez').innerHTML = p;
                }
                else {
                    array_col[j][i].style.left = (-width)+'px';
                    array_col[j][i].style.top = (-height)+'px';
                }

            }
        }
    }
}