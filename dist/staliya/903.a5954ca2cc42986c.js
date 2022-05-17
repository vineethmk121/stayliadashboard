"use strict";(self.webpackChunkStaliya=self.webpackChunkStaliya||[]).push([[903],{1903:(q,g,i)=>{i.r(g),i.d(g,{FurnishingTypeModule:()=>h});var m=i(9808),c=i(1083),t=i(5e3),a=i(8966),s=i(7322),Z=i(7531),u=i(7423);let r=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["furnishing-type-create"]],decls:13,vars:0,consts:[["mat-dialog-title",""],["mat-dialog-content","",1,"form-section"],[1,"section-item","oneline"],["appearance","outline",1,"item"],["matInput","","placeholder","Title"],["mat-dialog-actions",""],["mat-button","","mat-dialog-close","",1,"danger"],["mat-button","","mat-dialog-close","",1,"success"]],template:function(e,l){1&e&&(t.TgZ(0,"h1",0),t._uU(1,"Add Furnishing Type"),t.qZA(),t.TgZ(2,"div",1),t.TgZ(3,"div",2),t.TgZ(4,"mat-form-field",3),t.TgZ(5,"mat-label"),t._uU(6,"Title"),t.qZA(),t._UZ(7,"input",4),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"div",5),t.TgZ(9,"button",6),t._uU(10,"Close"),t.qZA(),t.TgZ(11,"button",7),t._uU(12,"Save"),t.qZA(),t.qZA())},directives:[a.uh,a.xY,s.KE,s.hX,Z.Nt,a.H8,u.lW,a.ZT],styles:[""]}),n})(),p=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["furnishing-type-update"]],decls:13,vars:0,consts:[["mat-dialog-title",""],["mat-dialog-content","",1,"form-section"],[1,"section-item","oneline"],["appearance","outline",1,"item"],["matInput","","placeholder","Title"],["mat-dialog-actions",""],["mat-button","","mat-dialog-close","",1,"danger"],["mat-button","","mat-dialog-close","",1,"success"]],template:function(e,l){1&e&&(t.TgZ(0,"h1",0),t._uU(1,"Update Furnishing Type"),t.qZA(),t.TgZ(2,"div",1),t.TgZ(3,"div",2),t.TgZ(4,"mat-form-field",3),t.TgZ(5,"mat-label"),t._uU(6,"Title"),t.qZA(),t._UZ(7,"input",4),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"div",5),t.TgZ(9,"button",6),t._uU(10,"Close"),t.qZA(),t.TgZ(11,"button",7),t._uU(12,"Save"),t.qZA(),t.qZA())},directives:[a.uh,a.xY,s.KE,s.hX,Z.Nt,a.H8,u.lW,a.ZT],styles:[""]}),n})();const T=[{path:"",component:(()=>{class n{constructor(e){this.dialog=e}ngOnInit(){}openCreateDialog(){this.dialog.open(r).afterClosed().subscribe(l=>{console.log(`Dialog result: ${l}`)})}openUpdateDialog(){this.dialog.open(p).afterClosed().subscribe(l=>{console.log(`Dialog result: ${l}`)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(a.uw))},n.\u0275cmp=t.Xpm({type:n,selectors:[["furnishing-type-list"]],decls:66,vars:0,consts:[[1,"content"],[1,"top-section"],[1,"bredcrum"],["href","javascript:;","routerLink","/dashboard"],["mat-raised-button","",1,"success","add-user",3,"click"],["data-icon","carbon:add-alt",1,"iconify"],[1,"header"],[1,"title"],[1,"right-section"],[1,"input-group","search"],["placeholder","Search","type","text",1,"form-control"],[1,"input-group-append"],["data-icon","bx:bx-search-alt-2",1,"iconify"],[1,"action"],["mat-mini-fab","",1,"info","action-button",3,"click"],["data-icon","bx:bxs-edit",1,"iconify"],["mat-mini-fab","",1,"danger","action-button"],["data-icon","ant-design:delete-filled",1,"iconify"],[1,"pagination"],[1,"page-item"],["href","javascript:;",1,"page-link"],["data-icon","uim:angle-left",1,"iconify"],[1,"page-item","active"],["data-icon","uim:angle-right",1,"iconify"]],template:function(e,l){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"a",3),t._uU(4,"Home"),t.qZA(),t.TgZ(5,"span"),t._uU(6,"/"),t.qZA(),t.TgZ(7,"span"),t._uU(8,"Furnishing Type"),t.qZA(),t.qZA(),t.TgZ(9,"button",4),t.NdJ("click",function(){return l.openCreateDialog()}),t._UZ(10,"span",5),t._uU(11," Add New Furnishing Type"),t.qZA(),t.qZA(),t.TgZ(12,"div",6),t.TgZ(13,"div",7),t._uU(14,"Furnishing Type"),t.qZA(),t.TgZ(15,"div",8),t.TgZ(16,"div",9),t._UZ(17,"input",10),t.TgZ(18,"div",11),t._UZ(19,"span",12),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"table"),t.TgZ(21,"thead"),t.TgZ(22,"tr"),t.TgZ(23,"th"),t._uU(24,"Title"),t.qZA(),t.TgZ(25,"th",13),t._uU(26,"Action"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(27,"tbody"),t.TgZ(28,"tr"),t.TgZ(29,"td"),t._uU(30,"Full Furnished"),t.qZA(),t.TgZ(31,"td",13),t.TgZ(32,"button",14),t.NdJ("click",function(){return l.openUpdateDialog()}),t._UZ(33,"span",15),t.qZA(),t.TgZ(34,"button",16),t._UZ(35,"span",17),t.qZA(),t.qZA(),t.qZA(),t.TgZ(36,"tr"),t.TgZ(37,"td"),t._uU(38,"Semi Furnished"),t.qZA(),t.TgZ(39,"td",13),t.TgZ(40,"button",14),t.NdJ("click",function(){return l.openUpdateDialog()}),t._UZ(41,"span",15),t.qZA(),t.TgZ(42,"button",16),t._UZ(43,"span",17),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(44,"ul",18),t.TgZ(45,"li",19),t.TgZ(46,"a",20),t._UZ(47,"span",21),t.qZA(),t.qZA(),t.TgZ(48,"li",19),t.TgZ(49,"a",20),t._uU(50,"1"),t.qZA(),t.qZA(),t.TgZ(51,"li",22),t.TgZ(52,"a",20),t._uU(53,"2"),t.qZA(),t.qZA(),t.TgZ(54,"li",19),t.TgZ(55,"a",20),t._uU(56,"3"),t.qZA(),t.qZA(),t.TgZ(57,"li",19),t.TgZ(58,"a",20),t._uU(59,"4"),t.qZA(),t.qZA(),t.TgZ(60,"li",19),t.TgZ(61,"a",20),t._uU(62,"5"),t.qZA(),t.qZA(),t.TgZ(63,"li",19),t.TgZ(64,"a",20),t._UZ(65,"span",23),t.qZA(),t.qZA(),t.qZA(),t.qZA())},directives:[c.yS,u.lW],styles:[".action-button[_ngcontent-%COMP%]{margin-left:5px;margin-right:5px;width:30px;height:30px;box-shadow:none;box-shadow:0 1px 5px #00000080}.action-button[_ngcontent-%COMP%]   .iconify[_ngcontent-%COMP%]{font-size:15px;margin-top:-10px}.action-button[_ngcontent-%COMP%]:active{box-shadow:0 4px 5px #0006}"]}),n})(),pathMatch:"full"},{path:"create",component:r},{path:"update",component:p}];let A=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[c.Bz.forChild(T)],c.Bz]}),n})();var f=i(6353);let h=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.ez,A,f.N]]}),n})()}}]);