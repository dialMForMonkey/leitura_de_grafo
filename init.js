const data = {
    listas : [
    {
        "nivel_1":[
            {
                "nivel_2":[
                    {
                        "nivel_3":[{
                            "nivel_4": [
                                "nivel_5"
                            ]
                        }]
                    },
                    {
                        "nivel_3": [
                            {
                            "nivel_4": [
                                "nivel_5",
                                "nivel_5"
                                ]
                            }
                        ]
                    }, "nivel_3_l"
                ]
            }
        ]
    },
    {
        "nivel_1_b": [
            {
                "nivel_2_b": [
                    {
                        "nivel_3_b": [{
                            "nivel_4_b": [
                                "nivel_5_b"
                            ]
                        }]
                    }
                ]
            }
        ]
    }
        
],
    children: function () {
        
        return "";
    }
};

function temSubNivel(list) {

    return list && Array.isArray(list)
}

function ler(list, hashList, nivel=0) {

    let current = list[0];
    let name = current;
    
    if (typeof current === 'object'){
        
        name = Object.keys(current)[0];
        let subNivel = current[name]; 
        hashList[name] = lerSubNiveis([].concat(subNivel), nivel + 1);

        if (temSubNivel(subNivel))
            ler(subNivel, hashList, nivel + 1)

    } else if( typeof current === 'string') {
        hashList[current] = '';
    } 
   

    list.shift();
    
    if (list.length)
        return ler(list, hashList, nivel);
    else 
        return hashList;
    
}




function lerSubNiveis(list, nivel, novaList =[] ) {
   
    let current =  list.shift();
    debugger
    if(current) {
        let name = current;
        if (typeof current === 'object')
            name = Object.keys(current)[0];
            
        novaList.push(name);
        
        return lerSubNiveis(list, nivel, novaList);
    } else {
        
        return novaList;
    }
}


let a = ler(data.listas, {});

console.log(a);
