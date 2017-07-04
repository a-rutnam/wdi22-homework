def raindrops(number)

  string = ""


# if the number contains 3/5/7 as a factor output pling. This format is acceptable for short lines of code:
  string += "Pling" if number % 3 == 0
  string += "Plong" if number % 5 == 0
  string += "Plang" if number % 7 == 0

  return string unless string.empty?
# implicit return:
  number

end

p raindrops 9

#ruby takes last line of method and returns it - 'implicit return'. i.e. no need to write 'return'






# above is edge's. below is mine. works
string = ""

puts "Pick a number"
number_to_test = gets.to_i

if number_to_test % 3 == 0
  string+= 'pling'
end

  if number_to_test % 5 == 0
    string+= 'plang'
  end

    if number_to_test % 7 == 0
      string+= 'plong'
    end

      puts string

        if string == ""
          puts " not a ppp #{number_to_test}"

end


# Pling Plang Plong
#
# Write a program that converts a number to a string per the following rules:
#
# If the number contains 3 as a factor, output 'Pling'. If the number contains 5 as a factor, output 'Plang'. If the number contains 7 as a factor, output 'Plong'.
#
# If the number does not contain 3, 5, or 7 as a factor, simply return the string representation of the number itself.
#
# E.g.
#
# The number 28 is divisible by 7, so...
#
# # => "Plong"
# The number 1755 is divisible by 3 and 5, so...
#
# # => "PlingPlang"
# The number 34 is not divisible by 3,5 or 7, so...
#
# # => "34"
