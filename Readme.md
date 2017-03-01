# Lightning Components - what I have learned. #
=
The inheritence of components and the usage of interfaces is usually not explained at a greater detail 
when it comes to the majority of the samples we find as the google results are focussed on giving a basic idea.
may be I am searching wrong. So am summarizing it here, please feel free to comment or clarify

understand usage of {!v.body}
=

cmp1.cmp
```html
<aura:component>    
    {!v.body} 
</aura:component>
```

cmp2.cmp
```html
<aura:component>
    This is the dummy text inside component2
</aura:component>
```

TestApp.app
```html
<aura:application>
    <c:cmp1>
        <c:cmp2 />
    </c:cmp1>    
</aura:application>
```

> To see the definition of cmp2 , the cmp1 definiton should have a line at the end 
{!v.body}


understanding aura:method
=

```html
<aura:component>
    <aura:method action="{!c.controllerMethod}" name="doControllerMethod">
        <aura:attribute name="name" type="String" />
        <aura:attribute name="arguments" type="Object[]" />
    </aura:method>
</aura:component>
```

This is a publicly accessible method as part of the component.
at any point am able to get the component definition , I will be able to access the controller method directly.


extensible="true" abstract="true"
=

baseSearchComponent.cmp
```html
<aura:component extensible="true" abstract="true">
    <aura:attribute type="String" name="searchString" access="public" />
    <aura:attribute type="Object[]" name="searchResults" access="public" />
    <aura:method name="doSearch" action="{!c.doSearch}" access="public">
        <aura:attribute name="name" type="String" />
        <aura:attribute name="arguments" type="Object[]" />
    </aura:method>
    {!v.body}
</aura:component>
```

>This is the place we should expand our understanding of the "helper" inside lightning components.

baseSearchComponentController.js
```javascript
({
    doSearch : function(component, event, helper) {
		var params = event.getParam("arguments");
        //instead of getting results ,am populating some dummy after 5 seconds.
        window.setTimeout(
            $A.getCallback(function(){
                if(component.isValid()){
                   component.set('v.searchResults',[{'a':'b','c':'d'},{'a':'b5','c':'d5'},{'a':'b4','c':'d3'},{'a':'b2','c':'d2'},{'a':'b1','c':'d1'}]) ;
                }
            }),5000
        ); 
        /*
        we need a detailed understanding of apply 
        function of javascript
        apply is available 
        */

        helper[params.name].apply(helper, params.arguments);
	}
})
```

baseSearchComponentHelper.js
```javascript
({
    test:function(){
        //since the component is abstract, 
        //I can define my helper methods in one of the extended ones.
    }
})
```

advSearchComponent.cmp
```html
<aura:component extends="" extensible="true">
    
</aura:component>
```





