(function(){

    if(!'draggable' in document.createElement('span')) return;
    
    var puzzle = document.querySelectorAll('.puz');
    var dropArea = document.querySelector('.dropArea');
    var status = document.querySelector('.status');
    var counter  = 1;
    
    var dropAreaLeft = dropArea.getBoundingClientRect().left;
    var dropAreaTop = dropArea.getBoundingClientRect().top;
    
    console.log(Math.round(dropArea.getBoundingClientRect().left));
    console.log(dropArea.getBoundingClientRect().top);
    
    
    [].forEach.call(puzzle, function(puzz, index){
        
        puzz.style.left = Math.floor((Math.random() * 100) + 1) + 'px';
        puzz.style.top = Math.floor((Math.random() * 600) + 1) + 'px';
        
        puzz.onmousedown = function(e) {
            
            var shiftX = e.clientX - puzz.getBoundingClientRect().left;
            var shiftY = e.clientY - puzz.getBoundingClientRect().top;
            var posArrayLeft = [100, 300, 500,100 ,300 , 500, 100, 300, 500, 100, 300, 500];
            var posArrayTop = [100, 100, 100, 300, 300, 300, 500, 500, 500, 700, 700, 700];            
            
            var oriArrayLeft = [0, 200, 400, 0, 200, 400, 0, 200, 400, 0, 200, 400,];
            var oriArrayTop = [0, 0, 0, 200, 200, 200, 400, 400, 400, 600, 600, 600];
            
            function movePuzzle(target, pageX, pageY) {

                target.style.left = pageX - shiftX + 'px';
                target.style.top = pageY - shiftY + 'px';
                
            }
            
            function onmovePuzzle(e) {
                
                movePuzzle(e.target, e.pageX, e.pageY);
                
            }
            
            puzz.style.position = 'absolute';
            puzz.style.zIndex = 1000;
            document.body.append(puzz);
            
            movePuzzle(e.target, e.pageX, e.pageY);
        
            puzz.onmousemove = function(e) {
                
                movePuzzle(e.target, e.pageX, e.pageY);
                
//                console.log(e.pageX);
                console.log(dropAreaLeft + posArrayLeft[index]);
//                console.log(dropAreaLeft + posArrayLeft[index]);
//                console.log(Math.abs(e.pageX - (dropAreaLeft + posArrayLeft[index])));
                
                if(Math.abs(e.pageX - (dropAreaLeft + posArrayLeft[index])) < 20 && (e.pageY - (dropAreaTop + posArrayTop[index])) < 20) {
                    
                    puzz.onmousemove = null;
                    puzz.onmouseup = null;
//                    document.removeEventListener('mousemove', onmovePuzzle);
                    console.log('tak');
                    puzz.style.left = (dropAreaLeft + oriArrayLeft[index]) + 'px';
                    puzz.style.top = (dropAreaTop+ oriArrayTop[index]) + 'px';
                }
                
                
            };

//            puzz.addEventListener('mosemove', function(e) {
//                movePuzzle(e.target, e.pageX, e.pageY);
//            });

            puzz.onmouseup = function() {
                puzz.onmousemove = null;
                document.removeEventListener('mousemove', onmovePuzzle);
                puzz.onmouseup = null;
            };

            puzz.ondragstart = function() {
                return false;
            };
            
        };

        
        
    });
    
    
    
    
    
    
    
//    function setStatus(msg) {
//        status.innerHTML = msg;
//    }
//    
//    mario.ondragstart = function(e) {
//        setStatus('Rozpoczeto przeciąganie');
//        
//        e.dataTransfer.effectAllowed = 'copy';
//        e.dataTransfer.setData('text/html', this.outerHTML);
//        e.dataTransfer.setData('text/plain', 'Cześc jestem Mario!');
//        e.dataTransfer.setData('text/custom', 'A Ty?');
//    };
//    
//    
//    mario.ondragend = function(e) {
//        
//        if(e.dataTransfer.dropEffect == 'copy') {
//            mario.parentNode.removeChild(mario);
//            
//            setStatus('Przenoszenie zakończono sukcesem');
//        }
//    };
//    
//    mario.ondrag = function(e) {
////        setStatus(counter++);
//    };
//    
//    dropArea.ondragenter = function(e) {
//        setStatus('Obiekt w obszarze zrzutu');
//    };
//    
//    dropArea.ondragleave= function(e) {
//        setStatus('Obiekt opuścił obszar zrzutu');
//    };
//    
//    dropArea.ondragover = function(e) {
//        
////        setStatus(counter++);
//        e.preventDefault();
//        return false;
//        
//    };
//    
//    dropArea.ondrop = function(e) {
//        e.preventDefault();
//        
//        if(e.dataTransfer.effectAllowed != 'copy') return;
//        
//        setStatus('Element upuszczono poprawnie');
//        
//        var data = e.dataTransfer.getData('text/html');
//        dropArea.innerHTML += data;
//        
////        var data = e.dataTransfer.getData('text/plain') + ' ' + e.dataTransfer.getData('text/custom');
////        
////        setStatus(data);
//    };
    
})();
