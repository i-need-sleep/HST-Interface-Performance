(function(t){function e(e){for(var n,o,l=e[0],a=e[1],s=e[2],_=0,u=[];_<l.length;_++)o=l[_],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&u.push(i[o][0]),i[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);d&&d(e);while(u.length)u.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,l=1;l<r.length;l++){var a=r[l];0!==i[a]&&(n=!1)}n&&(c.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},i={app:0},c=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var d=a;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},1:function(t,e){},2:function(t,e){},"2d13":function(t,e,r){},3:function(t,e){},3653:function(t,e,r){},4:function(t,e){},"4ae5":function(t,e,r){"use strict";r("e5ac")},5:function(t,e){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),i={class:"navbar navbar-expand-sm bg-light"},c={class:"collapse navbar-collapse",id:"navbarNav"},o={class:"navbar-nav mr-auto"},l={class:"nav-item"},a=Object(n["f"])("br",null,null,-1),s={class:"navbar-nav"},d={class:"nav-item"},_={class:"btn",disabled:""},u=Object(n["f"])("br",null,null,-1),h=Object(n["f"])("li",{class:"nav-item"},[Object(n["f"])("a",{tabindex:"0",class:"btn",role:"button","data-toggle":"popover","data-trigger":"focus",title:"Help",rel:"popover","data-content":"\n        Playback: <br> \n        <ul>\n          <li>r: reset</li>\n          <li>n: new sample</li>\n        </ul>\n        Input-Fixed: <br> \n        <ul>\n          <li>Mouse</li>\n          <ul>\n            <li>left click: select a major triad</li>\n            <li>right click: select a minor triad</li>\n            <li>middle click or (shift + left click): select a dominant 7th chord</li>\n            <li>alt + left/right click: select a major/minor 7th chord</li>\n          </ul>\n          <li>Keyboard</li>\n          <ul>\n            <li>'1'-'=': select root</li>\n            <li>shift + root: major triad</li>\n            <li>ctrl + root: minor triad</li>\n            <li>alt + root: moninant 7th chord</li>\n            <li>alt+ shift/ctrl + root: major/minor 7th chord</li>\n          </ul>\n        </ul>\n        Input-Movable: <br> \n        <ul>\n          <li>Mouse</li>\n          <ul>\n            <li>left click: select a triad corresponding the the scale degree</li>\n            <li>shift + left click: select a major triad</li>\n            <li>ctrl + left click: select a minor triad</li>\n            <li>alt + left click: select a dominant seventh chord</li>\n            <li>alt + shift/ctrl + left click: select a major/minor seventh chord</li>\n          </ul>\n          <li>Keyboard</li>\n          <ul>\n            <li>1-7: select a triad corresponding the the scale degree</li>\n            <li>shift + 1-7: select a major triad</li>\n            <li>ctrl + 1-7: select a minor triad</li>\n            <li>alt + 1-7: select a dominant seventh chord</li>\n            <li>alt + shift/ctrl + 1-7: select a major/minor seventh chord</li>\n          </ul>\n        </ul>\n        ","data-html":"true"}," Help "),Object(n["f"])("br")],-1),f={class:"container-fluid pt-3 pb-5",id:"main_app"},p={id:"time_steps",class:"table table-fixed prog_table"},b={class:"thead-light"},v=Object(n["f"])("th",{class:"prog_head table_cell"},null,-1),g=Object(n["f"])("th",{class:"time_cell"},null,-1),m=Object(n["f"])("th",{class:"time_cell"},null,-1),y=Object(n["f"])("svg",{class:"original_svg svg right",height:"0px"},null,-1),j={class:"up"},O={id:"original_prog",class:"table table-fixed table-striped prog_table"},k=Object(n["f"])("th",{id:"play_prog_original",class:"prog_head"},"Original",-1),x=Object(n["f"])("th",null,null,-1),w=Object(n["f"])("th",null,null,-1),I={id:"altered_time_steps",class:"table table-fixed prog_table"},E={class:"thead-light"},M=Object(n["f"])("th",{class:"prog_head table_cell"},null,-1),D=Object(n["f"])("th",{class:"time_cell"},null,-1),S=Object(n["f"])("th",{class:"time_cell"},null,-1),q=Object(n["f"])("canvas",{id:"altered_canvas",class:"right"},null,-1),A=Object(n["f"])("svg",{class:"swapped_svg svg right",id:"swapped_svg",height:"0px"},null,-1),P={class:"up"},T={id:"saved_prog",class:"table table-fixed table-striped prog_table"},C=Object(n["f"])("th",{id:"play_prog_original",class:"prog_head"},"Altered",-1),B=Object(n["f"])("th",null,null,-1),L={class:"row"},R={class:"col-4"},K=Object(n["f"])("br",null,null,-1),F=Object(n["e"])(" Bpm: "),$={id:"bpm_text"},z={id:"slider_container"},N={class:"input-group-prepend"},U={class:"input-group-text",style:{width:"160px"}},Z=Object(n["e"])(),H=Object(n["f"])("span",null,"   Root overlay",-1),X={class:"input-group-prepend"},Y={class:"input-group-text",style:{width:"160px"}},V=Object(n["e"])(),G=Object(n["f"])("span",null,"   Chord overlay",-1),J={class:"col-3"},Q={class:"btn-group"},W={class:"btn btn-light dropdown-toggle",type:"button","data-toggle":"dropdown"},tt=Object(n["f"])("span",{class:"caret"},null,-1),et={class:"dropdown-menu"},rt={key:0,class:"dropdown"},nt={class:"btn btn-light dropdown-toggle",type:"button","data-toggle":"dropdown"},it=Object(n["f"])("span",{class:"caret"},null,-1),ct={class:"dropdown-menu"},ot={key:0},lt=Object(n["f"])("svg",{id:"original_barline",class:"barline_svg"},null,-1),at=Object(n["f"])("br",null,null,-1),st=Object(n["f"])("svg",{id:"altered_barline",class:"barline_svg"},null,-1);function dt(t,e,r,dt,_t,ut){var ht=this,ft=Object(n["k"])("midi-visualizer"),pt=Object(n["k"])("InterfaceFixed"),bt=Object(n["k"])("InterfaceMovable"),vt=Object(n["k"])("midi-player");return Object(n["g"])(),Object(n["c"])(n["a"],null,[Object(n["f"])("nav",i,[Object(n["f"])("div",c,[Object(n["f"])("ul",o,[Object(n["f"])("li",l,[Object(n["f"])("button",{class:"btn",value:"placeholder",onClick:e[1]||(e[1]=function(){return ut.get_data&&ut.get_data.apply(ut,arguments)})},"New Sample"),a])]),Object(n["f"])("ul",s,[Object(n["f"])("li",d,[Object(n["f"])("button",_,"Song ID:"+Object(n["l"])(this.songID),1),u]),h])])]),Object(n["f"])("div",f,[Object(n["f"])("table",p,[Object(n["f"])("thead",b,[Object(n["f"])("tr",null,[v,Object(n["f"])("div",null,[(Object(n["g"])(),Object(n["c"])(n["a"],null,Object(n["j"])(16,(function(t){return Object(n["f"])("th",{class:"time_cell",key:t,id:"time"+t},Object(n["l"])((t+3-(t-1)%4)/4+"."+((t-1)%4+1)),9,["id"])})),64)),g,m])])])]),Object(n["f"])(ft,{type:"piano-roll",class:"right",id:"original_vis",noteSequence:this.original_noteseq,config:this.cfg},null,8,["noteSequence","config"]),y,Object(n["f"])("div",j,[Object(n["f"])("table",O,[Object(n["f"])("tbody",null,[Object(n["f"])("tr",null,[k,Object(n["f"])("div",null,[(Object(n["g"])(),Object(n["c"])(n["a"],null,Object(n["j"])(16,(function(e){return Object(n["f"])("td",{key:e,id:"original_prog"+(e-1),class:"table_cell",style:{"font-weight":"normal"}},Object(n["l"])(t.original_chd_str[e-1]),9,["id"])})),64)),x,w])])])]),Object(n["f"])("table",I,[Object(n["f"])("thead",E,[Object(n["f"])("tr",null,[Object(n["f"])("div",null,[M,(Object(n["g"])(),Object(n["c"])(n["a"],null,Object(n["j"])(16,(function(t){return Object(n["f"])("th",{class:"time_cell",key:t,id:"time_altered"+t},Object(n["l"])((t+3-(t-1)%4)/4+"."+((t-1)%4+1)),9,["id"])})),64)),D,S])])])]),q,A,Object(n["f"])("div",P,[Object(n["f"])("table",T,[Object(n["f"])("tbody",null,[Object(n["f"])("tr",null,[Object(n["f"])("div",null,[C,(Object(n["g"])(),Object(n["c"])(n["a"],null,Object(n["j"])(16,(function(e){return Object(n["f"])("td",{key:e,id:"altered"+(e-1),class:"table_cell",style:{"font-weight":"normal"}},Object(n["l"])(t.altered_chd_str[e-1]),9,["id"])})),64))]),B])])]),Object(n["f"])("div",L,[Object(n["f"])("div",R,[Object(n["f"])("button",{id:"altered_reset",class:"btn btn-light",onClick:e[2]||(e[2]=function(){return ut.player_reset&&ut.player_reset.apply(ut,arguments)})},"Reset"),K,F,Object(n["f"])("span",$,Object(n["l"])(this.bpm),1),Object(n["f"])("div",z,[Object(n["n"])(Object(n["f"])("input",{type:"range",class:"form-control-range",id:"bpm_slider",min:"30",max:"200","onUpdate:modelValue":e[3]||(e[3]=function(e){return t.bpm=e})},null,512),[[n["m"],t.bpm]])]),Object(n["f"])("div",N,[Object(n["f"])("div",U,[Object(n["f"])("input",{type:"checkbox",id:"root_overlay",checked:t.root_overlay,onClick:e[4]||(e[4]=function(t){return ht.root_on_click()})},null,8,["checked"]),Z,H])]),Object(n["f"])("div",X,[Object(n["f"])("div",Y,[Object(n["f"])("input",{type:"checkbox",id:"chord_overlay",checked:t.chord_overlay,onClick:e[5]||(e[5]=function(t){return ht.chord_on_click()})},null,8,["checked"]),V,G])])]),Object(n["f"])("div",J,[Object(n["f"])("div",Q,[Object(n["f"])("button",W,[Object(n["e"])(Object(n["l"])("Input type: "+this.input_type)+" ",1),tt]),Object(n["f"])("ul",et,[Object(n["f"])("li",null,[Object(n["f"])("a",{class:"dropdown-item",href:"#",onClick:e[6]||(e[6]=function(t){return ut.change_input_type("movable")})},"Movable")]),Object(n["f"])("li",null,[Object(n["f"])("a",{class:"dropdown-item",href:"#",onClick:e[7]||(e[7]=function(t){return ut.change_input_type("fixed")})},"Fixed")])]),"movable"==this.input_type?(Object(n["g"])(),Object(n["c"])("div",rt,[Object(n["f"])("button",nt,[Object(n["e"])(Object(n["l"])("Key: "+this.key+" major")+" ",1),it]),Object(n["f"])("ul",ct,[Object(n["f"])("li",null,[(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["j"])(this.scales_major,(function(t){return Object(n["g"])(),Object(n["c"])("a",{key:t,class:"dropdown-item",href:"#",onClick:function(e){return ut.change_key(t)}},Object(n["l"])(t+" major"),9,["onClick"])})),128))])])])):Object(n["d"])("",!0)]),this.loaded?(Object(n["g"])(),Object(n["c"])("div",ot,["fixed"==t.input_type?(Object(n["g"])(),Object(n["c"])(pt,{key:0,onUpdate_current_chord:ut.update_current_chord},null,8,["onUpdate_current_chord"])):Object(n["d"])("",!0),"movable"==t.input_type?(Object(n["g"])(),Object(n["c"])(bt,{key:1,ref:"dial",interface_key:this.key,roots:t.scales_major,onUpdate_current_chord:ut.update_current_chord},null,8,["interface_key","roots","onUpdate_current_chord"])):Object(n["d"])("",!0)])):Object(n["d"])("",!0)])])])])]),lt,at,st,Object(n["f"])(vt,{noteSequence:this.original_noteseq,"sound-font":"",visualizer:"#original_vis",id:"original_player"},null,8,["noteSequence"])],64)}r("cb29"),r("fb6a"),r("a15b"),r("99af"),r("caad");var _t=Object(n["p"])("data-v-0c3b6279");Object(n["i"])("data-v-0c3b6279");var ut=Object(n["f"])("p",null,"Current chord:",-1),ht={id:"root_table",class:"table table-bordered table-fixed"};Object(n["h"])();var ft=_t((function(t,e,r,i,c,o){return Object(n["g"])(),Object(n["c"])("div",null,[ut,Object(n["f"])("p",{id:"current_chord_text",class:{text_major:"M"==t.current_chord_type,text_minor:"m"==t.current_chord_type,text_dom:"D"==t.current_chord_type}},Object(n["l"])(o.current_chord_text),3),Object(n["f"])("table",ht,[Object(n["f"])("tbody",null,[Object(n["f"])("tr",null,[(Object(n["g"])(),Object(n["c"])(n["a"],null,Object(n["j"])(12,(function(e){return Object(n["f"])("td",{key:e,id:"root_"+e,onClick:function(t){return o.root_on_click(e-1,t)},onContextmenu:Object(n["o"])((function(t){return o.root_on_rightclick(e-1,t)}),["prevent"]),onMouseup:Object(n["o"])((function(t){return o.root_on_middleclick(e-1,t)}),["middle"]),class:{root_cell:!0,root_black:[1,3,6,8,10].includes(e-1),major:"M"==t.current_chord_type&&t.current_chord_root==e-1,minor:"m"==t.current_chord_type&&t.current_chord_root==e-1,dom:"D"==t.current_chord_type&&t.current_chord_root==e-1}},Object(n["l"])(t.roots[e-1]),43,["id","onClick","onContextmenu","onMouseup"])})),64))])])])])})),pt={name:"InterfaceFixed",data:function(){return{roots:["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],current_chord_root:"0",current_chord_type:"M",current_chord_interval:3}},computed:{current_chord_text:function(){return 3==this.current_chord_interval?"M"==this.current_chord_type?this.roots[this.current_chord_root]:this.roots[this.current_chord_root]+this.current_chord_type:"D"==this.current_chord_type?this.roots[this.current_chord_root]+this.current_chord_interval:"M"==this.current_chord_type?this.roots[this.current_chord_root]+"maj"+this.current_chord_interval:this.roots[this.current_chord_root]+this.current_chord_type+this.current_chord_interval}},methods:{root_on_click:function(t,e){e.ctrlKey?this.root_on_rightclick(t,e):(this.current_chord_root=t,this.current_chord_type="M",e.altKey?this.current_chord_interval=7:e.shiftKey&&void 0!=e.movementX?(this.current_chord_type="D",this.current_chord_interval=7):this.current_chord_interval=3,this.$emit("update_current_chord",this.current_chord_root+this.current_chord_type+this.current_chord_interval,this.current_chord_text))},root_on_rightclick:function(t,e){this.current_chord_root=t,this.current_chord_type="m",this.current_chord_interval=3,e.altKey?this.current_chord_interval=7:this.current_chord_interval=3,this.$emit("update_current_chord",this.current_chord_root+this.current_chord_type+this.current_chord_interval,this.current_chord_text)},root_on_middleclick:function(t){this.current_chord_root=t,this.current_chord_type="D",this.current_chord_interval=7,this.$emit("update_current_chord",this.current_chord_root+this.current_chord_type+this.current_chord_interval,this.current_chord_text)},keyboard_functions:function(t){var e=t.key;if(["!","@","#","$","%","^","&","*","(",")","_","+"].includes(e)){t.preventDefault();var r=["!","@","#","$","%","^","&","*","(",")","_","+"].indexOf(e);this.root_on_click(r,t)}else if(["⁄","€","‹","›","ﬁ","ﬂ","‡","°","·","—","±"].includes(e)){t.preventDefault();var n=["⁄","€","‹","›","ﬁ","ﬂ","‡","°","·","—","±"].indexOf(e);this.root_on_click(n,t)}else if(["1","2","3","4","5","6","7","8","9","0","-","="].includes(e)&&t.ctrlKey){t.preventDefault();var i=["1","2","3","4","5","6","7","8","9","0","-","="].indexOf(e);this.root_on_rightclick(i,t)}else if(["1","2","3","4","5","6","7","8","9","0","-","="].includes(e)&&t.altKey){t.preventDefault();var c=["1","2","3","4","5","6","7","8","9","0","-","="].indexOf(e);this.root_on_middleclick(c,t)}else if(["¡","™","£","¢","∞","§","¶","•","ª","º","–","≠"].includes(e)){t.preventDefault();var o=["¡","™","£","¢","∞","§","¶","•","ª","º","–","≠"].indexOf(e);this.root_on_middleclick(o,t)}}},mounted:function(){document.addEventListener("keydown",this.keyboard_functions)},beforeUnmount:function(){document.removeEventListener("keydown",this.keyboard_functions)}};r("dc1a");pt.render=ft,pt.__scopeId="data-v-0c3b6279";var bt=pt,vt=Object(n["f"])("svg",{id:"dial_svg"},null,-1);function gt(t,e,r,i,c,o){return Object(n["g"])(),Object(n["c"])("div",null,[vt])}var mt=r("5698"),yt=r("772f"),jt=yt.Note,Ot=yt.Scale;console.log(jt,Ot);var kt={name:"InterfaceMovable",props:{interface_key:String,roots:Array},data:function(){return{major_scale:[0,2,4,5,7,9,11],current_chord_root:"0",current_chord_type:"M",current_chord_interval:3,dial_r_outer:100,degree_text:["I","ii","iii","IV","V","vi","vii°"],alt:!1,ctrl:!1,shift:!1,s:!1}},computed:{interface_key_idx:function(){return this.roots.indexOf(this.interface_key)},dial_r_center:function(){return this.dial_r_outer/2},dial_r_degrees:function(){return 1.5*this.dial_r_outer},scale_roots:function(){return Ot.get(this.interface_key+" major").notes}},methods:{outer_text:function(t){for(var e=Ot.get(t+" major").notes,r=0;r<3;r++)e[[1,2,5][r]]+="m";return e[6]+="dim",e},draw_dial:function(t){var e=this;mt.selectAll("g").remove().exit();for(var r=mt.select("#dial_svg").append("g").attr("class","g").attr("transform","translate("+(this.dial_r_degrees+5)+","+(this.dial_r_degrees+5)+")"),n=this,i=function(i){var c=mt.arc().innerRadius(e.dial_r_center).outerRadius(e.dial_r_outer).startAngle(2*i*Math.PI/t.length).endAngle(2*(i+1)*Math.PI/t.length);r.append("path").attr("d",c).attr("id","outer_path"+i).attr("class","outer_path").on("click",(function(){n.outer_on_click(i)})).on("contextmenu",(function(t){t.preventDefault(),n.outer_on_click(i)})).on("mouseover",(function(){mt.select("#outer_path"+i).classed("outer_path_mouseover",!0)})).on("mouseout",(function(){mt.select("#outer_path"+i).classed("outer_path_mouseover",!1)})),r.append("text").attr("dx",(e.dial_r_outer+e.dial_r_center)/2*Math.cos(2*i*Math.PI/t.length+(1/7-.5)*Math.PI)).attr("dy",(e.dial_r_outer+e.dial_r_center)/2*Math.sin(2*i*Math.PI/t.length+(1/7-.5)*Math.PI)).attr("class","outer_text").attr("id","outer_text"+i).text(t[i]).on("click",(function(){n.outer_on_click(i)})).on("contextmenu",(function(t){t.preventDefault(),n.outer_on_click(i)})).on("mouseover",(function(){mt.select("#outer_path"+i).classed("outer_path_mouseover",!0)})).on("mouseout",(function(){mt.select("#outer_path"+i).classed("outer_path_mouseover",!1)})),r.append("text").attr("dx",(e.dial_r_outer+e.dial_r_degrees)/2*Math.cos(2*i*Math.PI/t.length+(1/7-.5)*Math.PI)).attr("dy",(e.dial_r_outer+e.dial_r_degrees)/2*Math.sin(2*i*Math.PI/t.length+(1/7-.5)*Math.PI)).attr("class","outer_text").text(e.degree_text[i])},c=0;c<t.length;c++)i(c);r.append("circle").attr("x",0).attr("y",0).attr("r",this.dial_r_center).attr("class","center_path"),r.append("text").attr("class","center_text").attr("id","center_text").text("")},get_current_chord_text:function(t){return 3==this.current_chord_interval?"M"==this.current_chord_type?t:t+this.current_chord_type:"D"==this.current_chord_type?t+this.current_chord_interval:"M"==this.current_chord_type?t+"maj"+this.current_chord_interval:t+this.current_chord_type+this.current_chord_interval},update_center_text:function(t){var e=mt.select("#center_text");e.text(t),e.classed("text_major",!1),e.classed("text_minor",!1),e.classed("text_dom",!1),"M"==this.current_chord_type&&mt.select("#center_text").classed("text_major",!0),"m"==this.current_chord_type&&e.classed("text_minor",!0),"D"==this.current_chord_type&&e.classed("text_dom",!0)},outer_on_click:function(t){this.current_chord_root=(this.major_scale[t]+this.roots.indexOf(this.interface_key))%12;var e=this.scale_roots[t];this.s&&(this.current_chord_root=(this.current_chord_root+7)%12,e=this.scale_roots[(t+4)%7],6==t&&(2==e.length&&"b"==e.charAt(1)?e=e.charAt(0):e+="#"),this.current_chord_interval=7,this.current_chord_type="D"),this.alt?(this.current_chord_interval=7,this.current_chord_type="D",this.shift?this.current_chord_type="M":this.ctrl&&(console.log("CTRL"),this.current_chord_type="m")):this.shift?(this.current_chord_interval=3,this.current_chord_type="M"):this.ctrl?(this.current_chord_interval=3,this.current_chord_type="m"):this.s||(this.current_chord_interval=3,[0,3,4].includes(t)?this.current_chord_type="M":this.current_chord_type="m"),this.update_center_text(this.get_current_chord_text(e)),this.$emit("update_current_chord",this.current_chord_root+this.current_chord_type+this.current_chord_interval,this.get_current_chord_text(e));for(var r=0;r<7;r++)mt.select("#outer_path"+r).classed("outer_path_active",!1);mt.select("#outer_path"+t).classed("outer_path_active",!0)},keydown_functions:function(t){var e=t.key;"Alt"==e&&(t.preventDefault(),this.alt=!0),"Shift"==e&&(t.preventDefault(),this.shift=!0),"Control"==e&&(t.preventDefault(),this.ctrl=!0),["S","s"].includes(e)&&(t.preventDefault(),this.s=!0),["1","2","3","4","5","6","7"].includes(e)&&(t.preventDefault(),this.outer_on_click(["1","2","3","4","5","6","7"].indexOf(e))),["!","@","#","$","%","^","&"].includes(e)&&(t.preventDefault(),this.outer_on_click(["!","@","#","$","%","^","&"].indexOf(e))),["¡","™","£","¢","∞","§","¶"].includes(e)&&(t.preventDefault(),this.outer_on_click(["¡","™","£","¢","∞","§","¶"].indexOf(e))),["⁄","€","‹","›","ﬁ","ﬂ","‡"].includes(e)&&(t.preventDefault(),this.outer_on_click(["⁄","€","‹","›","ﬁ","ﬂ","‡"].indexOf(e)))},keyup_functions:function(t){var e=t.key;"Alt"==e&&(t.preventDefault(),this.alt=!1),"Shift"==e&&(t.preventDefault(),this.shift=!1),"Control"==e&&(t.preventDefault(),this.ctrl=!1),["S","s"].includes(e)&&(t.preventDefault(),this.s=!1)}},mounted:function(){this.draw_dial(this.outer_text(this.interface_key)),document.addEventListener("keydown",this.keydown_functions),document.addEventListener("keyup",this.keyup_functions)},beforeUnmount:function(){document.removeEventListener("keydown",this.keydown_functions),document.removeEventListener("keyup",this.keyup_functions)}};r("9c32");kt.render=gt;var xt=kt,wt=r("bc3a").default,It=r("5698"),Et=r("8350"),Mt=r("7360");console.log(Mt);var Dt=new Et.SoundFontPlayer("https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus"),St={name:"App",components:{InterfaceFixed:bt,InterfaceMovable:xt},data:function(){return{BACKEND_PATH:"",STEP_SIZE:4,scales_major:["C","Db","D","Eb","E","F","F#","G","Ab","A","Bb","B"],songID:"000",original_noteseq:0,original_chd_str:0,original_chd_mat:0,notedic:0,sustain:[],altered_noteseq:{notes:[],totalTime:16},altered_chd_str:Array(16).fill(""),altered_chd_mat:Array(16).fill(Array(36).fill(0)),bpm:60,playing:!1,loaded:!1,input_type:"fixed",key:"C",t:0,chord_seq:[],current_chd:"",current_chd_text:"",altered_vis:0,cfg:{noteHeight:4,pixelsPerTimeStep:100,minPitch:20,maxPitch:90,noteSpacing:1},root_overlay:!0,chord_overlay:!1}},computed:{},methods:{list_to_noteseq:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:16,n=[],i=0;i<t.length;i++){var c=t[i][0],o=t[i][1],l=t[i][2],a=t[i][3];e>=8&&(c+=8,o+=8),c>=e&&c<r&&n.push({pitch:l,startTime:c,endTime:o,velocity:a})}return n},get_data:function(){var t=this;wt.get(this.BACKEND_PATH+"/get_data?song="+this.songID).then((function(e){var r=e.data;r.songID||(r=JSON.parse(e.data)),t.songID=r.songID,t.original_noteseq=r.original_noteseq,t.original_chd_str=r.original_chd_str,t.original_chd_mat=r.original_chd_mat,t.notedic=r.notedic,t.sustain=r.sustain;for(var n=1;n<4;n++)for(var i=0;i<t.sustain.length;i++){var c=t.sustain[i][0],o=t.sustain[i][1];if(c<4*n&&o>4*n)break;if(c>4*n){i>0?t.sustain[i-1][1]=4*n+1:t.sustain.push([4*n-1,4*n+1]);break}}t.altered_vis=new Et.PianoRollCanvasVisualizer({notes:[{pitch:30,start:0,end:8}],totalTime:16},document.getElementById("altered_canvas"),t.cfg),t.update_overlay(),t.player_reset(),t.place_barlines_and_player(),setTimeout((function(){t.place_barlines_and_player()}),1e3),setTimeout((function(){t.place_barlines_and_player()}),3e3)}))},player_play:function(){if(this.loaded&&this.playing){if(this.t%this.STEP_SIZE==0&&(0==this.t&&(this.altered_noteseq.notes=[]),this.player_query_step()),!this.playing)return;this.t+=4,16==this.t&&(this.t=0)}},player_reset:function(){this.playing=!1,this.t=0,this.altered_noteseq.notes=[],this.chord_seq=[],this.altered_chd_str=Array(16).fill(""),this.altered_chd_mat=Array(16).fill(Array(36).fill(0)),this.altered_vis.redraw(),this.update_overlay()},player_query_step:function(){var t=this;if(""!=this.current_chd){setTimeout((function(){t.player_play()}),24e4/this.bpm),0==this.t&&(this.altered_chd_str=Array(16).fill(""),this.altered_chd_mat=Array(16).fill(Array(36).fill(0))),this.t%this.STEP_SIZE==0&&(this.chord_seq=[]),this.chord_seq.push(this.current_chd);var e=parseInt(this.current_chd.slice(0,-2)),r=this.current_chd.slice(-2);this.current_chd="",this.altered_chd_str[this.t]=this.current_chd_text,this.current_chd_text="";for(var n=8/this.STEP_SIZE,i=[],c=0;c<this.chord_seq.length;c++)i.push(this.chord_seq[c]);while(i.length<n)i.push(i[i.length-1]);i=i.join(",");var o=this.notedic[(this.t-this.t%8)/8][i],l=this.list_to_noteseq(o,this.t,this.t+this.STEP_SIZE,!0);this.altered_noteseq.notes=this.altered_noteseq.notes.concat(l);var a=this.notes_to_quant_noteseq(l);Dt.isPlaying()&&Dt.stop(),Dt.start(a,this.bpm),this.altered_vis.noteSequence=this.altered_noteseq,this.altered_vis.redraw();var s=Array(36).fill(0);s[e]=1,s[e+24]=1;var d=[0,4,7],_=[0,3,7],u=[0,4,7,11],h=[0,3,7,10],f=[0,4,7,10],p=0;"M3"==r&&(p=d),"m3"==r&&(p=_),"M7"==r&&(p=u),"m7"==r&&(p=h),"D7"==r&&(p=f);for(var b=0;b<p.length;b++)s[(e+p[b])%12+12]=1;for(var v=this.t;v<this.t+this.STEP_SIZE;v++)this.altered_chd_mat[v]=s;this.update_overlay()}else this.playing=!1},notes_to_quant_noteseq:function(t){for(var e={notes:[],quantizationInfo:{stepsPerQuarter:4},tempos:[{time:0,qpm:60}],totalQuantizedSteps:64},r=0;r<t.length;r++){for(var n=t[r],i=n.startTime,c=n.endTime,o=0;o<this.sustain.length;o++){var l=this.sustain[o][0],a=this.sustain[o][1];if(n.endTime>l&&n.endTime<a){c=a;break}if(n.endTime<l)break}e.notes.push({pitch:n.pitch,quantizedStartStep:4*(i-this.t),quantizedEndStep:Math.round(4*(c-this.t)),veloicity:n.velocity})}return e},canvas_update_note:function(t){var e=this.t;0==e&&(e=16);var r={pitch:t.pitch,startTime:t.startTime+e-4,endTime:t.endTime+e-4};this.altered_vis.redraw(r)},change_input_type:function(t){this.input_type=t},change_key:function(t){this.key=t,this.$refs.dial.draw_dial(this.$refs.dial.outer_text(t))},update_current_chord:function(t,e){if(this.current_chd=t,this.current_chd_text=e,this.playing){var r=parseInt(this.current_chd.slice(0,-2)),n=this.current_chd.slice(-2),i=Array(36).fill(0),c=this.t;i[r]=1,i[r+24]=1;var o=[0,4,7],l=[0,3,7],a=[0,4,7,11],s=[0,3,7,10],d=[0,4,7,10],_=0;"M3"==n&&(_=o),"m3"==n&&(_=l),"M7"==n&&(_=a),"m7"==n&&(_=s),"D7"==n&&(_=d);for(var u=0;u<_.length;u++)i[(r+_[u])%12+12]=1;for(var h=c;h<c+this.STEP_SIZE;h++)this.altered_chd_mat[h]=i;this.update_overlay(),this.altered_chd_str[c]=this.current_chd_text}else this.playing=!0,this.player_play()},draw_overlay_bar:function(t,e,r,n){e*=100;while(r<=90)r>=30&&t.append("rect").attr("fill",n).attr("opacity",.3).attr("x",e).attr("y",this.cfg.noteHeight*(this.cfg.maxPitch-r)).attr("width",100).attr("height",4).attr("class","overlay"),r+=12},clear_overlay:function(){It.selectAll(".overlay").remove().exit()},get_color:function(t){return It.interpolateSinebow((t/12+.6)%1)},draw_root_overlay:function(){for(var t=0;t<this.original_chd_mat.length;t++){var e=this.original_chd_mat[t],r=e.slice(0,12).indexOf(1);this.draw_overlay_bar(It.select(".original_svg"),t,r,this.get_color(0)),this.altered_chd_mat[t].slice(0,12).indexOf(1)>=0&&this.draw_overlay_bar(It.select(".swapped_svg"),t,this.altered_chd_mat[t].slice(0,12).indexOf(1),this.get_color(0))}},draw_chord_overlay:function(){for(var t=0;t<this.original_chd_mat.length;t++)for(var e=this.original_chd_mat[t],r=e.slice(0,12).indexOf(1),n=0;n<12;n++)1==e[12+n]&&this.draw_overlay_bar(It.select(".original_svg"),t,n,this.get_color((n-r)%12)),1==this.altered_chd_mat[t][12+n]&&this.draw_overlay_bar(It.select(".swapped_svg"),t,n,this.get_color((n-this.altered_chd_mat[t].slice(0,12).indexOf(1))%12))},update_overlay:function(){this.clear_overlay(),this.chord_overlay?this.draw_chord_overlay():this.root_overlay&&this.draw_root_overlay()},root_on_click:function(){this.root_overlay?this.root_overlay=!1:this.root_overlay=!0,this.update_overlay()},chord_on_click:function(){this.chord_overlay?this.chord_overlay=!1:this.chord_overlay=!0,this.update_overlay()},draw_barlines_original:function(){It.selectAll(".barline_original").remove().exit();for(var t=document.getElementById("time1").getBoundingClientRect(),e=document.getElementById("original_prog0").getBoundingClientRect(),r=t.left+window.pageXOffset||document.documentElement.scrollLeft,n=t.right+window.pageXOffset||document.documentElement.scrollLeft,i=t.top+window.pageYOffset||document.documentElement.scrollTop,c=e.bottom+window.pageYOffset||document.documentElement.scrollTop,o=1;o<4;o++)It.selectAll("#original_barline").append("rect").attr("x",r+4*o*(n-r)).attr("y",i).attr("width",3).attr("height",c-i).attr("class","barline barline_original")},draw_barlines_altered:function(){It.selectAll(".barline_altered").remove().exit();for(var t=document.getElementById("time_altered1").getBoundingClientRect(),e=document.getElementById("altered10").getBoundingClientRect(),r=t.left+window.pageXOffset||document.documentElement.scrollLeft,n=t.right+window.pageXOffset||document.documentElement.scrollLeft,i=t.top+window.pageYOffset||document.documentElement.scrollTop,c=e.bottom+window.pageYOffset||document.documentElement.scrollTop,o=1;o<4;o++)It.selectAll("#altered_barline").append("rect").attr("x",r+4*o*(n-r)).attr("y",i).attr("width",3).attr("height",c-i).attr("class","barline barline_altered")},place_player_original:function(){var t=document.getElementById("time16").getBoundingClientRect(),e=document.getElementById("original_prog15").getBoundingClientRect(),r=t.right+window.pageXOffset||document.documentElement.scrollLeft,n=t.top+window.pageYOffset||document.documentElement.scrollTop,i=e.bottom+window.pageYOffset||document.documentElement.scrollTop;It.select("#original_player").style("position","absolute").style("left",r+"px").style("top",(n+2*i)/3+"px").style("-webkit-transform","scale(0.75)").raise()},place_barlines_and_player:function(){this.draw_barlines_original(),this.draw_barlines_altered(),this.place_player_original()}},mounted:function(){var t=this;this.get_data(),Dt.loadAllSamples().then((function(){t.loaded=!0,t.altered_noteseq.notes=[]}));var e=this;Dt.callbackObject={run:function(t){e.canvas_update_note(t)},stop:function(){}},window.onresize=this.place_barlines_and_player,document.addEventListener("keydown",(function(e){var r=e.key;["r","R"].includes(r)&&t.player_reset(),["n","N"].includes(r)&&t.get_data()}))}};r("4ae5");St.render=dt;var qt=St;Object(n["b"])(qt).mount("#app")},6:function(t,e){},7:function(t,e){},8:function(t,e){},9:function(t,e){},"9c32":function(t,e,r){"use strict";r("2d13")},dc1a:function(t,e,r){"use strict";r("3653")},e5ac:function(t,e,r){}});
//# sourceMappingURL=app.11c9c9a7.js.map