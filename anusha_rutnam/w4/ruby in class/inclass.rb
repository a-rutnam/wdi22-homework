arr = [1,2,3,4]
arr.inject '+'

# explanation for above:

# inject expect 2 arguments (number of args depends on method):
# here sum will be the first thing in array and elem will be 2nd. but next time sum will be 1+2 i.e. 3.  You could write arr.inject(9) which initialises sum at 9. Final result would be 19 rather than 10.
arr.inject do |sum, elem|
  puts "sum: #{sum}: + elem: #{elem} = #{sum+elem}"
  sum = sum + elem
  # no need for sum = above
end

arr.reduce would do same as example above
  # use it add up an array
