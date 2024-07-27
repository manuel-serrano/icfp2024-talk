// -*- Mode: typescript; typescript-indent-level: 3; indent-tabs-mode: nil -*-

const same = (a, b) => {
   if (a === b) return true;
   if (typeof a !== 'object' || typeof b !== 'object') return false
   if (a.equal != undefined) {
      return a.equal(b);
   }
   let a_keys = Object.getOwnPropertyNames(a)
   let b_keys = Object.getOwnPropertyNames(b)
   if (a_keys.length !== b_keys.length) return false
   for(let key of a_keys) {
      if(!Object.hasOwn(b, key)) return false
      if (!same(a[key],b[key])) return false
   }
   return true;
}

var total_tests = 0
export const report_tests = () => {
   console.log("passed " + total_tests + " tests")
   total_tests = 0;
}

export const tst = (name, a, b) => {
   total_tests += 1
   if (! same(a,b)) {
      console.log("expected to be the same\n", a, "\n", b)
      throw new Error("test failure: " + name);
   }
}
