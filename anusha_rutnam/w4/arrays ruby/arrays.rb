require 'pry'

# 1. Create an array of the days of the week
#
# Create a variable named days_of_the_week as an array of the following:
# Monday
# Tuesday
# Wednesday
# Thursday
# Friday
# Saturday
# Sunday
days_of_the_week =  %w{Monday Tuesday Wednesday  Thursday  Friday  Saturday  Sunday}


# 2. My calendar says the first day is Sunday...
#
# Remove Sunday from the last postion and move it to the first position. Use array methods.

# best way:
days_of_the_week.rotate 1


# #middle way :
# days_of_the_week.insert(0, days_of_the_week.delete_at(-1))
#
# p days_of_the_week

# old way:
# moving_day = days_of_the_week.pop
# days_of_the_week.unshift moving_day



# 3. Create a new array of the days of the week:
#
# The first inner array should be the weekdays
# The second inner array should be the weekend days

days_of_the_week =  %w{Monday Tuesday Wednesday  Thursday  Friday  Saturday  Sunday}
week_parts = [ days_of_the_week[0..4], days_of_the_week[5..7]]

p week_parts
week_parts.pop
# gets rid of weekend

# week_parts.flatten would bring all nested arrays to one level, 1d array


# days_of_the_week2 =  ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", ["Saturday", "Sunday",]]





# 4. Remove either the weekdays or the weekends
#
# Your choice...
#
# 5. Sort the remaining days alphabetically


binding.pry
# above causes pry to run automatically .






#above is luke solution, below is no idea


# 3. Create a new array of the days of the week:
#
# The first inner array should be the weekdays
# The second inner array should be the weekend days
# 4. Remove either the weekdays or the weekends
#
# Your choice...
#
# 5. Sort the remaining days alphabetically




#Array and Hash access
#
# A. Given the following data structure:
#
# a = ["Anil", "Erik", "Jonathan"]
# How would you return the string "Erik"?
# How would you add your name to the array?

a[1]

a << "anusha"




# B. Given the following data structure:
#
# h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
# How would you return the string "One"?
# How would you return the string "Two"?
# How would you return the number 2?
# How would you add {3 => "Three"} to the hash?
# How would you add {:four => 4} to the hash?
h[1]
h[:two]
h["two"]
h.store(3, "three")
# h[3] = 'three'
h.store(:four, 4)


# C. Given the following data structure:
#
# is = {true => "It's true!", false => "It's false"}
# What is the return value of is[2 + 2 == 4]?
# What is the return value of is["Erik" == "Jonathan"]?
# What is the return value of is[9 > 10]?
# What is the return value of is[0]?
# What is the return value of is["Erik"]?

# in pry:
# is = {true => "It's true!", false => "It's false"}
# is[2+2==4]

"it's true"
"it's false"
"it's false"
# nil because we are not in context of conditonal test, it's looking for key 0
# ditto





# D. Given the following data structure:
#
# users = {
#   "Jonathan" => {
#     :twitter => "tronathan",
#     :favorite_numbers => [12, 42, 75],
#   },
#   "Erik" => {
#     :twitter => "sferik",
#     :favorite_numbers => [8, 12, 24],
#   },
#   "Anil" => {
#     :twitter => "bridgpal",
#     :favorite_numbers => [12, 14, 85],
#   },
# }
# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
users["Jonathan"][:twitter]
# How would you add the number 7 to Erik's favorite numbers?
users["Erik"][:favorite_numbers]<<7
# How would you add yourself to the users hash?
# users["anusha"]={:twitter => "pv", :favorite_numbers => [22, 23] doesn't work
# How would you return the array of Erik's favorite numbers?
users["Erik"][:favorite_numbers]
# How would you return the smallest of Erik's favorite numbers?
users["Erik"][:favorite_numbers].min
# How would you return an array of Anil's favorite numbers that are also even?
long:
users["Anil"] [favorite_numbers].select do |num|
[24] pry(main)*   num%2 == 0

short:
users["Anil"] [:favorite_numbers].select do |num|
num.even?
end
# How would you return an array of the favorite numbers common to all users?
users.values.each do |info|
  p info [:favorite_numbers]
end

other way:
users.values.map do |info|
  info[:favorite_numbers]
  end


# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?

users.values.map {|data| data [:favorite_numbers] }.flatten.uniq.sort

# faster way:

# luke used .inject&:&



#shape of a hash
hash = users["jonathan"]
