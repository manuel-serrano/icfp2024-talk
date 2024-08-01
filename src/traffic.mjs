import * as $$hiphop from '@hop/hiphop';import * as hh from '@hop/hiphop';import './set.mjs';const Traffic1=$$hiphop.MODULE({'%location':{'filename':'src/traffic.hh.mjs','pos':172},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':186},'direction':'INOUT','name':'light','init_func':function () {
return new Set();
},'combine_func':(x,y) => {
return x.union(y);
}}),$$hiphop.LOOP({'%location':{'filename':'src/traffic.hh.mjs','pos':242}},$$hiphop.EMIT({'%location':{'filename':'src/traffic.hh.mjs','pos':260},'%tag':'emit','signame':'light','apply':function () {
return new Set(['red']);
}}),$$hiphop.PAUSE({'%location':{'filename':'src/traffic.hh.mjs','pos':291},'%tag':'yield'})));
const mach=new hh.ReactiveMachine(Traffic1);
mach.addEventListener('light',function (light) {
const el=document.getElementById(this.trafficId);
light.nowval.forEach((l) => {
return el.setAttribute('data-' + l,'on');
});});const Traffic2=$$hiphop.MODULE({'%location':{'filename':'src/traffic.hh.mjs','pos':560},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':574},'direction':'INOUT','name':'light','init_func':function () {
return new Set();
},'combine_func':(x,y) => {
return x.union(y);
}}),$$hiphop.SUSTAIN({'%location':{'filename':'src/traffic.hh.mjs','pos':642},'%tag':'sustain','signame':'light','apply':function () {
return new Set(['red']);
}}));
const Traffic3=$$hiphop.MODULE({'%location':{'filename':'src/traffic.hh.mjs','pos':706},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':720},'direction':'INOUT','name':'light','init_func':function () {
return new Set();
},'combine_func':(x,y) => {
return x.union(y);
}}),$$hiphop.TRAP({'done':'done','%location':{'filename':'src/traffic.hh.mjs','pos':777},'%tag':'done'},$$hiphop.FORK({'%location':{'filename':'src/traffic.hh.mjs','pos':791},'%tag':'fork'},$$hiphop.SUSTAIN({'%location':{'filename':'src/traffic.hh.mjs','pos':815},'%tag':'sustain','signame':'light','apply':function () {
return new Set(['red']);
}}),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':848},'%tag':'par'},$$hiphop.PAUSE({'%location':{'filename':'src/traffic.hh.mjs','pos':863},'%tag':'yield'}),$$hiphop.PAUSE({'%location':{'filename':'src/traffic.hh.mjs','pos':879},'%tag':'yield'}),$$hiphop.EXIT({'done':'done','%location':{'filename':'src/traffic.hh.mjs','pos':901},'%tag':'break'})))));
const mach3=new hh.ReactiveMachine(Traffic3);
let lightHandler = function (light) {
const el=document.getElementById(this.trafficId);
light.nowval.forEach((l) => {
return el.setAttribute('data-' + l,l);
});};mach3.addEventListener('light',lightHandler);const Traffic4=$$hiphop.MODULE({'%location':{'filename':'src/traffic.hh.mjs','pos':1215},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':1229},'direction':'INOUT','name':'light','init_func':function () {
return new Set();
},'combine_func':(x,y) => {
return x.union(y);
}}),$$hiphop.TRAP({'done':'done','%location':{'filename':'src/traffic.hh.mjs','pos':1286},'%tag':'done'},$$hiphop.FORK({'%location':{'filename':'src/traffic.hh.mjs','pos':1300},'%tag':'fork'},$$hiphop.SUSTAIN({'%location':{'filename':'src/traffic.hh.mjs','pos':1324},'%tag':'sustain','signame':'light','apply':function () {
return new Set(['red']);
}}),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':1357},'%tag':'par'},$$hiphop.PAUSE({'%location':{'filename':'src/traffic.hh.mjs','pos':1372},'%tag':'yield'}),$$hiphop.PAUSE({'%location':{'filename':'src/traffic.hh.mjs','pos':1388},'%tag':'yield'}),$$hiphop.EXIT({'done':'done','%location':{'filename':'src/traffic.hh.mjs','pos':1410},'%tag':'break'})))),$$hiphop.SUSTAIN({'%location':{'filename':'src/traffic.hh.mjs','pos':1440},'%tag':'sustain','signame':'light','apply':function () {
return new Set(['green']);
}}));
const mach4=new hh.ReactiveMachine(Traffic4);
mach4.addEventListener('light',lightHandler);const Traffic5=$$hiphop.MODULE({'%location':{'filename':'src/traffic.hh.mjs','pos':1609},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':1623},'direction':'INOUT','name':'light','init_func':function () {
return new Set();
},'combine_func':(x,y) => {
return x.union(y);
}}),$$hiphop.LOCAL({'%location':{'filename':'src/traffic.hh.mjs','pos':1679},'%tag':'signal'},$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':1686},'name':'s','init_func':function () {
return false;
},'combine_func':(x,y) => {
return x || y;
}}),$$hiphop.TRAP({'done':'done','%location':{'filename':'src/traffic.hh.mjs','pos':1724},'%tag':'done'},$$hiphop.FORK({'%location':{'filename':'src/traffic.hh.mjs','pos':1738},'%tag':'fork'},$$hiphop.SUSPEND({'%location':{'filename':'src/traffic.hh.mjs','pos':1754},'immediate':false,'apply':function () {
return ((() => {
const s=this.s;return s.nowval;
})());
}},$$hiphop.SIGACCESS({'signame':'s','pre':false,'val':true,'cnt':false}),$$hiphop.SUSTAIN({'%location':{'filename':'src/traffic.hh.mjs','pos':1795},'%tag':'sustain','signame':'light','apply':function () {
return new Set(['red']);
}})),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':1839},'%tag':'par'},$$hiphop.PAUSE({'%location':{'filename':'src/traffic.hh.mjs','pos':1854},'%tag':'yield'}),$$hiphop.PAUSE({'%location':{'filename':'src/traffic.hh.mjs','pos':1870},'%tag':'yield'}),$$hiphop.EMIT({'%location':{'filename':'src/traffic.hh.mjs','pos':1891},'%tag':'emit','signame':'s','apply':function () {
return true;
}}),$$hiphop.EXIT({'done':'done','%location':{'filename':'src/traffic.hh.mjs','pos':1915},'%tag':'break'})))),$$hiphop.SUSTAIN({'%location':{'filename':'src/traffic.hh.mjs','pos':1945},'%tag':'sustain','signame':'light','apply':function () {
return new Set(['green']);
}})));
const mach5=new hh.ReactiveMachine(Traffic5);
mach5.addEventListener('light',lightHandler);const phase=(color,light,count) => {
return $$hiphop.LOCAL({'%location':{'filename':'src/traffic.hh.mjs','pos':2138},'%tag':'signal'},$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':2145},'name':'s','init_func':function () {
return false;
},'combine_func':(x,y) => {
return x || y;
}}),$$hiphop.TRAP({'done':'done','%location':{'filename':'src/traffic.hh.mjs','pos':2183},'%tag':'done'},$$hiphop.FORK({'%location':{'filename':'src/traffic.hh.mjs','pos':2197},'%tag':'fork'},$$hiphop.SUSPEND({'%location':{'filename':'src/traffic.hh.mjs','pos':2213},'immediate':false,'apply':function () {
return ((() => {
const s=this.s;return s.nowval;
})());
}},$$hiphop.SIGACCESS({'signame':'s','pre':false,'val':true,'cnt':false}),$$hiphop.SUSTAIN({'%location':{'filename':'src/traffic.hh.mjs','pos':2254},'%tag':'sustain','signame':light,'apply':function () {
return new Set([color]);
}})),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':2291},'%tag':'par'},$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':2306},'%tag':'dollar'},Array.from({'length':count},(_) => {
return $$hiphop.PAUSE({'%location':{'filename':'src/traffic.hh.mjs','pos':2348},'%tag':'yield'});
})),$$hiphop.EMIT({'%location':{'filename':'src/traffic.hh.mjs','pos':2370},'%tag':'emit','signame':'s','apply':function () {
return true;
}}),$$hiphop.EXIT({'done':'done','%location':{'filename':'src/traffic.hh.mjs','pos':2394},'%tag':'break'})))));
};
const Traffic6=$$hiphop.MODULE({'%location':{'filename':'src/traffic.hh.mjs','pos':2440},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':2455},'direction':'INOUT','name':'light','init_func':function () {
return new Set();
},'combine_func':(x,y) => {
return x.union(y);
}}),$$hiphop.LOOP({'%location':{'filename':'src/traffic.hh.mjs','pos':2511}},$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':2524},'%tag':'dollar'},phase('red','light',2)),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':2558},'%tag':'dollar'},phase('green','light',1)),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':2594},'%tag':'dollar'},phase('orange','light',1))));
const mach6=new hh.ReactiveMachine(Traffic6);
mach6.addEventListener('light',lightHandler);const Traffic7=$$hiphop.MODULE({'%location':{'filename':'src/traffic.hh.mjs','pos':2760},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':2774},'direction':'INOUT','name':'ns','init_func':function () {
return new Set();
},'combine_func':(x,y) => {
return x.union(y);
}}),$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':2827},'direction':'INOUT','name':'ew','init_func':function () {
return new Set();
},'combine_func':(x,y) => {
return x.union(y);
}}),$$hiphop.FORK({'%location':{'filename':'src/traffic.hh.mjs','pos':2880},'%tag':'fork'},$$hiphop.LOOP({'%location':{'filename':'src/traffic.hh.mjs','pos':2893}},$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':2909},'%tag':'dollar'},phase('green','ns',3)),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':2945},'%tag':'dollar'},phase('orange','ns',1)),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':2982},'%tag':'dollar'},phase('red','ns',4))),$$hiphop.LOOP({'%location':{'filename':'src/traffic.hh.mjs','pos':3032}},$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':3048},'%tag':'dollar'},phase('red','ew',4)),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':3082},'%tag':'dollar'},phase('green','ew',3)),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':3118},'%tag':'dollar'},phase('orange','ew',1)))));
let lightHandler2 = function (light) {
const name=light.signame;
const el=document.getElementById(this.trafficId + '-' + name);
light.nowval.forEach((l) => {
return el.setAttribute('data-' + l,l);
});};const mach7=new hh.ReactiveMachine(Traffic7);
mach7.addEventListener('ns',lightHandler2);mach7.addEventListener('ew',lightHandler2);const Traffic8=$$hiphop.MODULE({'%location':{'filename':'src/traffic.hh.mjs','pos':3541},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':3555},'direction':'INOUT','name':'ns','init_func':function () {
return new Set();
},'combine_func':(x,y) => {
return x.union(y);
}}),$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':3608},'direction':'INOUT','name':'ew','init_func':function () {
return new Set();
},'combine_func':(x,y) => {
return x.union(y);
}}),$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':3661},'direction':'INOUT','name':'failed','init_func':function () {
return false;
},'combine_func':(x,y) => {
return x || y;
}}),$$hiphop.TRAP({'Lfailed':'Lfailed','%location':{'filename':'src/traffic.hh.mjs','pos':3710},'%tag':'Lfailed'},$$hiphop.FORK({'%location':{'filename':'src/traffic.hh.mjs','pos':3727},'%tag':'fork'},$$hiphop.LOOP({'%location':{'filename':'src/traffic.hh.mjs','pos':3743}},$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':3762},'%tag':'dollar'},phase('green','ns',3)),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':3801},'%tag':'dollar'},phase('orange','ns',1)),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':3841},'%tag':'dollar'},phase('red','ns',3))),$$hiphop.LOOP({'%location':{'filename':'src/traffic.hh.mjs','pos':3900}},$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':3919},'%tag':'dollar'},phase('red','ew',4)),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':3956},'%tag':'dollar'},phase('green','ew',3)),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':3995},'%tag':'dollar'},phase('orange','ew',1))),$$hiphop.LOOP({'%location':{'filename':'src/traffic.hh.mjs','pos':4057}},$$hiphop.IF({'%location':{'filename':'src/traffic.hh.mjs','pos':4076},'%tag':'if','apply':function () {
return ((() => {
const ew=this.ew;const ns=this.ns;return !(ns.nowval.has('red') || ew.nowval.has('red'));
})());
}},$$hiphop.SIGACCESS({'signame':'ns','pre':false,'val':true,'cnt':false}),$$hiphop.SIGACCESS({'signame':'ew','pre':false,'val':true,'cnt':false}),$$hiphop.EXIT({'Lfailed':'Lfailed','%location':{'filename':'src/traffic.hh.mjs','pos':4170},'%tag':'break'})),$$hiphop.PAUSE({'%location':{'filename':'src/traffic.hh.mjs','pos':4205},'%tag':'yield'})),$$hiphop.SUSTAIN({'%location':{'filename':'src/traffic.hh.mjs','pos':4251},'%tag':'sustain','signame':'failed','apply':function () {
return false;
}}))),$$hiphop.SUSTAIN({'%location':{'filename':'src/traffic.hh.mjs','pos':4349},'%tag':'sustain','signame':'failed','apply':function () {
return true;
}}));
export { mach };export { mach3 };export { mach4 };export { mach5 };export { mach6 };export { mach7 };
//# sourceMappingURL=src/traffic.mjs.map
