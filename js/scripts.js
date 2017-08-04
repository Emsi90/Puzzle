(function(){
    
    var puzzle = document.querySelectorAll('.puz');
    var dropArea = document.querySelector('.dropArea');
    
    var dropAreaLeft = dropArea.getBoundingClientRect().left;
    var dropAreaTop = dropArea.getBoundingClientRect().top;
    
    [].forEach.call(puzzle, function(puzz, index){
        
        puzz.style.left = Math.floor((Math.random() * 100) + 1) + 'px';
        puzz.style.top = Math.floor((Math.random() * 600) + 1) + 'px';
        
        puzz.onmousedown = function(e) {
            
//            var shiftX = e.clientX - puzz.getBoundingClientRect().left;
//            var shiftY = e.clientY - puzz.getBoundingClientRect().top;
            
            var posArrayLeft = [100, 300, 500, 100 ,300 , 500, 100, 300, 500, 100, 300, 500];
            var posArrayTop = [100, 100, 100, 300, 300, 300, 500, 500, 500, 700, 700, 700];            
            
            var oriArrayLeft = [0, 200, 400, 0, 200, 400, 0, 200, 400, 0, 200, 400,];
            var oriArrayTop = [0, 0, 0, 200, 200, 200, 400, 400, 400, 600, 600, 600];
            
            function movePuzzle(target, pageX, pageY) {

//                target.style.left = pageX - shiftX + 'px';
//                target.style.top = pageY - shiftY + 'px';
                
                target.style.left = pageX - puzz.offsetWidth / 2+ 'px';
                target.style.top = pageY - puzz.offsetWidth / 2 + 'px';
                
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

                if((Math.abs(e.pageX - (dropAreaLeft + posArrayLeft[index]))) < 25 && (Math.abs(e.pageY - (dropAreaTop + posArrayTop[index]))) < 25) {

                    puzz.onmousemove = null;
                    puzz.onmouseup = null;

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

})();

