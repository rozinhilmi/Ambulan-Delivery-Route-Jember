
const djikstra = (map,start,finish)=> {
  let v = {
    "y" : "",
    "list_variable" : []
  };
  
  let result = [];
  let l = [];
  for (let variable of map) {
    if(variable.id === start){
      v.y = {
        "variable_name" : variable.id,
        "value" : 0,
        "route" : [variable.id],
        "neighbor_node": variable.neighbor_node,
      }
      l.push(
        variable.id
      )
    }
    else{
      v.list_variable.push(
        {
          "variable_name" : variable.id,
          "value" : 91919191919,
          "route" : [],
          "neighbor_node": variable.neighbor_node,
        }
      )
    }
  }
  while(!l.includes(finish)) {
    for (let variable of v.list_variable) {
      if( !l.includes(variable.variable_name) && !v.y.route.includes(variable.variable_name)){
        let w = 91919191919;
        for(let city of v.y.neighbor_node){
          if(city.node_name == variable.variable_name ){
            w = city.distance;
            break;
          }
        }
        if( variable.value == 91919191919 && w == 91919191919){
          
        }
        else if(variable.value >=  ( v.y.value +  w)){
          variable.value = ( parseFloat(v.y.value) +  parseFloat(w))
          variable.route = []
          for (let node of v.y.route) {
            variable.route.push(node)
          }
          variable.route.push(variable.variable_name)
          if(variable.route[variable.route.length -1 ]  == finish){
            let route = "";
            let route_position = "";
            for (let node of variable.route) {
              for (let i of map) {
                if(node === i.id){
                  route_position += i.position+"/"
                  break
                }
              }
              route += node+"-";

            }
            result.push({
              "route" : route.slice(0,-1),
              "distance" : variable.value,
              "route_position" : route_position.slice(0,-1)
            });
          
          }
        }
      }
    }
    v.list_variable = bubbleSort(v.list_variable)

    v.y = v.list_variable[0]
    l.push(v.list_variable[0].variable_name)
    v.list_variable.shift()
  }

  result = result.reverse()
  return result[0];

  
}
const bubbleSort = (arr)=> {
 
 var i, j;
 var len = arr.length;
  
 var isSwapped = false;
  
 for(let i =0; i < len; i++){
    
   isSwapped = false;
    
   for(let j = 0; j < len; j++){
     try {
       if(arr[j].value > arr[j + 1].value){
         var temp = arr[j]
         arr[j] = arr[j+1];
         arr[j+1] = temp;
         isSwapped = true;
       }
     } catch (error) {
     }
   }
   if(!isSwapped){
     break;
   }
 }
 return (arr)
}

export default djikstra