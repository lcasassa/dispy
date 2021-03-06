;
function desc_cmp(a, b) {
  return a < b ? 1 : (a > b ? -1 : 0);
}

function merge_sorted_uniq(suarr1, suarr2, compare) {
  var result = Array(suarr1.length + suarr2.length);
  var i =  0;
  var j = 0;
  var k = 0;
  compare = compare || function(a, b) { return a.toString().localeCompare(b.toString()); };
  while (i < suarr1.length && j < suarr2.length) {
    var test = compare(suarr1[i], suarr2[j]);
    if (test < 0) {
      result[k++] = suarr1[i++];
    } else {
      result[k++] = suarr2[j++];
      if (test == 0) {
	i++;
      }
    }
  }
  while (i < suarr1.length) {
    result[k++] = suarr1[i++];
  }
  while (j < suarr2.length) {
    result[k++] = suarr2[j++];
  }
  if (k == (suarr1.length + suarr2.length)) {
    return result;
  } else {
    result.splice(k, (suarr1.length + suarr2.length - k));
    return result;
  }
}

function bin_desc_search(arr, elem, compare, min, max) {
  compare = compare || function(a, b) { return a.toString().localeCompare(b.toString()); };
  min = parseInt(min) || 0;
  max = parseInt(max) || arr.length;
  if (min < 0 || min >= arr.length || max > arr.length) {
    return -1;
  }

  while (min <= max) {
    var mid = Math.floor((min + max) / 2);
    var ret = compare(elem, arr[mid]);
    if (ret == 0) {
      return mid;
    } else if (ret > 0) {
      min = mid + 1;
      if (min == arr.length) {
	return -1;
      }
    } else {
      max = mid - 1;
    }
  }
  return -1;
}
