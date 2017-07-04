
# require 'pry'

# hash:
def plan_trip (line_on, station_on, line_off, station_off)
all_lines = {
  :"N" => ["Times Square","34th","28th","23rd","Union Square", "8th"],
  :"L" => ["8th", "6th", "Union Square", "3rd", "1st"],
  :"6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

  return all_lines["line_on"].index("station_on")


  all_lines["line_on"].index("station_on")
  end
#
##
# all_lines[:N].index("Times Square")
# => 0
# all_lines[:N].index("23rd")
# => 3

# p
#   "You must travel through the following stops on the " + lineOn +  " line: "+  sliceArr1Line + " and get off at the " + finish + " station. "+ numberOfStops1Line +" stops in total.");
#
#
#
# plan_trip( "N", "Times Square", "N", "23rd" )
#











binding.pry
# yu can use multi pry like debugger in terminal, use continue or ctrl d to step to next binding.pry
#
# MTA Lab
#
# Activity:
#
# Students should create a program that models a simple subway system.
#
# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints:
#
# the stations the user must pass through, in order
# where to change lines, if necessary
# the total number of stops for the trip.
# There are 3 subway lines:
#
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points.
# For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.
# We should be able to say:
#
# plan_trip( :n, "Times Square", :l, "Grand Central" )
# # Or something along those lines
# Hints:
#
# Don't worry about user input initially: get it working with hardcoded values first, and wire up the user interface once that's working
# Scope works in a different way in Ruby, so variables that you define outside won't be accessible in a method. Maybe think about using a function to return data. Or perhaps research other types of variables
# A symbol can't just be a number!
# Consider diagraming the lines by sketching out the subway lines and their stops and intersection.
# Make subway lines keys in a hash, while the values are an array of all the stops on each line.
# The key to the lab is to find the intersection of the lines at Union Square.
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)



#
# - use a similar data structure to that which you used in JS (i.e. a hash whose keys are line names, and whose values are arrays of stations for each line)
# - *solve the simpler version of the problem first:* focus on getting `single_line_trip(line, start, end)` working first, in both directions, and then use it to build a solution involving multiple lines
# - use `binding.pry` and the REPL/console to interactively test bits of code (i.e. are you accessing this hash or array in the correct way? does it have the expected values in it?)
# - ideally _start again_ and write your solution from scratch in Ruby; don't try and write Ruby code in the Javascript style - at best you should borrow the logic or principles/structure of the JS solution
