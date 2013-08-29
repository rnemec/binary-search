module.exports = function(haystack, needle, comparator) {
  var low = 0,
      high = haystack.length - 1,
      mid, cmp;

  while(low <= high) {
    /* Note that "(low + high) >>> 1" may overflow, and results in a typecast
     * to double (which gives the wrong results). */
    mid = low + ((high - low) >> 1);
    cmp = comparator(haystack[mid], needle);

    /* Too low. */
    if(cmp < 0) 
      low = mid + 1;

    /* Too high. */
    else if(cmp > 0)
      high = mid - 1;
    
    /* Key found. */
    else
      return mid;
  }

  /* Key not found. */
  return -(low + 1);
}
