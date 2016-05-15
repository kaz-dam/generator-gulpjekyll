module.exports["secondTest"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "			<li>"
    + this.escapeExpression(((helper = (helper = helpers.item || (depth0 != null ? depth0.item : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"item","hash":{},"data":data}) : helper)))
    + "</li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"wrapper\">\r\n	<ul class=\"items\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.itemObj : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</ul>\r\n</div>";
},"useData":true});
module.exports["test"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "	<img src=\""
    + alias3(((helper = (helper = helpers.filePath || (depth0 != null ? depth0.filePath : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"filePath","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias3(((helper = (helper = helpers.fileName || (depth0 != null ? depth0.fileName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fileName","hash":{},"data":data}) : helper)))
    + "\">\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"stuff\">"
    + this.escapeExpression(((helper = (helper = helpers.someContent || (depth0 != null ? depth0.someContent : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"someContent","hash":{},"data":data}) : helper)))
    + "</div>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.obj : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});