({
	doSearch : function(component, event, helper) {
		var params = event.getParam("arguments");
        console.log(helper,params);
        window.setTimeout(
            $A.getCallback(function(){
                if(component.isValid()){
                   component.set('v.searchResults',[{'a':'b','c':'d'},{'a':'b5','c':'d5'},{'a':'b4','c':'d3'},{'a':'b2','c':'d2'},{'a':'b1','c':'d1'}]) ;
                }
            }),5000
        );        
        helper[params.name].apply(helper, params.arguments);
	}
})