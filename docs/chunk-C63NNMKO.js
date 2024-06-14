import{A as d,B as E,C as L,D as w,E as F,F as D,G as Z,H as M,I as y,J as N,K as ee,L as B,M as te,Q as ie,S as ne,T as oe,U as A,Y as V,Z as _,_ as re,a as $,b as K,c as U,d as H,e as G,f as C,g as J,h as T,i as z,j as f,k as P,l as Q,m as W,n as X,o as c,p as g,q as u,r as p,s as r,t as o,u as m,v as Y,w as b,x as S,y as R,z as a}from"./chunk-6HBTSTUS.js";var v=(()=>{let e=class e{constructor(i){this.http=i,this.apiUrl="https://api.apilayer.com/geo/country",this.apiKey="38gLG1W5HBHoxavaPQfGpMb7XVnO0n2T",this.cacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{region:"",countries:[]}},this.loadFromLocalStorage()}saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}loadFromLocalStorage(){localStorage.getItem("cacheStore")&&(this.cacheStore=JSON.parse(localStorage.getItem("cacheStore")))}getCountriesRequest(i,n){return this.http.get(i,{params:n}).pipe(U(s=>$([])),H(1e3))}searchCountryByAlphaCode(i){let n=new B().set("apikey",this.apiKey);return this.http.get(`${this.apiUrl}/code/${i}`,{params:n}).pipe(K(s=>s.length>0?s[0]:null),U(s=>$(null)))}searchByCapital(i){let n=new B().set("apikey",this.apiKey),s=`${this.apiUrl}/capital/${i}`;return this.getCountriesRequest(s,n).pipe(C(h=>this.cacheStore.byCapital={term:i,countries:h}),C(()=>this.saveToLocalStorage()))}searchCountry(i){let n=new B().set("apikey",this.apiKey),s=`${this.apiUrl}/name/${i}`;return this.getCountriesRequest(s,n).pipe(C(h=>this.cacheStore.byCountries={term:i,countries:h}),C(()=>this.saveToLocalStorage()))}searchRegion(i){let n=new B().set("apikey",this.apiKey),s=`${this.apiUrl}/region/${i}`;return this.getCountriesRequest(s,n).pipe(C(h=>this.cacheStore.byRegion={region:i,countries:h}),C(()=>this.saveToLocalStorage()))}};e.\u0275fac=function(n){return new(n||e)(z(te))},e.\u0275prov=J({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var de=t=>["/countries/by",t];function he(t,e){t&1&&(r(0,"div",2),a(1,` No hay pa\xEDses que mostrar
`),o())}function fe(t,e){if(t&1&&(r(0,"tr")(1,"td"),a(2),o(),r(3,"td"),a(4),o(),r(5,"td"),a(6),o(),r(7,"td"),a(8),w(9,"number"),o(),r(10,"td")(11,"a",5),a(12,"Ver m\xE1s"),o()()()),t&2){let l=e.$implicit,i=e.index;c(2),d(i+1),c(2),d(l.name),c(2),d(l.capital),c(2),d(F(9,5,l.population)),c(3),p("routerLink",L(7,de,l.alpha3code))}}function ge(t,e){if(t&1&&(r(0,"table",3)(1,"thead")(2,"tr")(3,"th"),a(4,"#"),o(),r(5,"th"),a(6,"Nombre"),o(),r(7,"th"),a(8,"Capital"),o(),r(9,"th"),a(10,"Poblaci\xF3n"),o(),m(11,"th"),o()(),r(12,"tbody"),u(13,fe,13,9,"tr",4),o()()),t&2){let l=S();c(13),p("ngForOf",l.countries)}}var I=(()=>{let e=class e{constructor(){this.countries=[]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=f({type:e,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["table",""],["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(n,s){if(n&1&&u(0,he,2,0,"div",1)(1,ge,14,1,"ng-template",null,0,D),n&2){let h=R(2);p("ngIf",s.countries.length===0)("ngIfElse",h)}},dependencies:[M,y,oe,N]});let t=e;return t})();function ve(t,e){t&1&&m(0,"shared-loading-spinner")}var se=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCapital.countries,this.initialValue=this.countriesService.cacheStore.byCapital.term}searchByCapital(i){this.isLoading=!0,this.countriesService.searchByCapital(i).subscribe(n=>{this.countries=n,this.isLoading=!1})}};e.\u0275fac=function(n){return new(n||e)(g(v))},e.\u0275cmp=f({type:e,selectors:[["app-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital",3,"onDebounce","initalValue"],[4,"ngIf"],[3,"countries"]],template:function(n,s){n&1&&(r(0,"h2"),a(1,"Por capital"),o(),m(2,"hr"),r(3,"div",0)(4,"div",1)(5,"shared-search-box",2),b("onDebounce",function(k){return s.searchByCapital(k)}),o(),m(6,"hr"),o()(),r(7,"div",0)(8,"div",1),u(9,ve,1,0,"shared-loading-spinner",3),m(10,"countries-table",4),o()()),n&2&&(c(5),p("initalValue",s.initialValue),c(4),p("ngIf",s.isLoading),c(),p("countries",s.countries))},dependencies:[y,_,V,I]});let t=e;return t})();function Ce(t,e){t&1&&m(0,"shared-loading-spinner")}var ce=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[],this.initialValue="",this.isLoading=!1}ngOnInit(){this.countries=this.countriesService.cacheStore.byCountries.countries,this.initialValue=this.countriesService.cacheStore.byCountries.term}searchByCountry(i){this.isLoading=!0,this.countriesService.searchCountry(i).subscribe(n=>{this.countries=n,this.isLoading=!1})}};e.\u0275fac=function(n){return new(n||e)(g(v))},e.\u0275cmp=f({type:e,selectors:[["app-by-country-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por pais",3,"onDebounce","initalValue"],[4,"ngIf"],[3,"countries"]],template:function(n,s){n&1&&(r(0,"h2"),a(1,"Por Pais"),o(),m(2,"hr"),r(3,"div",0)(4,"div",1)(5,"shared-search-box",2),b("onDebounce",function(k){return s.searchByCountry(k)}),o(),m(6,"hr"),o()(),r(7,"div",0)(8,"div",1),u(9,Ce,1,0,"shared-loading-spinner",3),m(10,"countries-table",4),o()()),n&2&&(c(5),p("initalValue",s.initialValue),c(4),p("ngIf",s.isLoading),c(),p("countries",s.countries))},dependencies:[y,_,V,I]});let t=e;return t})();var Se=t=>({"btn-outline-primary":t});function xe(t,e){if(t&1){let l=Y();r(0,"button",6),b("click",function(){let n=Q(l).$implicit,s=S();return W(s.searchByRegion(n))}),a(1),o()}if(t&2){let l=e.$implicit,i=S();p("ngClass",L(2,Se,i.selectedRegion===l)),c(),E(" ",l," ")}}function be(t,e){t&1&&m(0,"shared-loading-spinner")}var le=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[],this.regions=["Africa","Americas","Asia","Europe","Oceania"],this.isLoading=!1}ngOnInit(){this.countries=this.countriesService.cacheStore.byRegion.countries,this.selectedRegion=this.countriesService.cacheStore.byRegion.region}searchByRegion(i){this.isLoading=!0,this.selectedRegion=i,this.countriesService.searchRegion(i).subscribe(n=>{this.countries=n,this.isLoading=!1})}};e.\u0275fac=function(n){return new(n||e)(g(v))},e.\u0275cmp=f({type:e,selectors:[["app-by-region-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[4,"ngIf"],[3,"countries"],[1,"btn","mx-2",3,"click","ngClass"]],template:function(n,s){n&1&&(r(0,"h2"),a(1,"Por Regi\xF3n"),o(),m(2,"hr"),r(3,"div",0)(4,"div",1),u(5,xe,2,4,"button",2),m(6,"hr"),o()(),r(7,"div",0)(8,"div",3),u(9,be,1,0,"shared-loading-spinner",4),m(10,"countries-table",5),o()()),n&2&&(c(5),p("ngForOf",s.regions),c(4),p("ngIf",s.isLoading),c(),p("countries",s.countries))},dependencies:[Z,M,y,_,I]});let t=e;return t})();function _e(t,e){t&1&&(r(0,"div",2),a(1," Espere por favor "),o())}function Ie(t,e){if(t&1&&(r(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),a(4,"Pa\xEDs: "),r(5,"strong"),a(6),o()()()(),r(7,"div",3)(8,"div",5)(9,"h3"),a(10,"Bandera"),o(),m(11,"img",6),o(),r(12,"div",7)(13,"ul",8)(14,"li",9)(15,"strong"),a(16,"Poblaci\xF3n:"),o(),a(17),w(18,"number"),o(),r(19,"li",9)(20,"strong"),a(21,"Codigo llamadas:"),o(),a(22),o()()()(),r(23,"div",10)(24,"div",7)(25,"h3"),a(26,"Traducciones"),o(),r(27,"div",11)(28,"span",12),a(29),o(),r(30,"span",12),a(31),o(),r(32,"span",12),a(33),o(),r(34,"span",12),a(35),o(),r(36,"span",12),a(37),o()()()()()),t&2){let l=S();c(6),d(l.country.name),c(5),p("src",l.country.flag,X)("alt",l.country.name),c(6),E(" ",F(18,10,l.country.population)," "),c(5),E(" ",l.country.calling_codes," "),c(7),d(l.country.region),c(2),d(l.country.subregion),c(2),d(l.country.numeric_code),c(2),d(l.country.alpha3code),c(2),d(l.country.alt_spellings)}}var pe=(()=>{let e=class e{constructor(i,n,s){this.activatedRoute=i,this.countriesService=n,this.router=s}ngOnInit(){this.activatedRoute.params.pipe(G(({id:i})=>this.countriesService.searchCountryByAlphaCode(i))).subscribe(i=>i?this.country=i:this.router.navigateByUrl(""))}};e.\u0275fac=function(n){return new(n||e)(g(ie),g(v),g(ne))},e.\u0275cmp=f({type:e,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"bagde","bg-primary","m-1"]],template:function(n,s){if(n&1&&u(0,_e,2,0,"ng-template",null,0,D)(2,Ie,38,12,"div",1),n&2){let h=R(1);c(2),p("ngIf",s.country)("ngIfElse",h)}},dependencies:[y,N]});let t=e;return t})();var Ee=[{path:"by-capital",component:se},{path:"by-country",component:ce},{path:"by-region",component:le},{path:"by/:id",component:pe},{path:"**",redirectTo:"by-capital"}],me=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=P({type:e}),e.\u0275inj=T({imports:[A.forChild(Ee),A]});let t=e;return t})();var Ze=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=P({type:e}),e.\u0275inj=T({imports:[ee,me,re]});let t=e;return t})();export{Ze as CountriesModule};
