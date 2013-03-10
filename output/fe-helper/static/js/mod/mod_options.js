var baidu=function(){this.version="1.3.5"};baidu.namespace=new Object();baidu.namespace.register=function(fullNS){var reg=/^[_$a-z]+[_$a-z0-9]*/i;var nsArray=fullNS.split(".");var sEval="";var sNS="";for(var i=0;i<nsArray.length;i++){if(!reg.test(nsArray[i])){throw new Error("Invalid namespace:"+nsArray[i]+"");return}if(i!=0){sNS+="."}sNS+=nsArray[i];sEval+="if (typeof("+sNS+") == 'undefined') "+sNS+" = new Object();"}if(sEval!=""){eval(sEval)}};String.prototype.trim=function(){return this.replace(/^\s*|\s*$/g,"")};String.prototype.format=function(){var b=arguments.length,a=this;while(b--){a=a.replace(new RegExp("\\{"+b+"\\}","g"),arguments[b])}return a};Date.prototype.format=function(e){var a=function(m,l){var n="",k=(m<0),j=String(Math.abs(m));if(j.length<l){n=(new Array(l-j.length+1)).join("0")}return(k?"-":"")+n+j};if("string"!=typeof e){return this.toString()}var b=function(k,j){e=e.replace(k,j)};var f=this.getFullYear(),d=this.getMonth()+1,i=this.getDate(),g=this.getHours(),c=this.getMinutes(),h=this.getSeconds();b(/yyyy/g,a(f,4));b(/yy/g,a(parseInt(f.toString().slice(2),10),2));b(/MM/g,a(d,2));b(/M/g,d);b(/dd/g,a(i,2));b(/d/g,i);b(/HH/g,a(g,2));b(/H/g,g);b(/hh/g,a(g%12,2));b(/h/g,g%12);b(/mm/g,a(c,2));b(/m/g,c);b(/ss/g,a(h,2));b(/s/g,h);return e};String.prototype.getBytes=function(){var b=this.replace(/\n/g,"xx").replace(/\t/g,"x");var a=encodeURIComponent(b);return a.replace(/%[A-Z0-9][A-Z0-9]/g,"x").length};var getOuterHtmlEllipsis=function(d){var b=/(<[^>]+>)/g;var a=b.exec(d.outerHTML);var c=a?a[1]:d.outerHTML;c=c.length>40?c.substr(0,40)+"...":c;return c.replace(/</g,"&lt;").replace(/>/g,"&gt;")};var getOuterAndInnerHtmlEllipsis=function(b){var a=jQuery("<div></div>").append(b).html()};(function(){baidu.i18n={};baidu.i18n.getMessage=function(d,b){if(b){for(var c=0,a=b.length;c<a;c++){b[c]=""+b[c]}return chrome.i18n.getMessage(d,b)}else{return chrome.i18n.getMessage(d)}}})();baidu.namespace.register("baidu.log");baidu.log=(function(){var a=function(b,e){var d=109,f=2009,g="http://nsclick.baidu.com/v.gif?pid="+d+"&url="+encodeURIComponent(e)+"&type="+f+"&m="+b+"&_t="+Math.random();var i="imglog__"+(new Date()).getTime(),h=window[i]=new Image();h.onload=(h.onerror=function(){window[i]=null});h.src=g;h=null};return{track:a}})();const MSG_TYPE={BROWSER_CLICKED:"browser-clicked",GET_CSS:"get-css",GET_JS:"get-js",GET_HTML:"get-html",GET_COOKIE:"get-cookie",REMOVE_COOKIE:"remove-cookie",SET_COOKIE:"set-cookie",GET_OPTIONS:"get_options",SET_OPTIONS:"set_options",CSS_READY:"css-ready",JS_READY:"js-ready",HTML_READY:"html-ready",START_OPTION:"start-option",OPT_START_FCP:"opt-item-fcp",OPT_START_GRID:"opt-item-grid",CALC_PAGE_LOAD_TIME:"calc-page-load-time",SHOW_PAGE_LOAD_TIME:"show-page-load-time",FCP_HELPER_DETECT:"fcp-helper-detect",GRID_DETECT:"grid-detect",FDP_HELPER:"fdp-helper",EN_DECODE:"en-decode",JSON_FORMAT:"json_format",QR_CODE:"qr_code",GET_PAGE_WPO_INFO:"get_page_wpo_info"};const FILE={STYLE:"style",LINK:"link",SCRIPT:"script-block"};const PUBLIC_ID_WHITE_LIST={"":{systemIds:{"":true}},"-//W3C//DTD HTML 3.2 Final//EN":{systemIds:{"":true}},"-//W3C//DTD HTML 4.0//EN":{systemIds:{"":true,"http://www.w3.org/TR/html4/strict.dtd":true}},"-//W3C//DTD HTML 4.01//EN":{systemIds:{"":true,"http://www.w3.org/TR/html4/strict.dtd":true}},"-//W3C//DTD HTML 4.0 Transitional//EN":{systemIds:{"":true,"http://www.w3.org/TR/html4/loose.dtd":true}},"-//W3C//DTD HTML 4.01 Transitional//EN":{systemIds:{"":true,"http://www.w3.org/TR/html4/loose.dtd":true,"http://www.w3.org/TR/1999/REC-html401-19991224/loose.dtd":true}},"-//W3C//DTD XHTML 1.1//EN":{systemIds:{"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd":true}},"-//W3C//DTD XHTML Basic 1.0//EN":{systemIds:{"http://www.w3.org/TR/xhtml-basic/xhtml-basic10.dtd":true}},"-//W3C//DTD XHTML 1.0 Strict//EN":{systemIds:{"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd":true}},"-//W3C//DTD XHTML 1.0 Transitional//EN":{systemIds:{"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd":true}},"ISO/IEC 15445:1999//DTD HyperText Markup Language//EN":{systemIds:{"":true}},"ISO/IEC 15445:2000//DTD HTML//EN":{systemIds:{"":true}},"ISO/IEC 15445:1999//DTD HTML//EN":{systemIds:{"":true}}};const COMPAT_MODE_DIFF_PUBLIC_ID_MAP={"-//W3C//DTD HTML 4.0 Transitional//EN":{systemIds:{"http://www.w3.org/TR/html4/loose.dtd":{IE:"S",WebKit:"Q"}}},"ISO/IEC 15445:2000//DTD HTML//EN":{systemIds:{"":{IE:"Q",WebKit:"S"}}},"ISO/IEC 15445:1999//DTD HTML//EN":{systemIds:{"":{IE:"Q",WebKit:"S"}}}};const HTML_DEPRECATED_TAGS={acronym:"定义首字母缩写",applet:"定义Java Applet",basefont:"定义Font定义",big:"定义大号文本",center:"定义居中的文本",dir:"定义目录列表",font:"定义文字相关",frame:"定义框架",frameset:"定义框架集",isindex:"定义单行的输入域",noframes:"定义noframe 部分",s:"定义加删除线的文本",strike:"定义加删除线的文本",tt:"定义打字机文本",u:"定义下划线文本",xmp:"定义预格式文本",layer:"定义层"};const HTML_DEPRECATED_ATTRIBUTES={align:{iframe:true,img:true,object:true,table:true},color:{font:true},height:{td:true,th:true},language:{script:true},noshade:{hr:true},nowrap:{td:true,th:true},size:{hr:true,font:true,basefont:true}};const BLOCK_HTML_ELEMENT=["address","blockquote","center","dir","div","dl","fieldset","form","h1","h2","h3","h4","h5","h6","hr","isindex","menu","noframes","noscript","ol","p","pre","table","ul"];const INLINE_HTML_ELEMENT=["a","acronym","b","bdo","big","br","cite","code","dfn","em","font","i","img","input","kbd","label","q","s","samp","select","small","span","strike","strong","sub","sup","textarea","tt","u","var"];const CHANGE_ABLE_HTML_ELEMENT=["applet","button","del","iframe","ins","map","object","script"];const CONDITIONAL_COMMENT_REGEXP=/\[\s*if\s+[^\]][\s\w]*\]/i;const NOT_IE_REVEALED_OPENING_CONDITIONAL_COMMENT_REGEXP=/^\[if\s+(!IE|false)\]$/i;const REVEALED_CLOSING_CONDITIONAL_COMMENT_REGEXP=/^\[endif\s*\]$/i;const NOT_IE_HIDDEN_CONDITIONAL_COMMENT_REGEXP=/^\[if\s+(!IE|false)\]>.*<!\[endif\]$/i;const REG={SCRIPT:/<script[^>]*>[\s\S]*?<\/[^>]*script>/gi,COMMENT:/<!--[\s\S]*?--\>/g,CSS_EXPRESSION:/expression[\s\r\n ]?\(/gi,TEXTAREA:/<textarea[^>]*>[\s\S]*?<\/[^>]*textarea>/gi,INVALID_TAG:/<\W+>/gi};const SELF_CLOSING_TAGS=["meta","link","area","base","col","input","img","br","hr","param","embed"];const HTML_DOM_MAX_DEPTH=30;const LOG={options_page_opened:"m_20111124_options_page_opened",options_page_btnsave:"m_20111124_options_page_btnsave",options_page_btnclose:"m_20111124_options_page_btnclose",popup_page_show:"m_20111124_popup_page_show",popup_page_fcp:"m_20111124_popup_page_fcp",popup_page_grid:"m_20111124_popup_page_grid",popup_page_fdp:"m_20111124_popup_page_fdp",popup_page_endecode:"m_20111124_popup_page_endecode",popup_page_loadtime:"m_20111124_popup_page_loadtime",endecode_page_opened:"m_20111124_endecode_page_opened",endecode_page_uniEncode:"m_20111124_endecode_page_uniEncode",endecode_page_uniDecode:"m_20111124_endecode_page_uniDecode",endecode_page_utf8Encode:"m_20111124_endecode_page_utf8Encode",endecode_page_utf8Decode:"m_20111124_endecode_page_utf8Decode",endecode_page_base64Encode:"m_20111124_endecode_page_base64Encode",endecode_page_base64Decode:"m_20111124_endecode_page_base64Decode",endecode_page_btnchange:"m_20111124_endecode_page_btnchange",endecode_page_btnclear:"m_20111124_endecode_page_btnclear",fdp_page_opened:"m_20111124_fdp_page_opened",fdp_page_spacedoc:"m_20111124_fdp_page_spacedoc",fdp_page_fedoc:"m_20111124_fdp_page_fedoc",fdp_page_btnsearch:"m_20111124_fdp_page_btnsearch",fcp_detect_show:"m_20111124_fcp_detect_show",fcp_detect_close:"m_20111124_fcp_detect_close",fcp_detect_min:"m_20111124_fcp_detect_min",fcp_detect_max:"m_20111124_fcp_detect_max",fcp_detect_morehtml:"m_20111124_fcp_detect_morehtml",fcp_detect_morecss:"m_20111124_fcp_detect_morecss",fcp_detect_morejs:"m_20111124_fcp_detect_morejs",grid_detect_show:"m_20111124_grid_detect_show",grid_detect_esc:"m_20111124_grid_detect_esc",grid_detect_btnclose:"m_20111124_grid_detect_btnclose",fehelper_user_count:"m_20111124_fehelper_user_count"};baidu.feOption=(function(){var d=function(o){for(var p in o){window.localStorage.setItem(p,o[p])}};var f=function(p){var r={};for(var q=0,o=p.length;q<o;q++){r[p[q]]=window.localStorage.getItem(p[q])}return r};var l=function(o,p){chrome.extension.sendMessage({type:MSG_TYPE.GET_OPTIONS,items:o},p)};var j=function(o){chrome.extension.sendMessage({type:MSG_TYPE.SET_OPTIONS,items:o})};var a=function(o,p){if(p&&typeof p=="function"){p.call(null,f(o))}};var n=function(o){d(o)};var b=function(o){return f([o])[o]};var c=function(){var o={};o.opt_item_contextMenus=$("#opt_item_contextMenus").attr("checked");o.opt_item_showfdpmenu=$("#opt_item_showfdpmenu").attr("checked");o.opt_item_notification=$("#opt_item_notification").val();j(o)};var k=function(){var o=["opt_item_contextMenus","opt_item_showfdpmenu","opt_item_notification"];l(o,function(p){$.each(o,function(q,r){if(q==2){$("#"+r).val(p[r])}else{if(p[r]==="true"){$("#"+r).attr("checked","checked")}}})})};var e=function(o){switch(o){case"opt_form_start":c();break;case"":break}};var i=function(){chrome.tabs.getSelected(null,function(o){chrome.tabs.remove(o.id)})};var h=function(){$("#fe-opt-list-item>li").click(function(p){var o=$(this).siblings().removeClass("selected").end().addClass("selected");$(o.attr("data-content")).siblings().removeClass("selected").addClass("fe-hide").end().removeClass("fe-hide").addClass("selected")});$(".right form").submit(function(o){e($(this).attr("id"));i();o.preventDefault();o.stopPropagation()});$("#btn_close").click(function(){baidu.log.track(LOG.options_page_btnclose);i()});$("#btn_save").click(function(){baidu.log.track(LOG.options_page_btnsave);$(".right div.selected form").submit()})};var m=function(){k()};var g=function(){baidu.log.track(LOG.options_page_opened);h();m()};return{init:g,doSetOptions:n,doGetOptions:a,getOptionItem:b}})();var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-32516930-1"]);_gaq.push(["_trackPageview"]);(function(){var b=document.createElement("script");b.type="text/javascript";b.async=true;b.src="https://ssl.google-analytics.com/ga.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(b,a)})();jQuery(function(){baidu.feOption.init()});