let i = 0;
while (i < a.length) {
  console.log("for", i, a[i]);
  ++i;
}

do {
  console.log("for", i, a[i]);
  a++;
} while (i < a.length);
