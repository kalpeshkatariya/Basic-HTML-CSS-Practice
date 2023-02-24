// // From 1 to 100, print "foo" if multiple of 3, "bar" if multiple of 5, if  multiple of both display "hello" or else print the number
// e.g.
// 1
// 2
// foo
// 4
// bar
// foo-->



for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("hello");
      } else if (i % 3 === 0) {
        console.log("foo");
      } else if (i % 5 === 0) {
        console.log("bar");
      } else {
        console.log(i);
      }
    }
