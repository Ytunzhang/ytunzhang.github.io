//返回顶部插件
$('.to-top').toTop();
//禁止页面互动插件
document.oncontextmenu = function(event) { 
 
    if (window.event) { 
 
        event = window.event; 
 
    } 
 
    try { 
 
        var the = event.srcElement; 
 
        if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) { 
 
            return false; 
 
        } 
 
        return true; 
 
    } catch (e) { 
 
        return false; 
 
    } 
 
} 
 
   
 
//屏蔽粘贴 
document.onpaste = function(event) { 
    if (window.event) { 
 
        event = window.event; 
 
    } 
 
    try { 
 
        var the = event.srcElement; 
 
        if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) { 
 
            return false; 
 
        } 
 
        return true; 
 
    } catch (e) { 
 
        return false; 
 
    } 
 
} 
 
   
 
//屏蔽复制 
 
document.oncopy = function(event) { 
 
    if (window.event) { 
 
        event = window.event; 
 
    } 
 
    try { 
 
        var the = event.srcElement; 
 
        if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) { 
 
            return false; 
 
        } 
 
        return true; 
 
    } catch (e) { 
 
        return false; 
 
    } 
 
} 
 
   
 
//屏蔽剪切 
 
document.oncut = function(event) { 
 
    if (window.event) { 
        event = window.event; 
 
    } 
 
    try { 
 
        var the = event.srcElement; 
 
        if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) { 
 
            return false; 
 
        } 
 
        return true; 
 
    } catch (e) { 
 
        return false; 
 
    } 
 
} //屏蔽选中 
 
document.onselectstart = function(event) { 
 
    if (window.event) { 
 
        event = window.event; 
 
    } 
 
    try { 
 
        var the = event.srcElement; 
 
        if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) { 
 
            return false; 
 
        } 
 
        return true; 
 
    } catch (e) { 
 
        return false; 
 
    } 
 
}