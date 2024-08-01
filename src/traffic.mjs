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
return el.setAttribute('data-' + l,l);
});});const Traffic2=$$hiphop.MODULE({'%location':{'filename':'src/traffic.hh.mjs','pos':557},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':571},'direction':'INOUT','name':'light','init_func':function () {
return new Set();
},'combine_func':(x,y) => {
return x.union(y);
}}),$$hiphop.SUSTAIN({'%location':{'filename':'src/traffic.hh.mjs','pos':639},'%tag':'sustain','signame':'light','apply':function () {
return new Set(['red']);
}}));
const Traffic3=$$hiphop.MODULE({'%location':{'filename':'src/traffic.hh.mjs','pos':703},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':717},'direction':'INOUT','name':'light','init_func':function () {
return new Set();
},'combine_func':(x,y) => {
return x.union(y);
}}),$$hiphop.TRAP({'done':'done','%location':{'filename':'src/traffic.hh.mjs','pos':774},'%tag':'done'},$$hiphop.FORK({'%location':{'filename':'src/traffic.hh.mjs','pos':788},'%tag':'fork'},$$hiphop.SUSTAIN({'%location':{'filename':'src/traffic.hh.mjs','pos':812},'%tag':'sustain','signame':'light','apply':function () {
return new Set(['red']);
}}),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':845},'%tag':'par'},$$hiphop.PAUSE({'%location':{'filename':'src/traffic.hh.mjs','pos':860},'%tag':'yield'}),$$hiphop.PAUSE({'%location':{'filename':'src/traffic.hh.mjs','pos':876},'%tag':'yield'}),$$hiphop.EXIT({'done':'done','%location':{'filename':'src/traffic.hh.mjs','pos':898},'%tag':'break'})))));
const mach3=new hh.ReactiveMachine(Traffic3);
let lightHandler = function (light) {
const el=document.getElementById(this.trafficId);
light.nowval.forEach((l) => {
return el.setAttribute('data-' + l,l);
});};mach3.addEventListener('light',lightHandler);const Traffic4=$$hiphop.MODULE({'%location':{'filename':'src/traffic.hh.mjs','pos':1212},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':1226},'direction':'INOUT','name':'light','init_func':function () {
return new Set();
},'combine_func':(x,y) => {
return x.union(y);
}}),$$hiphop.TRAP({'done':'done','%location':{'filename':'src/traffic.hh.mjs','pos':1283},'%tag':'done'},$$hiphop.FORK({'%location':{'filename':'src/traffic.hh.mjs','pos':1297},'%tag':'fork'},$$hiphop.SUSTAIN({'%location':{'filename':'src/traffic.hh.mjs','pos':1321},'%tag':'sustain','signame':'light','apply':function () {
return new Set(['red']);
}}),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':1354},'%tag':'par'},$$hiphop.PAUSE({'%location':{'filename':'src/traffic.hh.mjs','pos':1369},'%tag':'yield'}),$$hiphop.PAUSE({'%location':{'filename':'src/traffic.hh.mjs','pos':1385},'%tag':'yield'}),$$hiphop.EXIT({'done':'done','%location':{'filename':'src/traffic.hh.mjs','pos':1407},'%tag':'break'})))),$$hiphop.SUSTAIN({'%location':{'filename':'src/traffic.hh.mjs','pos':1437},'%tag':'sustain','signame':'light','apply':function () {
return new Set(['green']);
}}));
const mach4=new hh.ReactiveMachine(Traffic4);
mach4.addEventListener('light',lightHandler);const Traffic5=$$hiphop.MODULE({'%location':{'filename':'src/traffic.hh.mjs','pos':1606},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':1620},'direction':'INOUT','name':'light','init_func':function () {
return new Set();
},'combine_func':(x,y) => {
return x.union(y);
}}),$$hiphop.LOCAL({'%location':{'filename':'src/traffic.hh.mjs','pos':1676},'%tag':'signal'},$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':1683},'name':'s','init_func':function () {
return false;
},'combine_func':(x,y) => {
return x || y;
}}),$$hiphop.TRAP({'done':'done','%location':{'filename':'src/traffic.hh.mjs','pos':1721},'%tag':'done'},$$hiphop.FORK({'%location':{'filename':'src/traffic.hh.mjs','pos':1735},'%tag':'fork'},$$hiphop.SUSPEND({'%location':{'filename':'src/traffic.hh.mjs','pos':1751},'immediate':false,'apply':function () {
return ((() => {
const s=this.s;return s.nowval;
})());
}},$$hiphop.SIGACCESS({'signame':'s','pre':false,'val':true,'cnt':false}),$$hiphop.SUSTAIN({'%location':{'filename':'src/traffic.hh.mjs','pos':1792},'%tag':'sustain','signame':'light','apply':function () {
return new Set(['red']);
}})),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':1836},'%tag':'par'},$$hiphop.PAUSE({'%location':{'filename':'src/traffic.hh.mjs','pos':1851},'%tag':'yield'}),$$hiphop.PAUSE({'%location':{'filename':'src/traffic.hh.mjs','pos':1867},'%tag':'yield'}),$$hiphop.EMIT({'%location':{'filename':'src/traffic.hh.mjs','pos':1888},'%tag':'emit','signame':'s','apply':function () {
return true;
}}),$$hiphop.EXIT({'done':'done','%location':{'filename':'src/traffic.hh.mjs','pos':1912},'%tag':'break'})))),$$hiphop.SUSTAIN({'%location':{'filename':'src/traffic.hh.mjs','pos':1942},'%tag':'sustain','signame':'light','apply':function () {
return new Set(['green']);
}})));
const mach5=new hh.ReactiveMachine(Traffic5);
mach5.addEventListener('light',lightHandler);const phase=(color,light,count) => {
return $$hiphop.LOCAL({'%location':{'filename':'src/traffic.hh.mjs','pos':2135},'%tag':'signal'},$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':2142},'name':'s','init_func':function () {
return false;
},'combine_func':(x,y) => {
return x || y;
}}),$$hiphop.TRAP({'done':'done','%location':{'filename':'src/traffic.hh.mjs','pos':2180},'%tag':'done'},$$hiphop.FORK({'%location':{'filename':'src/traffic.hh.mjs','pos':2194},'%tag':'fork'},$$hiphop.SUSPEND({'%location':{'filename':'src/traffic.hh.mjs','pos':2210},'immediate':false,'apply':function () {
return ((() => {
const s=this.s;return s.nowval;
})());
}},$$hiphop.SIGACCESS({'signame':'s','pre':false,'val':true,'cnt':false}),$$hiphop.SUSTAIN({'%location':{'filename':'src/traffic.hh.mjs','pos':2251},'%tag':'sustain','signame':light,'apply':function () {
return new Set([color]);
}})),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':2288},'%tag':'par'},$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':2303},'%tag':'dollar'},Array.from({'length':count},(_) => {
return $$hiphop.PAUSE({'%location':{'filename':'src/traffic.hh.mjs','pos':2345},'%tag':'yield'});
})),$$hiphop.EMIT({'%location':{'filename':'src/traffic.hh.mjs','pos':2367},'%tag':'emit','signame':'s','apply':function () {
return true;
}}),$$hiphop.EXIT({'done':'done','%location':{'filename':'src/traffic.hh.mjs','pos':2391},'%tag':'break'})))));
};
const Traffic6=$$hiphop.MODULE({'%location':{'filename':'src/traffic.hh.mjs','pos':2437},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':2452},'direction':'INOUT','name':'light','init_func':function () {
return new Set();
},'combine_func':(x,y) => {
return x.union(y);
}}),$$hiphop.LOOP({'%location':{'filename':'src/traffic.hh.mjs','pos':2508}},$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':2521},'%tag':'dollar'},phase('red','light',2)),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':2555},'%tag':'dollar'},phase('green','light',1)),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':2591},'%tag':'dollar'},phase('orange','light',1))));
const mach6=new hh.ReactiveMachine(Traffic6);
mach6.addEventListener('light',lightHandler);const Traffic7=$$hiphop.MODULE({'%location':{'filename':'src/traffic.hh.mjs','pos':2757},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':2771},'direction':'INOUT','name':'ns','init_func':function () {
return new Set();
},'combine_func':(x,y) => {
return x.union(y);
}}),$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':2824},'direction':'INOUT','name':'ew','init_func':function () {
return new Set();
},'combine_func':(x,y) => {
return x.union(y);
}}),$$hiphop.FORK({'%location':{'filename':'src/traffic.hh.mjs','pos':2877},'%tag':'fork'},$$hiphop.LOOP({'%location':{'filename':'src/traffic.hh.mjs','pos':2890}},$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':2906},'%tag':'dollar'},phase('green','ns',3)),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':2942},'%tag':'dollar'},phase('orange','ns',1)),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':2979},'%tag':'dollar'},phase('red','ns',4))),$$hiphop.LOOP({'%location':{'filename':'src/traffic.hh.mjs','pos':3029}},$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':3045},'%tag':'dollar'},phase('red','ew',4)),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':3079},'%tag':'dollar'},phase('green','ew',3)),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':3115},'%tag':'dollar'},phase('orange','ew',1)))));
let lightHandler2 = function (light) {
const name=light.signame;
const el=document.getElementById(this.trafficId + '-' + name);
light.nowval.forEach((l) => {
return el.setAttribute('data-' + l,l);
});};const mach7=new hh.ReactiveMachine(Traffic7);
mach7.addEventListener('ns',lightHandler2);mach7.addEventListener('ew',lightHandler2);const Traffic8=$$hiphop.MODULE({'%location':{'filename':'src/traffic.hh.mjs','pos':3538},'%tag':'module'},$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':3552},'direction':'INOUT','name':'ns','init_func':function () {
return new Set();
},'combine_func':(x,y) => {
return x.union(y);
}}),$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':3605},'direction':'INOUT','name':'ew','init_func':function () {
return new Set();
},'combine_func':(x,y) => {
return x.union(y);
}}),$$hiphop.SIGNAL({'%location':{'filename':'src/traffic.hh.mjs','pos':3658},'direction':'INOUT','name':'failed','init_func':function () {
return false;
},'combine_func':(x,y) => {
return x || y;
}}),$$hiphop.TRAP({'Lfailed':'Lfailed','%location':{'filename':'src/traffic.hh.mjs','pos':3707},'%tag':'Lfailed'},$$hiphop.FORK({'%location':{'filename':'src/traffic.hh.mjs','pos':3724},'%tag':'fork'},$$hiphop.LOOP({'%location':{'filename':'src/traffic.hh.mjs','pos':3740}},$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':3759},'%tag':'dollar'},phase('green','ns',3)),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':3798},'%tag':'dollar'},phase('orange','ns',1)),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':3838},'%tag':'dollar'},phase('red','ns',3))),$$hiphop.LOOP({'%location':{'filename':'src/traffic.hh.mjs','pos':3897}},$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':3916},'%tag':'dollar'},phase('red','ew',4)),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':3953},'%tag':'dollar'},phase('green','ew',3)),$$hiphop.SEQUENCE({'%location':{'filename':'src/traffic.hh.mjs','pos':3992},'%tag':'dollar'},phase('orange','ew',1))),$$hiphop.LOOP({'%location':{'filename':'src/traffic.hh.mjs','pos':4054}},$$hiphop.IF({'%location':{'filename':'src/traffic.hh.mjs','pos':4073},'%tag':'if','apply':function () {
return ((() => {
const ew=this.ew;const ns=this.ns;return !(ns.nowval.has('red') || ew.nowval.has('red'));
})());
}},$$hiphop.SIGACCESS({'signame':'ns','pre':false,'val':true,'cnt':false}),$$hiphop.SIGACCESS({'signame':'ew','pre':false,'val':true,'cnt':false}),$$hiphop.EXIT({'Lfailed':'Lfailed','%location':{'filename':'src/traffic.hh.mjs','pos':4149},'%tag':'break'})),$$hiphop.PAUSE({'%location':{'filename':'src/traffic.hh.mjs','pos':4184},'%tag':'yield'})))),$$hiphop.SUSTAIN({'%location':{'filename':'src/traffic.hh.mjs','pos':4226},'%tag':'sustain','signame':'failed','apply':function () {
return true;
}}));
export { mach };export { mach3 };export { mach4 };export { mach5 };export { mach6 };export { mach7 };
//# sourceMappingURL=src/traffic.mjs.map
